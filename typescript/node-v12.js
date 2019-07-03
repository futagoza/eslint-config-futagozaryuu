"use strict";

const resolve = require.resolve;

module.exports = {

    "extends": [

        resolve( "./index.js" ),
        resolve( "../node.js" ),
        resolve( "../test.js" ),

    ],

    "rules": {

        ...require( "../node-v12" ).rules,

    },

    "overrides": [ {

        "files": [ "*.ts" ],
        "rules": {

            "node/no-unsupported-features/es-syntax": "off",

        },

    } ],

};
