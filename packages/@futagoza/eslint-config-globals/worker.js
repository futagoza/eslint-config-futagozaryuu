"use strict";

const globals = require( "globals" );

module.exports = {

    "globals": Object.assign( {}, globals.worker, globals.serviceworker ),

};
