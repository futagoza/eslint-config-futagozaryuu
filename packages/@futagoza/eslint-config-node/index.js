"use strict";

module.exports = {

    "extends": [

        "@futagoza/globals/node",
        "@futagoza/javascript/strict",

    ],

    "plugins": [ "n" ],

    "overrides": [
        {

            "files": [ "*.mjs" ],
            "extends": "@futagoza/javascript/modules",

        },
    ],

    "rules": {

        /**
         * require `return` statements after callbacks
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/callback-return.md
         */
        "n/callback-return": "off",

        /**
         * 🔧 enforce either `module.exports` or `exports`
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/exports-style.md
         */
        "n/exports-style": "off",

        /**
         * 🔧 enforce the style of file extensions in `import` declarations
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/file-extension-in-import.md
         */
        "n/file-extension-in-import": "off",

        /**
         * require `require()` calls to be placed at top-level module scope
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/global-require.md
         */
        "n/global-require": "off",

        /**
         * require error handling in callbacks
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/handle-callback-err.md
         */
        "n/handle-callback-err": "off",

        /**
         * 🔧 require correct usage of hashbang
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/hashbang.md
         */
        "n/hashbang": [ "error", {

            "ignoreUnpublished": true,
            "executableMap": {
                ".js": "node",
                ".ts": "ts-node",
            }

        } ],

        /**
         * enforce Node.js-style error-first callback pattern is followed
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-callback-literal.md
         */
        "n/no-callback-literal": "off",

        /**
         * disallow deprecated APIs
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-deprecated-api.md
         */
        "n/no-deprecated-api": "warn",

        /**
         * disallow the assignment to `exports`
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-exports-assign.md
         */
        "n/no-exports-assign": "error",

        /**
         * disallow `import` declarations which import extraneous modules
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-extraneous-import.md
         */
        "n/no-extraneous-import": "off",

        /**
         * disallow `require()` expressions which import extraneous modules
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-extraneous-require.md
         */
        "n/no-extraneous-require": "off",

        /**
         * disallow `import` declarations which import missing modules
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-missing-import.md
         */
        "n/no-missing-import": "off",

        /**
         * disallow `require()` expressions which import missing modules
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-missing-require.md
         */
        "n/no-missing-require": "off",

        /**
         * disallow `require` calls to be mixed with regular variable declarations
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-mixed-requires.md
         */
        "n/no-mixed-requires": "off",

        /**
         * disallow `new` operators with calls to `require`
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-new-require.md
         */
        "n/no-new-require": "off",

        /**
         * disallow string concatenation with `__dirname` and `__filename`
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-path-concat.md
         */
        "n/no-path-concat": "warn",

        /**
         * disallow the use of `process.env`
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-process-env.md
         */
        "n/no-process-env": "off",

        /**
         * disallow the use of `process.exit()`
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-process-exit.md
         */
        "n/no-process-exit": "off",

        /**
         * disallow specified modules when loaded by `import` declarations
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-restricted-import.md
         */
        "n/no-restricted-import": "off",

        /**
         * disallow specified modules when loaded by `require`
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-restricted-require.md
         */
        "n/no-restricted-require": "off",

        /**
         * disallow synchronous methods
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-sync.md
         */
        "n/no-sync": "off",

        /**
         * disallow top-level `await` in published modules
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-top-level-await.md
         */
        "n/no-top-level-await": "off",

        /**
         * disallow `bin` files that npm ignores
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unpublished-bin.md
         */
        "n/no-unpublished-bin": "off",

        /**
         * disallow `import` declarations which import private modules
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unpublished-import.md
         */
        "n/no-unpublished-import": "off",

        /**
         * disallow `require()` expressions which import private modules
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unpublished-require.md
         */
        "n/no-unpublished-require": "off",

        /**
         * disallow unsupported ECMAScript built-ins on the specified version
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unsupported-features/es-builtins.md
         */
        "n/no-unsupported-features/es-builtins": "off",

        /**
         * disallow unsupported ECMAScript syntax on the specified version
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unsupported-features/es-syntax.md
         */
        "n/no-unsupported-features/es-syntax": "off",

        /**
         * disallow unsupported Node.js built-in APIs on the specified version
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unsupported-features/node-builtins.md
         */
        "n/no-unsupported-features/node-builtins": "off",

        /**
         * enforce either `Buffer` or `require("buffer").Buffer`
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/buffer.md
         */
        "n/prefer-global/buffer": "warn",

        /**
         * enforce either `console` or `require("console")`
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/console.md
         */
        "n/prefer-global/console": "warn",

        /**
         * enforce either `crypto` or `require("crypto").webcrypto`
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/crypto.md
         */
        "n/prefer-global/crypto": "warn",

        /**
         * enforce either `process` or `require("process")`
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/process.md
         */
        "n/prefer-global/process": "warn",

        /**
         * enforce either `TextDecoder` or `require("util").TextDecoder`
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/text-decoder.md
         */
        "n/prefer-global/text-decoder": "warn",

        /**
         * enforce either `TextEncoder` or `require("util").TextEncoder`
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/text-encoder.md
         */
        "n/prefer-global/text-encoder": "warn",

        /**
         * enforce either global timer functions or `require("timers")*`
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/timers.md
         */
        "n/prefer-global/timers": "warn",

        /**
         * enforce either `URL` or `require("url").URL`
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/url.md
         */
        "n/prefer-global/url": "warn",

        /**
         * enforce either `URLSearchParams` or `require("url").URLSearchParams`
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/url-search-params.md
         */
        "n/prefer-global/url-search-params": "warn",

        /**
         * 🔧 enforce using the `node:` protocol when importing Node.js built-in modules
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-node-protocol.md
         */
        "n/prefer-node-protocol": "off",

        /**
         * enforce `require("dns").promises`
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-promises/dns.md
         */
        "n/prefer-promises/dns": "off",

        /**
         * enforce `require("fs").promises`
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-promises/fs.md
         */
        "n/prefer-promises/fs": "off",

        /**
         * require that `process.exit()` expressions use the same code path as `throw`
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/process-exit-as-throw.md
         */
        "n/process-exit-as-throw": "off",

    },

};
