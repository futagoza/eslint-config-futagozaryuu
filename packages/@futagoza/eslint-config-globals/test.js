"use strict";

const globals = require( "globals" );

module.exports = {

    "globals": {

        ...globals.jasmine,
        ...globals.jest,
        ...globals.mocha,
        ...globals.qunit,
        ...globals.phantomjs,

        "suite": false,
        "bench": false,
        "benchmark": false,

    },

};
