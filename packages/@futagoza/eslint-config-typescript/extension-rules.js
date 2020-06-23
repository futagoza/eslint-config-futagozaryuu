"use strict";

/*

    “In some cases, ESLint provides a rule itself, but it doesn't support TypeScript syntax; either it crashes, or it
    ignores the syntax, or it falsely reports against it. In these cases, we create what we call an extension rule; a
    rule within our plugin that has the same functionality, but also supports TypeScript.”

    https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#extension-rules

*/

const config = {
    ...require( "@futagoza/eslint-config-core/best-practices" ).rules,
    ...require( "@futagoza/eslint-config-core/possible-errors" ).rules,
    ...require( "@futagoza/eslint-config-core/stylistic-issues" ).rules,
    ...require( "@futagoza/eslint-config-core/variables" ).rules,
    ...require( "@futagoza/eslint-config-javascript/es2015" ).rules,
};

module.exports = {

    "extends": "./eslint-overrides.js",

    "rules": {

        /**
         * 🔧 Enforce consistent brace style for blocks
         * 
         * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md
         */
        "@typescript-eslint/brace-style": config[ "brace-style" ],

        /**
         * 🔧 Enforces consistent spacing before and after commas
         *
         * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md
         */
        "@typescript-eslint/comma-spacing": config[ "comma-spacing" ],

        /**
         * Enforce default parameters to be last
         * 
         * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/default-param-last.md
         */
        "@typescript-eslint/default-param-last": config[ "default-param-last" ],

        /**
         * 🔧 Enforce dot notation whenever possible
         * 
         * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md
         */
        "@typescript-eslint/dot-notation": config[ "dot-notation" ],

        /**
         * 🔧 Require or disallow spacing between function identifiers and their invocations
         * 
         * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
         */
        "@typescript-eslint/func-call-spacing": config[ "func-call-spacing" ],

        /**
         * 🔧 Enforce consistent indentation
         * 
         * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
         */
        "@typescript-eslint/indent": config[ "indent" ],

        /**
         * Require or disallow initialization in variable declarations
         * 
         * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/init-declarations.md
         */
        "@typescript-eslint/init-declarations": config[ "init-declarations" ],

        /**
         * 🔧 Enforce consistent spacing before and after keywords
         * 
         * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/keyword-spacing.md
         */
        "@typescript-eslint/keyword-spacing": config[ "keyword-spacing" ],

        /**
         * 🔧 Require or disallow an empty line between class members
         * 
         * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/lines-between-class-members.md
         */
        "@typescript-eslint/lines-between-class-members": config[ "lines-between-class-members" ],

        /**
         * 🔧 Disallow generic Array constructors
         * 
         * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
         */
        "@typescript-eslint/no-array-constructor": config[ "no-array-constructor" ],

        /**
         * Disallow duplicate class members
         * 
         * __NOTE:__ If your not using ESlint/TypeScript via an Editor plugin for VS Code, I recomend enabling this rule.
         * 
         * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
         */
        "@typescript-eslint/no-dupe-class-members": "off",

        /**
         * Disallow empty functions
         * 
         * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
         */
        "@typescript-eslint/no-empty-function": config[ "no-empty-function" ],

        /**
         * 🔧 Disallow unnecessary parentheses
         * 
         * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
         */
        "@typescript-eslint/no-extra-parens": config[ "no-extra-parens" ],

        /**
         * 🔧 Disallow unnecessary semicolons
         * 
         * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-semi.md
         */
        "@typescript-eslint/no-extra-semi": config[ "no-extra-semi" ],

        /**
         * disallow `this` keywords outside of classes or class-like objects
         * 
         * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-this.md
         */
        "@typescript-eslint/no-invalid-this": config[ "no-invalid-this" ],

        /**
         * Disallow literal numbers that lose precision
         * 
         * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loss-of-precision.md
         */
        "@typescript-eslint/no-loss-of-precision": config[ "no-loss-of-precision" ],

        /**
         * Disallows magic numbers
         * 
         * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
         */
        "@typescript-eslint/no-magic-numbers": config[ "no-magic-numbers" ],

        /**
         * Disallow throwing literals as exceptions
         * 
         * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md
         */
        "@typescript-eslint/no-throw-literal": config[ "no-throw-literal" ],

        /**
         * Disallow unused expressions
         * 
         * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
         */
        "@typescript-eslint/no-unused-expressions": config[ "no-unused-expressions" ],

        /**
         * Disallow unused variables
         * 
         * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
         */
        "@typescript-eslint/no-unused-vars": config[ "no-unused-vars" ],

        /**
         * Disallow the use of variables before they are defined
         * 
         * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
         */
        "@typescript-eslint/no-use-before-define": [ config[ "no-use-before-define" ][ 0 ], {

            ...config[ "no-use-before-define" ][ 1 ],

            "enums": false,
            "typedefs": false,

        } ],

        /**
         * Disallow unnecessary constructors
         * 
         * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
         */
        "@typescript-eslint/no-useless-constructor": config[ "no-useless-constructor" ],

        /**
         * 🔧 Enforce the consistent use of either backticks, double, or single quotes
         * 
         * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
         */
        "@typescript-eslint/quotes": config[ "quotes" ],

        /**
         * Disallow async functions which have no `await` expression
         * 
         * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md
         */
        "@typescript-eslint/require-await": config[ "require-await" ],

        /**
         * 🔧 Enforces consistent returning of awaited values
         * 
         * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md
         */
        "@typescript-eslint/return-await": [ config[ "no-return-await" ], "never" ],

        /**
         * 🔧 Require or disallow semicolons instead of ASI
         * 
         * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
         */
        "@typescript-eslint/semi": config[ "semi" ],

        /**
         * 🔧 Enforce consistent spacing before function definition opening parenthesis
         * 
         * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md
         */
        "@typescript-eslint/space-before-function-paren": config[ "space-before-function-paren" ],

    },

};
