"use strict";

// https://github.com/sveltejs/eslint-plugin-svelte3#configuration
const settings = {

    // "svelte3/ignore-warnings": () => false,
    // "svelte3/compiler-options": { generate: false },
    // "svelte3/ignore-styles": () => false,
    // "svelte3/named-blocks": false,
    // "svelte3/compiler": require( "svelte/compiler" ),

};

module.exports = {

    "overrides": [

        {

            "files": [ "*.svelte" ],
            "extends": [

                "@futagoza/globals/browser",

            ],
            "plugins": [ "svelte3" ],
            settings,

        },

        {

            "files": [ "**/src/service-worker.js" ],
            "extends": [

                "@futagoza/globals/worker",

            ],

        },

    ],

};
