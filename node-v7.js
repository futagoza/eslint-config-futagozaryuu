"use strict";

module.exports = {

    "extends": [

        "./es2016.js",
        "./node.js"

    ],

    "rules": {

        "no-buffer-constructor": "error",
        "node/no-unsupported-features": [ "error", { "version": 7 } ]

    }

};
