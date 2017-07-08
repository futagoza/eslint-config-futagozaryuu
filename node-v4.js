"use strict";

module.exports = {

    "extends": [

        "./es2015.js",
        "./node.js"

    ],

    "rules": {

        "node/no-unsupported-features": [ "error", { "version": 4 } ]

    }

};
