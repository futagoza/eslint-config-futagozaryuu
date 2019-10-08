"use strict";

module.exports = {

    "extends": "./index.js",

    "overrides": [

        {

            "files": [ "**/src/client.js" ],
            "extends": [

                "@futagoza/dev/code",
                "@futagoza/globals/browser",

            ],

        },

        {

            "files": [ "**/src/server.js" ],
            "extends": [

                "@futagoza/dev/node",

            ],

        },

        {

            "files": [ "**/src/service-worker.js" ],
            "extends": [

                "@futagoza/dev/code",
                "@futagoza/globals/worker",

            ],

        },

    ],

};
