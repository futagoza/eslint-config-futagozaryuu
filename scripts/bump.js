"use strict";

const child = require( "@futagoza/child-process" );
const { log, color } = require( "@futagoza/cli-utils" );
const EachSerially = require( "bluebird" ).each;
const GetYarnWorkspaces = require( "get-yarn-workspaces" );
const SyncYarnWorkspaces = require( "@futagoza/sync-yarn-workspaces" );
const PromptAsync = require( "prompts" );

const $repository = process.cwd();
const $configurations = GetYarnWorkspaces( $repository );

function spawn( $command, $cb, cwd = $repository ) {

    const fn = $cb ? child.exec : child.run;
    const p = fn( $command, { cwd } );

    return $cb ? p.then( $cb ) : p;

}

function forEach( $command, $cb ) {

    return EachSerially( $configurations, $cwd => spawn( $command, $cb, $cwd ) );

}

( async () => {

    // 01. We require all tracked files to be commited
    await spawn( "git status --untracked-files=no --porcelain", $result => {

        if ( $result.stdout.trim() === "" ) return;

        log.error( "Git working directory not clean!\n\n", $result.stdout );
        process.exit( 1 );

    } );

    // 02. Ask for new version first (duh)
    const { $newVersion } = await PromptAsync( {
        type: "text",
        name: "$newVersion",
        message: "Version number",
    } );

    // 03. Update the version field in every workspace package
    await forEach( `npm --no-git-tag-version version ${ $newVersion }`, $result => {

        const $name = require( $result.options.cwd + "/package.json" ).name;
        const $version = $result.stdout.trim();

        log.info( "Bumped", color.cyan( $name ), "to", color.green( $version ) );

    } );

    // 04. Sync the version of any dependency that is also a workspace package
    SyncYarnWorkspaces( $repository );

    // 05. Just to be sure, run the tests
    await spawn( `npm run test` );

    // 06. Add newly updated `package.json` files to the current commit
    await spawn( `git add -u` );

    // 07. Commit the changes, while also tagging the commit
    await spawn( `git commit -m ${ $newVersion }` );
    await spawn( `git tag v${ $newVersion } -m ${ $newVersion }` );

    // 08. Publish every workspace package to NPM
    await forEach( `npm publish --access public` );

    // 09. Push the changes to `https://github.com/futagoza/eslint-config-futagozaryuu/`
    await spawn( `git push --follow-tags` );

} )();
