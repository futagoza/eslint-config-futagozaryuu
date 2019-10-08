"use strict";

const globals = require( "globals" );

const others = {

    "import": false,
    "System": false,

};

module.exports = {

    "globals": Object.assign( {}, globals.commonjs, globals.amd, others ),

};
