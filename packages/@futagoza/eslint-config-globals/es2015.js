"use strict";

const globals = require( "globals" );
const es5 = require( "./es5" );

module.exports = {

    "globals": {

        ...es5.globals,
        ...globals.es2015,

    },

};
