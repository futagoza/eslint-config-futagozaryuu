"use strict";

module.exports = {

    "rules": {

        /**
         * require or disallow initialization in variable declarations
         *
         * @see http://eslint.org/docs/rules/init-declarations
         */
        "init-declarations": 0,

        /**
         * disallow deleting variables
         *
         * @see http://eslint.org/docs/rules/no-delete-var
         */
        "no-delete-var": "warn",

        /**
         * disallow labels that share a name with a variable
         *
         * @see http://eslint.org/docs/rules/no-label-var
         */
        "no-label-var": "error",

        /**
         * disallow specified global variables
         *
         * @see http://eslint.org/docs/rules/no-restricted-globals
         */
        "no-restricted-globals": 0,

        /**
         * disallow variable declarations from shadowing variables declared in the outer scope
         *
         * @see http://eslint.org/docs/rules/no-shadow
         */
        "no-shadow": 0,

        /**
         * disallow identifiers from shadowing restricted names
         *
         * @see http://eslint.org/docs/rules/no-shadow-restricted-names
         */
        "no-shadow-restricted-names": 0,

        /**
         * disallow the use of undeclared variables unless mentioned in `/*global ...` comments
         *
         * @see http://eslint.org/docs/rules/no-undef
         */
        "no-undef": "error",

        /**
         * 📝 disallow initializing variables to `undefined`
         *
         * @see http://eslint.org/docs/rules/no-undef-init
         */
        "no-undef-init": "warn",

        /**
         * disallow the use of `undefined` as an identifier
         *
         * @see http://eslint.org/docs/rules/no-undefined
         */
        "no-undefined": "error",

        /**
         * disallow unused variables
         *
         * @see http://eslint.org/docs/rules/no-unused-vars
         */
        "no-unused-vars": [ "error", {

            "vars": "local",
            "args": "after-used",
            "ignoreRestSiblings": true,
            "argsIgnorePattern": "^_",
            "caughtErrors": "none",

        } ],

        /**
         * disallow the use of variables before they are defined
         *
         * @see http://eslint.org/docs/rules/no-use-before-define
         */
        "no-use-before-define": [ "warn", {

            "functions": false,
            "classes": true,
            "variables": true,

        } ],

    },

};
