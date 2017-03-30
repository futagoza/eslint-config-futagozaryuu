"use strict";

const globals = require( "globals" );

module.exports = {

  "extends": "./es5.js",

  "globals": globals.es6,

  "parserOptions": {

    "ecmaVersion": 6

  },

  "rules": {

    "no-class-assign": "error",
    "no-const-assign": "error",
    "no-dupe-class-members": "error",
    "no-duplicate-imports": [ "error", { "includeExports": true } ],
    "no-new-symbol": "error",
    "no-this-before-super": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "prefer-const": "error",
    "prefer-numeric-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": 0,
    "strict": [ "error", "global" ],
    "symbol-description": "error",
    "template-curly-spacing": [ "error", "always" ]

  }

};
