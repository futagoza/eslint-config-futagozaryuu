"use strict";

const globals = require( "globals" );

module.exports = {

    "extends": "./index.js",
    "globals": globals.es5,

    "parserOptions": {

        "ecmaVersion": 5,
        "ecmaFeatures": {

            "globalReturn": false

        }

    },

    "rules": {

        "strict": [ "error", "safe" ]

    }

};
