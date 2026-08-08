// 
// WARNING: AUTO-GENERATED USING @typescript-eslint/eslint-plugin
//
// These rules have been deprecated
// 

import { EslintRules } from "@futagoza/eslint-config-core"

/**
 * Raw config for `@futagoza/eslint-config-typescript/rules/deprecated.js`
 */
export const config = {

    name: "@futagoza/eslint-config-typescript/deprecated",

    rules: {

        /**
         * 🔧 Disallow the declaration of empty interfaces
         * 
         * @see https://typescript-eslint.io/rules/no-empty-interface
         */
        "@typescript-eslint/no-empty-interface": "off",

        /**
         * Disallow function declarations that contain unsafe references inside loop statements
         * 
         * @see https://typescript-eslint.io/rules/no-loop-func
         */
        "@typescript-eslint/no-loop-func": EslintRules[ "no-loop-func" ],

        /**
         * Disallow literal numbers that lose precision
         * 
         * @see https://typescript-eslint.io/rules/no-loss-of-precision
         */
        "@typescript-eslint/no-loss-of-precision": "off",

        /**
         * Disallow specified modules when loaded by `import`
         * 
         * @see https://typescript-eslint.io/rules/no-restricted-imports
         */
        "@typescript-eslint/no-restricted-imports": EslintRules[ "no-restricted-imports" ],

        /**
         * Disallow type aliases
         * 
         * @see https://typescript-eslint.io/rules/no-type-alias
         */
        "@typescript-eslint/no-type-alias": "off",

        /**
         * Disallow `require` statements except in import statements
         * 
         * @see https://typescript-eslint.io/rules/no-var-requires
         */
        "@typescript-eslint/no-var-requires": "off",

        /**
         * 🔧 Enforce using `@ts-expect-error` over `@ts-ignore`
         * 
         * @see https://typescript-eslint.io/rules/prefer-ts-expect-error
         */
        "@typescript-eslint/prefer-ts-expect-error": "off",

        /**
         * 🔧 Enforce constituents of a type union/intersection to be sorted alphabetically
         * 
         * @see https://typescript-eslint.io/rules/sort-type-constituents
         */
        "@typescript-eslint/sort-type-constituents": "off",

        /**
         * Require type annotations in certain places
         * 
         * @see https://typescript-eslint.io/rules/typedef
         */
        "@typescript-eslint/typedef": "off",

    },

}

/**
 * ESLint ready config for `@futagoza/eslint-config-typescript/rules/deprecated.js`
 */
export default [ config ]
