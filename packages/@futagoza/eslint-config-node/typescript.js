"use strict";

/*

    ------------ WARNING ------------

    This file is not a configuration, it's just a way of providing a conveniant way to turn
    off `node/no-unsupported-features/es-syntax` when ESLint is linting `*.ts` files.
    
    Before this file existed, I had to duplicate `node-*` files along with the TypeScript
    configuration, and this to be honest, was very annoying and time consuming to try and
    keep both versions in sync. Now, there's no need :)

*/

module.exports = {

    "overrides": [ {

        "files": [ "*.ts", "*.tsx" ],
        "rules": {

            "node/no-unsupported-features/es-syntax": "off",

        },

    } ],

};
