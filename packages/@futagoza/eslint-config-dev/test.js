"use strict";

const entry = postfix => [ `*.${ postfix }.js`, `*.${ postfix }.ts` ];

module.exports = {

    "overrides": [ {

        "files": [

            ...entry( "benchmark" ),
            ...entry( "spec" ),
            ...entry( "test" ),

        ],

        "extends": [

            "@futagoza/globals/test",

        ],

    } ],

};
