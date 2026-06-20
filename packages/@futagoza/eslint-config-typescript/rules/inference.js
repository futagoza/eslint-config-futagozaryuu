// 
// WARNING: AUTO-GENERATED USING @typescript-eslint/eslint-plugin
//
// These rules require more information to perform type checking
// 

import { EslintRules } from "@futagoza/eslint-config-core"

/**
 * Raw config for `@futagoza/eslint-config-typescript/rules/inference.js`
 */
export const config = {

    name: "@futagoza/eslint-config-typescript/inference",

    rules: {

        /**
         * Disallow awaiting a value that is not a Thenable
         * 
         * @see https://typescript-eslint.io/rules/await-thenable
         */
        "@typescript-eslint/await-thenable": "error",

        /**
         * Require `return` statements to either always or never specify values
         * 
         * @see https://typescript-eslint.io/rules/consistent-return
         */
        "@typescript-eslint/consistent-return": EslintRules[ "consistent-return" ],

        /**
         * 🔧 Enforce consistent usage of type exports
         * 
         * @see https://typescript-eslint.io/rules/consistent-type-exports
         */
        "@typescript-eslint/consistent-type-exports": [
            "error",
            {
                "fixMixedExportsWithInlineTypeSpecifier": true,
            },
        ],

        /**
         * 🔧 Enforce dot notation whenever possible
         * 
         * @see https://typescript-eslint.io/rules/dot-notation
         */
        "@typescript-eslint/dot-notation": EslintRules[ "dot-notation" ],

        /**
         * Enforce naming conventions for everything across a codebase
         * 
         * @see https://typescript-eslint.io/rules/naming-convention
         */
        "@typescript-eslint/naming-convention": [
            "error",
            {
                "selector": "default",
                "format": null,
                "leadingUnderscore": "allow",
            },
            {
                "selector": "memberLike",
                "format": null,
                "modifiers": [
                    "private",
                ],
                "leadingUnderscore": "require",
            },
            {
                "selector": "typeLike",
                "format": [
                    "PascalCase",
                    "UPPER_CASE",
                ],
                "leadingUnderscore": "forbid",
            },
        ],

        /**
         * Disallow using the `delete` operator on array values
         * 
         * @see https://typescript-eslint.io/rules/no-array-delete
         */
        "@typescript-eslint/no-array-delete": "warn",

        /**
         * Require `.toString()` and `.toLocaleString()` to only be called on objects which provide useful information when stringified
         * 
         * @see https://typescript-eslint.io/rules/no-base-to-string
         */
        "@typescript-eslint/no-base-to-string": "off",

        /**
         * 🔧 Require expressions of type void to appear in statement position
         * 
         * @see https://typescript-eslint.io/rules/no-confusing-void-expression
         */
        "@typescript-eslint/no-confusing-void-expression": "off",

        /**
         * Disallow using code marked as `@deprecated`
         * 
         * @see https://typescript-eslint.io/rules/no-deprecated
         */
        "@typescript-eslint/no-deprecated": "warn",

        /**
         * 🔧 Disallow duplicate constituents of union or intersection types
         * 
         * @see https://typescript-eslint.io/rules/no-duplicate-type-constituents
         */
        "@typescript-eslint/no-duplicate-type-constituents": "warn",

        /**
         * Require Promise-like statements to be handled appropriately
         * 
         * @see https://typescript-eslint.io/rules/no-floating-promises
         */
        "@typescript-eslint/no-floating-promises": "error",

        /**
         * Disallow iterating over an array with a for-in loop
         * 
         * @see https://typescript-eslint.io/rules/no-for-in-array
         */
        "@typescript-eslint/no-for-in-array": "error",

        /**
         * Disallow the use of `eval()`-like functions
         * 
         * @see https://typescript-eslint.io/rules/no-implied-eval
         */
        "@typescript-eslint/no-implied-eval": EslintRules[ "no-implied-eval" ],

        /**
         * 🔧 Disallow the `void` operator except when used to discard a value
         * 
         * @see https://typescript-eslint.io/rules/no-meaningless-void-operator
         */
        "@typescript-eslint/no-meaningless-void-operator": "off",

        /**
         * Disallow Promises in places not designed to handle them
         * 
         * @see https://typescript-eslint.io/rules/no-misused-promises
         */
        "@typescript-eslint/no-misused-promises": "error",

        /**
         * Disallow using the spread operator when it might cause unexpected behavior
         * 
         * @see https://typescript-eslint.io/rules/no-misused-spread
         */
        "@typescript-eslint/no-misused-spread": "error",

        /**
         * Disallow enums from having both number and string members
         * 
         * @see https://typescript-eslint.io/rules/no-mixed-enums
         */
        "@typescript-eslint/no-mixed-enums": "error",

        /**
         * Disallow members of unions and intersections that do nothing or override type information
         * 
         * @see https://typescript-eslint.io/rules/no-redundant-type-constituents
         */
        "@typescript-eslint/no-redundant-type-constituents": "warn",

        /**
         * 🔧 Disallow unnecessary equality comparisons against boolean literals
         * 
         * @see https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare
         */
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",

        /**
         * Disallow conditionals where the type is always truthy or always falsy
         * 
         * @see https://typescript-eslint.io/rules/no-unnecessary-condition
         */
        "@typescript-eslint/no-unnecessary-condition": "off",

        /**
         * 🔧 Disallow unnecessary namespace qualifiers
         * 
         * @see https://typescript-eslint.io/rules/no-unnecessary-qualifier
         */
        "@typescript-eslint/no-unnecessary-qualifier": "warn",

        /**
         * 🔧 Disallow unnecessary template expressions
         * 
         * @see https://typescript-eslint.io/rules/no-unnecessary-template-expression
         */
        "@typescript-eslint/no-unnecessary-template-expression": "warn",

        /**
         * 🔧 Disallow type arguments that are equal to the default
         * 
         * @see https://typescript-eslint.io/rules/no-unnecessary-type-arguments
         */
        "@typescript-eslint/no-unnecessary-type-arguments": "off",

        /**
         * 🔧 Disallow type assertions that do not change the type of an expression
         * 
         * @see https://typescript-eslint.io/rules/no-unnecessary-type-assertion
         */
        "@typescript-eslint/no-unnecessary-type-assertion": "error",

        /**
         * Disallow conversion idioms when they do not change the type or value of the expression
         * 
         * @see https://typescript-eslint.io/rules/no-unnecessary-type-conversion
         */
        "@typescript-eslint/no-unnecessary-type-conversion": "warn",

        /**
         * Disallow type parameters that aren't used multiple times
         * 
         * @see https://typescript-eslint.io/rules/no-unnecessary-type-parameters
         */
        "@typescript-eslint/no-unnecessary-type-parameters": "off",

        /**
         * Disallow calling a function with a value with type `any`
         * 
         * @see https://typescript-eslint.io/rules/no-unsafe-argument
         */
        "@typescript-eslint/no-unsafe-argument": "warn",

        /**
         * Disallow assigning a value with type `any` to variables and properties
         * 
         * @see https://typescript-eslint.io/rules/no-unsafe-assignment
         */
        "@typescript-eslint/no-unsafe-assignment": "warn",

        /**
         * Disallow calling a value with type `any`
         * 
         * @see https://typescript-eslint.io/rules/no-unsafe-call
         */
        "@typescript-eslint/no-unsafe-call": "warn",

        /**
         * Disallow comparing an enum value with a non-enum value
         * 
         * @see https://typescript-eslint.io/rules/no-unsafe-enum-comparison
         */
        "@typescript-eslint/no-unsafe-enum-comparison": "error",

        /**
         * Disallow member access on a value with type `any`
         * 
         * @see https://typescript-eslint.io/rules/no-unsafe-member-access
         */
        "@typescript-eslint/no-unsafe-member-access": "warn",

        /**
         * Disallow returning a value with type `any` from a function
         * 
         * @see https://typescript-eslint.io/rules/no-unsafe-return
         */
        "@typescript-eslint/no-unsafe-return": "warn",

        /**
         * Disallow type assertions that narrow a type
         * 
         * @see https://typescript-eslint.io/rules/no-unsafe-type-assertion
         */
        "@typescript-eslint/no-unsafe-type-assertion": "off",

        /**
         * Require unary negation to take a number
         * 
         * @see https://typescript-eslint.io/rules/no-unsafe-unary-minus
         */
        "@typescript-eslint/no-unsafe-unary-minus": "warn",

        /**
         * 🔧 Disallow default values that will never be used
         * 
         * @see https://typescript-eslint.io/rules/no-useless-default-assignment
         */
        "@typescript-eslint/no-useless-default-assignment": "off",

        /**
         * 🔧 Enforce non-null assertions over explicit type assertions
         * 
         * @see https://typescript-eslint.io/rules/non-nullable-type-assertion-style
         */
        "@typescript-eslint/non-nullable-type-assertion-style": "off",

        /**
         * Disallow throwing non-`Error` values as exceptions
         * 
         * @see https://typescript-eslint.io/rules/only-throw-error
         */
        "@typescript-eslint/only-throw-error": "off",

        /**
         * 🔧 Require destructuring from arrays and/or objects
         * 
         * @see https://typescript-eslint.io/rules/prefer-destructuring
         */
        "@typescript-eslint/prefer-destructuring": EslintRules[ "prefer-destructuring" ],

        /**
         * Enforce the use of Array.prototype.find() over Array.prototype.filter() followed by [0] when looking for a single result
         * 
         * @see https://typescript-eslint.io/rules/prefer-find
         */
        "@typescript-eslint/prefer-find": "warn",

        /**
         * 🔧 Enforce `includes` method over `indexOf` method
         * 
         * @see https://typescript-eslint.io/rules/prefer-includes
         */
        "@typescript-eslint/prefer-includes": "error",

        /**
         * Enforce using the nullish coalescing operator instead of logical assignments or chaining
         * 
         * @see https://typescript-eslint.io/rules/prefer-nullish-coalescing
         */
        "@typescript-eslint/prefer-nullish-coalescing": "warn",

        /**
         * 🔧 Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects
         * 
         * @see https://typescript-eslint.io/rules/prefer-optional-chain
         */
        "@typescript-eslint/prefer-optional-chain": "warn",

        /**
         * Require using Error objects as Promise rejection reasons
         * 
         * @see https://typescript-eslint.io/rules/prefer-promise-reject-errors
         */
        "@typescript-eslint/prefer-promise-reject-errors": EslintRules[ "prefer-promise-reject-errors" ],

        /**
         * 🔧 Require private members to be marked as `readonly` if they're never modified outside of the constructor
         * 
         * @see https://typescript-eslint.io/rules/prefer-readonly
         */
        "@typescript-eslint/prefer-readonly": "error",

        /**
         * Require function parameters to be typed as `readonly` to prevent accidental mutation of inputs
         * 
         * @see https://typescript-eslint.io/rules/prefer-readonly-parameter-types
         */
        "@typescript-eslint/prefer-readonly-parameter-types": "off",

        /**
         * 🔧 Enforce using type parameter when calling `Array#reduce` instead of using a type assertion
         * 
         * @see https://typescript-eslint.io/rules/prefer-reduce-type-parameter
         */
        "@typescript-eslint/prefer-reduce-type-parameter": "off",

        /**
         * 🔧 Enforce `RegExp#exec` over `String#match` if no global flag is provided
         * 
         * @see https://typescript-eslint.io/rules/prefer-regexp-exec
         */
        "@typescript-eslint/prefer-regexp-exec": "off",

        /**
         * 🔧 Enforce that `this` is used when only `this` type is returned
         * 
         * @see https://typescript-eslint.io/rules/prefer-return-this-type
         */
        "@typescript-eslint/prefer-return-this-type": "warn",

        /**
         * 🔧 Enforce using `String#startsWith` and `String#endsWith` over other equivalent methods of checking substrings
         * 
         * @see https://typescript-eslint.io/rules/prefer-string-starts-ends-with
         */
        "@typescript-eslint/prefer-string-starts-ends-with": "error",

        /**
         * 🔧 Require any function or method that returns a Promise to be marked async
         * 
         * @see https://typescript-eslint.io/rules/promise-function-async
         */
        "@typescript-eslint/promise-function-async": "off",

        /**
         * Enforce that `get()` types should be assignable to their equivalent `set()` type
         * 
         * @see https://typescript-eslint.io/rules/related-getter-setter-pairs
         */
        "@typescript-eslint/related-getter-setter-pairs": "error",

        /**
         * Require `Array#sort` and `Array#toSorted` calls to always provide a `compareFunction`
         * 
         * @see https://typescript-eslint.io/rules/require-array-sort-compare
         */
        "@typescript-eslint/require-array-sort-compare": [
            "warn",
            {
                "ignoreStringArrays": true,
            },
        ],

        /**
         * Disallow async functions which do not return promises and have no `await` expression
         * 
         * @see https://typescript-eslint.io/rules/require-await
         */
        "@typescript-eslint/require-await": EslintRules[ "require-await" ],

        /**
         * Require both operands of addition to be the same type and be `bigint`, `number`, or `string`
         * 
         * @see https://typescript-eslint.io/rules/restrict-plus-operands
         */
        "@typescript-eslint/restrict-plus-operands": "off",

        /**
         * Enforce template literal expressions to be of `string` type
         * 
         * @see https://typescript-eslint.io/rules/restrict-template-expressions
         */
        "@typescript-eslint/restrict-template-expressions": [
            "warn",
            {
                "allowNumber": true,
                "allowBoolean": true,
                "allowAny": false,
                "allowNullish": false,
            },
        ],

        /**
         * 🔧 Enforce consistent awaiting of returned promises
         * 
         * @see https://typescript-eslint.io/rules/return-await
         */
        "@typescript-eslint/return-await": [
            "warn",
            "always",
        ],

        /**
         * Disallow certain types in boolean expressions
         * 
         * @see https://typescript-eslint.io/rules/strict-boolean-expressions
         */
        "@typescript-eslint/strict-boolean-expressions": "off",

        /**
         * Disallow passing a value-returning function in a position accepting a void function
         * 
         * @see https://typescript-eslint.io/rules/strict-void-return
         */
        "@typescript-eslint/strict-void-return": "warn",

        /**
         * Require switch-case statements to be exhaustive
         * 
         * @see https://typescript-eslint.io/rules/switch-exhaustiveness-check
         */
        "@typescript-eslint/switch-exhaustiveness-check": "off",

        /**
         * Enforce unbound methods are called with their expected scope
         * 
         * @see https://typescript-eslint.io/rules/unbound-method
         */
        "@typescript-eslint/unbound-method": "off",

        /**
         * Enforce typing arguments in Promise rejection callbacks as `unknown`
         * 
         * @see https://typescript-eslint.io/rules/use-unknown-in-catch-callback-variable
         */
        "@typescript-eslint/use-unknown-in-catch-callback-variable": "warn",

    },

}

/**
 * ESLint ready config for `@futagoza/eslint-config-typescript/rules/inference.js`
 */
export default [ config ]
