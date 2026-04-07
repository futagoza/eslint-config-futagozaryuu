"use strict";

const globals = require( "globals" );
const es2020 = require( "./es2020" );

module.exports = {

    "globals": {

        ...es2020.globals,
        ...globals.es2021,

    },

};
