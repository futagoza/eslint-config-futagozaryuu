"use strict";

//
// This file is the same as `futagozaryuu/node-v8`,
// but is aimed at Node.js v7.6, when native support
// for `async` and `await` was added.
//

module.exports = {

    "extends": [

        "./es2017.js",
        "./node.js"

    ],

    "rules": {

        "no-buffer-constructor": "error",
        "node/no-unsupported-features": [ "error", { "version": 7.6 } ]

    }

};
