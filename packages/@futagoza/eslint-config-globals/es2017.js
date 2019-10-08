"use strict";

const globals = require( "globals" );

module.exports = {

    "globals": Object.assign( {}, require( "./es2015" ).globals, globals.es2017 ),

};
