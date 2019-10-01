"use strict";

const entry = postfix => [ `*.${ postfix }.js`, `*.${ postfix }.ts` ]

module.exports = {

    "overrides": [ {

        "files": [

            ...entry( "benchmark" ),
            ...entry( "spec" ),
            ...entry( "test" ),

        ],

        "env": {

            "jasmine": true,
            "jest": true,
            "mocha": true,

        },

        "globals": {

            "suite": "readonly",
            "bench": "readonly",
            "benchmark": "readonly",

        },

    } ],

};
