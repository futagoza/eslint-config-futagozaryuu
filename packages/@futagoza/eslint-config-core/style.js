/*eslint comma-dangle: ["error", "only-multiline"]*/
"use strict";

const stylistic = require( "@stylistic/eslint-plugin" );

// 
// ESLint Stylistic now maintains deprecated stylistic core rules:
// 

module.exports = {

    "plugins": {

        "@stylistic": stylistic,

    },

    "rules": {

        
        /**
         * 🔧 This rule enforces line breaks after opening and before closing array brackets
         *
         * @see https://eslint.style/rules/array-bracket-newline
         */
        "@stylistic/array-bracket-newline": "off",



        /**
         * 🔧 This rule enforces consistent spacing inside array brackets
         *
         * @see http://eslint.style/rules/array-bracket-spacing
         */
        "@stylistic/array-bracket-spacing": [
            "error",
            "always"
        ],



        /**
         * 🔧 This rule enforces line breaks between array elements
         *
         * @see http://eslint.style/rules/array-element-newline
         */
        "@stylistic/array-element-newline": "off",



        /**
         * 🔧 This rule enforces parentheses around arrow function parameters
         *
         * @see http://eslint.style/rules/arrow-parens
         */
        "@stylistic/arrow-parens": [
            "error",
            "as-needed",
            {
                "requireForBlockBody": false
            }
        ],



        /**
         * 🔧 This rule normalize style of spacing before/after an arrow function's arrow
         *
         * @see http://eslint.style/rules/arrow-spacing
         */
        "@stylistic/arrow-spacing": [
            "error",
            {
                "before": true,
                "after": true
            }
        ],



        /**
         * 🔧 This rule enforces consistent spacing inside an open block token and the next token on the same line.
         * This rule also enforces consistent spacing inside a close block token and previous token on the same line
         *
         * @see http://eslint.style/rules/block-spacing
         */
        "@stylistic/block-spacing": [
            "error",
            "always"
        ],



        /**
         * 🔧 This rule enforces consistent placement of braces relative to their control statement and body
         *
         * @see http://eslint.style/rules/brace-style
         */
        "@stylistic/brace-style": [
            "error",
            "1tbs",
            {
                "allowSingleLine": true
            }
        ],



        /**
         * 🔧 This rule enforces consistent trailing commas
         *
         * @see http://eslint.style/rules/comma-dangle
         */
        "@stylistic/comma-dangle": [
            "warn",
            "always-multiline"
        ],



        /**
         * 🔧 This rule enforces consistent spacing before and after commas
         *
         * @see http://eslint.style/rules/comma-spacing
         */
        "@stylistic/comma-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],



        /**
         * 🔧 This rule enforce consistent comma style
         *
         * @see http://eslint.style/rules/comma-style
         */
        "@stylistic/comma-style": [
            "error",
            "last"
        ],



        /**
         * 🔧 This rule enforces consistent spacing inside computed property brackets
         *
         * @see http://eslint.style/rules/computed-property-spacing
         */
        "@stylistic/computed-property-spacing": [
            "error",
            "always"
        ],



        /**
         * 🔧 This rule aims to enforce newline consistency in member expressions
         *
         * @see http://eslint.style/rules/dot-location
         */
        "@stylistic/dot-location": "off",



        /**
         * 🔧 This rule enforces at least one newline (or absence thereof) at the end of non-empty files
         *
         * @see http://eslint.style/rules/eol-last
         */
        "@stylistic/eol-last": [
            "error",
            "always"
        ],



        /**
         * 🔧 This rule requires or disallows spaces between the function name and the opening parenthesis that calls it
         *
         * @see http://eslint.style/rules/function-call-spacing
         */
        "@stylistic/function-call-spacing": [
            "error",
            "never"
        ],



        /**
         * 🔧 This rule enforces line breaks between arguments of a function call
         *
         * @see http://eslint.style/rules/function-call-argument-newline
         */
        "@stylistic/function-call-argument-newline": [
            "error",
            "consistent"
        ],



        /**
         * 🔧 This rule enforces consistent line breaks inside parentheses of function parameters or arguments
         *
         * @see http://eslint.style/rules/function-paren-newline
         */
        "@stylistic/function-paren-newline": [
            "error",
            "multiline-arguments"
        ],



        /**
         * 🔧 This rule aims to enforce spacing around the `*` of generator functions
         *
         * @see http://eslint.style/rules/generator-star-spacing
         */
        "@stylistic/generator-star-spacing": [
            "error",
            {
                "before": true,
                "after": false
            }
        ],



        /**
         * 🔧 This rule aims to enforce a consistent location for an arrow function containing an implicit return
         *
         * @see http://eslint.style/rules/implicit-arrow-linebreak
         */
        "@stylistic/implicit-arrow-linebreak": "off",



        /**
         * 🔧 This rule enforces a consistent indentation style
         *
         * @see http://eslint.style/rules/indent
         */
        "@stylistic/indent": [
            "error",
            4,
            {
                "SwitchCase": 1,
                "VariableDeclarator": "first",
                "ignoredNodes": [
                    "ConditionalExpression"
                ]
            }
        ],



        /**
         * 🔧 This rule enforces the consistent use of either double or single quotes in JSX attributes
         *
         * @see http://eslint.style/rules/jsx-quotes
         */
        "@stylistic/jsx-quotes": "off",



        /**
         * 🔧 This rule enforces consistent spacing between keys and values
         *
         * @see http://eslint.style/rules/key-spacing
         */
        "@stylistic/key-spacing": [
            "error",
            {
                "singleLine": {
                    "beforeColon": false,
                    "afterColon": true,
                    "mode": "strict"
                },
                "multiLine": {
                    "beforeColon": false,
                    "afterColon": true,
                    "mode": "minimum"
                }
            }
        ],



        /**
         * 🔧 This rule enforces consistent spacing around keywords and keyword-like tokens
         *
         * @see http://eslint.style/rules/keyword-spacing
         */
        "@stylistic/keyword-spacing": [
            "error",
            {
                "before": true,
                "after": true,
                "overrides": {
                    "super": {
                        "after": false
                    }
                }
            }
        ],



        /**
         * This rule enforces consistent position of line comments
         *
         * @see http://eslint.style/rules/line-comment-position
         */
        "@stylistic/line-comment-position": "off",



        /**
         * 🔧 This rule enforces consistent line endings independent of operating system, VCS, or editor used across your codebase
         *
         * @see http://eslint.style/rules/linebreak-style
         */
        "@stylistic/linebreak-style": [
            "error",
            "unix"
        ],



        /**
         * 🔧 This rule requires empty lines before and/or after comments
         *
         * @see http://eslint.style/rules/lines-around-comment
         */
        "@stylistic/lines-around-comment": "off",



        /**
         * 🔧 This rule improves readability by enforcing lines between class members
         *
         * @see http://eslint.style/rules/lines-between-class-members
         */
        "@stylistic/lines-between-class-members": [
            "error",
            "always"
        ],



        /**
         * This rule enforces a maximum line length to increase code readability and maintainability
         *
         * @see http://eslint.style/rules/max-len
         */
        "@stylistic/max-len": "off",



        /**
         * This rule enforces a maximum number of statements allowed per line
         *
         * @see http://eslint.style/rules/max-statements-per-line
         */
        "@stylistic/max-statements-per-line": "off",



        /**
         * 🔧 This rule aims to enforce a particular style for multiline comments
         *
         * @see http://eslint.style/rules/multiline-comment-style
         */
        "@stylistic/multiline-comment-style": "off",



        /**
         * 🔧 This rule enforces or disallows newlines between operands of a ternary expression
         *
         * @see http://eslint.style/rules/multiline-ternary
         */
        "@stylistic/multiline-ternary": "off",



        /**
         * 🔧 This rule can enforce or disallow parentheses when invoking a constructor with no arguments using the `new` keyword
         *
         * @see http://eslint.style/rules/new-parens
         */
        "@stylistic/new-parens": [
            "error",
            "always"
        ],



        /**
         * 🔧 This rule requires a newline after each call in a method chain or deep member access
         *
         * @see http://eslint.style/rules/newline-per-chained-call
         */
        "@stylistic/newline-per-chained-call": [
            "warn",
            {
                "ignoreChainWithDepth": 5
            }
        ],



        /**
         * 🔧 This rule warns against using the arrow function syntax in places where it could be confused with a comparison operator
         *
         * @see http://eslint.style/rules/no-confusing-arrow
         */
        "@stylistic/no-confusing-arrow": [
            "error",
            {
                "allowParens": true
            }
        ],



        /**
         * 🔧 This rule restricts the use of parentheses to only where they are necessary
         *
         * @see http://eslint.style/rules/no-extra-parens
         */
        "@stylistic/no-extra-parens": [
            "error",
            "all",
            {
                "conditionalAssign": false,
                "returnAssign": false,
                "nestedBinaryExpressions": false,
                "ignoreJSX": "none",
                "enforceForArrowConditionals": false,
                "enforceForSequenceExpressions": false,
                "enforceForNewInMemberExpressions": false,
                "enforceForFunctionPrototypeMethods": false
            }
        ],



        /**
         * 🔧 This rule disallows unnecessary semicolons
         *
         * @see http://eslint.style/rules/no-extra-semi
         */
        "@stylistic/no-extra-semi": "error",



        /**
         * 🔧 This rule is aimed at eliminating floating decimal points
         *
         * @see http://eslint.style/rules/no-floating-decimal
         */
        "@stylistic/no-floating-decimal": "warn",



        /**
         * This rule warns when different operators are used consecutively without parentheses in an expression
         *
         * @see http://eslint.style/rules/no-mixed-operators
         */
        "@stylistic/no-mixed-operators": [
            "warn",
            {
                "allowSamePrecedence": false
            }
        ],



        /**
         * This rule disallows mixed spaces and tabs for indentation
         *
         * @see http://eslint.style/rules/no-mixed-spaces-and-tabs
         */
        "@stylistic/no-mixed-spaces-and-tabs": "error",



        /**
         * 🔧 This rule aims to disallow multiple whitespace around expressions and objects
         *
         * @see http://eslint.style/rules/no-multi-spaces
         */
        "@stylistic/no-multi-spaces": [
            "error",
            {
                "ignoreEOLComments": true,
                "exceptions": {
                    "BinaryExpression": false,
                    "ImportDeclaration": true,
                    "Property": true,
                    "VariableDeclarator": true
                }
            }
        ],



        /**
         * 🔧 This rule aims to reduce the scrolling required when reading through your code
         *
         * @see http://eslint.style/rules/no-multiple-empty-lines
         */
        "@stylistic/no-multiple-empty-lines": "error",



        /**
         * This rule looks for tabs anywhere inside a file
         *
         * @see http://eslint.style/rules/no-tabs
         */
        "@stylistic/no-tabs": "off",



        /**
         * 🔧 This rule disallows trailing whitespace (spaces, tabs, and other Unicode whitespace characters) at the end of lines
         *
         * @see http://eslint.style/rules/no-trailing-spaces
         */
        "@stylistic/no-trailing-spaces": [
            "error",
            {
                "ignoreComments": true,
                "skipBlankLines": false
            }
        ],



        /**
         * 🔧 This rule disallows whitespace around the dot or before the opening bracket before properties of objects if they are on the same line
         *
         * @see http://eslint.style/rules/no-whitespace-before-property
         */
        "@stylistic/no-whitespace-before-property": "error",



        /**
         * 🔧 This rule aims to enforce a consistent location for single-line statements
         *
         * @see http://eslint.style/rules/nonblock-statement-body-position
         */
        "@stylistic/nonblock-statement-body-position": "off",



        /**
         * 🔧 A number of style guides require or disallow line breaks inside of object braces and other tokens
         *
         * @see http://eslint.style/rules/object-curly-newline
         */
        "@stylistic/object-curly-newline": "off",



        /**
         * 🔧 This rule enforces consistent spacing inside braces of object literals, destructuring assignments, and import/export specifiers
         *
         * @see http://eslint.style/rules/object-curly-spacing
         */
        "@stylistic/object-curly-spacing": [
            "error",
            "always"
        ],



        /**
         * 🔧 This rule permits you to restrict the locations of property specifications in object literals
         *
         * @see http://eslint.style/rules/object-property-newline
         */
        "@stylistic/object-property-newline": "off",



        /**
         * 🔧 This rule enforces a consistent newlines around variable declarations
         *
         * @see http://eslint.style/rules/one-var-declaration-per-line
         */
        "@stylistic/one-var-declaration-per-line": "off",



        /**
         * 🔧 his rule enforces a consistent linebreak style for operators
         *
         * @see http://eslint.style/rules/operator-linebreak
         */
        "@stylistic/operator-linebreak": "off",



        /**
         * 🔧 This rule enforces consistent empty line padding within blocks
         *
         * @see http://eslint.style/rules/padded-blocks
         */
        "@stylistic/padded-blocks": [
            "error",
            {
                "blocks": "always",
                "switches": "always",
                "classes": "always"
            },
            {
                "allowSingleLineBlocks": true
            }
        ],



        /**
         * 🔧 This rule requires or disallows blank lines between the given 2 kinds of statements
         *
         * @see http://eslint.style/rules/padding-line-between-statements
         */
        "@stylistic/padding-line-between-statements": [
            "error",
            {
                "blankLine": "always",
                "prev": "*",
                "next": "default"
            },
            {
                "blankLine": "always",
                "prev": "case",
                "next": "*"
            },
            {
                "blankLine": "any",
                "prev": "case",
                "next": "case"
            },
            {
                "blankLine": "always",
                "prev": "directive",
                "next": "*"
            },
            {
                "blankLine": "any",
                "prev": "directive",
                "next": "directive"
            },
            {
                "blankLine": "always",
                "prev": "import",
                "next": "*"
            },
            {
                "blankLine": "any",
                "prev": "import",
                "next": "import"
            }
        ],



        /**
         * 🔧 This rule requires quotes around object literal property names
         *
         * @see http://eslint.style/rules/quote-props
         */
        "@stylistic/quote-props": "off",



        /**
         * 🔧 This rule enforces the consistent use of either backticks, double, or single quotes
         *
         * @see http://eslint.style/rules/quotes
         */
        "@stylistic/quotes": [
            "error",
            "double",
            {
                "allowTemplateLiterals": true
            }
        ],



        /**
         * 🔧 This rule aims to enforce consistent spacing between rest and spread operators and their expressions
         *
         * @see http://eslint.style/rules/rest-spread-spacing
         */
        "@stylistic/rest-spread-spacing": [
            "error",
            "never"
        ],



        /**
         * 🔧 This rule enforces consistent use of semicolons
         *
         * @see http://eslint.style/rules/semi
         */
        "@stylistic/semi": [
            "error",
            "always",
            {
                "omitLastInOneLineBlock": true
            }
        ],



        /**
         * 🔧 This rule aims to enforce spacing around a semicolon
         *
         * @see http://eslint.style/rules/semi-spacing
         */
        "@stylistic/semi-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],



        /**
         * 🔧 This rule reports line terminators around semicolons
         *
         * @see http://eslint.style/rules/semi-style
         */
        "@stylistic/semi-style": [
            "error",
            "last"
        ],



        /**
         * 🔧 This rule will enforce consistency of spacing before blocks
         *
         * @see http://eslint.style/rules/space-before-blocks
         */
        "@stylistic/space-before-blocks": [
            "error",
            {
                "functions": "always",
                "keywords": "always",
                "classes": "always"
            }
        ],



        /**
         * 🔧 This rule aims to enforce consistent spacing before function parentheses
         *
         * @see http://eslint.style/rules/space-before-function-paren
         */
        "@stylistic/space-before-function-paren": [
            "error",
            {
                "anonymous": "always",
                "named": "never",
                "asyncArrow": "ignore"
            }
        ],



        /**
         * 🔧 This rule will enforce consistent spacing directly inside of parentheses
         *
         * @see http://eslint.style/rules/space-in-parens
         */
        "@stylistic/space-in-parens": [
            "error",
            "always"
        ],



        /**
         * 🔧 This rule is aimed at ensuring there are spaces around infix operators
         *
         * @see http://eslint.style/rules/space-infix-ops
         */
        "@stylistic/space-infix-ops": [
            "error",
            {
                "int32Hint": true
            }
        ],



        /**
         * 🔧 This rule enforces consistency regarding the spaces after words unary operators and after/before nonwords unary operators
         *
         * @see http://eslint.style/rules/space-unary-ops
         */
        "@stylistic/space-unary-ops": [
            "error",
            {
                "words": true,
                "nonwords": false,
                "overrides": {
                    "!": true,
                    "!!": true
                }
            }
        ],



        /**
         * 🔧 This rule will enforce consistency of spacing after the start of a comment
         *
         * @see http://eslint.style/rules/spaced-comment
         */
        "@stylistic/spaced-comment": [
            "error",
            "always",
            {
                "markers": [
                    "/",
                    "!",
                    "#"
                ],
                "exceptions": [
                    "-",
                    "+",
                    "*"
                ]
            }
        ],



        /**
         * 🔧 This rule controls spacing around colons of `case` and `default` clauses in `switch` statements
         *
         * @see http://eslint.style/rules/switch-colon-spacing
         */
        "@stylistic/switch-colon-spacing": [
            "error",
            {
                "after": true,
                "before": false
            }
        ],



        /**
         * 🔧 This rule aims to maintain consistency around the spacing inside of template literals
         *
         * @see http://eslint.style/rules/template-curly-spacing
         */
        "@stylistic/template-curly-spacing": [
            "error",
            "always"
        ],



        /**
         * 🔧 This rule aims to maintain consistency around the spacing between template tag functions and their template literals
         *
         * @see http://eslint.style/rules/template-tag-spacing
         */
        "@stylistic/template-tag-spacing": "off",



        /**
         * 🔧 This rule requires all immediately-invoked function expressions to be wrapped in parentheses
         *
         * @see http://eslint.style/rules/wrap-iife
         */
        "@stylistic/wrap-iife": [
            "error",
            "any"
        ],



        /**
         * 🔧 This is used to disambiguate the slash operator and facilitates more readable code
         *
         * @see http://eslint.style/rules/wrap-regex
         */
        "@stylistic/wrap-regex": "error",



        /**
         * 🔧 This rule enforces spacing around the `*` in `yield*` expressions
         *
         * @see http://eslint.style/rules/yield-star-spacing
         */
        "@stylistic/yield-star-spacing": "off",


    },

};
    