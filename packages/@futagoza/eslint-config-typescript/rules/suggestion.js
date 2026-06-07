// 
// WARNING: AUTO-GENERATED USING @typescript-eslint/eslint-plugin
//
// These rules suggest alternate ways of doing things
// 

/**
 * Raw config for `@futagoza/eslint-config-typescript/rules/suggestion.js`
 */
export const config = {

    name: "@futagoza/eslint-config-typescript/suggestion",

    rules: {

        /**
         * Require that function overload signatures be consecutive
         * 
         * @see https://typescript-eslint.io/rules/adjacent-overload-signatures
         */
        "@typescript-eslint/adjacent-overload-signatures": "warn",

        /**
         * 🔧 Require consistently using either `T[]` or `Array<T>` for arrays
         * 
         * @see https://typescript-eslint.io/rules/array-type
         */
        "@typescript-eslint/array-type": [
            "error",
            {
                "default": "array-simple",
            },
        ],

        /**
         * 🔧 Disallow `// tslint:<rule-flag>` comments
         * 
         * @see https://typescript-eslint.io/rules/ban-tslint-comment
         */
        "@typescript-eslint/ban-tslint-comment": "error",

        /**
         * 🔧 Enforce specifying generic type arguments on type annotation or constructor name of a constructor call
         * 
         * @see https://typescript-eslint.io/rules/consistent-generic-constructors
         */
        "@typescript-eslint/consistent-generic-constructors": "off",

        /**
         * 🔧 Require or disallow the `Record` type
         * 
         * @see https://typescript-eslint.io/rules/consistent-indexed-object-style
         */
        "@typescript-eslint/consistent-indexed-object-style": "off",

        /**
         * 🔧 Enforce consistent usage of type assertions
         * 
         * @see https://typescript-eslint.io/rules/consistent-type-assertions
         */
        "@typescript-eslint/consistent-type-assertions": "off",

        /**
         * 🔧 Enforce type definitions to consistently use either `interface` or `type`
         * 
         * @see https://typescript-eslint.io/rules/consistent-type-definitions
         */
        "@typescript-eslint/consistent-type-definitions": "off",

        /**
         * 🔧 Enforce consistent usage of type imports
         * 
         * @see https://typescript-eslint.io/rules/consistent-type-imports
         */
        "@typescript-eslint/consistent-type-imports": "off",

        /**
         * Require a consistent member declaration order
         * 
         * @see https://typescript-eslint.io/rules/member-ordering
         */
        "@typescript-eslint/member-ordering": "off",

        /**
         * 🔧 Enforce using a particular method signature syntax
         * 
         * @see https://typescript-eslint.io/rules/method-signature-style
         */
        "@typescript-eslint/method-signature-style": "off",

        /**
         * Disallow using the `delete` operator on computed key expressions
         * 
         * @see https://typescript-eslint.io/rules/no-dynamic-delete
         */
        "@typescript-eslint/no-dynamic-delete": "off",

        /**
         * Disallow accidentally using the "empty object" type
         * 
         * @see https://typescript-eslint.io/rules/no-empty-object-type
         */
        "@typescript-eslint/no-empty-object-type": "warn",

        /**
         * 🔧 Disallow the `any` type
         * 
         * @see https://typescript-eslint.io/rules/no-explicit-any
         */
        "@typescript-eslint/no-explicit-any": [
            "warn",
            {
                "fixToUnknown": true,
                "ignoreRestArgs": true,
            },
        ],

        /**
         * Disallow classes used as namespaces
         * 
         * @see https://typescript-eslint.io/rules/no-extraneous-class
         */
        "@typescript-eslint/no-extraneous-class": [
            "error",
            {
                "allowConstructorOnly": true,
                "allowEmpty": true,
                "allowStaticOnly": true,
                "allowWithDecorator": true,
            },
        ],

        /**
         * 🔧 Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean
         * 
         * @see https://typescript-eslint.io/rules/no-inferrable-types
         */
        "@typescript-eslint/no-inferrable-types": "off",

        /**
         * Disallow TypeScript namespaces
         * 
         * @see https://typescript-eslint.io/rules/no-namespace
         */
        "@typescript-eslint/no-namespace": [
            "error",
            {
                "allowDeclarations": false,
                "allowDefinitionFiles": false,
            },
        ],

        /**
         * 🔧 Disallow certain types
         * 
         * @see https://typescript-eslint.io/rules/no-restricted-types
         */
        "@typescript-eslint/no-restricted-types": "off",

        /**
         * Disallow aliasing `this`
         * 
         * @see https://typescript-eslint.io/rules/no-this-alias
         */
        "@typescript-eslint/no-this-alias": [
            "error",
            {
                "allowDestructuring": true,
                "allowedNames": [
                    "o",
                    "self",
                ],
            },
        ],

        /**
         * Disallow unnecessary assignment of constructor property parameter
         * 
         * @see https://typescript-eslint.io/rules/no-unnecessary-parameter-property-assignment
         */
        "@typescript-eslint/no-unnecessary-parameter-property-assignment": "error",

        /**
         * Disallow unnecessary constraints on generic types
         * 
         * @see https://typescript-eslint.io/rules/no-unnecessary-type-constraint
         */
        "@typescript-eslint/no-unnecessary-type-constraint": "warn",

        /**
         * 🔧 Disallow empty exports that don't change anything in a module file
         * 
         * @see https://typescript-eslint.io/rules/no-useless-empty-export
         */
        "@typescript-eslint/no-useless-empty-export": "error",

        /**
         * 🔧 Enforce the use of `as const` over literal type
         * 
         * @see https://typescript-eslint.io/rules/prefer-as-const
         */
        "@typescript-eslint/prefer-as-const": "error",

        /**
         * Require each enum member value to be explicitly initialized
         * 
         * @see https://typescript-eslint.io/rules/prefer-enum-initializers
         */
        "@typescript-eslint/prefer-enum-initializers": "off",

        /**
         * Enforce the use of `for-of` loop over the standard `for` loop where possible
         * 
         * @see https://typescript-eslint.io/rules/prefer-for-of
         */
        "@typescript-eslint/prefer-for-of": "error",

        /**
         * 🔧 Enforce using function types instead of interfaces with call signatures
         * 
         * @see https://typescript-eslint.io/rules/prefer-function-type
         */
        "@typescript-eslint/prefer-function-type": "error",

        /**
         * Require all enum members to be literal values
         * 
         * @see https://typescript-eslint.io/rules/prefer-literal-enum-member
         */
        "@typescript-eslint/prefer-literal-enum-member": "warn",

        /**
         * 🔧 Require using `namespace` keyword over `module` keyword to declare custom TypeScript modules
         * 
         * @see https://typescript-eslint.io/rules/prefer-namespace-keyword
         */
        "@typescript-eslint/prefer-namespace-keyword": "warn",

        /**
         * Disallow certain triple slash directives in favor of ES6-style import declarations
         * 
         * @see https://typescript-eslint.io/rules/triple-slash-reference
         */
        "@typescript-eslint/triple-slash-reference": "off",

        /**
         * Disallow two overloads that could be unified into one with a union or an optional/rest parameter
         * 
         * @see https://typescript-eslint.io/rules/unified-signatures
         */
        "@typescript-eslint/unified-signatures": "off",

    },

}

/**
 * ESLint ready config for `@futagoza/eslint-config-typescript/rules/suggestion.js`
 */
export default [ config ]
