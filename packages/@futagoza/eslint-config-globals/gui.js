"use strict";

const globals = require( "globals" );
const browser = require( "./browser" );

module.exports = {

    "globals": {

        ...browser.globals,
        ...globals.node,
        ...globals[ "shared-node-browser" ],

    },

};
