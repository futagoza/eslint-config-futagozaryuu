"use strict";

module.exports = {

    "rules": {

        /**
         * 🔧 enforce linebreaks after opening and before closing array brackets
         *
         * @see http://eslint.org/docs/rules/array-bracket-newline
         */
        "array-bracket-newline": "off",

        /**
         * 🔧 enforce consistent spacing inside array brackets
         *
         * @see http://eslint.org/docs/rules/array-bracket-spacing
         */
        "array-bracket-spacing": [ "error", "always" ],

        /**
         * 🔧 enforce line breaks after each array element
         *
         * @see http://eslint.org/docs/rules/array-element-newline
         */
        "array-element-newline": "off",

        /**
         * 🔧 enforce consistent spacing inside single-line blocks
         *
         * @see http://eslint.org/docs/rules/block-spacing
         */
        "block-spacing": [ "error", "always" ],

        /**
         * 🔧 enforce consistent brace style for blocks
         *
         * @see http://eslint.org/docs/rules/brace-style
         */
        "brace-style": [ "error", "1tbs", { "allowSingleLine": true } ],

        /**
         * enforce camelcase naming convention
         *
         * @see http://eslint.org/docs/rules/camelcase
         */
        "camelcase": "off",

        /**
         * 🔧 enforce or disallow capitalization of the first letter of a comment
         *
         * @see http://eslint.org/docs/rules/capitalized-comments
         */
        "capitalized-comments": "off",

        /**
         * 🔧 require or disallow trailing commas
         *
         * @see http://eslint.org/docs/rules/comma-dangle
         */
        "comma-dangle": [ "warn", "always-multiline" ],

        /**
         * 🔧 enforce consistent spacing before and after commas
         *
         * @see http://eslint.org/docs/rules/comma-spacing
         */
        "comma-spacing": [ "error", { "before": false, "after": true } ],

        /**
         * 🔧 enforce consistent comma style
         *
         * @see http://eslint.org/docs/rules/comma-style
         */
        "comma-style": [ "error", "last" ],

        /**
         * 🔧 enforce consistent spacing inside computed property brackets
         *
         * @see http://eslint.org/docs/rules/computed-property-spacing
         */
        "computed-property-spacing": [ "error", "always" ],

        /**
         * enforce consistent naming when capturing the current execution context
         *
         * @see http://eslint.org/docs/rules/consistent-this
         */
        "consistent-this": "off",

        /**
         * 🔧 require or disallow newline at the end of files
         *
         * @see http://eslint.org/docs/rules/eol-last
         */
        "eol-last": [ "error", "always" ],

        /**
         * 🔧 require or disallow spacing between function identifiers and their invocations
         *
         * @see http://eslint.org/docs/rules/func-call-spacing
         */
        "func-call-spacing": [ "error", "never" ],

        /**
         * require function names to match the name of the variable or property to which they are assigned
         *
         * @see http://eslint.org/docs/rules/func-name-matching
         */
        "func-name-matching": "off",

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
        "func-style": "off",

        /**
         * 🔧 enforce line breaks between arguments of a function call
         *
         * @see http://eslint.org/docs/rules/function-call-argument-newline
         */
        "function-call-argument-newline": [ "error", "consistent" ],

        /**
         * 🔧 enforce consistent line breaks inside function parentheses
         *
         * @see http://eslint.org/docs/rules/function-paren-newline
         */
        "function-paren-newline": [ "error", "multiline-arguments" ],

        /**
         * disallow specified identifiers
         *
         * @see http://eslint.org/docs/rules/id-blacklist
         */
        "id-blacklist": "off",

        /**
         * enforce minimum and maximum identifier lengths
         *
         * @see http://eslint.org/docs/rules/id-length
         */
        "id-length": "off",

        /**
         * require identifiers to match a specified regular expression
         *
         * @see http://eslint.org/docs/rules/id-match
         */
        "id-match": "off",

        /**
         * 🔧 enforce the location of arrow function bodies
         *
         * @see http://eslint.org/docs/rules/implicit-arrow-linebreak
         */
        "implicit-arrow-linebreak": "off",

        /**
         * 🔧 enforce consistent indentation (rewrote in ESLint 4.0.0)
         *
         * @see http://eslint.org/docs/rules/indent
         */
        "indent": [ "error", 4, {

            "SwitchCase": 1,
            "VariableDeclarator": "first",
            "ignoredNodes": [
                "ConditionalExpression",
            ],

        } ],

        /**
         * 🔧 enforce the consistent use of either double or single quotes in JSX attributes
         *
         * @see http://eslint.org/docs/rules/jsx-quotes
         */
        "jsx-quotes": "off",

        /**
         * 🔧 enforce consistent spacing between keys and values in object literal properties
         *
         * @see http://eslint.org/docs/rules/key-spacing
         */
        "key-spacing": [ "error", {

            "beforeColon": false,
            "afterColon": true,
            "mode": "minimum",

        } ],

        /**
         * 🔧 enforce consistent spacing before and after keywords
         *
         * @see http://eslint.org/docs/rules/keyword-spacing
         */
        "keyword-spacing": [ "error", {

            "before": true,
            "after": true,
            "overrides": {

                "super": { "after": false },

            },

        } ],

        /**
         * enforce position of line comments
         *
         * @see http://eslint.org/docs/rules/line-comment-position
         */
        "line-comment-position": "off",

        /**
         * 🔧 enforce consistent linebreak style
         *
         * @see http://eslint.org/docs/rules/linebreak-style
         */
        "linebreak-style": [ "error", "unix" ],

        /**
         * 🔧 require empty lines around comments
         *
         * @see http://eslint.org/docs/rules/lines-around-comment
         */
        "lines-around-comment": "off",

        /**
         * 🔧 require or disallow an empty line between class members
         *
         * @see http://eslint.org/docs/rules/lines-between-class-members
         */
        "lines-between-class-members": [ "error", "always" ],

        /**
         * enforce a maximum depth that blocks can be nested
         *
         * @see http://eslint.org/docs/rules/max-depth
         */
        "max-depth": "off",

        /**
         * enforce a maximum line length
         *
         * @see http://eslint.org/docs/rules/max-len
         */
        "max-len": "off",

        /**
         * enforce a maximum number of lines per file
         *
         * @see http://eslint.org/docs/rules/max-lines
         */
        "max-lines": "off",

        /**
         * enforce a maximum number of line of code in a function
         * 
         * @see http://eslint.org/docs/rules/max-lines-per-function
         */
        "max-lines-per-function": "off",

        /**
         * enforce a maximum depth that callbacks can be nested
         *
         * @see http://eslint.org/docs/rules/max-nested-callbacks
         */
        "max-nested-callbacks": "off",

        /**
         * enforce a maximum number of parameters in function definitions
         *
         * @see http://eslint.org/docs/rules/max-params
         */
        "max-params": "off",

        /**
         * enforce a maximum number of statements allowed in function blocks
         *
         * @see http://eslint.org/docs/rules/max-statements
         */
        "max-statements": "off",

        /**
         * enforce a maximum number of statements allowed per line
         *
         * @see http://eslint.org/docs/rules/max-statements-per-line
         */
        "max-statements-per-line": "off",

        /**
         * 🔧 enforce a particular style for multiline comments
         *
         * @see http://eslint.org/docs/rules/multiline-comment-style
         */
        "multiline-comment-style": "off",

        /**
         * enforce newlines between operands of ternary expressions
         *
         * @see http://eslint.org/docs/rules/multiline-ternary
         */
        "multiline-ternary": "off",

        /**
         * require constructor names to begin with a capital letter
         *
         * @see http://eslint.org/docs/rules/new-cap
         */
        "new-cap": "off",

        /**
         * 🔧 require parentheses when invoking a constructor with no arguments
         *
         * @see http://eslint.org/docs/rules/new-parens
         */
        "new-parens": [ "error", "always" ],

        /**
         * 🔧 require a newline after each call in a method chain
         * 
         * _NOTE:_ Only fixable in ESlint 4.7+
         * 
         * @see http://eslint.org/docs/rules/newline-per-chained-call
         */
        "newline-per-chained-call": [ "warn", { "ignoreChainWithDepth": 5 } ],

        /**
         * disallow `Array` constructors
         *
         * @see http://eslint.org/docs/rules/no-array-constructor
         */
        "no-array-constructor": "off",

        /**
         * disallow bitwise operators
         *
         * @see http://eslint.org/docs/rules/no-bitwise
         */
        "no-bitwise": "off",

        /**
         * disallow `continue` statements
         *
         * @see http://eslint.org/docs/rules/no-continue
         */
        "no-continue": "off",

        /**
         * disallow inline comments after code
         *
         * @see http://eslint.org/docs/rules/no-inline-comments
         */
        "no-inline-comments": "off",

        /**
         * 🔧 disallow `if` statements as the only statement in `else` blocks
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
        "no-multi-assign": "off",

        /**
         * 🔧 disallow multiple empty lines
         *
         * @see http://eslint.org/docs/rules/no-multiple-empty-lines
         */
        "no-multiple-empty-lines": "error",

        /**
         * disallow negated conditions
         *
         * @see http://eslint.org/docs/rules/no-negated-condition
         */
        "no-negated-condition": "off",

        /**
         * disallow nested ternary expressions
         *
         * @see http://eslint.org/docs/rules/no-nested-ternary
         */
        "no-nested-ternary": "off",

        /**
         * disallow `Object` constructors
         *
         * @see http://eslint.org/docs/rules/no-new-object
         */
        "no-new-object": "off",

        /**
         * disallow the unary operators `++` and `--`
         *
         * @see http://eslint.org/docs/rules/no-plusplus
         */
        "no-plusplus": "off",

        /**
         * disallow specified syntax
         *
         * @see http://eslint.org/docs/rules/no-restricted-syntax
         */
        "no-restricted-syntax": "off",

        /**
         * disallow all tabs
         *
         * @see http://eslint.org/docs/rules/no-tabs
         */
        "no-tabs": "off",

        /**
         * disallow ternary operators
         *
         * @see http://eslint.org/docs/rules/no-ternary
         */
        "no-ternary": "off",

        /**
         * 🔧 disallow trailing whitespace at the end of lines
         *
         * @see http://eslint.org/docs/rules/no-trailing-spaces
         */
        "no-trailing-spaces": [ "error", {

            "ignoreComments": true,
            "skipBlankLines": false,

        } ],

        /**
         * disallow dangling underscores in identifiers
         *
         * @see http://eslint.org/docs/rules/no-underscore-dangle
         */
        "no-underscore-dangle": "off",

        /**
         * 🔧 disallow ternary operators when simpler alternatives exist
         *
         * @see http://eslint.org/docs/rules/no-unneeded-ternary
         */
        "no-unneeded-ternary": [ "warn", { "defaultAssignment": false } ],

        /**
         * 🔧 disallow whitespace before properties
         *
         * @see http://eslint.org/docs/rules/no-whitespace-before-property
         */
        "no-whitespace-before-property": "error",

        /**
         * 🔧 enforce the location of single-line statements
         *
         * @see http://eslint.org/docs/rules/nonblock-statement-body-position
         */
        "nonblock-statement-body-position": "off",

        /**
         * 🔧 enforce consistent line breaks inside braces
         *
         * @see http://eslint.org/docs/rules/object-curly-newline
         */
        "object-curly-newline": "off",

        /**
         * 🔧 enforce consistent spacing inside braces
         *
         * @see http://eslint.org/docs/rules/object-curly-spacing
         */
        "object-curly-spacing": [ "error", "always" ],

        /**
         * 🔧 enforce placing object properties on separate lines
         *
         * @see http://eslint.org/docs/rules/object-property-newline
         */
        "object-property-newline": "off",

        /**
         * 🔧 enforce variables to be declared either together or separately in functions
         *
         * @see http://eslint.org/docs/rules/one-var
         */
        "one-var": [ "error", {

            "initialized": "never",
            "uninitialized": "consecutive",

        } ],

        /**
         * 🔧 require or disallow newlines around variable declarations
         *
         * @see http://eslint.org/docs/rules/one-var-declaration-per-line
         */
        "one-var-declaration-per-line": "off",

        /**
         * 🔧 require or disallow assignment operator shorthand where possible
         *
         * @see http://eslint.org/docs/rules/operator-assignment
         */
        "operator-assignment": [ "error", "always" ],

        /**
         * 🔧 enforce consistent linebreak style for operators
         *
         * @see http://eslint.org/docs/rules/operator-linebreak
         */
        "operator-linebreak": "off",

        /**
         * 🔧 require or disallow padding within blocks
         *
         * @see http://eslint.org/docs/rules/padded-blocks
         */
        "padded-blocks": [ "error", {

            "blocks": "always",
            "switches": "always",
            "classes": "always",

        }, {

            "allowSingleLineBlocks": true,

        } ],

        /**
         * 🔧 require or disallow padding lines between statements
         *
         * @see http://eslint.org/docs/rules/padding-line-between-statements
         */
        "padding-line-between-statements": [ "error",

            { blankLine: "always", prev: "*", next: "case" },
            { blankLine: "never", prev: "case", next: "case" },

            { blankLine: "always", prev: "*", next: "default" },

            { blankLine: "always", prev: "directive", next: "*" },
            { blankLine: "any", prev: "directive", next: "directive" },

            { blankLine: "always", prev: "import", next: "*" },
            { blankLine: "any", prev: "import", next: "import" },

        ],

        /**
         * 🔧 disallow the use of `Math.pow` in favor of the `**` operator
         *
         * @see http://eslint.org/docs/rules/prefer-exponentiation-operator
         */
        "prefer-exponentiation-operator": "warn",

        /**
         * 🔧 disallow using Object.assign with an object literal as the first argument and prefer
         * the use of object spread instead.
         *
         * @see http://eslint.org/docs/rules/prefer-object-spread
         */
        "prefer-object-spread": "off",

        /**
         * 🔧 require quotes around object literal property names
         *
         * @see http://eslint.org/docs/rules/quote-props
         */
        "quote-props": "off",

        /**
         * 🔧 enforce the consistent use of either backticks, double, or single quotes
         *
         * @see http://eslint.org/docs/rules/quotes
         */
        "quotes": [ "error", "double", { "allowTemplateLiterals": true } ],

        /**
         * 🔧 require or disallow semicolons instead of ASI
         *
         * @see http://eslint.org/docs/rules/semi
         */
        "semi": [ "error", "always", { "omitLastInOneLineBlock": true } ],

        /**
         * 🔧 enforce consistent spacing before and after semicolons
         *
         * @see http://eslint.org/docs/rules/semi-spacing
         */
        "semi-spacing": [ "error", { "before": false, "after": true } ],

        /**
         * 🔧 enforce location of semicolons
         *
         * @see http://eslint.org/docs/rules/semi-style
         */
        "semi-style": [ "error", "last" ],

        /**
         * require object keys to be sorted
         *
         * @see http://eslint.org/docs/rules/sort-keys
         */
        "sort-keys": "off",

        /**
         * 🔧 require variables within the same declaration block to be sorted
         *
         * @see http://eslint.org/docs/rules/sort-vars
         */
        "sort-vars": "off",

        /**
         * 🔧 enforce consistent spacing before blocks
         *
         * @see http://eslint.org/docs/rules/space-before-blocks
         */
        "space-before-blocks": [ "error", {

            "functions": "always",
            "keywords": "always",
            "classes": "always",

        } ],

        /**
         * 🔧 enforce consistent spacing before `function` definition opening parenthesis
         *
         * @see http://eslint.org/docs/rules/space-before-function-paren
         */
        "space-before-function-paren": [ "error", {

            "anonymous": "always",
            "named": "never",
            "asyncArrow": "ignore",

        } ],

        /**
         * 🔧 enforce consistent spacing inside parentheses
         *
         * @see http://eslint.org/docs/rules/space-in-parens
         */
        "space-in-parens": [ "error", "always" ],

        /**
         * 🔧 require spacing around infix operators
         *
         * @see http://eslint.org/docs/rules/space-infix-ops
         */
        "space-infix-ops": [ "error", { "int32Hint": true } ],

        /**
         * 🔧 enforce consistent spacing before or after unary operators
         *
         * @see http://eslint.org/docs/rules/space-unary-ops
         */
        "space-unary-ops": [ "error", {

            "words": true,
            "nonwords": false,
            "overrides": {
                "!": true,
                "!!": true,
            },

        } ],

        /**
         * 🔧 enforce consistent spacing after the `//` or `/*` in a comment
         *
         * @see http://eslint.org/docs/rules/spaced-comment
         */
        "spaced-comment": [ "error", "always", {

            "markers": [ "/", "!", "#" ],
            "exceptions": [ "-", "+", "*" ],

        } ],

        /**
         * 🔧 enforce spacing around colons of switch statements
         *
         * @see http://eslint.org/docs/rules/switch-colon-spacing
         */
        "switch-colon-spacing": [ "error", {

            "after": true,
            "before": false,

        } ],

        /**
         * 🔧 require or disallow spacing between template tags and their literals
         *
         * @see http://eslint.org/docs/rules/template-tag-spacing
         */
        "template-tag-spacing": "off",

        /**
         * 🔧 require or disallow Unicode byte order mark (BOM)
         *
         * @see http://eslint.org/docs/rules/unicode-bom
         */
        "unicode-bom": "warn",

        /**
         * 🔧 require parenthesis around regex literals
         *
         * @see http://eslint.org/docs/rules/wrap-regex
         */
        "wrap-regex": "error",

    },

};
