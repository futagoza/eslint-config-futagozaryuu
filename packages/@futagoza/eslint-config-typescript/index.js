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

                        // See the `tsconfig.json` section in `README.md` for what is happening here

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
             * Bans `// @ts-<directive>` comments from being used
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md
             */
            "@typescript-eslint/ban-ts-comment": [ "warn", {

                "ts-expect-error": "allow-with-description",
                "ts-ignore": "allow-with-description",
                "ts-nocheck": "allow-with-description",
                "ts-check": false,
                "minimumDescriptionLength": 1,

            } ],

            /**
             * 🔧 Enforces that types will not to be used
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md
             */
            "@typescript-eslint/ban-types": [ "error", {

                "types": {

                    "Boolean": {
                        "message": "Use `boolean` instead",
                        "fixWith": "boolean",
                    },

                    "Function": {
                        "message": [
                            "The `Function` type accepts any function-like value.",
                            "It provides no type safety when calling the function, which can be a common source of bugs.",
                            "It also accepts things like class declarations, which will throw at runtime as they will not be called with `new`.",
                            "If you are expecting the function to accept certain arguments, you should explicitly define the function shape.",
                        ].join( "\n" ),
                        "fixWith": "( ...args: any[] ) => unknown",
                    },

                    "Number": {
                        "message": "Use `number` instead",
                        "fixWith": "number",
                    },

                    "Object": {
                        "message": [
                            "The `Object` type actually means \"any non-nullish value\", so it is marginally better than `unknown`.",
                            "- If you want a type meaning \"any object\", you probably want `Record<string, unknown>` instead.",
                            "- If you want a type meaning \"any value\", you probably want `unknown` instead.",
                        ].join( "\n" ),
                    },
                    "{}": {
                        "message": [
                            "`{}` actually means \"any non-nullish value\".",
                            "- If you want a type meaning \"any object\", you probably want `Record<string, unknown>` instead.",
                            "- If you want a type meaning \"any value\", you probably want `unknown` instead.",
                        ].join( "\n" ),
                    },
                    "object": {
                        "message": [
                            "The `object` type is currently hard to use ([see this issue](https://github.com/microsoft/TypeScript/issues/21732)).",
                            "Consider using `Record<string, unknown>` instead, as it allows you to more easily inspect and use the keys.",
                        ].join( "\n" ),
                        "fixWith": "Record<string, unknown>",
                    },

                    "String": {
                        "message": "Use `string` instead",
                        "fixWith": "string",
                    },

                    "Symbol": {
                        "message": "Use `symbol` instead",
                        "fixWith": "symbol",
                    },

                },

            } ],

            /**
             * 🔧 Ensures that literals on classes are exposed in a consistent style
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/class-literal-property-style.md
             */
            "@typescript-eslint/class-literal-property-style": "off",

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
             * Enforce default parameters to be last
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/default-param-last.md
             */
            "@typescript-eslint/default-param-last": config[ "default-param-last" ],

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
             * Require explicit return and argument types on exported functions' and classes' public class methods
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
             */
            "@typescript-eslint/explicit-module-boundary-types": "off",

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
             * Require a consistent member declaration order
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md
             */
            "@typescript-eslint/member-ordering": "off",

            /**
             * 🔧 Enforces using a particular method signature syntax.
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/method-signature-style.md
             */
            "@typescript-eslint/method-signature-style": "off",

            /**
             * Enforces naming conventions for everything across a codebase
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
             */
            "@typescript-eslint/naming-convention": [ "error",

                {
                    "selector": "default",
                    "format": null,
                    "leadingUnderscore": "allow",
                },

                {
                    "selector": "memberLike",
                    "format": null,
                    "modifiers": [ "private" ],
                    "leadingUnderscore": "require",
                },

                {
                    "selector": "typeLike",
                    "format": [ "StrictPascalCase", "UPPER_CASE" ],
                    "leadingUnderscore": "forbid",
                },

            ],

            /**
             * Requires that `.toString()` is only called on objects which provide useful information when stringified
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-base-to-string.md
             */
            "@typescript-eslint/no-base-to-string": "off",

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
             * 🔧 Disallow extra non-null assertion
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
             * Disallow the use of `eval()`-like methods.
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md
             */
            "@typescript-eslint/no-implied-eval": "off",

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
             * Disallows using a non-null assertion after an optional chain expression
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md
             */
            "@typescript-eslint/no-non-null-asserted-optional-chain": "error",

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
             * Disallow throwing literals as exceptions
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md
             */
            "@typescript-eslint/no-throw-literal": config[ "no-throw-literal" ],

            /**
             * Disallow the use of type aliases
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-type-alias.md
             */
            "@typescript-eslint/no-type-alias": "off",

            /**
             * 🔧 Flags unnecessary equality comparisons against boolean literals
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md
             */
            "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",

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
             * Disallows assigning `any` to variables and properties
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md
             */
            "@typescript-eslint/no-unsafe-assignment": "warn",

            /**
             * Disallows calling an `any` type value
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-call.md
             */
            "@typescript-eslint/no-unsafe-call": "warn",

            /**
             * Disallows member access on `any` typed variables
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md
             */
            "@typescript-eslint/no-unsafe-member-access": "warn",

            /**
             * Disallows returning `any` from a function
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-return.md
             */
            "@typescript-eslint/no-unsafe-return": "warn",

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
             * 🔧 Prefer usage of `as const` over literal type
             *
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-as-const.md
             */
            "@typescript-eslint/prefer-as-const": "error",

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
             * Requires that function parameters are typed as readonly to prevent accidental mutation of inputs
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md
             */
            "@typescript-eslint/prefer-readonly-parameter-types": "off",

            /**
             * 🔧 Prefer using type parameter when calling `Array#reduce` instead of casting
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md
             */
            "@typescript-eslint/prefer-reduce-type-parameter": "off",

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
                "allowAny": false,
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
             * Exhaustiveness checking in switch with union type
             * 
             * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md
             */
            "@typescript-eslint/switch-exhaustiveness-check": "off",

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
