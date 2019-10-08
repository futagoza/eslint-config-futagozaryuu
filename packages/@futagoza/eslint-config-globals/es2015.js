"use strict";

const globals = require( "globals" );

module.exports = {

    "globals": Object.assign( {}, require( "./es5" ).globals, globals.es2015 ),

};
