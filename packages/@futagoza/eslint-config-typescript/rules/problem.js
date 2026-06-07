// 
// WARNING: AUTO-GENERATED USING @typescript-eslint/eslint-plugin
//
// These rules relate to possible logic errors in code
// 

/**
 * Raw config for `@futagoza/eslint-config-typescript/rules/problem.js`
 */
export const config = {

    name: "@futagoza/eslint-config-typescript/problem",

    rules: {

        /**
         * Disallow `@ts-<directive>` comments or require descriptions after directives
         * 
         * @see https://typescript-eslint.io/rules/ban-ts-comment
         */
        "@typescript-eslint/ban-ts-comment": [
            "warn",
            {
                "ts-expect-error": "allow-with-description",
                "ts-ignore": "allow-with-description",
                "ts-nocheck": "allow-with-description",
                "ts-check": false,
                "minimumDescriptionLength": 1,
            },
        ],

        /**
         * Enforce that literals on classes are exposed in a consistent style
         * 
         * @see https://typescript-eslint.io/rules/class-literal-property-style
         */
        "@typescript-eslint/class-literal-property-style": "off",

        /**
         * Require explicit return types on functions and class methods
         * 
         * @see https://typescript-eslint.io/rules/explicit-function-return-type
         */
        "@typescript-eslint/explicit-function-return-type": "off",

        /**
         * 🔧 Require explicit accessibility modifiers on class properties and methods
         * 
         * @see https://typescript-eslint.io/rules/explicit-member-accessibility
         */
        "@typescript-eslint/explicit-member-accessibility": "off",

        /**
         * Require explicit return and argument types on exported functions' and classes' public class methods
         * 
         * @see https://typescript-eslint.io/rules/explicit-module-boundary-types
         */
        "@typescript-eslint/explicit-module-boundary-types": "off",

        /**
         * Disallow non-null assertion in locations that may be confusing
         * 
         * @see https://typescript-eslint.io/rules/no-confusing-non-null-assertion
         */
        "@typescript-eslint/no-confusing-non-null-assertion": "error",

        /**
         * Disallow duplicate enum member values
         * 
         * @see https://typescript-eslint.io/rules/no-duplicate-enum-values
         */
        "@typescript-eslint/no-duplicate-enum-values": "error",

        /**
         * 🔧 Disallow extra non-null assertions
         * 
         * @see https://typescript-eslint.io/rules/no-extra-non-null-assertion
         */
        "@typescript-eslint/no-extra-non-null-assertion": "warn",

        /**
         * 🔧 Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers
         * 
         * @see https://typescript-eslint.io/rules/no-import-type-side-effects
         */
        "@typescript-eslint/no-import-type-side-effects": "error",

        /**
         * Disallow `void` type outside of generic or return types
         * 
         * @see https://typescript-eslint.io/rules/no-invalid-void-type
         */
        "@typescript-eslint/no-invalid-void-type": [
            "error",
            {
                "allowAsThisParameter": true,
                "allowInGenericTypeArguments": true,
            },
        ],

        /**
         * Enforce valid definition of `new` and `constructor`
         * 
         * @see https://typescript-eslint.io/rules/no-misused-new
         */
        "@typescript-eslint/no-misused-new": "warn",

        /**
         * Disallow non-null assertions in the left operand of a nullish coalescing operator
         * 
         * @see https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing
         */
        "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "warn",

        /**
         * Disallow non-null assertions after an optional chain expression
         * 
         * @see https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain
         */
        "@typescript-eslint/no-non-null-asserted-optional-chain": "error",

        /**
         * Disallow non-null assertions using the `!` postfix operator
         * 
         * @see https://typescript-eslint.io/rules/no-non-null-assertion
         */
        "@typescript-eslint/no-non-null-assertion": "error",

        /**
         * Disallow invocation of `require()`
         * 
         * @see https://typescript-eslint.io/rules/no-require-imports
         */
        "@typescript-eslint/no-require-imports": "off",

        /**
         * Disallow unsafe declaration merging
         * 
         * @see https://typescript-eslint.io/rules/no-unsafe-declaration-merging
         */
        "@typescript-eslint/no-unsafe-declaration-merging": "error",

        /**
         * Disallow using the unsafe built-in Function type
         * 
         * @see https://typescript-eslint.io/rules/no-unsafe-function-type
         */
        "@typescript-eslint/no-unsafe-function-type": "error",

        /**
         * 🔧 Disallow using confusing built-in primitive class wrappers
         * 
         * @see https://typescript-eslint.io/rules/no-wrapper-object-types
         */
        "@typescript-eslint/no-wrapper-object-types": "error",

        /**
         * Require or disallow parameter properties in class constructors
         * 
         * @see https://typescript-eslint.io/rules/parameter-properties
         */
        "@typescript-eslint/parameter-properties": "off",

    },

}

/**
 * ESLint ready config for `@futagoza/eslint-config-typescript/rules/problem.js`
 */
export default [ config ]
