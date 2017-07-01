"use strict";

//
// This file is the same as `futagozaryuu/node-v8`,
// but is aimed at Node.js v7.6, when native support
// for `async` and `await` was added.
//

module.exports = {

    "extends": [

        "./node-v7.js",
        "./es2017.js"

    ],

    "rules": {

        "node/no-unsupported-features": [ "error", { "version": 7.6 } ]

    }

};
