"use strict";

module.exports = {

    "extends": [

        "@futagoza/javascript",
        "@futagoza/node",

    ],

    "parserOptions": {

        "sourceType": "module",

    },

    "overrides": [ {

        "files": [ "*.spec.js", "*.test.js" ],
        "extends": "./test.js",

    } ],

};
