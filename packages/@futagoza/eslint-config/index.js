"use strict";

module.exports = {

    "extends": [

        "@futagoza/node/10",
        "@futagoza/typescript",
        "@futagoza/html",
        "@futagoza/dev/test",

    ],

    "ignorePatterns": [

        "!.eslintrc.js",
        ".idea/*",
        ".nyc_output/*",
        "assets/*",
        "coverage/*",
        "dist/*",
        "node_modules/*",
        "out/*",

    ],

};
