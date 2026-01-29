/*eslint comma-dangle: ["error", "only-multiline"]*/
"use strict";

// 
// These rules suggest alternate ways of doing things:
// 

module.exports = {

    "rules": {

        
        /**
         * Enforce getter and setter pairs in objects and classes
         *
         * @see http://eslint.org/docs/rules/accessor-pairs
         */
        "accessor-pairs": "off",



        /**
         * 🔧 Require braces around arrow function bodies
         *
         * @see http://eslint.org/docs/rules/arrow-body-style
         */
        "arrow-body-style": [
            "error",
            "as-needed",
            {
                "requireReturnForObjectLiteral": true
            }
        ],



        /**
         * Enforce the use of variables within the scope they are defined
         *
         * @see http://eslint.org/docs/rules/block-scoped-var
         */
        "block-scoped-var": "off",



        /**
         * Enforce camelcase naming convention
         *
         * @see http://eslint.org/docs/rules/camelcase
         */
        "camelcase": "off",



        /**
         * 🔧 Enforce or disallow capitalization of the first letter of a comment
         *
         * @see http://eslint.org/docs/rules/capitalized-comments
         */
        "capitalized-comments": "off",



        /**
         * Enforce that class methods utilize `this`
         *
         * @see http://eslint.org/docs/rules/class-methods-use-this
         */
        "class-methods-use-this": "off",



        /**
         * Enforce a maximum cyclomatic complexity allowed in a program
         *
         * @see http://eslint.org/docs/rules/complexity
         */
        "complexity": "off",



        /**
         * Require `return` statements to either always or never specify values
         *
         * @see http://eslint.org/docs/rules/consistent-return
         */
        "consistent-return": "off",



        /**
         * Enforce consistent naming when capturing the current execution context
         *
         * @see http://eslint.org/docs/rules/consistent-this
         */
        "consistent-this": "off",



        /**
         * 🔧 Enforce consistent brace style for all control statements
         *
         * @see http://eslint.org/docs/rules/curly
         */
        "curly": "off",



        /**
         * Require `default` cases in `switch` statements
         *
         * @see http://eslint.org/docs/rules/default-case
         */
        "default-case": "off",



        /**
         * Enforce `default` clauses in `switch` statements to be last
         *
         * @see http://eslint.org/docs/rules/default-case-last
         */
        "default-case-last": "off",



        /**
         * Enforce default parameters to be last
         *
         * @see http://eslint.org/docs/rules/default-param-last
         */
        "default-param-last": "warn",



        /**
         * 🔧 Enforce dot notation whenever possible
         *
         * @see http://eslint.org/docs/rules/dot-notation
         */
        "dot-notation": "off",



        /**
         * 🔧 Require the use of `===` and `!==`
         *
         * @see http://eslint.org/docs/rules/eqeqeq
         */
        "eqeqeq": [
            "error",
            "always",
            {
                "null": "ignore"
            }
        ],



        /**
         * Require function names to match the name of the variable or property to which they are assigned
         *
         * @see http://eslint.org/docs/rules/func-name-matching
         */
        "func-name-matching": "off",



        /**
         * Require or disallow named `function` expressions
         *
         * @see http://eslint.org/docs/rules/func-names
         */
        "func-names": [
            "error",
            "always"
        ],



        /**
         * Enforce the consistent use of either `function` declarations or expressions assigned to variables
         *
         * @see http://eslint.org/docs/rules/func-style
         */
        "func-style": "off",



        /**
         * Require grouped accessor pairs in object literals and classes
         *
         * @see http://eslint.org/docs/rules/grouped-accessor-pairs
         */
        "grouped-accessor-pairs": [
            "warn",
            "getBeforeSet"
        ],



        /**
         * Require `for-in` loops to include an `if` statement
         *
         * @see http://eslint.org/docs/rules/guard-for-in
         */
        "guard-for-in": "warn",



        /**
         * Disallow specified identifiers
         *
         * @see http://eslint.org/docs/rules/id-denylist
         */
        "id-denylist": "off",



        /**
         * Enforce minimum and maximum identifier lengths
         *
         * @see http://eslint.org/docs/rules/id-length
         */
        "id-length": "off",



        /**
         * Require identifiers to match a specified regular expression
         *
         * @see http://eslint.org/docs/rules/id-match
         */
        "id-match": "off",



        /**
         * Require or disallow initialization in variable declarations
         *
         * @see http://eslint.org/docs/rules/init-declarations
         */
        "init-declarations": "off",



        /**
         * 🔧 Require or disallow logical assignment operator shorthand
         *
         * @see http://eslint.org/docs/rules/logical-assignment-operators
         */
        "logical-assignment-operators": [
            "error",
            "always"
        ],



        /**
         * Enforce a maximum number of classes per file
         *
         * @see http://eslint.org/docs/rules/max-classes-per-file
         */
        "max-classes-per-file": "off",



        /**
         * Enforce a maximum depth that blocks can be nested
         *
         * @see http://eslint.org/docs/rules/max-depth
         */
        "max-depth": "off",



        /**
         * Enforce a maximum number of lines per file
         *
         * @see http://eslint.org/docs/rules/max-lines
         */
        "max-lines": "off",



        /**
         * Enforce a maximum number of lines of code in a function
         *
         * @see http://eslint.org/docs/rules/max-lines-per-function
         */
        "max-lines-per-function": "off",



        /**
         * Enforce a maximum depth that callbacks can be nested
         *
         * @see http://eslint.org/docs/rules/max-nested-callbacks
         */
        "max-nested-callbacks": "off",



        /**
         * Enforce a maximum number of parameters in function definitions
         *
         * @see http://eslint.org/docs/rules/max-params
         */
        "max-params": "off",



        /**
         * Enforce a maximum number of statements allowed in function blocks
         *
         * @see http://eslint.org/docs/rules/max-statements
         */
        "max-statements": "off",



        /**
         * Require constructor names to begin with a capital letter
         *
         * @see http://eslint.org/docs/rules/new-cap
         */
        "new-cap": "off",



        /**
         * Disallow the use of `alert`, `confirm`, and `prompt`
         *
         * @see http://eslint.org/docs/rules/no-alert
         */
        "no-alert": "off",



        /**
         * 🔧 Disallow `Array` constructors
         *
         * @see http://eslint.org/docs/rules/no-array-constructor
         */
        "no-array-constructor": "off",



        /**
         * Disallow bitwise operators
         *
         * @see http://eslint.org/docs/rules/no-bitwise
         */
        "no-bitwise": "off",



        /**
         * Disallow the use of `arguments.caller` or `arguments.callee`
         *
         * @see http://eslint.org/docs/rules/no-caller
         */
        "no-caller": "off",



        /**
         * Disallow lexical declarations in case clauses
         *
         * @see http://eslint.org/docs/rules/no-case-declarations
         */
        "no-case-declarations": "off",



        /**
         * Disallow the use of `console`
         *
         * @see http://eslint.org/docs/rules/no-console
         */
        "no-console": "off",



        /**
         * Disallow `continue` statements
         *
         * @see http://eslint.org/docs/rules/no-continue
         */
        "no-continue": "off",



        /**
         * Disallow deleting variables
         *
         * @see http://eslint.org/docs/rules/no-delete-var
         */
        "no-delete-var": "warn",



        /**
         * 🔧 Disallow equal signs explicitly at the beginning of regular expressions
         *
         * @see http://eslint.org/docs/rules/no-div-regex
         */
        "no-div-regex": "warn",



        /**
         * 🔧 Disallow `else` blocks after `return` statements in `if` statements
         *
         * @see http://eslint.org/docs/rules/no-else-return
         */
        "no-else-return": [
            "warn",
            {
                "allowElseIf": false
            }
        ],



        /**
         * Disallow empty block statements
         *
         * @see http://eslint.org/docs/rules/no-empty
         */
        "no-empty": "warn",



        /**
         * Disallow empty functions
         *
         * @see http://eslint.org/docs/rules/no-empty-function
         */
        "no-empty-function": "off",



        /**
         * Disallow empty static blocks
         *
         * @see http://eslint.org/docs/rules/no-empty-static-block
         */
        "no-empty-static-block": "warn",



        /**
         * Disallow `null` comparisons without type-checking operators
         *
         * @see http://eslint.org/docs/rules/no-eq-null
         */
        "no-eq-null": "off",



        /**
         * Disallow the use of `eval()`
         *
         * @see http://eslint.org/docs/rules/no-eval
         */
        "no-eval": "warn",



        /**
         * Disallow extending native types
         *
         * @see http://eslint.org/docs/rules/no-extend-native
         */
        "no-extend-native": "off",



        /**
         * 🔧 Disallow unnecessary calls to `.bind()`
         *
         * @see http://eslint.org/docs/rules/no-extra-bind
         */
        "no-extra-bind": "warn",



        /**
         * 🔧 Disallow unnecessary boolean casts
         *
         * @see http://eslint.org/docs/rules/no-extra-boolean-cast
         */
        "no-extra-boolean-cast": "error",



        /**
         * 🔧 Disallow unnecessary labels
         *
         * @see http://eslint.org/docs/rules/no-extra-label
         */
        "no-extra-label": "off",



        /**
         * Disallow assignments to native objects or read-only global variables
         *
         * @see http://eslint.org/docs/rules/no-global-assign
         */
        "no-global-assign": "off",



        /**
         * 🔧 Disallow shorthand type conversions
         *
         * @see http://eslint.org/docs/rules/no-implicit-coercion
         */
        "no-implicit-coercion": "off",



        /**
         * Disallow declarations in the global scope
         *
         * @see http://eslint.org/docs/rules/no-implicit-globals
         */
        "no-implicit-globals": "off",



        /**
         * Disallow the use of `eval()`-like methods
         *
         * @see http://eslint.org/docs/rules/no-implied-eval
         */
        "no-implied-eval": "warn",



        /**
         * Disallow inline comments after code
         *
         * @see http://eslint.org/docs/rules/no-inline-comments
         */
        "no-inline-comments": "off",



        /**
         * Disallow use of `this` in contexts where the value of `this` is `undefined`
         *
         * @see http://eslint.org/docs/rules/no-invalid-this
         */
        "no-invalid-this": "off",



        /**
         * Disallow the use of the `__iterator__` property
         *
         * @see http://eslint.org/docs/rules/no-iterator
         */
        "no-iterator": "off",



        /**
         * Disallow labels that share a name with a variable
         *
         * @see http://eslint.org/docs/rules/no-label-var
         */
        "no-label-var": "error",



        /**
         * Disallow labeled statements
         *
         * @see http://eslint.org/docs/rules/no-labels
         */
        "no-labels": "off",



        /**
         * Disallow unnecessary nested blocks
         *
         * @see http://eslint.org/docs/rules/no-lone-blocks
         */
        "no-lone-blocks": "warn",



        /**
         * 🔧 Disallow `if` statements as the only statement in `else` blocks
         *
         * @see http://eslint.org/docs/rules/no-lonely-if
         */
        "no-lonely-if": "warn",



        /**
         * Disallow function declarations that contain unsafe references inside loop statements
         *
         * @see http://eslint.org/docs/rules/no-loop-func
         */
        "no-loop-func": "error",



        /**
         * Disallow magic numbers
         *
         * @see http://eslint.org/docs/rules/no-magic-numbers
         */
        "no-magic-numbers": "off",



        /**
         * Disallow use of chained assignment expressions
         *
         * @see http://eslint.org/docs/rules/no-multi-assign
         */
        "no-multi-assign": "off",



        /**
         * Disallow multiline strings
         *
         * @see http://eslint.org/docs/rules/no-multi-str
         */
        "no-multi-str": "warn",



        /**
         * Disallow negated conditions
         *
         * @see http://eslint.org/docs/rules/no-negated-condition
         */
        "no-negated-condition": "off",



        /**
         * Disallow nested ternary expressions
         *
         * @see http://eslint.org/docs/rules/no-nested-ternary
         */
        "no-nested-ternary": "off",



        /**
         * Disallow `new` operators outside of assignments or comparisons
         *
         * @see http://eslint.org/docs/rules/no-new
         */
        "no-new": "off",



        /**
         * Disallow `new` operators with the `Function` object
         *
         * @see http://eslint.org/docs/rules/no-new-func
         */
        "no-new-func": "off",



        /**
         * Disallow `new` operators with the `String`, `Number`, and `Boolean` objects
         *
         * @see http://eslint.org/docs/rules/no-new-wrappers
         */
        "no-new-wrappers": "warn",



        /**
         * Disallow `\8` and `\9` escape sequences in string literals
         *
         * @see http://eslint.org/docs/rules/no-nonoctal-decimal-escape
         */
        "no-nonoctal-decimal-escape": "off",



        /**
         * Disallow calls to the `Object` constructor without an argument
         *
         * @see http://eslint.org/docs/rules/no-object-constructor
         */
        "no-object-constructor": "off",



        /**
         * Disallow octal literals
         *
         * @see http://eslint.org/docs/rules/no-octal
         */
        "no-octal": "off",



        /**
         * Disallow octal escape sequences in string literals
         *
         * @see http://eslint.org/docs/rules/no-octal-escape
         */
        "no-octal-escape": "off",



        /**
         * Disallow reassigning function parameters
         *
         * @see http://eslint.org/docs/rules/no-param-reassign
         */
        "no-param-reassign": "off",



        /**
         * Disallow the unary operators `++` and `--`
         *
         * @see http://eslint.org/docs/rules/no-plusplus
         */
        "no-plusplus": "off",



        /**
         * Disallow the use of the `__proto__` property
         *
         * @see http://eslint.org/docs/rules/no-proto
         */
        "no-proto": "off",



        /**
         * Disallow variable redeclaration
         *
         * @see http://eslint.org/docs/rules/no-redeclare
         */
        "no-redeclare": [
            "error",
            {
                "builtinGlobals": false
            }
        ],



        /**
         * 🔧 Disallow multiple spaces in regular expressions
         *
         * @see http://eslint.org/docs/rules/no-regex-spaces
         */
        "no-regex-spaces": "warn",



        /**
         * Disallow specified names in exports
         *
         * @see http://eslint.org/docs/rules/no-restricted-exports
         */
        "no-restricted-exports": "off",



        /**
         * Disallow specified global variables
         *
         * @see http://eslint.org/docs/rules/no-restricted-globals
         */
        "no-restricted-globals": "off",



        /**
         * Disallow specified modules when loaded by `import`
         *
         * @see http://eslint.org/docs/rules/no-restricted-imports
         */
        "no-restricted-imports": "off",



        /**
         * Disallow certain properties on certain objects
         *
         * @see http://eslint.org/docs/rules/no-restricted-properties
         */
        "no-restricted-properties": "off",



        /**
         * Disallow specified syntax
         *
         * @see http://eslint.org/docs/rules/no-restricted-syntax
         */
        "no-restricted-syntax": "off",



        /**
         * Disallow assignment operators in `return` statements
         *
         * @see http://eslint.org/docs/rules/no-return-assign
         */
        "no-return-assign": [
            "warn",
            "always"
        ],



        /**
         * Disallow `javascript:` URLs
         *
         * @see http://eslint.org/docs/rules/no-script-url
         */
        "no-script-url": "off",



        /**
         * Disallow comma operators
         *
         * @see http://eslint.org/docs/rules/no-sequences
         */
        "no-sequences": "off",



        /**
         * Disallow variable declarations from shadowing variables declared in the outer scope
         *
         * @see http://eslint.org/docs/rules/no-shadow
         */
        "no-shadow": "off",



        /**
         * Disallow identifiers from shadowing restricted names
         *
         * @see http://eslint.org/docs/rules/no-shadow-restricted-names
         */
        "no-shadow-restricted-names": "off",



        /**
         * Disallow ternary operators
         *
         * @see http://eslint.org/docs/rules/no-ternary
         */
        "no-ternary": "off",



        /**
         * Disallow throwing literals as exceptions
         *
         * @see http://eslint.org/docs/rules/no-throw-literal
         */
        "no-throw-literal": "off",



        /**
         * 🔧 Disallow initializing variables to `undefined`
         *
         * @see http://eslint.org/docs/rules/no-undef-init
         */
        "no-undef-init": "warn",



        /**
         * Disallow the use of `undefined` as an identifier
         *
         * @see http://eslint.org/docs/rules/no-undefined
         */
        "no-undefined": "error",



        /**
         * Disallow dangling underscores in identifiers
         *
         * @see http://eslint.org/docs/rules/no-underscore-dangle
         */
        "no-underscore-dangle": "off",



        /**
         * 🔧 Disallow ternary operators when simpler alternatives exist
         *
         * @see http://eslint.org/docs/rules/no-unneeded-ternary
         */
        "no-unneeded-ternary": [
            "warn",
            {
                "defaultAssignment": false
            }
        ],



        /**
         * Disallow unused expressions
         *
         * @see http://eslint.org/docs/rules/no-unused-expressions
         */
        "no-unused-expressions": "off",



        /**
         * 🔧 Disallow unused labels
         *
         * @see http://eslint.org/docs/rules/no-unused-labels
         */
        "no-unused-labels": "warn",



        /**
         * Disallow unnecessary calls to `.call()` and `.apply()`
         *
         * @see http://eslint.org/docs/rules/no-useless-call
         */
        "no-useless-call": "off",



        /**
         * Disallow unnecessary `catch` clauses
         *
         * @see http://eslint.org/docs/rules/no-useless-catch
         */
        "no-useless-catch": "error",



        /**
         * 🔧 Disallow unnecessary computed property keys in objects and classes
         *
         * @see http://eslint.org/docs/rules/no-useless-computed-key
         */
        "no-useless-computed-key": [
            "error",
            {
                "enforceForClassMembers": true
            }
        ],



        /**
         * Disallow unnecessary concatenation of literals or template literals
         *
         * @see http://eslint.org/docs/rules/no-useless-concat
         */
        "no-useless-concat": "warn",



        /**
         * Disallow unnecessary constructors
         *
         * @see http://eslint.org/docs/rules/no-useless-constructor
         */
        "no-useless-constructor": "warn",



        /**
         * Disallow unnecessary escape characters
         *
         * @see http://eslint.org/docs/rules/no-useless-escape
         */
        "no-useless-escape": "warn",



        /**
         * 🔧 Disallow renaming import, export, and destructured assignments to the same name
         *
         * @see http://eslint.org/docs/rules/no-useless-rename
         */
        "no-useless-rename": "error",



        /**
         * 🔧 Disallow redundant return statements
         *
         * @see http://eslint.org/docs/rules/no-useless-return
         */
        "no-useless-return": "warn",



        /**
         * 🔧 Require `let` or `const` instead of `var`
         *
         * @see http://eslint.org/docs/rules/no-var
         */
        "no-var": "error",



        /**
         * Disallow `void` operators
         *
         * @see http://eslint.org/docs/rules/no-void
         */
        "no-void": "off",



        /**
         * Disallow specified warning terms in comments
         *
         * @see http://eslint.org/docs/rules/no-warning-comments
         */
        "no-warning-comments": "off",



        /**
         * Disallow `with` statements
         *
         * @see http://eslint.org/docs/rules/no-with
         */
        "no-with": "error",



        /**
         * 🔧 Require or disallow method and property shorthand syntax for object literals
         *
         * @see http://eslint.org/docs/rules/object-shorthand
         */
        "object-shorthand": "off",



        /**
         * 🔧 Enforce variables to be declared either together or separately in functions
         *
         * @see http://eslint.org/docs/rules/one-var
         */
        "one-var": [
            "error",
            {
                "initialized": "never",
                "uninitialized": "consecutive"
            }
        ],



        /**
         * 🔧 Require or disallow assignment operator shorthand where possible
         *
         * @see http://eslint.org/docs/rules/operator-assignment
         */
        "operator-assignment": [
            "error",
            "always"
        ],



        /**
         * 🔧 Require using arrow functions for callbacks
         *
         * @see http://eslint.org/docs/rules/prefer-arrow-callback
         */
        "prefer-arrow-callback": "off",



        /**
         * 🔧 Require `const` declarations for variables that are never reassigned after declared
         *
         * @see http://eslint.org/docs/rules/prefer-const
         */
        "prefer-const": [
            "warn",
            {
                "destructuring": "all",
                "ignoreReadBeforeAssign": true
            }
        ],



        /**
         * 🔧 Require destructuring from arrays and/or objects
         *
         * @see http://eslint.org/docs/rules/prefer-destructuring
         */
        "prefer-destructuring": "off",



        /**
         * 🔧 Disallow the use of `Math.pow` in favor of the `**` operator
         *
         * @see http://eslint.org/docs/rules/prefer-exponentiation-operator
         */
        "prefer-exponentiation-operator": "warn",



        /**
         * Enforce using named capture group in regular expression
         *
         * @see http://eslint.org/docs/rules/prefer-named-capture-group
         */
        "prefer-named-capture-group": "off",



        /**
         * 🔧 Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
         *
         * @see http://eslint.org/docs/rules/prefer-numeric-literals
         */
        "prefer-numeric-literals": "error",



        /**
         * 🔧 Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`
         *
         * @see http://eslint.org/docs/rules/prefer-object-has-own
         */
        "prefer-object-has-own": "off",



        /**
         * 🔧 Disallow using `Object.assign` with an object literal as the first argument and prefer the use of object spread instead
         *
         * @see http://eslint.org/docs/rules/prefer-object-spread
         */
        "prefer-object-spread": "off",



        /**
         * Require using Error objects as Promise rejection reasons
         *
         * @see http://eslint.org/docs/rules/prefer-promise-reject-errors
         */
        "prefer-promise-reject-errors": "off",



        /**
         * Disallow use of the `RegExp` constructor in favor of regular expression literals
         *
         * @see http://eslint.org/docs/rules/prefer-regex-literals
         */
        "prefer-regex-literals": "off",



        /**
         * Require rest parameters instead of `arguments`
         *
         * @see http://eslint.org/docs/rules/prefer-rest-params
         */
        "prefer-rest-params": "error",



        /**
         * Require spread operators instead of `.apply()`
         *
         * @see http://eslint.org/docs/rules/prefer-spread
         */
        "prefer-spread": "warn",



        /**
         * 🔧 Require template literals instead of string concatenation
         *
         * @see http://eslint.org/docs/rules/prefer-template
         */
        "prefer-template": "off",



        /**
         * Disallow losing originally caught error when re-throwing custom errors
         *
         * @see http://eslint.org/docs/rules/preserve-caught-error
         */
        "preserve-caught-error": void 0,



        /**
         * Enforce the use of the radix argument when using `parseInt()`
         *
         * @see http://eslint.org/docs/rules/radix
         */
        "radix": "off",



        /**
         * Disallow async functions which have no `await` expression
         *
         * @see http://eslint.org/docs/rules/require-await
         */
        "require-await": "warn",



        /**
         * Enforce the use of `u` or `v` flag on regular expressions
         *
         * @see http://eslint.org/docs/rules/require-unicode-regexp
         */
        "require-unicode-regexp": "off",



        /**
         * Require generator functions to contain `yield`
         *
         * @see http://eslint.org/docs/rules/require-yield
         */
        "require-yield": "error",



        /**
         * 🔧 Enforce sorted `import` declarations within modules
         *
         * @see http://eslint.org/docs/rules/sort-imports
         */
        "sort-imports": "off",



        /**
         * Require object keys to be sorted
         *
         * @see http://eslint.org/docs/rules/sort-keys
         */
        "sort-keys": "off",



        /**
         * 🔧 Require variables within the same declaration block to be sorted
         *
         * @see http://eslint.org/docs/rules/sort-vars
         */
        "sort-vars": "off",



        /**
         * 🔧 Require or disallow strict mode directives
         *
         * @see http://eslint.org/docs/rules/strict
         */
        "strict": "off",



        /**
         * Require symbol descriptions
         *
         * @see http://eslint.org/docs/rules/symbol-description
         */
        "symbol-description": "error",



        /**
         * Require `var` declarations be placed at the top of their containing scope
         *
         * @see http://eslint.org/docs/rules/vars-on-top
         */
        "vars-on-top": "off",



        /**
         * 🔧 Require or disallow "Yoda" conditions
         *
         * @see http://eslint.org/docs/rules/yoda
         */
        "yoda": "off",


    },

};
    