"use strict";

const globals = require( "globals" );

module.exports = {

    "globals": Object.assign( {}, globals.browser, globals.webextensions, globals.greasemonkey, globals.devtools ),

};
