"use strict";

const globals = require( "globals" );

module.exports = {

    "globals": {

        ...globals.builtin,
        ...globals.es5,
        ...globals.es2015,
        ...globals.es2017,
        ...globals.es2020,

    },

};
