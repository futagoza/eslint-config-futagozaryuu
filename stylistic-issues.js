"use strict";

module.exports = {

    "rules": {

        /**
         * 📝 enforce consistent spacing inside array brackets
         *
         * @see http://eslint.org/docs/rules/array-bracket-spacing
         */
        "array-bracket-spacing": [ "error", "always", {

            "singleValue": true,
            "arraysInArrays": false

        } ],

        /**
         * 📝 enforce consistent spacing inside single-line blocks
         *
         * @see http://eslint.org/docs/rules/block-spacing
         */
        "block-spacing": [ "error", "always" ],

        /**
         * 📝 enforce consistent brace style for blocks
         *
         * @see http://eslint.org/docs/rules/brace-style
         */
        "brace-style": [ "error", "1tbs", { "allowSingleLine": true } ],

        /**
         * enforce camelcase naming convention
         *
         * @see http://eslint.org/docs/rules/camelcase
         */
        "camelcase": 0,

        /**
         * 📝 enforce or disallow capitalization of the first letter of a comment
         *
         * @see http://eslint.org/docs/rules/capitalized-comments
         */
        "capitalized-comments": 0,

        /**
         * 📝 require or disallow trailing commas
         *
         * @see http://eslint.org/docs/rules/comma-dangle
         */
        "comma-dangle": 0,

        /**
         * 📝 enforce consistent spacing before and after commas
         *
         * @see http://eslint.org/docs/rules/comma-spacing
         */
        "comma-spacing": [ "error", { "before": false, "after": true } ],

        /**
         * 📝 enforce consistent comma style
         *
         * @see http://eslint.org/docs/rules/comma-style
         */
        "comma-style": [ "error", "last" ],

        /**
         * 📝 enforce consistent spacing inside computed property brackets
         *
         * @see http://eslint.org/docs/rules/computed-property-spacing
         */
        "computed-property-spacing": [ "error", "always" ],

        /**
         * enforce consistent naming when capturing the current execution context
         *
         * @see http://eslint.org/docs/rules/consistent-this
         */
        "consistent-this": 0,

        /**
         * 📝 require or disallow newline at the end of files
         *
         * @see http://eslint.org/docs/rules/eol-last
         */
        "eol-last": [ "error", "always" ],

        /**
         * 📝 require or disallow spacing between function identifiers and their invocations
         *
         * @see http://eslint.org/docs/rules/func-call-spacing
         */
        "func-call-spacing": [ "error", "never" ],

        /**
         * require function names to match the name of the variable or property to which they are assigned
         *
         * @see http://eslint.org/docs/rules/func-name-matching
         */
        "func-name-matching": 0,

        /**
         * require or disallow named `function` expressions
         *
         * @see http://eslint.org/docs/rules/func-names
         */
        "func-names": [ "error", "always" ],

        /**
         * enforce the consistent use of either `function` declarations or expressions
         *
         * @see http://eslint.org/docs/rules/func-style
         */
        "func-style": 0,

        /**
         * disallow specified identifiers
         *
         * @see http://eslint.org/docs/rules/id-blacklist
         */
        "id-blacklist": 0,

        /**
         * enforce minimum and maximum identifier lengths
         *
         * @see http://eslint.org/docs/rules/id-length
         */
        "id-length": 0,

        /**
         * require identifiers to match a specified regular expression
         *
         * @see http://eslint.org/docs/rules/id-match
         */
        "id-match": 0,

        /**
         * 📝 enforce consistent indentation
         *
         * @see http://eslint.org/docs/rules/indent
         */
        "indent": [ "error", 4, { "SwitchCase": 1 } ],

        /**
         * 📝 enforce the consistent use of either double or single quotes in JSX attributes
         *
         * @see http://eslint.org/docs/rules/jsx-quotes
         */
        "jsx-quotes": 0,

        /**
         * 📝 enforce consistent spacing between keys and values in object literal properties
         *
         * @see http://eslint.org/docs/rules/indent
         */
        "key-spacing": [ "error", {

            "beforeColon": false,
            "afterColon": true

        } ],

        /**
         * 📝 enforce consistent spacing before and after keywords
         *
         * @see http://eslint.org/docs/rules/indent
         */
        "keyword-spacing": [ "error", {

            "before": true,
            "after": true,
            "overrides": {

                "super": { "after": false }

            }

        } ],

        /**
         * enforce position of line comments
         *
         * @see http://eslint.org/docs/rules/line-comment-position
         */
        "line-comment-position": 0,

        /**
         * 📝 enforce consistent linebreak style
         *
         * @see http://eslint.org/docs/rules/linebreak-style
         */
        "linebreak-style": 0,

        /**
         * 📝 require empty lines around comments
         *
         * @see http://eslint.org/docs/rules/lines-around-comment
         */
        "lines-around-comment": 0,

        /**
         * 📝 require or disallow newlines around directives
         *
         * @see http://eslint.org/docs/rules/lines-around-directive
         */
        "lines-around-directive": 0,

        /**
         * enforce a maximum depth that blocks can be nested
         *
         * @see http://eslint.org/docs/rules/max-depth
         */
        "max-depth": 0,

        /**
         * enforce a maximum line length
         *
         * @see http://eslint.org/docs/rules/max-len
         */
        "max-len": 0,

        /**
         * enforce a maximum number of lines per file
         *
         * @see http://eslint.org/docs/rules/max-lines
         */
        "max-lines": 0,

        /**
         * enforce a maximum depth that callbacks can be nested
         *
         * @see http://eslint.org/docs/rules/max-nested-callbacks
         */
        "max-nested-callbacks": 0,

        /**
         * enforce a maximum number of parameters in function definitions
         *
         * @see http://eslint.org/docs/rules/max-params
         */
        "max-params": 0,

        /**
         * enforce a maximum number of statements allowed in function blocks
         *
         * @see http://eslint.org/docs/rules/max-statements
         */
        "max-statements": 0,

        /**
         * enforce a maximum number of statements allowed per line
         *
         * @see http://eslint.org/docs/rules/max-statements-per-line
         */
        "max-statements-per-line": 0,

        /**
         * enforce newlines between operands of ternary expressions
         *
         * @see http://eslint.org/docs/rules/multiline-ternary
         */
        "multiline-ternary": 0,

        /**
         * require constructor names to begin with a capital letter
         *
         * @see http://eslint.org/docs/rules/new-cap
         */
        "new-cap": 0,

        /**
         * 📝 require parentheses when invoking a constructor with no arguments
         *
         * @see http://eslint.org/docs/rules/new-parens
         */
        "new-parens": "error",

        /**
         * 📝 require or disallow an empty line after variable declarations
         *
         * @see http://eslint.org/docs/rules/newline-after-var
         */
        "newline-after-var": 0,

        /**
         * 📝 require an empty line before `return` statements
         *
         * @see http://eslint.org/docs/rules/newline-before-return
         */
        "newline-before-return": 0,

        /**
         * require a newline after each call in a method chain
         *
         * @see http://eslint.org/docs/rules/newline-per-chained-call
         */
        "newline-per-chained-call": [ "warn", { "ignoreChainWithDepth": 3 } ],

        /**
         * disallow `Array` constructors
         *
         * @see http://eslint.org/docs/rules/no-array-constructor
         */
        "no-array-constructor": 0,

        /**
         * disallow bitwise operators
         *
         * @see http://eslint.org/docs/rules/no-bitwise
         */
        "no-bitwise": 0,

        /**
         * disallow `continue` statements
         *
         * @see http://eslint.org/docs/rules/no-continue
         */
        "no-continue": 0,

        /**
         * disallow inline comments after code
         *
         * @see http://eslint.org/docs/rules/no-inline-comments
         */
        "no-inline-comments": 0,

        /**
         * 📝 disallow `if` statements as the only statement in `else` blocks
         *
         * @see http://eslint.org/docs/rules/no-lonely-if
         */
        "no-lonely-if": "warn",

        /**
         * disallow mixed binary operators
         *
         * @see http://eslint.org/docs/rules/no-mixed-operators
         */
        "no-mixed-operators": [ "warn", { "allowSamePrecedence": false } ],

        /**
         * disallow mixed spaces and tabs for indentation
         *
         * @see http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
         */
        "no-mixed-spaces-and-tabs": "error",

        /**
         * disallow use of chained assignment expressions
         *
         * @see http://eslint.org/docs/rules/no-multi-assign
         */
        "no-multi-assign": 0,

        /**
         * 📝 disallow multiple empty lines
         *
         * @see http://eslint.org/docs/rules/no-multiple-empty-lines
         */
        "no-multiple-empty-lines": "error",

        /**
         * disallow negated conditions
         *
         * @see http://eslint.org/docs/rules/no-negated-condition
         */
        "no-negated-condition": 0,

        /**
         * disallow nested ternary expressions
         *
         * @see http://eslint.org/docs/rules/no-nested-ternary
         */
        "no-nested-ternary": 0,

        /**
         * disallow `Object` constructors
         *
         * @see http://eslint.org/docs/rules/no-new-object
         */
        "no-new-object": 0,

        /**
         * disallow the unary operators `++` and `--`
         *
         * @see http://eslint.org/docs/rules/no-plusplus
         */
        "no-plusplus": 0,

        /**
         * disallow specified syntax
         *
         * @see http://eslint.org/docs/rules/no-restricted-syntax
         */
        "no-restricted-syntax": 0,

        /**
         * disallow all tabs
         *
         * @see http://eslint.org/docs/rules/no-tabs
         */
        "no-tabs": 0,

        /**
         * disallow ternary operators
         *
         * @see http://eslint.org/docs/rules/no-ternary
         */
        "no-ternary": 0,

        /**
         * 📝 disallow trailing whitespace at the end of lines
         *
         * @see http://eslint.org/docs/rules/no-trailing-spaces
         *      https://github.com/eslint/eslint/issues/1229
         *      https://github.com/eslint/eslint/pull/8061
         */
        "no-trailing-spaces": [ "error", { "skipBlankLines": false } ],

        /**
         * disallow dangling underscores in identifiers
         *
         * @see http://eslint.org/docs/rules/no-underscore-dangle
         */
        "no-underscore-dangle": 0,

        /**
         * 📝 disallow ternary operators when simpler alternatives exist
         *
         * @see http://eslint.org/docs/rules/no-unneeded-ternary
         */
        "no-unneeded-ternary": 0,

        /**
         * 📝 disallow whitespace before properties
         *
         * @see http://eslint.org/docs/rules/no-whitespace-before-property
         */
        "no-whitespace-before-property": "error",

        /**
         * 📝 enforce the location of single-line statements
         *
         * @see http://eslint.org/docs/rules/nonblock-statement-body-position
         */
        "nonblock-statement-body-position": 0,

        /**
         * 📝 enforce consistent line breaks inside braces
         *
         * @see http://eslint.org/docs/rules/object-curly-newline
         */
        "object-curly-newline": 0,

        /**
         * 📝 enforce consistent spacing inside braces
         *
         * @see http://eslint.org/docs/rules/object-curly-spacing
         */
        "object-curly-spacing": [ "error", "always" ],

        /**
         * 📝 enforce placing object properties on separate lines
         *
         * @see http://eslint.org/docs/rules/object-property-newline
         */
        "object-property-newline": 0,

        /**
         * enforce variables to be declared either together or separately in functions
         *
         * @see http://eslint.org/docs/rules/one-var
         */
        "one-var": [ "error", { "initialized": "never" } ],

        /**
         * 📝 require or disallow newlines around variable declarations
         *
         * @see http://eslint.org/docs/rules/one-var-declaration-per-line
         */
        "one-var-declaration-per-line": 0,

        /**
         * 📝 require or disallow assignment operator shorthand where possible
         *
         * @see http://eslint.org/docs/rules/
         */
        "operator-assignment": [ "error", "always" ],

        /**
         * 📝 enforce consistent linebreak style for operators
         *
         * @see http://eslint.org/docs/rules/operator-linebreak
         */
        "operator-linebreak": 0,

        /**
         * 📝 require or disallow padding within blocks
         *
         * @see http://eslint.org/docs/rules/padded-blocks
         */
        "padded-blocks": [ "error", {

            "blocks": "always",
            "switches": "always",
            "classes": "always"

        } ],

        /**
         * 📝 require quotes around object literal property names
         *
         * @see http://eslint.org/docs/rules/quote-props
         */
        "quote-props": 0,

        /**
         * 📝 enforce the consistent use of either backticks, double, or single quotes
         *
         * @see http://eslint.org/docs/rules/quotes
         */
        "quotes": [ "error", "double", { "allowTemplateLiterals": true } ],

        /**
         * 📝 require or disallow semicolons instead of ASI
         *
         * @see http://eslint.org/docs/rules/semi
         */
        "semi": [ "error", "always", { "omitLastInOneLineBlock": true } ],

        /**
         * 📝 enforce consistent spacing before and after semicolons
         *
         * @see http://eslint.org/docs/rules/semi-spacing
         */
        "semi-spacing": [ "error", { "before": false, "after": true } ],

        /**
         * require object keys to be sorted
         *
         * @see http://eslint.org/docs/rules/sort-keys
         */
        "sort-keys": 0,

        /**
         * require variables within the same declaration block to be sorted
         *
         * @see http://eslint.org/docs/rules/sort-vars
         */
        "sort-vars": 0,

        /**
         * 📝 enforce consistent spacing before blocks
         *
         * @see http://eslint.org/docs/rules/space-before-blocks
         */
        "space-before-blocks": [ "error", {

            "functions": "always",
            "keywords": "always",
            "classes": "always"

        } ],

        /**
         * 📝 enforce consistent spacing before `function` definition opening parenthesis
         *
         * @see http://eslint.org/docs/rules/space-before-function-paren
         */
        "space-before-function-paren": [ "error", {

            "anonymous": "always",
            "named": "never",
            "asyncArrow": "ignore"

        } ],

        /**
         * 📝 enforce consistent spacing inside parentheses
         *
         * @see http://eslint.org/docs/rules/space-in-parens
         */
        "space-in-parens": [ "error", "always" ],

        /**
         * 📝 require spacing around infix operators
         *
         * @see http://eslint.org/docs/rules/space-infix-ops
         */
        "space-infix-ops": [ "error", { "int32Hint": true } ],

        /**
         * 📝 enforce consistent spacing before or after unary operators
         *
         * @see http://eslint.org/docs/rules/space-unary-ops
         */
        "space-unary-ops": [ "error", {

            "words": true,
            "nonwords": false,
            "overrides": {
                "!": true,
                "!!": true
            }

        } ],

        /**
         * 📝 enforce consistent spacing after the `//` or `/*` in a comment
         *
         * @see http://eslint.org/docs/rules/spaced-comment
         */
        "spaced-comment": [ "error", "always", { "exceptions": [ "-", "+" ] } ],

        /**
         * 📝 require or disallow spacing between template tags and their literals
         *
         * @see http://eslint.org/docs/rules/template-tag-spacing
         */
        "template-tag-spacing": 0,

        /**
         * 📝 require or disallow Unicode byte order mark (BOM)
         *
         * @see http://eslint.org/docs/rules/unicode-bom
         */
        "unicode-bom": "warn",

        /**
         * 📝 require parenthesis around regex literals
         *
         * @see http://eslint.org/docs/rules/wrap-regex
         */
        "wrap-regex": "error"

    }

};
