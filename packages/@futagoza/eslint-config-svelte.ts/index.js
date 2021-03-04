"use strict";

module.exports = {

    "overrides": [

        {

            "files": [ "*.svelte" ],

            "extends": [

                "./internal/svelte.js",
                "./internal/typescript.js",

            ],

            "parserOptions": {

                "extraFileExtensions": [ ".svelte" ],

            },

            "settings": {

                "svelte3/typescript": require( "typescript" ),

            },

        },

    ],

};
