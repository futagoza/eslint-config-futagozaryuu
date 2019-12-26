"use strict";

const fs = require( "fs" );
const os = require( "os" );
const path = require( "path" );
const sanitize = require( "sanitize-filename" );

const config = {
    ...require( "@futagoza/eslint-config-core/best-practices" ).rules,
    ...require( "@futagoza/eslint-config-core/possible-errors" ).rules,
    ...require( "@futagoza/eslint-config-core/stylistic-issues" ).rules,
    ...require( "@futagoza/eslint-config-core/variables" ).rules,
    ...require( "@futagoza/eslint-config-javascript/es2015" ).rules,
};

module.exports = {

    "overrides": [ {

        "files": [ "*.ts", "*.tsx" ],

        "extends": [
            "plugin:@typescript-eslint/base",
            "./eslint-overrides.js",
        ],

        "parserOptions": {

            "project": ( () => {

                const cwd = process.cwd();
                const options = { paths: [ cwd ] };
                const resolve = require.resolve;

                try {

                    return resolve( "./tsconfig.eslint.json", options );

                } catch ( _fallback_1 ) {

                    try {

                        return resolve( "./tsconfig.json", options );

                    } catch ( _fallback_2 ) {

                        const tmpdir = fs.realpathSync( os.tmpdir() );
                        const id = sanitize( cwd, { replacement: "-" } );

                        const tempfile = path.join( tmpdir, `tsconfig.${ id }.json` );

                        if ( ! fs.existsSync( tempfile ) ) {

                            const config = fs
                                .readFileSync( resolve( "./tsconfig.default.json" ), "utf8" )
                                .replace( /__CWD__/g, cwd.replace( /\\/g, "/" ) );

                            fs.writeFileSync( tempfile, config );

                        }

                        return tempfile;

                    }

                }

            } )(),

        },

        "rules": {

            /**
             * Require that member overloads be consecutive
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md
             */
            "@typescript-eslint/adjacent-overload-signatures": "warn",

            /**
             * 🔧 Requires using either `T[]` or `Array<T>` for arrays
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md
             */
            "@typescript-eslint/array-type": [ "error", { "default": "array-simple" } ],

            /**
             * Disallows awaiting a value that is not a Thenable
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/await-thenable.md
             */
            "@typescript-eslint/await-thenable": "error",

            /**
             * Bans “// @ts-ignore” comments from being used
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/await-thenable.md
             */
            "@typescript-eslint/ban-ts-ignore": "warn",

            /**
             * 🔧 Enforces that types will not to be used
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/await-thenable.md
             */
            "@typescript-eslint/ban-types": [ "error", {

                "types": {

                    "Function": {
                        "message": "Use something like `() => unknown` instead",
                        "fixWith": "( ...args: any[] ) => unknown",
                    },

                    "Object": {
                        "message": "Use `object` instead",
                        "fixWith": "object",
                    },

                    "Number": {
                        "message": "Use `number` instead",
                        "fixWith": "number",
                    },

                    "String": {
                        "message": "Use `string` instead",
                        "fixWith": "string",
                    },

                },

            } ],

            /**
             * 🔧 Enforce consistent brace style for blocks
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md
             */
            "@typescript-eslint/brace-style": config[ "brace-style" ],

            /**
             * Enforce camelCase naming convention
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/camelcase.md
             */
            "@typescript-eslint/camelcase": config[ "camelcase" ],

            /**
             * Require PascalCased class and interface names
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/class-name-casing.md
             */
            "@typescript-eslint/class-name-casing": [ "error", { "allowUnderscorePrefix": true } ],

            /**
             * Enforces consistent usage of type assertions.
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
             */
            "@typescript-eslint/consistent-type-assertions": "off",

            /**
             * 🔧 Consistent with type definition either `interface` or `type`
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
             */
            "@typescript-eslint/consistent-type-definitions": "off",

            /**
             * Require explicit return types on functions and class methods
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
             */
            "@typescript-eslint/explicit-function-return-type": "off",

            /**
             * Require explicit accessibility modifiers on class properties and methods
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
             */
            "@typescript-eslint/explicit-member-accessibility": "off",

            /**
             * 🔧 Require or disallow spacing between function identifiers and their invocations
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
             */
            "@typescript-eslint/func-call-spacing": config[ "func-call-spacing" ],

            /**
             * Enforces naming of generic type variables
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/generic-type-naming.md
             */
            "@typescript-eslint/generic-type-naming": "off",

            /**
             * 🔧 Enforce consistent indentation
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
             */
            "@typescript-eslint/indent": config[ "indent" ],

            /**
             * Require that interface names be prefixed with `I`
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/interface-name-prefix.md
             */
            "@typescript-eslint/interface-name-prefix": "off",

            /**
             * 🔧 Require a specific member delimiter style for interfaces and type literals
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
             */
            "@typescript-eslint/member-delimiter-style": [ "error", {

                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true,
                },

                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false,
                },

            } ],

            /**
             * Enforces naming conventions for class members by visibility
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-naming.md
             */
            "@typescript-eslint/member-naming": [ "error", {

                "private": "^_",

            } ],

            /**
             * Require a consistent member declaration order
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md
             */
            "@typescript-eslint/member-ordering": "off",

            /**
             * 🔧 Disallow generic Array constructors
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
             */
            "@typescript-eslint/no-array-constructor": config[ "no-array-constructor" ],

            /**
             * 🔧 Bans usage of the delete operator with computed key expressions
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dynamic-delete.md
             */
            "@typescript-eslint/no-dynamic-delete": "off",

            /**
             * Disallow empty functions
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
             */
            "@typescript-eslint/no-empty-function": config[ "no-empty-function" ],

            /**
             * 🔧 Disallow the declaration of empty interfaces
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
             */
            "@typescript-eslint/no-empty-interface": [ "warn", { "allowSingleExtends": true } ],

            /**
             * 🔧 Disallow usage of the `any` type
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
             */
            "@typescript-eslint/no-explicit-any": [ "warn", {

                "fixToUnknown": true,
                "ignoreRestArgs": true,

            } ],

            /**
             * Disallow extra non-null assertion
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md
             */
            "@typescript-eslint/no-extra-non-null-assertion": "warn",

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
             * Forbids the use of classes as namespaces
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extraneous-class.md
             */
            "@typescript-eslint/no-extraneous-class": [ "error", {

                "allowConstructorOnly": true,
                "allowEmpty": true,
                "allowStaticOnly": true,
                "allowWithDecorator": true,

            } ],

            /**
             * Requires Promise-like values to be handled appropriately.
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md
             */
            "@typescript-eslint/no-floating-promises": "error",

            /**
             * Disallow iterating over an array with a for-in loop
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-for-in-array.md
             */
            "@typescript-eslint/no-for-in-array": "error",

            /**
             * 🔧 Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md
             */
            "@typescript-eslint/no-inferrable-types": "off",

            /**
             * Disallows magic numbers
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
             */
            "@typescript-eslint/no-magic-numbers": config[ "no-magic-numbers" ],

            /**
             * Enforce valid definition of `new` and `constructor`
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-new.md
             */
            "@typescript-eslint/no-misused-new": "warn",

            /**
             * Avoid using promises in places not designed to handle them
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-promises.md
             */
            "@typescript-eslint/no-misused-promises": "error",

            /**
             * Disallow the use of custom TypeScript modules and namespaces
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-namespace.md
             */
            "@typescript-eslint/no-namespace": [ "error", {

                "allowDeclarations": false,
                "allowDefinitionFiles": false,

            } ],

            /**
             * Disallows non-null assertions using the `!` postfix operator
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
             */
            "@typescript-eslint/no-non-null-assertion": "error",

            /**
             * Disallow the use of parameter properties in class constructors
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-parameter-properties.md
             */
            "@typescript-eslint/no-parameter-properties": "off",

            /**
             * Disallows invocation of `require()`
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-require-imports.md
             */
            "@typescript-eslint/no-require-imports": "off",

            /**
             * Disallow aliasing `this`
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md
             */
            "@typescript-eslint/no-this-alias": [ "error", {

                "allowDestructuring": true,
                "allowedNames": [ "o", "self" ],

            } ],

            /**
             * Disallow the use of type aliases
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-type-alias.md
             */
            "@typescript-eslint/no-type-alias": "off",

            /**
             * 🔧 Prevents conditionals where the type is always truthy or always falsy
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md
             */
            "@typescript-eslint/no-unnecessary-condition": "off",

            /**
             * 🔧 Warns when a namespace qualifier is unnecessary
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md
             */
            "@typescript-eslint/no-unnecessary-qualifier": "warn",

            /**
             * 🔧 Warns if an explicitly specified type argument is the default for that type parameter
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md
             */
            "@typescript-eslint/no-unnecessary-type-arguments": "off",

            /**
             * 🔧 Warns if a type assertion does not change the type of an expression
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md
             */
            "@typescript-eslint/no-unnecessary-type-assertion": "error",

            /**
             * Requires that all public method arguments and return type will be explicitly typed
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-untyped-public-signature.md
             */
            "@typescript-eslint/no-untyped-public-signature": "off",

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
             * Disallow unused variables and arguments
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars-experimental.md
             */
            "@typescript-eslint/no-unused-vars-experimental": "off",

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
             * Disallows the use of require statements except in import statements
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md
             */
            "@typescript-eslint/no-var-requires": "off",

            /**
             * Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-for-of.md
             */
            "@typescript-eslint/prefer-for-of": "error",

            /**
             * 🔧 Use function types instead of interfaces with call signatures
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-function-type.md
             */
            "@typescript-eslint/prefer-function-type": "error",

            /**
             * 🔧 Enforce `includes` method over `indexOf` method
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-includes.md
             */
            "@typescript-eslint/prefer-includes": "error",

            /**
             * 🔧 Require the use of the `namespace` keyword instead of the `module` keyword to declare custom TypeScript modules
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md
             */
            "@typescript-eslint/prefer-namespace-keyword": "warn",

            /**
             * 🔧 Enforce the usage of the nullish coalescing operator instead of logical chaining
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md
             */
            "@typescript-eslint/prefer-nullish-coalescing": [ "warn", {

                "ignoreConditionalTests": true,
                "ignoreMixedLogicalExpressions": false,
                "forceSuggestionFixer": false,

            } ],

            /**
             * 🔧 Prefer using concise optional chain expressions instead of chained logical ands
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-optional-chain.md
             */
            "@typescript-eslint/prefer-optional-chain": "warn",

            /**
             * 🔧 Requires that private members are marked as `readonly` if they're never modified outside of the constructor
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly.md
             */
            "@typescript-eslint/prefer-readonly": "error",

            /**
             * Prefer RegExp#exec() over String#match() if no global flag is provided
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md
             */
            "@typescript-eslint/prefer-regexp-exec": "off",

            /**
             * 🔧 Enforce the use of `String#startsWith` and `String#endsWith` instead of other equivalent methods of checking substrings
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md
             */
            "@typescript-eslint/prefer-string-starts-ends-with": "error",

            /**
             * Requires any function or method that returns a Promise to be marked async
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/promise-function-async.md
             */
            "@typescript-eslint/promise-function-async": "off",

            /**
             * 🔧 Enforce the consistent use of either backticks, double, or single quotes
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
             */
            "@typescript-eslint/quotes": config[ "quotes" ],

            /**
             * Enforce giving `compare` argument to `Array#sort`
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-array-sort-compare.md
             */
            "@typescript-eslint/require-array-sort-compare": "warn",

            /**
             * Disallow async functions which have no `await` expression
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md
             */
            "@typescript-eslint/require-await": config[ "require-await" ],

            /**
             * When adding two variables, operands must both be of type number or of type string
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md
             */
            "@typescript-eslint/restrict-plus-operands": "off",

            /**
             * Enforce template literal expressions to be of string type
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md
             */
            "@typescript-eslint/restrict-template-expressions": [ "warn", {

                "allowNumber": true,
                "allowBoolean": true,
                "allowNullable": false,

            } ],

            /**
             * Rules for awaiting returned promises
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md
             */
            "@typescript-eslint/return-await": "off",

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

            /**
             * Restricts the types allowed in boolean expressions
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
             */
            "@typescript-eslint/strict-boolean-expressions": "off",

            /**
             * Sets preference level for triple slash directives versus ES6-style import declarations
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/triple-slash-reference.md
             */
            "@typescript-eslint/triple-slash-reference": "off",

            /**
             * 🔧 Require consistent spacing around type annotations
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
             */
            "@typescript-eslint/type-annotation-spacing": "error",

            /**
             * Requires type annotations to exist
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md
             */
            "@typescript-eslint/typedef": "off",

            /**
             * Enforces unbound methods are called with their expected scope
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unbound-method.md
             */
            "@typescript-eslint/unbound-method": "off",

            /**
             * Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unified-signatures.md
             */
            "@typescript-eslint/unified-signatures": "off",

        },

    } ],

};
