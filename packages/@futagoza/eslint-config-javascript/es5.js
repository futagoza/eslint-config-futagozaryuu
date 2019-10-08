"use strict";

module.exports = {

    "extends": [

        "@futagoza/core",
        "@futagoza/globals/es5",

    ],

    "parserOptions": {

        "ecmaVersion": 5,
        "ecmaFeatures": {

            "globalReturn": false,

        },

    },

    "rules": {

        "strict": [ "error", "safe" ],

    },

};
