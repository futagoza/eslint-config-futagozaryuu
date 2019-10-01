"use strict";

module.exports = {

    "overrides": [ {

        "files": [ "*.benchmark.js", "*.spec.js", "*.test.js" ],

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
