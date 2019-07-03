"use strict";

const resolve = require.resolve;

module.exports = {

    "extends": [

        resolve( "../node-v4.js" ),
        resolve( "../test.js" ),
        resolve( "./index.js" ),

    ],
    "overrides": [ {

        "files": [ "*.ts" ],
        "rules": {

            "node/no-unsupported-features/es-syntax": "off",

        },

    } ],

};