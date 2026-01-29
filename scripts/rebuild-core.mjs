/**
 * 
 * This script rebuilds the core config files in "@futagoza/eslint-config-core" by using:
 * 
 * https://raw.githubusercontent.com/eslint/eslint/main/docs/src/_data/rules.json
 * 
 */

// 
// IMPORTS
// 

import { access, constants, mkdir, writeFile, unlink } from "fs/promises";
import { dirname } from "path";
import stripIndent from "strip-indent";
import { log, color } from "@futagoza/cli-utils";
import { config } from "@futagoza/eslint-config-core/internal/index.js";

// 
// HELPERS
// 

function hasOwn( $object, $key ) {

    return Object.prototype.hasOwnProperty.call( $object, $key );

}

function die( err = void 0 ) {

    if ( err !== void 0 ) console.error( err );
    process.exit( 1 );

}

const SAVEFILE_MKDIRS = {};
const SAVEFILE_TARGET = process.argv.includes( "--test" )
        ? ".temp"
        : "packages/@futagoza/eslint-config-core";

async function saveFile( $filename, $data ) {

    const $path = new URL( `../${ SAVEFILE_TARGET }/${ $filename }.js`, import.meta.url );

    try {

        await access( $path, constants.R_OK | constants.W_OK );
        await unlink( $path );

        log.info( color.yellow( "found and deleted file -" ), $path.href );

    } catch {

        const $dir = dirname( $path.href ).replace( "file:///", "" );
        if ( ! hasOwn( SAVEFILE_MKDIRS, $dir ) ) {

            SAVEFILE_MKDIRS[ $dir ] = true;
            log.info( color.blue( "ensuring directory exists -" ), $dir );

            try {

                await mkdir( $dir, { recursive: true } );

            } catch ( err ) {

                log.error( color.red( "error while creating directory -" ), $dir );
                die( err );

            }

        }

    }

    if ( $data.startsWith( "\n" ) ) $data = $data.slice( 1 );

    await writeFile( $path, stripIndent( $data ) );

}

class Counters {

    static #counters = {};

    static increment( $name, $addValue = 1 ) {

        this.#counters[ $name ] = this.value( $name ) + $addValue;

    }

    static value( $name ) {

        return hasOwn( this.#counters, $name )
            ? this.#counters[ $name ]
            : 0;

    }

}

// 
// MAIN
// 
// 

const $existingRules = Object.keys( config );
const $RULES_METADATA_URL = "https://raw.githubusercontent.com/eslint/eslint/main/docs/src/_data/rules.json";
let $response;

try {

    $response = await fetch( $RULES_METADATA_URL );
    $response = JSON.parse( await $response.text() );

} catch ( err ) {

    log.error( color.red( "error while fetching" ), $RULES_METADATA_URL );
    die( err )

}

for ( const $key of [ "deprecated", "removed", "types" ] ) {

    if ( ! hasOwn( $response, $key ) ) {

        log.error( color.red( "required object not found in rules.json -" ), $key );
        die();

    }

}

for ( const $rule of $response.deprecated ) {

    const $name = $rule.name;
    if ( $existingRules.includes( $name ) ) {

        log.warning( color.blue( $name ), "deprecated" );
        Counters.increment( "rules-removed" );

    }

}

for ( const $rule of $response.removed ) {

    const $name = $rule.removed;
    if ( $existingRules.includes( $name ) ) {

        log.warning( color.blue( $name ), "removed" );
        Counters.increment( "rules-removed" );

    }

}

const ESLINT_RULE_TYPES = [

    {
        "displayName": "layout-and-formatting",
        "description": "These rules care about how the code looks rather than how it executes:",
        "rules": $response.types.layout,
    },

    {
        "displayName": "possible-problems",
        "description": "These rules relate to possible logic errors in code:",
        "rules": $response.types.problem,
    },

    {
        "displayName": "suggestions",
        "description": "These rules suggest alternate ways of doing things:",
        "rules": $response.types.suggestion,
    },

];

for ( const $type of ESLINT_RULE_TYPES ) {

    const $rules = [];

    for ( const $rule of $type.rules ) {

        const $name = $rule.name;
        const $fixable = $rule.fixable ? "🔧 " : "";
        const $setting = hasOwn( config, $name ) && config[ $name ] !== void 0
            ? JSON
                .stringify( config[ $name ], void 0, "    " )
                .replaceAll( "\n", "\n                " )
            : "void 0";

        $rules.push( `
                /**
                 * ${ $fixable }${ $rule.description.replaceAll( "*/`", "...`" ) }
                 *
                 * @see http://eslint.org/docs/rules/${ $name }
                 */
                "${ $name }": ${ $setting },
        ` );

        if ( ! $existingRules.includes( $name ) ) Counters.increment( "new-rules" );

    }
    if ( $rules.length === 0 ) continue;

    await saveFile( $type.displayName, `
        /*eslint comma-dangle: ["error", "only-multiline"]*/
        "use strict";

        // 
        // ${ $type.description }
        // 

        module.exports = {

            "rules": {

                ${ $rules.join( "\n\n" ) }

            },

        };
    ` );

    Counters.increment( "rules-added", $rules.length );

}

log.info( "Number of rules before:", color.cyan( $existingRules.length ) );
log.info( "Number of rules after:", color.cyan( Counters.value( "rules-added" ) ) );
log.info( "Number of rules added:", color.cyan( Counters.value( "new-rules" ) ) );
log.info( "Number of rules removed:", color.cyan( Counters.value( "rules-removed" ) ) );
