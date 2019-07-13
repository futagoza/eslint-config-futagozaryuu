"use strict";

const child = require( "@futagoza/child-process" );
const cp2 = require( "child_process" ).promise;
const { log, color } = require( "@futagoza/cli-utils" );
const EachSerially = require( "bluebird" ).each;
const GetYarnWorkspaces = require( "get-yarn-workspaces" );
const SyncYarnWorkspaces = require( "@futagoza/sync-yarn-workspaces" );
const PromptAsync = require( "prompts" );

const $repository = process.cwd();
const $configurations = GetYarnWorkspaces( $repository );

function forEach( $command, $cb ) {

    const fn = $cb ? child.exec : child.run;

    return EachSerially( $configurations, $cwd => {

        const p = fn( $command, { cwd: $cwd } );

        return $cb ? p.then( $cb ) : p;

    } );

}

function exec( $command ) {

    return child.run( $command, { cwd: $repository } );

}

( async () => {

    // 1. Ask for new version first (duh)
    const { $newVersion } = await PromptAsync( {
        type: "text",
        name: "$newVersion",
        message: "Version number",
    } );

    // 2. Update the version field in every workspace package
    await forEach( `npm --no-git-tag-version version ${ $newVersion }`, $result => {

        const $name = require( $result.options.cwd + "/package.json" ).name;
        const $version = $result.stdout.trim();

        log.info( "Bumped", color.cyan( $name ), "to", color.green( $version ) );

    } );

    // 3. Sync the version of any dependency that is also a workspace package
    SyncYarnWorkspaces( $repository );

    // 4. Just to be sure, run the tests
    await exec( `npm run test` );

    // 5. Commit the changes, while also tagging the commit
    await exec( `git commit -m ${ $newVersion }` );
    await exec( `git tag v${ $newVersion } -m ${ $newVersion }` );

    // 6. Publish every workspace package to NPM
    await forEach( `npm publish --tag latest` );

    // 7. Push the changes to `https://github.com/futagoza/eslint-config-futagozaryuu/`
    await exec( `git push --follow-tags` );

} )();
