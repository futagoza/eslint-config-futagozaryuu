"use strict";

module.exports = {

    "extends": [

        "./node-v7.js",
        "./es2017.js" // TODO: As of 06/2017, support is at 50%+

    ],

    "rules": {

        "node/no-unsupported-features": [ "error", { "version": 8 } ]

    }

};
