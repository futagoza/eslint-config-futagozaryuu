"use strict";

const globals = require( "globals" );

module.exports = {

    "globals": Object.assign( {}, require( "./es2020" ).globals, globals.es2021 ),

};
