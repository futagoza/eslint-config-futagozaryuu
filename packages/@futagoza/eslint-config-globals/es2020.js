"use strict";

const globals = require( "globals" );
const es2017 = require( "./es2017" );

module.exports = {

    "globals": {

        ...es2017.globals,
        ...globals.es2020,

    },

};
