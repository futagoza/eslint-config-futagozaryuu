"use strict";

module.exports = {

    "rules": {

        /**
         * 🔧 legacy version of `indent`
         *
         * Was originally called `indent`, a stylistic rule, but after the rule was rewrote, the
         * original was renamed so developers can opt-in to the original behaviour of the rule.
         *
         * @deprecated ESLint 4.0.0-alpha.0
         * @see http://eslint.org/docs/rules/indent-legacy
         */
        "indent-legacy": void 0,

        /**
         * 🔧 require or disallow newlines around directives
         *
         * This rule was deprecated in favor of `padding-line-between-statements`,
         * a new stylistic rule introduced in ESLint 4.0.0.
         *
         * @deprecated ESLint 4.0.0-beta.0
         * @see http://eslint.org/docs/rules/lines-around-directive
         */
        "lines-around-directive": void 0,

        /**
         * 🔧 require or disallow an empty line after variable declarations
         *
         * This rule was deprecated in favor of `padding-line-between-statements`,
         * a new stylistic rule introduced in ESLint 4.0.0.
         *
         * @deprecated ESLint 4.0.0-beta.0
         * @see http://eslint.org/docs/rules/newline-after-var
         */
        "newline-after-var": void 0,

        /**
         * 🔧 require an empty line before `return` statements
         *
         * This rule was deprecated in favor of `padding-line-between-statements`,
         * a new stylistic rule introduced in ESLint 4.0.0.
         *
         * @deprecated ESLint 4.0.0-beta.0
         * @see http://eslint.org/docs/rules/newline-before-return
         */
        "newline-before-return": void 0,

        /**
         * disallow `catch` clause parameters from shadowing variables in the outer scope
         * 
         * This rule has been deprecated in favor of `no-shadow`, another rule within the
         * `futagozaryuu/variables` configuration.
         *
         * @deprecated ESLint 5.1.0
         * @see http://eslint.org/docs/rules/no-catch-shadow
         */
        "no-catch-shadow": void 0,

        /**
         * require JSDoc comments
         *
         * @deprecated https://eslint.org/blog/2018/11/jsdoc-end-of-life
         * @see http://eslint.org/docs/rules/require-jsdoc
         */
        "require-jsdoc": void 0,

        /**
         * 🔧 enforce valid JSDoc comments
         *
         * @deprecated https://eslint.org/blog/2018/11/jsdoc-end-of-life
         * @see http://eslint.org/docs/rules/valid-jsdoc
         */
        "valid-jsdoc": void 0,

        /**
         * require `return` statements after callbacks
         *
         * @deprecated ESLint 7.0.0
         * @see http://eslint.org/docs/rules/callback-return
         */
        "callback-return": void 0,

        /**
         * require `require()` calls to be placed at top-level module scope
         *
         * @deprecated ESLint 7.0.0
         * @see http://eslint.org/docs/rules/global-require
         */
        "global-require": void 0,

        /**
         * require error handling in callbacks
         *
         * @deprecated ESLint 7.0.0
         * @see http://eslint.org/docs/rules/handle-callback-err
         */
        "handle-callback-err": void 0,

        /**
         * disallow use of the Buffer() constructor
         *
         * @deprecated ESLint 7.0.0
         * @see http://eslint.org/docs/rules/no-buffer-constructor
         */
        "no-buffer-constructor": void 0,

        /**
         * disallow `require` calls to be mixed with regular variable declarations
         *
         * @deprecated ESLint 7.0.0
         * @see http://eslint.org/docs/rules/no-mixed-requires
         */
        "no-mixed-requires": void 0,

        /**
         * disallow `new` operators with calls to `require`
         *
         * @deprecated ESLint 7.0.0
         * @see http://eslint.org/docs/rules/no-new-require
         */
        "no-new-require": void 0,

        /**
         * disallow string concatenation with `__dirname` and `__filename`
         *
         * @deprecated ESLint 7.0.0
         * @see http://eslint.org/docs/rules/no-path-concat
         */
        "no-path-concat": void 0,

        /**
         * disallow the use of `process.env`
         *
         * @deprecated ESLint 7.0.0
         * @see http://eslint.org/docs/rules/no-process-env
         */
        "no-process-env": void 0,

        /**
         * disallow the use of `process.exit()`
         *
         * @deprecated ESLint 7.0.0
         * @see http://eslint.org/docs/rules/no-process-exit
         */
        "no-process-exit": void 0,

        /**
         * disallow specified modules when loaded by `require`
         *
         * @deprecated ESLint 7.0.0
         * @see http://eslint.org/docs/rules/no-restricted-modules
         */
        "no-restricted-modules": void 0,

        /**
         * disallow synchronous methods
         *
         * @deprecated ESLint 7.0.0
         * @see http://eslint.org/docs/rules/no-sync
         */
        "no-sync": void 0,

        /**
         * disallow specified identifiers
         *
         * @deprecated ESLint 7.5.0
         * @see http://eslint.org/docs/rules/id-blacklist
         */
        "id-blacklist": void 0,

    },

};
