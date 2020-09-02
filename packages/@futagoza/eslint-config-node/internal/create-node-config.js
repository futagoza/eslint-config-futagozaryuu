"use strict";

/**
 * A helper function to build configurations that use rules from `eslint-plugin-node`
 */

module.exports = function CreateNodeConfig( { action = "error", ignore = {}, versions = {}, rules = {} } ) {

    if ( typeof versions.es === "number" ) versions.es = `es${ versions.es }`;
    if ( typeof versions.node === "number" ) versions.node = `>=${ versions.node }`;

    for ( const rule of [ "es-builtins", "es-syntax", "node-builtins" ] ) {

        rules[ "node/no-unsupported-features/" + rule ] = [ action, {

            ignores: ignore[ rule ],
            version: versions.node,

        } ];

    }

    return {

        extends: [

            "@futagoza/javascript/" + versions.es,
            require.resolve( "../index.js" ),

        ],

        overrides: [

            require( "./typescript-overrides" ),

        ],

        rules,

    };

};
