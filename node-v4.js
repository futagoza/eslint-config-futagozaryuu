"use strict";

module.exports = {

    "extends": [

        "./es2015.js",
        "./node.js"

    ],

    "rules": {

        "prefer-rest-params": 0,
        "prefer-spread": 0,

        "node/no-unsupported-features/es-builtins": [ "error", { "version": 4 } ],
        "node/no-unsupported-features/es-syntax": [ "error", { "version": 4 } ],
        "node/no-unsupported-features/node-builtins": [ "error", { "version": 4 } ],

    }

};
