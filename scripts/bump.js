"use strict";

const child = require( "@futagoza/child-process" );
const { log, color } = require( "@futagoza/cli-utils" );
const EachSerially = require( "bluebird" ).each;
const GetYarnWorkspaces = require( "get-yarn-workspaces" );
const SyncYarnWorkspaces = require( "@futagoza/sync-yarn-workspaces" );
const PromptAsync = require( "prompts" );
const path = require( "path" );

let $regexp, $replacement;
if ( path.sep === "/" ) {

    $regexp = /\\/g;
    $replacement = "/";

} else {

    $regexp = /\//g;
    $replacement = "\\";

}

const $all = process.argv.includes( "--all" );
const $dry = process.argv.includes( "--dry" );
const $repository = process.cwd();
const $workspaces = GetYarnWorkspaces( $repository );
const $packages = [];

function spawn( $command, $cb, cwd = $repository ) {

    const fn = $cb ? child.exec : child.run;
    const p = fn( $command, { cwd } );

    return typeof $cb === "function" ? p.then( $cb ) : p;

}

async function DefineUpdatedPackages() {

    await spawn( "git describe --abbrev=0", async $result => {

        const $tag = $result.stdout.trim();
        if ( $tag === "" ) return;

        ( await spawn( `git diff ${ $tag } --name-only`, true ) )
            .stdout.toString()
            .trim()
            .split( "\n" )
            .forEach( $file => {

                $file = path.join( $repository, $file );
                const $dir = $workspaces.find( $workspace =>

                    $file.includes( $workspace.replace( $regexp, $replacement ) + $replacement ) );

                if ( $dir && ! $packages.includes( $dir ) ) $packages.push( $dir );

            } );

    } );

}

function forEachUpdatedWorkspace( $command, $iterator ) {

    return EachSerially( $packages, $cwd => spawn( $command, $iterator, $cwd ) );

}

( async () => {

    // All tracked files are required to be commited if the `--dry` flag is not used
    if ( ! $dry )
        await spawn( "git status --untracked-files=no --porcelain", $result => {

            if ( $result.stdout.trim() === "" ) return;

            log.error( "Git working directory not clean!\n\n", $result.stdout );
            process.exit( 1 );

        } );

    // If the `--all` flag is provided, bump and publish all workspaces
    if ( $all ) {

        $workspaces.forEach( $dir => $packages.push( $dir ) );

    } else {

        // Check if any workspaces were updated since the latest tag was commited
        await DefineUpdatedPackages();
        if ( $packages.length === 0 ) {

            log.info( "No workspaces were updated." );
            return;

        }

    }

    // Ask for new version first (duh)
    const { $newVersion } = await PromptAsync( {
        type: "text",
        name: "$newVersion",
        message: "Version number",
    } );

    // Update the version field in every workspace package
    await forEachUpdatedWorkspace( `npm --no-git-tag-version version ${ $newVersion }`, $result => {

        const $name = require( $result.options.cwd + "/package.json" ).name;
        const $version = $result.stdout.trim();

        log.info( "Bumped", color.cyan( $name ), "to", color.green( $version ) );

    } );

    // Sync the version of any dependency that is also a workspace package
    SyncYarnWorkspaces( $repository );
    if ( ! $all ) await DefineUpdatedPackages();

    // If this is a dry run, stop here (no 'npm publish' or 'git commit')
    if ( $dry ) {

        log.info( "Nothing was commited or published as this was a dry run." );
        return;

    }

    // Just to be sure, run the test script (must be defined in the repository's root `package.json`)
    await spawn( `npm run test` );

    // Add newly updated `package.json` files to the current commit
    await spawn( `git add -u` );

    // Commit the changes, while also tagging the commit
    await spawn( `git commit -m ${ $newVersion }` );
    await spawn( `git tag v${ $newVersion } -m ${ $newVersion }` );

    // Publish every workspace package to NPM
    await forEachUpdatedWorkspace( `npm publish --access public` );

    // Push the changes to `https://github.com/futagoza/eslint-config-futagozaryuu/`
    await spawn( `git push --follow-tags` );

} )();
