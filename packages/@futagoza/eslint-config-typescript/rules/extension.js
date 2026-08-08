// 
// WARNING: AUTO-GENERATED USING @typescript-eslint/eslint-plugin
//
// These rules are extensions of core rules
// 

import { EslintRules } from "@futagoza/eslint-config-core"

/**
 * Raw config for `@futagoza/eslint-config-typescript/rules/extension.js`
 */
export const config = {

    name: "@futagoza/eslint-config-typescript/extension",

    rules: {

        /**
         * Enforce that class methods utilize `this`
         * 
         * @see https://typescript-eslint.io/rules/class-methods-use-this
         */
        "@typescript-eslint/class-methods-use-this": EslintRules[ "class-methods-use-this" ],

        /**
         * Enforce default parameters to be last
         * 
         * @see https://typescript-eslint.io/rules/default-param-last
         */
        "@typescript-eslint/default-param-last": EslintRules[ "default-param-last" ],

        /**
         * Require or disallow initialization in variable declarations
         * 
         * @see https://typescript-eslint.io/rules/init-declarations
         */
        "@typescript-eslint/init-declarations": EslintRules[ "init-declarations" ],

        /**
         * Enforce a maximum number of parameters in function definitions
         * 
         * @see https://typescript-eslint.io/rules/max-params
         */
        "@typescript-eslint/max-params": EslintRules[ "max-params" ],

        /**
         * 🔧 Disallow generic `Array` constructors
         * 
         * @see https://typescript-eslint.io/rules/no-array-constructor
         */
        "@typescript-eslint/no-array-constructor": EslintRules[ "no-array-constructor" ],

        /**
         * Disallow duplicate class members
         * 
         * @see https://typescript-eslint.io/rules/no-dupe-class-members
         */
        "@typescript-eslint/no-dupe-class-members": "off",

        /**
         * Disallow empty functions
         * 
         * @see https://typescript-eslint.io/rules/no-empty-function
         */
        "@typescript-eslint/no-empty-function": EslintRules[ "no-empty-function" ],

        /**
         * Disallow `this` keywords outside of classes or class-like objects
         * 
         * @see https://typescript-eslint.io/rules/no-invalid-this
         */
        "@typescript-eslint/no-invalid-this": EslintRules[ "no-invalid-this" ],

        /**
         * Disallow magic numbers
         * 
         * @see https://typescript-eslint.io/rules/no-magic-numbers
         */
        "@typescript-eslint/no-magic-numbers": EslintRules[ "no-magic-numbers" ],

        /**
         * Disallow variable redeclaration
         * 
         * @see https://typescript-eslint.io/rules/no-redeclare
         */
        "@typescript-eslint/no-redeclare": "off",

        /**
         * Disallow variable declarations from shadowing variables declared in the outer scope
         * 
         * @see https://typescript-eslint.io/rules/no-shadow
         */
        "@typescript-eslint/no-shadow": EslintRules[ "no-shadow" ],

        /**
         * Disallow unused expressions
         * 
         * @see https://typescript-eslint.io/rules/no-unused-expressions
         */
        "@typescript-eslint/no-unused-expressions": EslintRules[ "no-unused-expressions" ],

        /**
         * Disallow unused private class members
         * 
         * @see https://typescript-eslint.io/rules/no-unused-private-class-members
         */
        "@typescript-eslint/no-unused-private-class-members": EslintRules[ "no-unused-private-class-members" ],

        /**
         * 🔧 Disallow unused variables
         * 
         * @see https://typescript-eslint.io/rules/no-unused-vars
         */
        "@typescript-eslint/no-unused-vars": EslintRules[ "no-unused-vars" ],

        /**
         * Disallow the use of variables before they are defined
         * 
         * @see https://typescript-eslint.io/rules/no-use-before-define
         */
        "@typescript-eslint/no-use-before-define": EslintRules[ "no-use-before-define" ],

        /**
         * Disallow unnecessary constructors
         * 
         * @see https://typescript-eslint.io/rules/no-useless-constructor
         */
        "@typescript-eslint/no-useless-constructor": EslintRules[ "no-useless-constructor" ],

    },

}

/**
 * ESLint ready config for `@futagoza/eslint-config-typescript/rules/extension.js`
 */
export default [ config ]
