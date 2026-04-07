"use strict";

const globals = require( "globals" );

module.exports = {

    "globals": {

        ...globals.worker,
        ...globals.serviceworker,

    },

};
