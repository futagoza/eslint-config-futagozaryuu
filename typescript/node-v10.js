"use strict";

const resolve = require.resolve;

module.exports = {

    "extends": [

        resolve( "./index.js" ),
        resolve( "../node.js" ),
        resolve( "../test.js" ),

    ],

    "rules": {

        ...require( "../node-v10" ).rules,

    },

    "overrides": [ {

        "files": [ "*.ts" ],
        "rules": {

            "node/no-unsupported-features/es-syntax": "off",

        },

    } ],

};
