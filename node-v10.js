"use strict";

module.exports = {

    "extends": [

        "./es2018.js",
        "./node.js"

    ],

    "rules": {

        "no-buffer-constructor": "error",

        "node/no-unsupported-features/es-builtins": [ "error", { "version": 10 } ],
        "node/no-unsupported-features/es-syntax": [ "error", { "version": 10 } ],
        "node/no-unsupported-features/node-builtins": [ "error", { "version": 10 } ],

    }

};
