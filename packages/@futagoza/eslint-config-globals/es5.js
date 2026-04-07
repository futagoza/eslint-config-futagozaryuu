"use strict";

const globals = require( "globals" );

module.exports = {

    "globals": {

        ...globals.builtin,
        ...globals.es5,

    },

};
