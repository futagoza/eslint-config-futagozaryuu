"use strict";

const config = [ "error", { "version": ">= 4" } ];

module.exports = {

    "extends": [

        "@futagoza/javascript/es2015",
        "./index.js",

    ],

    "rules": {

        "prefer-rest-params": "off",
        "prefer-spread": "off",

        "node/no-unsupported-features/es-builtins": config,
        "node/no-unsupported-features/es-syntax": config,
        "node/no-unsupported-features/node-builtins": config,

    },

    ...require( "./typescript" ),

};
