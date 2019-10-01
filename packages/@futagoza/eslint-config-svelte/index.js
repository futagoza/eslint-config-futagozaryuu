"use strict";

const globals = require( "globals" );

// https://github.com/sveltejs/eslint-plugin-svelte3#configuration
const settings = {

    // "svelte3/ignore-warnings": () => false,
    // "svelte3/compiler-options": { generate: false },
    // "svelte3/ignore-styles": () => false,
    // "svelte3/named-blocks": false,
    // "svelte3/compiler": require( "svelte/compiler" ),

};

module.exports = {

    "overrides": [ {

        "files": [ "*.svelte" ],
        "plugins": [ "svelte3" ],
        "globals": Object.assign( {}, globals.browser, globals.worker ),
        settings,

    } ],

};
