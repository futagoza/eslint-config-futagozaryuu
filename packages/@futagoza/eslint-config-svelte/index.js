"use strict";

module.exports = {

    "overrides": [

        {

            "files": [ "*.svelte" ],
            "extends": [

                "@futagoza/dev/code",
                "@futagoza/globals/browser",

            ],
            "plugins": [ "svelte3" ],
            "processor": "svelte3/svelte3",

            // https://github.com/sveltejs/eslint-plugin-svelte3#configuration
            "settings": {

                // "svelte3/ignore-warnings": () => false,
                // "svelte3/compiler-options": { generate: false },
                // "svelte3/ignore-styles": () => false,
                // "svelte3/named-blocks": false,
                // "svelte3/typescript": null,
                // "svelte3/compiler": require( "svelte/compiler" ),

            },

        },

    ],

};
