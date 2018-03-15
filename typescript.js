"use strict";

module.exports = {

    "extends": "./es2018.js",
    "parser": require.resolve( "typescript-eslint-parser" ),

    "rules": {

        // https://github.com/eslint/typescript-eslint-parser/issues/416
        "no-undef": 0

    }

};
