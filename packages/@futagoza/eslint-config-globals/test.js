"use strict";

const globals = require( "globals" );

const others = {

    "suite": false,
    "bench": false,
    "benchmark": false,

};

module.exports = {

    "globals": Object.assign( {}, globals.jasmine, globals.jest, globals.mocha, globals.qunit, globals.phantomjs, others ),

};
