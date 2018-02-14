"use strict";

module.exports = {

    "extends": [

        "./es2017.js",
        "./node.js"

    ],

    "rules": {

        "no-buffer-constructor": "error",
        "node/no-unsupported-features": [ "error", { "version": 8 } ]

    }

};
