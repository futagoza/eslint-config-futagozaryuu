"use strict";

const config = [ "error", { "version": ">= 8" } ];

module.exports = {

    "extends": [

        "@futagoza/javascript/es2017",
        "./index.js",

    ],

    "rules": {

        "node/no-unsupported-features/es-builtins": config,
        "node/no-unsupported-features/es-syntax": config,
        "node/no-unsupported-features/node-builtins": config,

    },

    ...require( "./typescript" ),

};
