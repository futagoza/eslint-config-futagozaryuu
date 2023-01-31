/*eslint comma-dangle: ["error", "only-multiline"]*/
"use strict";

// 
// These rules relate to possible logic errors in code:
// 

module.exports = {

    "rules": {

        
    /**
     * Enforce `return` statements in callbacks of array methods
     *
     * @see http://eslint.org/docs/rules/array-callback-return
     */
    "array-callback-return": "off",



    /**
     * Require `super()` calls in constructors
     *
     * @see http://eslint.org/docs/rules/constructor-super
     */
    "constructor-super": "error",



    /**
     * Enforce "for" loop update clause moving the counter in the right direction
     *
     * @see http://eslint.org/docs/rules/for-direction
     */
    "for-direction": "off",



    /**
     * Enforce `return` statements in getters
     *
     * @see http://eslint.org/docs/rules/getter-return
     */
    "getter-return": [
        "error",
        {
            "allowImplicit": true
        }
    ],



    /**
     * Disallow using an async function as a Promise executor
     *
     * @see http://eslint.org/docs/rules/no-async-promise-executor
     */
    "no-async-promise-executor": "error",



    /**
     * Disallow `await` inside of loops
     *
     * @see http://eslint.org/docs/rules/no-await-in-loop
     */
    "no-await-in-loop": "error",



    /**
     * Disallow reassigning class members
     *
     * @see http://eslint.org/docs/rules/no-class-assign
     */
    "no-class-assign": "error",



    /**
     * Disallow comparing against -0
     *
     * @see http://eslint.org/docs/rules/no-compare-neg-zero
     */
    "no-compare-neg-zero": "error",



    /**
     * Disallow assignment operators in conditional expressions
     *
     * @see http://eslint.org/docs/rules/no-cond-assign
     */
    "no-cond-assign": [
        "error",
        "always"
    ],



    /**
     * Disallow reassigning `const` variables
     *
     * @see http://eslint.org/docs/rules/no-const-assign
     */
    "no-const-assign": "error",



    /**
     * Disallow expressions where the operation doesn't affect the value
     *
     * @see http://eslint.org/docs/rules/no-constant-binary-expression
     */
    "no-constant-binary-expression": "error",



    /**
     * Disallow constant expressions in conditions
     *
     * @see http://eslint.org/docs/rules/no-constant-condition
     */
    "no-constant-condition": [
        "error",
        {
            "checkLoops": false
        }
    ],



    /**
     * Disallow returning value from constructor
     *
     * @see http://eslint.org/docs/rules/no-constructor-return
     */
    "no-constructor-return": "error",



    /**
     * Disallow control characters in regular expressions
     *
     * @see http://eslint.org/docs/rules/no-control-regex
     */
    "no-control-regex": "off",



    /**
     * Disallow the use of `debugger`
     *
     * @see http://eslint.org/docs/rules/no-debugger
     */
    "no-debugger": "error",



    /**
     * Disallow duplicate arguments in `function` definitions
     *
     * @see http://eslint.org/docs/rules/no-dupe-args
     */
    "no-dupe-args": "error",



    /**
     * Disallow duplicate class members
     *
     * @see http://eslint.org/docs/rules/no-dupe-class-members
     */
    "no-dupe-class-members": "error",



    /**
     * Disallow duplicate conditions in if-else-if chains
     *
     * @see http://eslint.org/docs/rules/no-dupe-else-if
     */
    "no-dupe-else-if": "error",



    /**
     * Disallow duplicate keys in object literals
     *
     * @see http://eslint.org/docs/rules/no-dupe-keys
     */
    "no-dupe-keys": "error",



    /**
     * Disallow duplicate case labels
     *
     * @see http://eslint.org/docs/rules/no-duplicate-case
     */
    "no-duplicate-case": "error",



    /**
     * Disallow duplicate module imports
     *
     * @see http://eslint.org/docs/rules/no-duplicate-imports
     */
    "no-duplicate-imports": [
        "error",
        {
            "includeExports": true
        }
    ],



    /**
     * Disallow empty character classes in regular expressions
     *
     * @see http://eslint.org/docs/rules/no-empty-character-class
     */
    "no-empty-character-class": "warn",



    /**
     * Disallow empty destructuring patterns
     *
     * @see http://eslint.org/docs/rules/no-empty-pattern
     */
    "no-empty-pattern": "error",



    /**
     * Disallow reassigning exceptions in `catch` clauses
     *
     * @see http://eslint.org/docs/rules/no-ex-assign
     */
    "no-ex-assign": "error",



    /**
     * Disallow fallthrough of `case` statements
     *
     * @see http://eslint.org/docs/rules/no-fallthrough
     */
    "no-fallthrough": [
        "error",
        {
            "allowEmptyCase": true
        }
    ],



    /**
     * Disallow reassigning `function` declarations
     *
     * @see http://eslint.org/docs/rules/no-func-assign
     */
    "no-func-assign": "off",



    /**
     * Disallow assigning to imported bindings
     *
     * @see http://eslint.org/docs/rules/no-import-assign
     */
    "no-import-assign": "error",



    /**
     * Disallow variable or `function` declarations in nested blocks
     *
     * @see http://eslint.org/docs/rules/no-inner-declarations
     */
    "no-inner-declarations": [
        "warn",
        "both"
    ],



    /**
     * Disallow invalid regular expression strings in `RegExp` constructors
     *
     * @see http://eslint.org/docs/rules/no-invalid-regexp
     */
    "no-invalid-regexp": "error",



    /**
     * Disallow irregular whitespace
     *
     * @see http://eslint.org/docs/rules/no-irregular-whitespace
     */
    "no-irregular-whitespace": [
        "error",
        {
            "skipComments": true,
            "skipRegExps": true,
            "skipStrings": true,
            "skipTemplates": true
        }
    ],



    /**
     * Disallow literal numbers that lose precision
     *
     * @see http://eslint.org/docs/rules/no-loss-of-precision
     */
    "no-loss-of-precision": "warn",



    /**
     * Disallow characters which are made with multiple code points in character class syntax
     *
     * @see http://eslint.org/docs/rules/no-misleading-character-class
     */
    "no-misleading-character-class": "warn",



    /**
     * Disallow `new` operators with global non-constructor functions
     *
     * @see http://eslint.org/docs/rules/no-new-native-nonconstructor
     */
    "no-new-native-nonconstructor": void 0,



    /**
     * Disallow `new` operators with the `Symbol` object
     *
     * @see http://eslint.org/docs/rules/no-new-symbol
     */
    "no-new-symbol": "error",



    /**
     * Disallow calling global object properties as functions
     *
     * @see http://eslint.org/docs/rules/no-obj-calls
     */
    "no-obj-calls": "off",



    /**
     * Disallow returning values from Promise executor functions
     *
     * @see http://eslint.org/docs/rules/no-promise-executor-return
     */
    "no-promise-executor-return": "error",



    /**
     * Disallow calling some `Object.prototype` methods directly on objects
     *
     * @see http://eslint.org/docs/rules/no-prototype-builtins
     */
    "no-prototype-builtins": "off",



    /**
     * Disallow assignments where both sides are exactly the same
     *
     * @see http://eslint.org/docs/rules/no-self-assign
     */
    "no-self-assign": [
        "error",
        {
            "props": false
        }
    ],



    /**
     * Disallow comparisons where both sides are exactly the same
     *
     * @see http://eslint.org/docs/rules/no-self-compare
     */
    "no-self-compare": "warn",



    /**
     * Disallow returning values from setters
     *
     * @see http://eslint.org/docs/rules/no-setter-return
     */
    "no-setter-return": "error",



    /**
     * Disallow sparse arrays
     *
     * @see http://eslint.org/docs/rules/no-sparse-arrays
     */
    "no-sparse-arrays": "error",



    /**
     * Disallow template literal placeholder syntax in regular strings
     *
     * @see http://eslint.org/docs/rules/no-template-curly-in-string
     */
    "no-template-curly-in-string": "off",



    /**
     * Disallow `this`/`super` before calling `super()` in constructors
     *
     * @see http://eslint.org/docs/rules/no-this-before-super
     */
    "no-this-before-super": "error",



    /**
     * Disallow the use of undeclared variables unless mentioned in `/*global ...` comments
     *
     * @see http://eslint.org/docs/rules/no-undef
     */
    "no-undef": "error",



    /**
     * Disallow confusing multiline expressions
     *
     * @see http://eslint.org/docs/rules/no-unexpected-multiline
     */
    "no-unexpected-multiline": "off",



    /**
     * Disallow unmodified loop conditions
     *
     * @see http://eslint.org/docs/rules/no-unmodified-loop-condition
     */
    "no-unmodified-loop-condition": "off",



    /**
     * Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
     *
     * @see http://eslint.org/docs/rules/no-unreachable
     */
    "no-unreachable": "warn",



    /**
     * Disallow loops with a body that allows only one iteration
     *
     * @see http://eslint.org/docs/rules/no-unreachable-loop
     */
    "no-unreachable-loop": "off",



    /**
     * Disallow control flow statements in `finally` blocks
     *
     * @see http://eslint.org/docs/rules/no-unsafe-finally
     */
    "no-unsafe-finally": "error",



    /**
     * Disallow negating the left operand of relational operators
     *
     * @see http://eslint.org/docs/rules/no-unsafe-negation
     */
    "no-unsafe-negation": "error",



    /**
     * Disallow use of optional chaining in contexts where the `undefined` value is not allowed
     *
     * @see http://eslint.org/docs/rules/no-unsafe-optional-chaining
     */
    "no-unsafe-optional-chaining": "error",



    /**
     * Disallow unused private class members
     *
     * @see http://eslint.org/docs/rules/no-unused-private-class-members
     */
    "no-unused-private-class-members": "warn",



    /**
     * Disallow unused variables
     *
     * @see http://eslint.org/docs/rules/no-unused-vars
     */
    "no-unused-vars": [
        "error",
        {
            "vars": "local",
            "args": "after-used",
            "ignoreRestSiblings": true,
            "argsIgnorePattern": "^_",
            "destructuredArrayIgnorePattern": "^_",
            "caughtErrors": "none"
        }
    ],



    /**
     * Disallow the use of variables before they are defined
     *
     * @see http://eslint.org/docs/rules/no-use-before-define
     */
    "no-use-before-define": [
        "warn",
        {
            "functions": false,
            "classes": false,
            "variables": true,
            "allowNamedExports": true
        }
    ],



    /**
     * Disallow useless backreferences in regular expressions
     *
     * @see http://eslint.org/docs/rules/no-useless-backreference
     */
    "no-useless-backreference": "warn",



    /**
     * Disallow assignments that can lead to race conditions due to usage of `await` or `yield`
     *
     * @see http://eslint.org/docs/rules/require-atomic-updates
     */
    "require-atomic-updates": "error",



    /**
     * Require calls to `isNaN()` when checking for `NaN`
     *
     * @see http://eslint.org/docs/rules/use-isnan
     */
    "use-isnan": "off",



    /**
     * Enforce comparing `typeof` expressions against valid strings
     *
     * @see http://eslint.org/docs/rules/valid-typeof
     */
    "valid-typeof": [
        "error",
        {
            "requireStringLiterals": false
        }
    ],


    },

};
    