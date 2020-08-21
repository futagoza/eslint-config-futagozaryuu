"use strict";

const globals = require( "globals" );

module.exports = {

    "globals": Object.assign( {}, require( "./es2017" ).globals, globals.es2020 ),

};
