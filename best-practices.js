"use strict";

module.exports = {

    "rules": {

        /**
         * enforce getter and setter pairs in objects
         *
         * @see http://eslint.org/docs/rules/accessor-pairs
         */
        "accessor-pairs": 0,

        /**
         * enforce `return` statements in callbacks of array methods
         *
         * @see http://eslint.org/docs/rules/array-callback-return
         */
        "array-callback-return": 0,

        /**
         * enforce the use of variables within the scope they are defined
         *
         * @see http://eslint.org/docs/rules/block-scoped-var
         */
        "block-scoped-var": 0,

        /**
         * enforce that class methods utilize `this`
         *
         * @see http://eslint.org/docs/rules/class-methods-use-this
         */
        "class-methods-use-this": 0,

        /**
         * enforce a maximum cyclomatic complexity allowed in a program
         *
         * @see http://eslint.org/docs/rules/complexity
         */
        "complexity": 0,

        /**
         * require `return` statements to either always or never specify values
         *
         * @see http://eslint.org/docs/rules/consistent-return
         */
        "consistent-return": 0,

        /**
         * 📝 enforce consistent brace style for all control statements
         *
         * @see http://eslint.org/docs/rules/curly
         */
        "curly": 0,

        /**
         * require `default` cases in `switch` statements
         *
         * @see http://eslint.org/docs/rules/default-case
         */
        "default-case": 0,

        /**
         * 📝 enforce consistent newlines before and after dots
         *
         * @see http://eslint.org/docs/rules/dot-location
         */
        "dot-location": 0,

        /**
         * 📝 enforce dot notation whenever possible
         *
         * @see http://eslint.org/docs/rules/dot-notation
         */
        "dot-notation": 0,

        /**
         * 📝 require the use of `===` and `!==`
         *
         * @see http://eslint.org/docs/rules/eqeqeq
         */
        "eqeqeq": [ "error", "always", { "null": "ignore" } ],

        /**
         * require `for-in` loops to include an `if` statement
         *
         * @see http://eslint.org/docs/rules/guard-for-in
         */
        "guard-for-in": "warn",

        /**
         * enforce a maximum number of classes per file
         *
         * @see http://eslint.org/docs/rules/max-classes-per-file
         */
        "max-classes-per-file": 0,

        /**
         * disallow the use of `alert`, `confirm`, and `prompt`
         *
         * @see http://eslint.org/docs/rules/no-alert
         */
        "no-alert": 0,

        /**
         * disallow the use of `arguments.caller` or `arguments.callee`
         *
         * @see http://eslint.org/docs/rules/no-caller
         */
        "no-caller": 0,

        /**
         * disallow lexical declarations in case clauses
         *
         * @see http://eslint.org/docs/rules/no-case-declarations
         */
        "no-case-declarations": 0,

        /**
         * 📝 disallow division operators explicitly at the beginning of regular expressions
         *
         * @see http://eslint.org/docs/rules/no-div-regex
         */
        "no-div-regex": "warn",

        /**
         * 📝 disallow `else` blocks after `return` statements in `if` statements
         *
         * @see http://eslint.org/docs/rules/no-else-return
         */
        "no-else-return": [ "warn", { allowElseIf: false } ],

        /**
         * disallow empty functions
         *
         * @see http://eslint.org/docs/rules/no-empty-function
         */
        "no-empty-function": 0,

        /**
         * disallow empty destructuring patterns
         *
         * @see http://eslint.org/docs/rules/no-empty-pattern
         */
        "no-empty-pattern": "error",

        /**
         * disallow `null` comparisons without type-checking operators
         *
         * @see http://eslint.org/docs/rules/no-eq-null
         */
        "no-eq-null": 0,

        /**
         * disallow the use of `eval()`
         *
         * @see http://eslint.org/docs/rules/no-eval
         */
        "no-eval": "warn",

        /**
         * disallow extending native types
         *
         * @see http://eslint.org/docs/rules/no-extend-native
         */
        "no-extend-native": 0,

        /**
         * 📝 disallow unnecessary calls to `.bind()`
         *
         * @see http://eslint.org/docs/rules/no-extra-bind
         */
        "no-extra-bind": "warn",

        /**
         * 📝 disallow unnecessary labels
         *
         * @see http://eslint.org/docs/rules/no-extra-label
         */
        "no-extra-label": 0,

        /**
         * disallow fallthrough of `case` statements
         *
         * @see http://eslint.org/docs/rules/no-fallthrough
         */
        "no-fallthrough": "error",

        /**
         * 📝 disallow leading or trailing decimal points in numeric literals
         *
         * @see http://eslint.org/docs/rules/no-floating-decimal
         */
        "no-floating-decimal": "warn",

        /**
         * disallow assignments to native objects or read-only global variables
         *
         * @see http://eslint.org/docs/rules/no-global-assign
         */
        "no-global-assign": 0,

        /**
         * 📝 disallow shorthand type conversions
         *
         * @see http://eslint.org/docs/rules/no-implicit-coercion
         */
        "no-implicit-coercion": 0,

        /**
         * disallow variable and `function` declarations in the global scope
         *
         * @see http://eslint.org/docs/rules/no-implicit-globals
         */
        "no-implicit-globals": 0,

        /**
         * disallow the use of `eval()`-like methods
         *
         * @see http://eslint.org/docs/rules/no-implied-eval
         */
        "no-implied-eval": "warn",

        /**
         * disallow `this` keywords outside of classes or class-like objects
         *
         * @see http://eslint.org/docs/rules/no-invalid-this
         */
        "no-invalid-this": 0,

        /**
         * disallow the use of the __iterator__ property
         *
         * @see http://eslint.org/docs/rules/no-iterator
         */
        "no-iterator": 0,

        /**
         * disallow labeled statements
         *
         * @see http://eslint.org/docs/rules/no-labels
         */
        "no-labels": 0,

        /**
         * disallow unnecessary nested blocks
         *
         * @see http://eslint.org/docs/rules/no-lone-blocks
         */
        "no-lone-blocks": 0,

        /**
         * disallow `function` declarations and expressions inside loop statements
         *
         * @see http://eslint.org/docs/rules/no-loop-func
         */
        "no-loop-func": "error",

        /**
         * disallow magic numbers
         *
         * @see http://eslint.org/docs/rules/no-magic-numbers
         */
        "no-magic-numbers": 0,

        /**
         * 📝 disallow multiple spaces
         *
         * @see http://eslint.org/docs/rules/no-multi-spaces
         */
        "no-multi-spaces": [ "error", {

            "ignoreEOLComments": true,
            "exceptions": {
                "BinaryExpression": false,
                "ImportDeclaration": true,
                "Property": true,
                "VariableDeclarator": true,
            },

        } ],

        /**
         * disallow multiline strings
         *
         * @see http://eslint.org/docs/rules/no-multi-str
         */
        "no-multi-str": "warn",

        /**
         * disallow `new` operators outside of assignments or comparisons
         *
         * @see http://eslint.org/docs/rules/no-new
         */
        "no-new": 0,

        /**
         * disallow `new` operators with the `Function` object
         *
         * @see http://eslint.org/docs/rules/no-new-func
         */
        "no-new-func": 0,

        /**
         * disallow `new` operators with the `String`, `Number`, and `Boolean` objects
         *
         * @see http://eslint.org/docs/rules/no-new-wrappers
         */
        "no-new-wrappers": "warn",

        /**
         * disallow octal literals
         *
         * @see http://eslint.org/docs/rules/no-octal
         */
        "no-octal": 0,

        /**
         * disallow octal escape sequences in string literals
         *
         * @see http://eslint.org/docs/rules/no-octal-escape
         */
        "no-octal-escape": 0,

        /**
         * disallow reassigning `function` parameters
         *
         * @see http://eslint.org/docs/rules/no-param-reassign
         */
        "no-param-reassign": 0,

        /**
         * disallow the use of the `__proto__` property
         *
         * @see http://eslint.org/docs/rules/no-proto
         */
        "no-proto": 0,

        /**
         * disallow variable redeclaration
         *
         * @see http://eslint.org/docs/rules/no-redeclare
         */
        "no-redeclare": [ "error", { "builtinGlobals": false } ],

        /**
         * disallow certain properties on certain objects
         *
         * @see http://eslint.org/docs/rules/no-restricted-properties
         */
        "no-restricted-properties": 0,

        /**
         * disallow assignment operators in `return` statements
         *
         * @see http://eslint.org/docs/rules/no-return-assign
         */
        "no-return-assign": [ "warn", "always" ],

        /**
         * disallow unnecessary `return await`
         *
         * @see http://eslint.org/docs/rules/no-return-await
         */
        "no-return-await": "error",

        /**
         * disallow `javascript:` urls
         *
         * @see http://eslint.org/docs/rules/no-script-url
         */
        "no-script-url": 0,

        /**
         * disallow assignments where both sides are exactly the same
         *
         * @see http://eslint.org/docs/rules/no-self-assign
         */
        "no-self-assign": [ "error", { "props": false } ],

        /**
         * disallow comparisons where both sides are exactly the same
         *
         * @see http://eslint.org/docs/rules/no-self-compare
         */
        "no-self-compare": "warn",

        /**
         * disallow comma operators
         *
         * @see http://eslint.org/docs/rules/no-sequences
         */
        "no-sequences": 0,

        /**
         * disallow throwing literals as exceptions
         *
         * @see http://eslint.org/docs/rules/no-throw-literal
         */
        "no-throw-literal": 0,

        /**
         * disallow unmodified loop conditions
         *
         * @see http://eslint.org/docs/rules/no-unmodified-loop-condition
         */
        "no-unmodified-loop-condition": 0,

        /**
         * disallow unused expressions
         *
         * @see http://eslint.org/docs/rules/no-unused-expressions
         */
        "no-unused-expressions": 0,

        /**
         * 📝 disallow unused labels
         *
         * @see http://eslint.org/docs/rules/no-unused-labels
         */
        "no-unused-labels": "warn",

        /**
         * disallow unnecessary calls to `.call()` and `.apply()`
         *
         * @see http://eslint.org/docs/rules/no-useless-call
         */
        "no-useless-call": 0,

        /**
         * disallow unnecessary `catch` clauses
         *
         * @see http://eslint.org/docs/rules/no-useless-catch
         */
        "no-useless-catch": "error",

        /**
         * disallow unnecessary concatenation of literals or template literals
         *
         * @see http://eslint.org/docs/rules/no-useless-concat
         */
        "no-useless-concat": "warn",

        /**
         * disallow unnecessary escape characters
         *
         * @see http://eslint.org/docs/rules/no-useless-escape
         */
        "no-useless-escape": "warn",

        /**
         * 📝 disallow redundant return statements
         *
         * @see http://eslint.org/docs/rules/no-useless-return
         */
        "no-useless-return": "warn",

        /**
         * disallow `void` operators
         *
         * @see http://eslint.org/docs/rules/no-void
         */
        "no-void": 0,

        /**
         * disallow specified warning terms in comments
         *
         * @see http://eslint.org/docs/rules/no-warning-comments
         */
        "no-warning-comments": 0,

        /**
         * disallow `with` statements
         *
         * @see http://eslint.org/docs/rules/no-with
         */
        "no-with": "error",

        /**
         * enforce using named capture group in regular expression
         *
         * @see http://eslint.org/docs/rules/prefer-named-capture-group
         */
        "prefer-named-capture-group": 0,

        /**
         * require using Error objects as Promise rejection reasons
         *
         * @see http://eslint.org/docs/rules/prefer-promise-reject-errors
         */
        "prefer-promise-reject-errors": 0,

        /**
         * enforce the consistent use of the radix argument when using `parseInt()`
         *
         * @see http://eslint.org/docs/rules/radix
         */
        "radix": 0,

        /**
         * disallow async functions which have no `await` expression
         *
         * @see http://eslint.org/docs/rules/require-await
         */
        "require-await": "warn",

        /**
         * enforce the use of `u` flag on RegExp
         *
         * @see http://eslint.org/docs/rules/require-unicode-regexp
         */
        "require-unicode-regexp": 0,

        /**
         * 📝 require or disallow strict mode directives
         *
         * @see http://eslint.org/docs/rules/strict
         */
        "strict": 0,

        /**
         * require `var` declarations be placed at the top of their containing scope
         *
         * @see http://eslint.org/docs/rules/vars-on-top
         */
        "vars-on-top": 0,

        /**
         * 📝 require parentheses around immediate `function` invocations
         *
         * @see http://eslint.org/docs/rules/wrap-iife
         */
        "wrap-iife": [ "error", "any" ],

        /**
         * 📝 require or disallow “Yoda” conditions
         *
         * @see http://eslint.org/docs/rules/yoda
         */
        "yoda": 0,

    },

};
