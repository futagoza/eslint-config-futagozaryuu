"use strict";

module.exports = {

    "extends": [

        "./es2015.js",
        "./node.js"

    ],

    "rules": {

        "node/no-deprecated-api": "warn",
        "node/no-unsupported-features": [ "error", { "version": 4 } ],
        "node/shebang": "error"

    }

};
