"use strict";

module.exports = {

    "extends": [

        "@futagoza/ignore",
        "@futagoza/node/10",
        "@futagoza/typescript",
        "@futagoza/dev/test",

    ],

    "overrides": [
        {
            "files": [ "*.ts", "*.tsx" ],
            "rules": {
                "@typescript-eslint/no-unsafe-argument": "off",
                "@typescript-eslint/no-unsafe-assignment": "off",
                "@typescript-eslint/no-unsafe-call": "off",
                "@typescript-eslint/no-unsafe-member-access": "off",
                "@typescript-eslint/no-unsafe-return": "off",
            },
        },
    ],

};
