"use strict";

module.exports = {

    "extends": [

        "./es2015.js",
        "./node.js"

    ],

    "rules": {

        "no-buffer-constructor": "error",
        "node/no-unsupported-features": [ "error", { "version": 6 } ]

    }

};
