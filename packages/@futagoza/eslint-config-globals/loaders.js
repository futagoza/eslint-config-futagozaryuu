"use strict";

const globals = require( "globals" );

module.exports = {

    "globals": {

        ...globals.commonjs,
        ...globals.amd,

        "import": false,
        "System": false,

    },

};
