"use strict";

const globals = require( "globals" );

module.exports = {

    "extends": "./es5.js",
    "parser": "babel-eslint",
    "globals": globals.es6,

    "parserOptions": {

        "ecmaVersion": 6,
        "sourceType": "script"

    },

    "rules": {

        /**
         * 📝 require braces around arrow function bodies
         *
         * @see http://eslint.org/docs/rules/arrow-body-style
         */
        "arrow-body-style": [ "error", "as-needed", {

            "requireReturnForObjectLiteral": true

        } ],

        /**
         * 📝 require parentheses around arrow function arguments
         *
         * @see http://eslint.org/docs/rules/arrow-parens
         */
        "arrow-parens": [ "error", "as-needed", {

            "requireForBlockBody": false

        } ],

        /**
         * 📝 enforce consistent spacing before and after the arrow in arrow functions
         *
         * @see http://eslint.org/docs/rules/arrow-spacing
         */
        "arrow-spacing": [ "error", { "before": true, "after": true } ],

        /**
         * require `super()` calls in constructors
         *
         * @see http://eslint.org/docs/rules/constructor-super
         */
        "constructor-super": "error",

        /**
         * 📝 enforce consistent spacing around `*` operators in generator functions
         *
         * @see http://eslint.org/docs/rules/generator-star-spacing
         */
        "generator-star-spacing": [ "error", { "before": true, "after": false } ],

        /**
         * disallow reassigning class members
         *
         * @see http://eslint.org/docs/rules/no-class-assign
         */
        "no-class-assign": "error",

        /**
         * 📝 disallow arrow functions where they could be confused with comparisons
         *
         * @see http://eslint.org/docs/rules/no-confusing-arrow
         */
        "no-confusing-arrow": [ "error", { "allowParens": true } ],

        /**
         * disallow reassigning `const` variables
         *
         * @see http://eslint.org/docs/rules/no-const-assign
         */
        "no-const-assign": "error",

        /**
         * disallow duplicate class members
         *
         * @see http://eslint.org/docs/rules/no-dupe-class-members
         */
        "no-dupe-class-members": "error",

        /**
         * disallow duplicate module imports
         *
         * @see http://eslint.org/docs/rules/no-duplicate-imports
         */
        "no-duplicate-imports": [ "error", { "includeExports": true } ],

        /**
         * disallow `new` operators with the `Symbol` object
         *
         * @see http://eslint.org/docs/rules/no-new-symbol
         */
        "no-new-symbol": "error",

        /**
         * disallow specified modules when loaded by `import`
         *
         * @see http://eslint.org/docs/rules/no-restricted-imports
         */
        "no-restricted-imports": 0,

        /**
         * disallow `this`/`super` before calling `super()` in constructors
         *
         * @see http://eslint.org/docs/rules/no-this-before-super
         */
        "no-this-before-super": "error",

        /**
         * 📝 disallow unnecessary computed property keys in object literals
         *
         * @see http://eslint.org/docs/rules/no-useless-computed-key
         */
        "no-useless-computed-key": "error",

        /**
         * disallow unnecessary constructors
         *
         * @see http://eslint.org/docs/rules/no-useless-constructor
         */
        "no-useless-constructor": "warn",

        /**
         * 📝 disallow renaming import, export, and destructured assignments to the same name
         *
         * @see http://eslint.org/docs/rules/no-useless-rename
         */
        "no-useless-rename": "error",

        /**
         * 📝 require `let` or `const` instead of `var`
         *
         * @see http://eslint.org/docs/rules/no-var
         */
        "no-var": "error",

        /**
         * 📝 require or disallow method and property shorthand syntax for object literals
         *
         * @see http://eslint.org/docs/rules/object-shorthand
         */
        "object-shorthand": 0,

        /**
         * 📝 require arrow functions as callbacks
         *
         * @see http://eslint.org/docs/rules/prefer-arrow-callback
         */
        "prefer-arrow-callback": 0,

        /**
         * 📝 require `const` declarations for variables that are never reassigned after declared
         *
         * @see http://eslint.org/docs/rules/prefer-const
         */
        "prefer-const": [ "warn", {

            "destructuring": "all",
            "ignoreReadBeforeAssign": true

        } ],

        /**
         * require destructuring from arrays and/or objects
         *
         * @see http://eslint.org/docs/rules/prefer-destructuring
         */
        "prefer-destructuring": 0,

        /**
         * 📝 disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
         *
         * @see http://eslint.org/docs/rules/prefer-numeric-literals
         */
        "prefer-numeric-literals": "error",

        /**
         * require rest parameters instead of `arguments`
         *
         * @see http://eslint.org/docs/rules/prefer-rest-params
         */
        "prefer-rest-params": "error",

        /**
         * 📝 require spread operators instead of `.apply()`
         *
         * @see http://eslint.org/docs/rules/prefer-spread
         */
        "prefer-spread": "warn",

        /**
         * 📝 require template literals instead of string concatenation
         *
         * @see http://eslint.org/docs/rules/prefer-template
         */
        "prefer-template": 0,

        /**
         * require generator functions to contain `yield`
         *
         * @see http://eslint.org/docs/rules/require-yield
         */
        "require-yield": "error",

        /**
         * 📝 enforce spacing between rest and spread operators and their expressions
         *
         * @see http://eslint.org/docs/rules/rest-spread-spacing
         */
        "rest-spread-spacing": [ "error", "never" ],

        /**
         * 📝 enforce sorted import declarations within modules
         *
         * @see http://eslint.org/docs/rules/sort-imports
         */
        "sort-imports": 0,

        /**
         * require symbol descriptions
         *
         * @see http://eslint.org/docs/rules/symbol-description
         */
        "symbol-description": "error",

        /**
         * 📝 require or disallow spacing around embedded expressions of template strings
         *
         * @see http://eslint.org/docs/rules/template-curly-spacing
         */
        "template-curly-spacing": [ "error", "always" ],

        /**
         * 📝 require or disallow spacing around the `*` in `yield*` expressions
         *
         * @see http://eslint.org/docs/rules/yield-star-spacing
         */
        "yield-star-spacing": 0

    }

};
