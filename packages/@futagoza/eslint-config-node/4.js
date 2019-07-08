"use strict";

const config = [ "error", { "version": ">= 4" } ];

module.exports = {

    "extends": [

        "@futagoza/javascript/es2015",
        "./index.js",

    ],

    "rules": {

        "prefer-rest-params": 0,
        "prefer-spread": 0,

        "node/no-unsupported-features/es-builtins": config,
        "node/no-unsupported-features/es-syntax": config,
        "node/no-unsupported-features/node-builtins": config,

    },

};
