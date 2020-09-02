"use strict";

module.exports = {

    "extends": [

        "./es5.js",
        "@futagoza/globals/es2015",
        "@futagoza/core/ecmascript-6",

    ],

    "parser": require.resolve( "@babel/eslint-parser" ),
    "parserOptions": {

        "ecmaVersion": 6,
        "sourceType": "script",

    },

};
