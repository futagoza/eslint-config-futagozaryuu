"use strict";

module.exports = {

    "extends": [

        "./es2015.js",
        "./node.js"

    ],

    "rules": {

        "prefer-rest-params": 0,
        "prefer-spread": 0,
        "node/no-unsupported-features": [ "error", { "version": 4 } ]

    }

};
