"use strict";

module.exports = {

    "extends": [

        "./es2015.js",
        "./node.js"

    ],

    "rules": {

        "no-buffer-constructor": "error",

        "node/no-unsupported-features/es-builtins": [ "error", { "version": 6 } ],
        "node/no-unsupported-features/es-syntax": [ "error", { "version": 6 } ],
        "node/no-unsupported-features/node-builtins": [ "error", { "version": 6 } ],

    }

};
