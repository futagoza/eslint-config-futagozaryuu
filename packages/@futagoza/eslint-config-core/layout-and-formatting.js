/*eslint comma-dangle: ["error", "only-multiline"]*/
"use strict";

// 
// These rules care about how the code looks rather than how it executes:
// 

module.exports = {

    "rules": {

        
    /**
     * 🔧 Enforce linebreaks after opening and before closing array brackets
     *
     * @see http://eslint.org/docs/rules/array-bracket-newline
     */
    "array-bracket-newline": "off",



    /**
     * 🔧 Enforce consistent spacing inside array brackets
     *
     * @see http://eslint.org/docs/rules/array-bracket-spacing
     */
    "array-bracket-spacing": [
        "error",
        "always"
    ],



    /**
     * 🔧 Enforce line breaks after each array element
     *
     * @see http://eslint.org/docs/rules/array-element-newline
     */
    "array-element-newline": "off",



    /**
     * 🔧 Require parentheses around arrow function arguments
     *
     * @see http://eslint.org/docs/rules/arrow-parens
     */
    "arrow-parens": [
        "error",
        "as-needed",
        {
            "requireForBlockBody": false
        }
    ],



    /**
     * 🔧 Enforce consistent spacing before and after the arrow in arrow functions
     *
     * @see http://eslint.org/docs/rules/arrow-spacing
     */
    "arrow-spacing": [
        "error",
        {
            "before": true,
            "after": true
        }
    ],



    /**
     * 🔧 Disallow or enforce spaces inside of blocks after opening block and before closing block
     *
     * @see http://eslint.org/docs/rules/block-spacing
     */
    "block-spacing": [
        "error",
        "always"
    ],



    /**
     * 🔧 Enforce consistent brace style for blocks
     *
     * @see http://eslint.org/docs/rules/brace-style
     */
    "brace-style": [
        "error",
        "1tbs",
        {
            "allowSingleLine": true
        }
    ],



    /**
     * 🔧 Require or disallow trailing commas
     *
     * @see http://eslint.org/docs/rules/comma-dangle
     */
    "comma-dangle": [
        "warn",
        "always-multiline"
    ],



    /**
     * 🔧 Enforce consistent spacing before and after commas
     *
     * @see http://eslint.org/docs/rules/comma-spacing
     */
    "comma-spacing": [
        "error",
        {
            "before": false,
            "after": true
        }
    ],



    /**
     * 🔧 Enforce consistent comma style
     *
     * @see http://eslint.org/docs/rules/comma-style
     */
    "comma-style": [
        "error",
        "last"
    ],



    /**
     * 🔧 Enforce consistent spacing inside computed property brackets
     *
     * @see http://eslint.org/docs/rules/computed-property-spacing
     */
    "computed-property-spacing": [
        "error",
        "always"
    ],



    /**
     * 🔧 Enforce consistent newlines before and after dots
     *
     * @see http://eslint.org/docs/rules/dot-location
     */
    "dot-location": "off",



    /**
     * 🔧 Require or disallow newline at the end of files
     *
     * @see http://eslint.org/docs/rules/eol-last
     */
    "eol-last": [
        "error",
        "always"
    ],



    /**
     * 🔧 Require or disallow spacing between function identifiers and their invocations
     *
     * @see http://eslint.org/docs/rules/func-call-spacing
     */
    "func-call-spacing": [
        "error",
        "never"
    ],



    /**
     * 🔧 Enforce line breaks between arguments of a function call
     *
     * @see http://eslint.org/docs/rules/function-call-argument-newline
     */
    "function-call-argument-newline": [
        "error",
        "consistent"
    ],



    /**
     * 🔧 Enforce consistent line breaks inside function parentheses
     *
     * @see http://eslint.org/docs/rules/function-paren-newline
     */
    "function-paren-newline": [
        "error",
        "multiline-arguments"
    ],



    /**
     * 🔧 Enforce consistent spacing around `*` operators in generator functions
     *
     * @see http://eslint.org/docs/rules/generator-star-spacing
     */
    "generator-star-spacing": [
        "error",
        {
            "before": true,
            "after": false
        }
    ],



    /**
     * 🔧 Enforce the location of arrow function bodies
     *
     * @see http://eslint.org/docs/rules/implicit-arrow-linebreak
     */
    "implicit-arrow-linebreak": "off",



    /**
     * 🔧 Enforce consistent indentation
     *
     * @see http://eslint.org/docs/rules/indent
     */
    "indent": [
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
     * 🔧 Enforce the consistent use of either double or single quotes in JSX attributes
     *
     * @see http://eslint.org/docs/rules/jsx-quotes
     */
    "jsx-quotes": "off",



    /**
     * 🔧 Enforce consistent spacing between keys and values in object literal properties
     *
     * @see http://eslint.org/docs/rules/key-spacing
     */
    "key-spacing": [
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
     * 🔧 Enforce consistent spacing before and after keywords
     *
     * @see http://eslint.org/docs/rules/keyword-spacing
     */
    "keyword-spacing": [
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
     * Enforce position of line comments
     *
     * @see http://eslint.org/docs/rules/line-comment-position
     */
    "line-comment-position": "off",



    /**
     * 🔧 Enforce consistent linebreak style
     *
     * @see http://eslint.org/docs/rules/linebreak-style
     */
    "linebreak-style": [
        "error",
        "unix"
    ],



    /**
     * 🔧 Require empty lines around comments
     *
     * @see http://eslint.org/docs/rules/lines-around-comment
     */
    "lines-around-comment": "off",



    /**
     * 🔧 Require or disallow an empty line between class members
     *
     * @see http://eslint.org/docs/rules/lines-between-class-members
     */
    "lines-between-class-members": [
        "error",
        "always"
    ],



    /**
     * Enforce a maximum line length
     *
     * @see http://eslint.org/docs/rules/max-len
     */
    "max-len": "off",



    /**
     * Enforce a maximum number of statements allowed per line
     *
     * @see http://eslint.org/docs/rules/max-statements-per-line
     */
    "max-statements-per-line": "off",



    /**
     * 🔧 Enforce newlines between operands of ternary expressions
     *
     * @see http://eslint.org/docs/rules/multiline-ternary
     */
    "multiline-ternary": "off",



    /**
     * 🔧 Enforce or disallow parentheses when invoking a constructor with no arguments
     *
     * @see http://eslint.org/docs/rules/new-parens
     */
    "new-parens": [
        "error",
        "always"
    ],



    /**
     * 🔧 Require a newline after each call in a method chain
     *
     * @see http://eslint.org/docs/rules/newline-per-chained-call
     */
    "newline-per-chained-call": [
        "warn",
        {
            "ignoreChainWithDepth": 5
        }
    ],



    /**
     * 🔧 Disallow unnecessary parentheses
     *
     * @see http://eslint.org/docs/rules/no-extra-parens
     */
    "no-extra-parens": [
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
     * Disallow mixed spaces and tabs for indentation
     *
     * @see http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
     */
    "no-mixed-spaces-and-tabs": "error",



    /**
     * 🔧 Disallow multiple spaces
     *
     * @see http://eslint.org/docs/rules/no-multi-spaces
     */
    "no-multi-spaces": [
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
     * 🔧 Disallow multiple empty lines
     *
     * @see http://eslint.org/docs/rules/no-multiple-empty-lines
     */
    "no-multiple-empty-lines": "error",



    /**
     * Disallow all tabs
     *
     * @see http://eslint.org/docs/rules/no-tabs
     */
    "no-tabs": "off",



    /**
     * 🔧 Disallow trailing whitespace at the end of lines
     *
     * @see http://eslint.org/docs/rules/no-trailing-spaces
     */
    "no-trailing-spaces": [
        "error",
        {
            "ignoreComments": true,
            "skipBlankLines": false
        }
    ],



    /**
     * 🔧 Disallow whitespace before properties
     *
     * @see http://eslint.org/docs/rules/no-whitespace-before-property
     */
    "no-whitespace-before-property": "error",



    /**
     * 🔧 Enforce the location of single-line statements
     *
     * @see http://eslint.org/docs/rules/nonblock-statement-body-position
     */
    "nonblock-statement-body-position": "off",



    /**
     * 🔧 Enforce consistent line breaks after opening and before closing braces
     *
     * @see http://eslint.org/docs/rules/object-curly-newline
     */
    "object-curly-newline": "off",



    /**
     * 🔧 Enforce consistent spacing inside braces
     *
     * @see http://eslint.org/docs/rules/object-curly-spacing
     */
    "object-curly-spacing": [
        "error",
        "always"
    ],



    /**
     * 🔧 Enforce placing object properties on separate lines
     *
     * @see http://eslint.org/docs/rules/object-property-newline
     */
    "object-property-newline": "off",



    /**
     * 🔧 Enforce consistent linebreak style for operators
     *
     * @see http://eslint.org/docs/rules/operator-linebreak
     */
    "operator-linebreak": "off",



    /**
     * 🔧 Require or disallow padding within blocks
     *
     * @see http://eslint.org/docs/rules/padded-blocks
     */
    "padded-blocks": [
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
     * 🔧 Require or disallow padding lines between statements
     *
     * @see http://eslint.org/docs/rules/padding-line-between-statements
     */
    "padding-line-between-statements": [
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
     * 🔧 Enforce the consistent use of either backticks, double, or single quotes
     *
     * @see http://eslint.org/docs/rules/quotes
     */
    "quotes": [
        "error",
        "double",
        {
            "allowTemplateLiterals": true
        }
    ],



    /**
     * 🔧 Enforce spacing between rest and spread operators and their expressions
     *
     * @see http://eslint.org/docs/rules/rest-spread-spacing
     */
    "rest-spread-spacing": [
        "error",
        "never"
    ],



    /**
     * 🔧 Require or disallow semicolons instead of ASI
     *
     * @see http://eslint.org/docs/rules/semi
     */
    "semi": [
        "error",
        "always",
        {
            "omitLastInOneLineBlock": true
        }
    ],



    /**
     * 🔧 Enforce consistent spacing before and after semicolons
     *
     * @see http://eslint.org/docs/rules/semi-spacing
     */
    "semi-spacing": [
        "error",
        {
            "before": false,
            "after": true
        }
    ],



    /**
     * 🔧 Enforce location of semicolons
     *
     * @see http://eslint.org/docs/rules/semi-style
     */
    "semi-style": [
        "error",
        "last"
    ],



    /**
     * 🔧 Enforce consistent spacing before blocks
     *
     * @see http://eslint.org/docs/rules/space-before-blocks
     */
    "space-before-blocks": [
        "error",
        {
            "functions": "always",
            "keywords": "always",
            "classes": "always"
        }
    ],



    /**
     * 🔧 Enforce consistent spacing before `function` definition opening parenthesis
     *
     * @see http://eslint.org/docs/rules/space-before-function-paren
     */
    "space-before-function-paren": [
        "error",
        {
            "anonymous": "always",
            "named": "never",
            "asyncArrow": "ignore"
        }
    ],



    /**
     * 🔧 Enforce consistent spacing inside parentheses
     *
     * @see http://eslint.org/docs/rules/space-in-parens
     */
    "space-in-parens": [
        "error",
        "always"
    ],



    /**
     * 🔧 Require spacing around infix operators
     *
     * @see http://eslint.org/docs/rules/space-infix-ops
     */
    "space-infix-ops": [
        "error",
        {
            "int32Hint": true
        }
    ],



    /**
     * 🔧 Enforce consistent spacing before or after unary operators
     *
     * @see http://eslint.org/docs/rules/space-unary-ops
     */
    "space-unary-ops": [
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
     * 🔧 Enforce spacing around colons of switch statements
     *
     * @see http://eslint.org/docs/rules/switch-colon-spacing
     */
    "switch-colon-spacing": [
        "error",
        {
            "after": true,
            "before": false
        }
    ],



    /**
     * 🔧 Require or disallow spacing around embedded expressions of template strings
     *
     * @see http://eslint.org/docs/rules/template-curly-spacing
     */
    "template-curly-spacing": [
        "error",
        "always"
    ],



    /**
     * 🔧 Require or disallow spacing between template tags and their literals
     *
     * @see http://eslint.org/docs/rules/template-tag-spacing
     */
    "template-tag-spacing": "off",



    /**
     * 🔧 Require or disallow Unicode byte order mark (BOM)
     *
     * @see http://eslint.org/docs/rules/unicode-bom
     */
    "unicode-bom": "warn",



    /**
     * 🔧 Require parentheses around immediate `function` invocations
     *
     * @see http://eslint.org/docs/rules/wrap-iife
     */
    "wrap-iife": [
        "error",
        "any"
    ],



    /**
     * 🔧 Require parenthesis around regex literals
     *
     * @see http://eslint.org/docs/rules/wrap-regex
     */
    "wrap-regex": "error",



    /**
     * 🔧 Require or disallow spacing around the `*` in `yield*` expressions
     *
     * @see http://eslint.org/docs/rules/yield-star-spacing
     */
    "yield-star-spacing": "off",


    },

};
    