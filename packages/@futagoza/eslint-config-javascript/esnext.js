"use strict";

const { config } = require( "@futagoza/eslint-config-core/internal" );

module.exports = {

    "extends": "./es2021.js",

    "parser": "@babel/eslint-parser",
    "parserOptions": {

        "requireConfigFile": false,

    },

    "plugins": [ "@babel/eslint-plugin" ],
    "rules": {

        // `@babel/eslint-plugin` provides better support for the following rules

        "new-cap": "off",
        "no-invalid-this": "off",
        "no-unused-expressions": "off",
        "object-curly-spacing": "off",
        "semi": "off",

        /**
         * require constructor names to begin with a capital letter
         *
         * @see
         * - http://eslint.org/docs/rules/new-cap
         * - https://github.com/babel/babel/tree/master/eslint/babel-eslint-plugin#rules
         */
        "@babel/new-cap": config[ "new-cap" ],

        /**
         * disallow `this` keywords outside of classes or class-like objects
         *
         * @see
         * - http://eslint.org/docs/rules/no-invalid-this
         * - https://github.com/babel/babel/tree/master/eslint/babel-eslint-plugin#rules
         */
        "@babel/no-invalid-this": config[ "no-invalid-this" ],

        /**
         * disallow unused expressions
         *
         * @see
         * - http://eslint.org/docs/rules/no-unused-expressions
         * - https://github.com/babel/babel/tree/master/eslint/babel-eslint-plugin#rules
         */
        "@babel/no-unused-expressions": config[ "no-unused-expressions" ],

        /**
         * 🔧 enforce consistent spacing inside braces
         *
         * @see
         * - http://eslint.org/docs/rules/object-curly-spacing
         * - https://github.com/babel/babel/tree/master/eslint/babel-eslint-plugin#rules
         */
        "@babel/object-curly-spacing": config[ "object-curly-spacing" ],

        /**
         * 🔧 require or disallow semicolons instead of ASI
         * 
         * @see
         * - http://eslint.org/docs/rules/semi
         * - https://github.com/babel/babel/tree/master/eslint/babel-eslint-plugin#rules
         */
        "@babel/semi": config[ "semi" ],

    },

};
