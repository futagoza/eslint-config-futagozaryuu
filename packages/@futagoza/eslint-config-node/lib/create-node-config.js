"use strict";

/*

    This file exports a helper function to build configurations that use rules from `eslint-plugin-node`

*/

const ts = require( "../typescript" );

module.exports = function CreateNodeConfig( { action = "error", ignore = {}, versions = {}, rules = {} } ) {

    const UnsupportedFeaturesConfig = rule => {

        if ( typeof versions.node === "number" ) versions.node = `>=${ versions.node }`;

        rules[ "node/no-unsupported-features/" + rule ] = [ action, {

            ignores: ignore[ rule ],
            version: versions.node,

        } ];

    };

    if ( typeof versions.es === "number" ) versions.es = `es${ versions.es }`;

    UnsupportedFeaturesConfig( "es-builtins" );
    UnsupportedFeaturesConfig( "es-syntax" );
    UnsupportedFeaturesConfig( "node-builtins" );

    return {

        "extends": [

            "@futagoza/javascript/" + versions.es,
            "./index.js",

        ],

        rules,

        ...ts,

    };

};
