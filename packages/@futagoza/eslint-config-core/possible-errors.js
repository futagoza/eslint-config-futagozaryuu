"use strict";

module.exports = {

    "rules": {

        /**
         * enforce `for` loop update clause moving the counter in the right direction
         *
         * @see http://eslint.org/docs/rules/for-direction
         */
        "for-direction": "off",

        /**
         * enforce `return` statements in getters
         *
         * @see http://eslint.org/docs/rules/getter-return
         */
        "getter-return": [ "error", { "allowImplicit": true } ],

        /**
         * disallow using an async function as a Promise executor
         *
         * @see http://eslint.org/docs/rules/no-async-promise-executor
         */
        "no-async-promise-executor": "error",

        /**
         * disallow `await` inside of loops
         *
         * @see http://eslint.org/docs/rules/no-await-in-loop
         */
        "no-await-in-loop": "error",

        /**
         * disallow comparing against -0
         *
         * @see http://eslint.org/docs/rules/no-compare-neg-zero
         */
        "no-compare-neg-zero": "error",

        /**
         * disallow assignment operators in conditional expressions
         *
         * @see http://eslint.org/docs/rules/no-cond-assign
         */
        "no-cond-assign": [ "error", "always" ],

        /**
         * disallow the use of `console`
         *
         * @see http://eslint.org/docs/rules/no-console
         */
        "no-console": "off",

        /**
         * disallow constant expressions in conditions
         *
         * @see http://eslint.org/docs/rules/no-constant-condition
         */
        "no-constant-condition": [ "error", { "checkLoops": false } ],

        /**
         * disallow control characters in regular expressions
         *
         * @see http://eslint.org/docs/rules/no-control-regex
         */
        "no-control-regex": "off",

        /**
         * disallow the use of `debugger`
         *
         * @see http://eslint.org/docs/rules/no-debugger
         */
        "no-debugger": "error",

        /**
         * disallow duplicate arguments in `function` definitions
         *
         * @see http://eslint.org/docs/rules/no-dupe-args
         */
        "no-dupe-args": "error",

        /**
         * disallow duplicate conditions in if-else-if chains
         *
         * @see http://eslint.org/docs/rules/no-dupe-else-if
         */
        "no-dupe-else-if": "error",

        /**
         * disallow duplicate keys in object literals
         *
         * @see http://eslint.org/docs/rules/no-dupe-keys
         */
        "no-dupe-keys": "error",

        /**
         * disallow duplicate case labels
         *
         * @see http://eslint.org/docs/rules/no-duplicate-case
         */
        "no-duplicate-case": "error",

        /**
         * disallow empty block statements
         *
         * @see http://eslint.org/docs/rules/no-empty
         */
        "no-empty": "warn",

        /**
         * disallow empty character classes in regular expressions
         *
         * @see http://eslint.org/docs/rules/no-empty-character-class
         */
        "no-empty-character-class": "warn",

        /**
         * disallow reassigning exceptions in `catch` clauses
         *
         * @see http://eslint.org/docs/rules/no-ex-assign
         */
        "no-ex-assign": "error",

        /**
         * 🔧 disallow unnecessary boolean casts
         *
         * @see http://eslint.org/docs/rules/no-extra-boolean-cast
         */
        "no-extra-boolean-cast": "error",

        /**
         * 🔧 disallow unnecessary parentheses
         *
         * @see http://eslint.org/docs/rules/no-extra-parens
         */
        "no-extra-parens": [ "error", "all", {

            "conditionalAssign": false,
            "returnAssign": false,
            "nestedBinaryExpressions": false,
            "ignoreJSX": "none",
            "enforceForArrowConditionals": false,
            "enforceForSequenceExpressions": false,
            "enforceForNewInMemberExpressions": false,
            "enforceForFunctionPrototypeMethods": false,

        } ],

        /**
         * 🔧 disallow unnecessary semicolons
         *
         * @see http://eslint.org/docs/rules/no-extra-semi
         */
        "no-extra-semi": "error",

        /**
         * disallow reassigning `function` declarations
         *
         * @see http://eslint.org/docs/rules/no-func-assign
         */
        "no-func-assign": "off",

        /**
         * disallow assigning to imported bindings
         *
         * @see https://eslint.org/docs/rules/no-import-assign
         */
        "no-import-assign": "error",

        /**
         * disallow variable or `function` declarations in nested blocks
         *
         * @see http://eslint.org/docs/rules/no-inner-declarations
         */
        "no-inner-declarations": "off",

        /**
         * disallow invalid regular expression strings in `RegExp` constructors
         *
         * @see http://eslint.org/docs/rules/no-invalid-regexp
         */
        "no-invalid-regexp": "error",

        /**
         * disallow irregular whitespace outside of strings and comments
         *
         * @see http://eslint.org/docs/rules/no-irregular-whitespace
         */
        "no-irregular-whitespace": [ "error", {

            "skipComments": true,
            "skipRegExps": true,
            "skipStrings": true,
            "skipTemplates": true,

        } ],

        /**
         * disallow literal numbers that lose precision
         *
         * @see http://eslint.org/docs/rules/no-loss-of-precision
         */
        "no-loss-of-precision": "warn",

        /**
         * disallow characters which are made with multiple code points in character class syntax
         *
         * @see http://eslint.org/docs/rules/no-misleading-character-class
         */
        "no-misleading-character-class": "warn",

        /**
         * disallow calling global object properties as functions
         *
         * @see http://eslint.org/docs/rules/no-obj-calls
         */
        "no-obj-calls": "off",

        /**
         * disallow calling some `Object.prototype` methods directly on objects
         *
         * @see http://eslint.org/docs/rules/no-prototype-builtins
         */
        "no-prototype-builtins": "off",

        /**
         * 🔧 disallow multiple spaces in regular expressions
         *
         * @see http://eslint.org/docs/rules/no-regex-spaces
         */
        "no-regex-spaces": "warn",

        /**
         * disallow returning values from setters
         *
         * @see http://eslint.org/docs/rules/no-setter-return
         */
        "no-setter-return": "error",

        /**
         * disallow sparse arrays
         *
         * @see http://eslint.org/docs/rules/no-sparse-arrays
         */
        "no-sparse-arrays": "error",

        /**
         * disallow template literal placeholder syntax in regular strings
         *
         * @see http://eslint.org/docs/rules/no-template-curly-in-string
         */
        "no-template-curly-in-string": "off",

        /**
         * disallow confusing multiline expressions
         *
         * @see http://eslint.org/docs/rules/no-unexpected-multiline
         */
        "no-unexpected-multiline": "off",

        /**
         * disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
         *
         * @see http://eslint.org/docs/rules/no-unreachable
         */
        "no-unreachable": "warn",

        /**
         * disallow control flow statements in `finally` blocks
         *
         * @see http://eslint.org/docs/rules/no-unsafe-finally
         */
        "no-unsafe-finally": "error",

        /**
         * disallow negating the left operand of relational operators
         *
         * @see http://eslint.org/docs/rules/no-unsafe-negation
         */
        "no-unsafe-negation": "error",

        /**
         * disallow assignments that can lead to race conditions due to usage of `await` or `yield`
         *
         * @see http://eslint.org/docs/rules/require-atomic-updates
         */
        "require-atomic-updates": "error",

        /**
         * require calls to `isNaN()` when checking for `NaN`
         *
         * @see http://eslint.org/docs/rules/use-isnan
         */
        "use-isnan": "off",

        /**
         * enforce comparing `typeof` expressions against valid strings
         *
         * @see http://eslint.org/docs/rules/no-valid-typeof
         */
        "valid-typeof": [ "error", { "requireStringLiterals": false } ],

    },

};
