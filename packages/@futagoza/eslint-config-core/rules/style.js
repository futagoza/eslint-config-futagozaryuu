// 
// WARNING: AUTO-GENERATED USING @eslint-stylistic/metadata
// 
// ESLint Stylistic now maintains deprecated ESLint style (and most typescript-eslint style) rules
// 

import stylistic from "@stylistic/eslint-plugin"

/**
 * Raw config for `@futagoza/eslint-config-core/rules/style.js`
 */
export const config = {

    name: "@futagoza/eslint-config-core/style",

    plugins: {

        "@stylistic": stylistic,

    },

    rules: {

        /**
         * 🔧 Enforce linebreaks after opening and before closing array brackets
         * 
         * @see https://eslint.style/rules/array-bracket-newline
         */
        "@stylistic/array-bracket-newline": "off",

        /**
         * 🔧 Enforce consistent spacing inside array brackets
         * 
         * @see https://eslint.style/rules/array-bracket-spacing
         */
        "@stylistic/array-bracket-spacing": [
            "error",
            "always",
        ],

        /**
         * 🔧 Enforce line breaks after each array element
         * 
         * @see https://eslint.style/rules/array-element-newline
         */
        "@stylistic/array-element-newline": "off",

        /**
         * 🔧 Require parentheses around arrow function arguments
         * 
         * @see https://eslint.style/rules/arrow-parens
         */
        "@stylistic/arrow-parens": [
            "error",
            "as-needed",
            {
                "requireForBlockBody": false,
            },
        ],

        /**
         * 🔧 Enforce consistent spacing before and after the arrow in arrow functions
         * 
         * @see https://eslint.style/rules/arrow-spacing
         */
        "@stylistic/arrow-spacing": [
            "error",
            {
                "before": true,
                "after": true,
            },
        ],

        /**
         * 🔧 Disallow or enforce spaces inside of blocks after opening block and before closing block
         * 
         * @see https://eslint.style/rules/block-spacing
         */
        "@stylistic/block-spacing": [
            "error",
            "always",
        ],

        /**
         * 🔧 Enforce consistent brace style for blocks
         * 
         * @see https://eslint.style/rules/brace-style
         */
        "@stylistic/brace-style": [
            "error",
            "1tbs",
            {
                "allowSingleLine": true,
            },
        ],

        /**
         * 🔧 Require or disallow trailing commas
         * 
         * @see https://eslint.style/rules/comma-dangle
         */
        "@stylistic/comma-dangle": [
            "warn",
            "always-multiline",
        ],

        /**
         * 🔧 Enforce consistent spacing before and after commas
         * 
         * @see https://eslint.style/rules/comma-spacing
         */
        "@stylistic/comma-spacing": [
            "error",
            {
                "before": false,
                "after": true,
            },
        ],

        /**
         * 🔧 Enforce consistent comma style
         * 
         * @see https://eslint.style/rules/comma-style
         */
        "@stylistic/comma-style": [
            "error",
            "last",
        ],

        /**
         * 🔧 Enforce consistent spacing inside computed property brackets
         * 
         * @see https://eslint.style/rules/computed-property-spacing
         */
        "@stylistic/computed-property-spacing": [
            "error",
            "always",
        ],

        /**
         * 🔧 Enforce consistent line breaks after opening and before closing braces
         * 
         * @see https://eslint.style/rules/curly-newline
         */
        "@stylistic/curly-newline": [
            "warn",
            {
                // TODO: this should be false, but it seems there's a bug with the implementation of @stylistic/curly-newline that is
                //       casing this to report false positives when it'd set to false, and false negatives when it's true?
                "consistent": true,
                "minElements": 2,
            },
        ],

        /**
         * 🔧 Enforce consistent newlines before and after dots
         * 
         * @see https://eslint.style/rules/dot-location
         */
        "@stylistic/dot-location": "off",

        /**
         * 🔧 Require or disallow newline at the end of files
         * 
         * @see https://eslint.style/rules/eol-last
         */
        "@stylistic/eol-last": [
            "error",
            "always",
        ],

        /**
         * 🔧 Enforce line breaks between arguments of a function call
         * 
         * @see https://eslint.style/rules/function-call-argument-newline
         */
        "@stylistic/function-call-argument-newline": [
            "error",
            "consistent",
        ],

        /**
         * 🔧 Require or disallow spacing between function identifiers and their invocations
         * 
         * @see https://eslint.style/rules/function-call-spacing
         */
        "@stylistic/function-call-spacing": [
            "error",
            "never",
        ],

        /**
         * 🔧 Enforce consistent line breaks inside function parentheses
         * 
         * @see https://eslint.style/rules/function-paren-newline
         */
        "@stylistic/function-paren-newline": [
            "error",
            "multiline-arguments",
        ],

        /**
         * 🔧 Enforce consistent spacing around `*` operators in generator functions
         * 
         * @see https://eslint.style/rules/generator-star-spacing
         */
        "@stylistic/generator-star-spacing": [
            "error",
            {
                "before": true,
                "after": false,
            },
        ],

        /**
         * 🔧 Enforce the location of arrow function bodies
         * 
         * @see https://eslint.style/rules/implicit-arrow-linebreak
         */
        "@stylistic/implicit-arrow-linebreak": "off",

        /**
         * 🔧 Enforce consistent indentation
         * 
         * @see https://eslint.style/rules/indent
         */
        "@stylistic/indent": [
            "error",
            4,
            {
                "SwitchCase": 1,
                "VariableDeclarator": "first",
                "ignoredNodes": [
                    "ConditionalExpression",
                ],
            },
        ],

        /**
         * 🔧 Indentation for binary operators
         * 
         * @see https://eslint.style/rules/indent-binary-ops
         */
        "@stylistic/indent-binary-ops": "off",

        /**
         * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
         * 
         * @see https://eslint.style/rules/jsx-child-element-spacing
         */
        "@stylistic/jsx-child-element-spacing": "warn",

        /**
         * 🔧 Enforce closing bracket location in JSX
         * 
         * @see https://eslint.style/rules/jsx-closing-bracket-location
         */
        "@stylistic/jsx-closing-bracket-location": [
            "warn",
            "line-aligned",
        ],

        /**
         * 🔧 Enforce closing tag location for multiline JSX
         * 
         * @see https://eslint.style/rules/jsx-closing-tag-location
         */
        "@stylistic/jsx-closing-tag-location": [
            "warn",
            "line-aligned",
        ],

        /**
         * 🔧 Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes
         * 
         * @see https://eslint.style/rules/jsx-curly-brace-presence
         */
        "@stylistic/jsx-curly-brace-presence": "warn",

        /**
         * 🔧 Enforce consistent linebreaks in curly braces in JSX attributes and expressions
         * 
         * @see https://eslint.style/rules/jsx-curly-newline
         */
        "@stylistic/jsx-curly-newline": "warn",

        /**
         * 🔧 Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
         * 
         * @see https://eslint.style/rules/jsx-curly-spacing
         */
        "@stylistic/jsx-curly-spacing": "warn",

        /**
         * 🔧 Enforce or disallow spaces around equal signs in JSX attributes
         * 
         * @see https://eslint.style/rules/jsx-equals-spacing
         */
        "@stylistic/jsx-equals-spacing": "warn",

        /**
         * 🔧 Enforce proper position of the first property in JSX
         * 
         * @see https://eslint.style/rules/jsx-first-prop-new-line
         */
        "@stylistic/jsx-first-prop-new-line": "warn",

        /**
         * 🔧 Enforce line breaks before and after JSX elements when they are used as arguments to a function.
         * 
         * @see https://eslint.style/rules/jsx-function-call-newline
         */
        "@stylistic/jsx-function-call-newline": "warn",

        /**
         * 🔧 Enforce props indentation in JSX
         * 
         * @see https://eslint.style/rules/jsx-indent-props
         */
        "@stylistic/jsx-indent-props": [
            "error",
            {
                "indentMode": 4,
                "ignoreTernaryOperator": false,
            },
        ],

        /**
         * 🔧 Enforce maximum of props on a single line in JSX
         * 
         * @see https://eslint.style/rules/jsx-max-props-per-line
         */
        "@stylistic/jsx-max-props-per-line": "off",

        /**
         * 🔧 Require or prevent a new line after jsx elements and expressions.
         * 
         * @see https://eslint.style/rules/jsx-newline
         */
        "@stylistic/jsx-newline": [
            "warn",
            {
                "prevent": true,
                "allowMultilines": true,
            },
        ],

        /**
         * 🔧 Require one JSX element per line
         * 
         * @see https://eslint.style/rules/jsx-one-expression-per-line
         */
        "@stylistic/jsx-one-expression-per-line": "off",

        /**
         * Enforce PascalCase for user-defined JSX components
         * 
         * @see https://eslint.style/rules/jsx-pascal-case
         */
        "@stylistic/jsx-pascal-case": "off",

        /**
         * 🔧 Enforce consistent line break styles for JSX props
         * 
         * @see https://eslint.style/rules/jsx-props-style
         */
        "@stylistic/exp-jsx-props-style": "warn",

        /**
         * 🔧 Enforce the consistent use of either double or single quotes in JSX attributes
         * 
         * @see https://eslint.style/rules/jsx-quotes
         */
        "@stylistic/jsx-quotes": "off",

        /**
         * 🔧 Disallow extra closing tags for components without children
         * 
         * @see https://eslint.style/rules/jsx-self-closing-comp
         */
        "@stylistic/jsx-self-closing-comp": "warn",

        /**
         * 🔧 Enforce shorthand for boolean JSX attributes.
         * 
         * @see https://eslint.style/rules/jsx-shorthand-boolean
         */
        "@stylistic/jsx-shorthand-boolean": "warn",

        /**
         * 🔧 Enforce shorthand fragment syntax.
         * 
         * @see https://eslint.style/rules/jsx-shorthand-fragment
         */
        "@stylistic/jsx-shorthand-fragment": "off",

        /**
         * 🔧 Enforce whitespace in and around the JSX opening and closing brackets
         * 
         * @see https://eslint.style/rules/jsx-tag-spacing
         */
        "@stylistic/jsx-tag-spacing": "warn",

        /**
         * 🔧 Disallow missing parentheses around multiline JSX
         * 
         * @see https://eslint.style/rules/jsx-wrap-multilines
         */
        "@stylistic/jsx-wrap-multilines": "warn",

        /**
         * 🔧 Enforce consistent spacing between property names and type annotations in types and interfaces
         * 
         * @see https://eslint.style/rules/key-spacing
         */
        "@stylistic/key-spacing": [
            "error",
            {
                "singleLine": {
                    "beforeColon": false,
                    "afterColon": true,
                    "mode": "strict",
                },
                "multiLine": {
                    "beforeColon": false,
                    "afterColon": true,
                    "mode": "minimum",
                },
            },
        ],

        /**
         * 🔧 Enforce consistent spacing before and after keywords
         * 
         * @see https://eslint.style/rules/keyword-spacing
         */
        "@stylistic/keyword-spacing": [
            "error",
            {
                "before": true,
                "after": true,
                "overrides": {
                    "super": {
                        "after": false,
                    },
                },
            },
        ],

        /**
         * Enforce position of line comments
         * 
         * @see https://eslint.style/rules/line-comment-position
         */
        "@stylistic/line-comment-position": "off",

        /**
         * 🔧 Enforce consistent linebreak style
         * 
         * @see https://eslint.style/rules/linebreak-style
         */
        "@stylistic/linebreak-style": [
            "error",
            "unix",
        ],

        /**
         * 🔧 Require empty lines around comments
         * 
         * @see https://eslint.style/rules/lines-around-comment
         */
        "@stylistic/lines-around-comment": "off",

        /**
         * 🔧 Require or disallow an empty line between class members
         * 
         * @see https://eslint.style/rules/lines-between-class-members
         */
        "@stylistic/lines-between-class-members": [
            "error",
            "always",
        ],

        /**
         * 🔧 Enforce consistent spacing and line break styles inside brackets.
         * 
         * @see https://eslint.style/rules/list-style
         */
        "@stylistic/exp-list-style": "off",

        /**
         * Enforce a maximum line length
         * 
         * @see https://eslint.style/rules/max-len
         */
        "@stylistic/max-len": "off",

        /**
         * Enforce a maximum number of statements allowed per line
         * 
         * @see https://eslint.style/rules/max-statements-per-line
         */
        "@stylistic/max-statements-per-line": "off",

        /**
         * 🔧 Require a specific member delimiter style for interfaces and type literals
         * 
         * @see https://eslint.style/rules/member-delimiter-style
         */
        "@stylistic/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "none",
                    "requireLast": false,
                },
                "singleline": {
                    "delimiter": "comma",
                    "requireLast": false,
                },
                "multilineDetection": "brackets",
            },
        ],

        /**
         * 🔧 Enforce a particular style for multiline comments
         * 
         * @see https://eslint.style/rules/multiline-comment-style
         */
        "@stylistic/multiline-comment-style": "off",

        /**
         * 🔧 Enforce newlines between operands of ternary expressions
         * 
         * @see https://eslint.style/rules/multiline-ternary
         */
        "@stylistic/multiline-ternary": "off",

        /**
         * 🔧 Enforce or disallow parentheses when invoking a constructor with no arguments
         * 
         * @see https://eslint.style/rules/new-parens
         */
        "@stylistic/new-parens": [
            "error",
            "always",
        ],

        /**
         * 🔧 Require a newline after each call in a method chain
         * 
         * @see https://eslint.style/rules/newline-per-chained-call
         */
        "@stylistic/newline-per-chained-call": [
            "warn",
            {
                "ignoreChainWithDepth": 5,
            },
        ],

        /**
         * 🔧 Disallow arrow functions where they could be confused with comparisons
         * 
         * @see https://eslint.style/rules/no-confusing-arrow
         */
        "@stylistic/no-confusing-arrow": [
            "error",
            {
                "allowParens": true,
            },
        ],

        /**
         * 🔧 Disallow unnecessary parentheses
         * 
         * @see https://eslint.style/rules/no-extra-parens
         */
        "@stylistic/no-extra-parens": [
            "error",
            "all",
            {
                "conditionalAssign": false,
                "returnAssign": false,
                "nestedBinaryExpressions": false,
                "ternaryOperandBinaryExpressions": false,
                "ignoreJSX": "none",
                "enforceForSequenceExpressions": false,
                "enforceForFunctionPrototypeMethods": false,
                "allowParensAfterCommentPattern": "@type",
                "nestedConditionalExpressions": false,
                "ignoredNodes": [
                    "ArrowFunctionExpression[body.type=ConditionalExpression]",
                    "MemberExpression[object.type=NewExpression]",
                    "SpreadElement[argument.type=ConditionalExpression]",
                    "SpreadElement[argument.type=LogicalExpression]",
                    "SpreadElement[argument.type=AwaitExpression]",
                ],
            },
        ],

        /**
         * 🔧 Disallow unnecessary semicolons
         * 
         * @see https://eslint.style/rules/no-extra-semi
         */
        "@stylistic/no-extra-semi": "error",

        /**
         * 🔧 Disallow leading or trailing decimal points in numeric literals
         * 
         * @see https://eslint.style/rules/no-floating-decimal
         */
        "@stylistic/no-floating-decimal": "warn",

        /**
         * Disallow mixed binary operators
         * 
         * @see https://eslint.style/rules/no-mixed-operators
         */
        "@stylistic/no-mixed-operators": [
            "warn",
            {
                "allowSamePrecedence": false,
            },
        ],

        /**
         * Disallow mixed spaces and tabs for indentation
         * 
         * @see https://eslint.style/rules/no-mixed-spaces-and-tabs
         */
        "@stylistic/no-mixed-spaces-and-tabs": "error",

        /**
         * 🔧 Disallow multiple spaces
         * 
         * @see https://eslint.style/rules/no-multi-spaces
         */
        "@stylistic/no-multi-spaces": [
            "error",
            {
                "ignoreEOLComments": true,
                "exceptions": {
                    "BinaryExpression": false,
                    "ImportDeclaration": true,
                    "Property": true,
                    "VariableDeclarator": true,
                },
            },
        ],

        /**
         * 🔧 Disallow multiple empty lines
         * 
         * @see https://eslint.style/rules/no-multiple-empty-lines
         */
        "@stylistic/no-multiple-empty-lines": "error",

        /**
         * Disallow all tabs
         * 
         * @see https://eslint.style/rules/no-tabs
         */
        "@stylistic/no-tabs": "off",

        /**
         * 🔧 Disallow trailing whitespace at the end of lines
         * 
         * @see https://eslint.style/rules/no-trailing-spaces
         */
        "@stylistic/no-trailing-spaces": [
            "error",
            {
                "ignoreComments": true,
                "skipBlankLines": false,
            },
        ],

        /**
         * 🔧 Disallow whitespace before properties
         * 
         * @see https://eslint.style/rules/no-whitespace-before-property
         */
        "@stylistic/no-whitespace-before-property": "error",

        /**
         * 🔧 Enforce the location of single-line statements
         * 
         * @see https://eslint.style/rules/nonblock-statement-body-position
         */
        "@stylistic/nonblock-statement-body-position": "off",

        /**
         * 🔧 Enforce consistent line breaks after opening and before closing braces
         * 
         * @see https://eslint.style/rules/object-curly-newline
         */
        "@stylistic/object-curly-newline": "off",

        /**
         * 🔧 Enforce consistent spacing inside braces
         * 
         * @see https://eslint.style/rules/object-curly-spacing
         */
        "@stylistic/object-curly-spacing": [
            "error",
            "always",
        ],

        /**
         * 🔧 Enforce placing object properties on separate lines
         * 
         * @see https://eslint.style/rules/object-property-newline
         */
        "@stylistic/object-property-newline": "off",

        /**
         * 🔧 Require or disallow newlines around variable declarations
         * 
         * @see https://eslint.style/rules/one-var-declaration-per-line
         */
        "@stylistic/one-var-declaration-per-line": "off",

        /**
         * 🔧 Enforce consistent linebreak style for operators
         * 
         * @see https://eslint.style/rules/operator-linebreak
         */
        "@stylistic/operator-linebreak": "off",

        /**
         * 🔧 Require or disallow padding within blocks
         * 
         * @see https://eslint.style/rules/padded-blocks
         */
        "@stylistic/padded-blocks": [
            "error",
            {
                "blocks": "always",
                "switches": "always",
                "classes": "always",
            },
            {
                "allowSingleLineBlocks": true,
            },
        ],

        /**
         * 🔧 Require or disallow padding lines between statements
         * 
         * @see https://eslint.style/rules/padding-line-between-statements
         */
        "@stylistic/padding-line-between-statements": [
            "error",
            {
                "blankLine": "always",
                "prev": "*",
                "next": "default",
            },
            {
                "blankLine": "always",
                "prev": "case",
                "next": "*",
            },
            {
                "blankLine": "any",
                "prev": "case",
                "next": "case",
            },
            {
                "blankLine": "always",
                "prev": "directive",
                "next": "*",
            },
            {
                "blankLine": "any",
                "prev": "directive",
                "next": "directive",
            },
            {
                "blankLine": "always",
                "prev": "import",
                "next": "*",
            },
            {
                "blankLine": "any",
                "prev": "import",
                "next": "import",
            },
        ],

        /**
         * 🔧 Require quotes around object literal, type literal, interfaces and enums property names
         * 
         * @see https://eslint.style/rules/quote-props
         */
        "@stylistic/quote-props": "off",

        /**
         * 🔧 Enforce the consistent use of either backticks, double, or single quotes
         * 
         * @see https://eslint.style/rules/quotes
         */
        "@stylistic/quotes": [
            "error",
            "double",
            {
                "allowTemplateLiterals": "always",
            },
        ],

        /**
         * 🔧 Enforce spacing between rest and spread operators and their expressions
         * 
         * @see https://eslint.style/rules/rest-spread-spacing
         */
        "@stylistic/rest-spread-spacing": [
            "error",
            "never",
        ],

        /**
         * 🔧 Require or disallow semicolons instead of ASI
         * 
         * @see https://eslint.style/rules/semi
         */
        "@stylistic/semi": "off",

        /**
         * 🔧 Enforce consistent spacing before and after semicolons
         * 
         * @see https://eslint.style/rules/semi-spacing
         */
        "@stylistic/semi-spacing": [
            "error",
            {
                "before": false,
                "after": true,
            },
        ],

        /**
         * 🔧 Enforce location of semicolons
         * 
         * @see https://eslint.style/rules/semi-style
         */
        "@stylistic/semi-style": [
            "error",
            "last",
        ],

        /**
         * 🔧 Enforce consistent spacing before blocks
         * 
         * @see https://eslint.style/rules/space-before-blocks
         */
        "@stylistic/space-before-blocks": [
            "error",
            {
                "functions": "always",
                "keywords": "always",
                "classes": "always",
            },
        ],

        /**
         * 🔧 Enforce consistent spacing before function parenthesis
         * 
         * @see https://eslint.style/rules/space-before-function-paren
         */
        "@stylistic/space-before-function-paren": [
            "error",
            {
                "anonymous": "always",
                "named": "never",
                "asyncArrow": "ignore",
            },
        ],

        /**
         * 🔧 Enforce consistent spacing inside parentheses
         * 
         * @see https://eslint.style/rules/space-in-parens
         */
        "@stylistic/space-in-parens": [
            "error",
            "always",
        ],

        /**
         * 🔧 Require spacing around infix operators
         * 
         * @see https://eslint.style/rules/space-infix-ops
         */
        "@stylistic/space-infix-ops": [
            "error",
            {
                "int32Hint": true,
            },
        ],

        /**
         * 🔧 Enforce consistent spacing before or after unary operators
         * 
         * @see https://eslint.style/rules/space-unary-ops
         */
        "@stylistic/space-unary-ops": [
            "error",
            {
                "words": true,
                "nonwords": false,
                "overrides": {
                    "!": true,
                    "!!": true,
                },
            },
        ],

        /**
         * 🔧 Enforce consistent spacing after the `//` or `/*` in a comment
         * 
         * @see https://eslint.style/rules/spaced-comment
         */
        "@stylistic/spaced-comment": [
            "error",
            "always",
            {
                "markers": [
                    "/",
                    "!",
                    "#",
                ],
                "exceptions": [
                    "-",
                    "+",
                    "*",
                ],
            },
        ],

        /**
         * 🔧 Enforce spacing around colons of switch statements
         * 
         * @see https://eslint.style/rules/switch-colon-spacing
         */
        "@stylistic/switch-colon-spacing": [
            "error",
            {
                "after": true,
                "before": false,
            },
        ],

        /**
         * 🔧 Require or disallow spacing around embedded expressions of template strings
         * 
         * @see https://eslint.style/rules/template-curly-spacing
         */
        "@stylistic/template-curly-spacing": [
            "error",
            "always",
        ],

        /**
         * 🔧 Require or disallow spacing between template tags and their literals
         * 
         * @see https://eslint.style/rules/template-tag-spacing
         */
        "@stylistic/template-tag-spacing": "warn",

        /**
         * 🔧 Require consistent spacing around type annotations
         * 
         * @see https://eslint.style/rules/type-annotation-spacing
         */
        "@stylistic/type-annotation-spacing": "error",

        /**
         * 🔧 Enforces consistent spacing inside TypeScript type generics
         * 
         * @see https://eslint.style/rules/type-generic-spacing
         */
        "@stylistic/type-generic-spacing": "error",

        /**
         * 🔧 Expect space before the type declaration in the named tuple
         * 
         * @see https://eslint.style/rules/type-named-tuple-spacing
         */
        "@stylistic/type-named-tuple-spacing": "error",

        /**
         * 🔧 Require parentheses around immediate `function` invocations
         * 
         * @see https://eslint.style/rules/wrap-iife
         */
        "@stylistic/wrap-iife": [
            "error",
            "any",
        ],

        /**
         * 🔧 Require parenthesis around regex literals
         * 
         * @see https://eslint.style/rules/wrap-regex
         */
        "@stylistic/wrap-regex": "error",

        /**
         * 🔧 Require or disallow spacing around the `*` in `yield*` expressions
         * 
         * @see https://eslint.style/rules/yield-star-spacing
         */
        "@stylistic/yield-star-spacing": "off",

    },

}

/**
 * ESLint ready config for `@futagoza/eslint-config-core/rules/style.js`
 */
export default [ config ]
