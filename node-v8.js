"use strict";

module.exports = {

    "extends": [

        "./es2017.js",
        "./node.js"

    ],

    "rules": {

        "no-buffer-constructor": "error",

        "node/no-unsupported-features/es-builtins": [ "error", { "version": 8 } ],
        "node/no-unsupported-features/es-syntax": [ "error", { "version": 8 } ],
        "node/no-unsupported-features/node-builtins": [ "error", { "version": 8 } ],

    }

};
