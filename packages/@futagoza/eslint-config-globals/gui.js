"use strict";

const globals = require( "globals" );

module.exports = {

    "globals": Object.assign( {}, require( "./browser" ).globals, globals.node, globals[ "shared-node-browser" ] ),

};
