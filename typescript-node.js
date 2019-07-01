"use strict";

module.exports = {

    "extends": [

        "./node.js",
        "./test.js",
        "./typescript.js",

    ],
    "overrides": [ {

        "files": [ "*.ts" ],
        "rules": {

            "node/no-unsupported-features/es-syntax": "off",

        },

    } ],

};
