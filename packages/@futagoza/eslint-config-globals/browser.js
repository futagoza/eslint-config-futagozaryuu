"use strict";

const globals = require( "globals" );

module.exports = {

    "globals": {

        ...globals.browser,
        ...globals.webextensions,
        ...globals.greasemonkey,
        ...globals.devtools,

    },

};
