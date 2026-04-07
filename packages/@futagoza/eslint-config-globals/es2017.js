"use strict";

const globals = require( "globals" );
const es2015 = require( "./es2015" );

module.exports = {

    "globals": {

        ...es2015.globals,
        ...globals.es2017,

    },

};
