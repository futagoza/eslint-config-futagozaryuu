"use strict";

const globals = require( "globals" );

module.exports = {

    "globals": globals.node,
    "plugins": [ "node" ],

    "rules": {

        "strict": [ "error", "global" ],

        /**
         * require `return` statements after callbacks
         *
         * @see http://eslint.org/docs/rules/callback-return
         */
        "callback-return": 0,

        /**
         * require `require()` calls to be placed at top-level module scope
         *
         * @see http://eslint.org/docs/rules/global-require
         */
        "global-require": 0,

        /**
         * require error handling in callbacks
         *
         * @see http://eslint.org/docs/rules/handle-callback-err
         */
        "handle-callback-err": 0,

        /**
         * disallow `require` calls to be mixed with regular variable declarations
         *
         * @see http://eslint.org/docs/rules/no-mixed-requires
         */
        "no-mixed-requires": 0,

        /**
         * disallow `new` operators with calls to `require`
         *
         * @see http://eslint.org/docs/rules/no-new-require
         */
        "no-new-require": 0,

        /**
         * disallow string concatenation with `__dirname` and `__filename`
         *
         * @see http://eslint.org/docs/rules/no-path-concat
         */
        "no-path-concat": "warn",

        /**
         * disallow the use of `process.env`
         *
         * @see http://eslint.org/docs/rules/no-process-env
         */
        "no-process-env": 0,

        /**
         * disallow the use of `process.exit()`
         *
         * @see http://eslint.org/docs/rules/no-process-exit
         */
        "no-process-exit": 0,

        /**
         * disallow specified modules when loaded by `require`
         *
         * @see http://eslint.org/docs/rules/no-restricted-modules
         */
        "no-restricted-modules": 0,

        /**
         * disallow synchronous methods
         *
         * @see http://eslint.org/docs/rules/no-sync
         */
        "no-sync": 0,

        /**
         * Enforce either `module.exports` or `exports`.
         *
         * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/exports-style.md
         */
        "node/exports-style": 0,

        /**
         * Disallow deprecated API.
         *
         * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api.md
         */
        "node/no-deprecated-api": 0,

        /**
         * Disallow `import` declarations of extraneous packages.
         *
         * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-import.md
         */
        "node/no-extraneous-import": 0,

        /**
         * Disallow `require()` expressions of extraneous packages.
         *
         * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-require.md
         */
        "node/no-extraneous-require": 0,

        /**
         * ⚠️ Disallow `import` declarations for files that don't exist.
         *
         * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-import.md
         */
        "node/no-missing-import": 0,

        /**
         * Disallow `require()`s for files that don't exist.
         *
         * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-require.md
         */
        "node/no-missing-require": 0,

        /**
         * Disallow `bin` files that npm ignores.
         *
         * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-bin.md
         */
        "node/no-unpublished-bin": 0,

        /**
         * ⚠️ Disallow `import` declarations for files that npm ignores.
         *
         * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-import.md
         */
        "node/no-unpublished-import": 0,

        /**
         * Disallow `require()`s for files that npm ignores.
         *
         * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-require.md
         */
        "node/no-unpublished-require": 0,

        /**
         * Disallow unsupported ECMAScript features on the specified version.
         *
         * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features.md
         */
        "node/no-unsupported-features": 0,

        /**
         * Make the same code path as throw at `process.exit()`.
         *
         * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/process-exit-as-throw.md
         */
        "node/process-exit-as-throw": 0,

        /**
         * 📝 Suggest correct usage of shebang.
         *
         * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/shebang.md
         */
        "node/shebang": 0

    }

};
