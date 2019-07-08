"use strict";

const config = [ "error", { "version": ">= 10" } ];

module.exports = {

    "extends": [

        "@futagoza/javascript/es2018",
        "./index.js",

    ],

    "rules": {

        "no-buffer-constructor": "error",

        "node/no-unsupported-features/es-builtins": config,
        "node/no-unsupported-features/es-syntax": config,
        "node/no-unsupported-features/node-builtins": config,

    },

};
