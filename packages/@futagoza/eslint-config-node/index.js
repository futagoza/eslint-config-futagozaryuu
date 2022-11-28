"use strict";

module.exports = {

    "extends": [

        "@futagoza/globals/node",
        "@futagoza/javascript/strict",

    ],

    "plugins": [ "node" ],

    "overrides": [
        {

            "files": [ "*.mjs" ],
            "extends": "@futagoza/javascript/modules",

        },
    ],

    "rules": {

        /* --------------- eslint-plugin-node | Possible Errors --------------- */

        /**
         * require error handling in callbacks
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/handle-callback-err.md
         */
        "n/handle-callback-err": "off",

        /**
         * Ensure Node.js-style error-first callback pattern is followed
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-callback-literal.md
         */
        "n/no-callback-literal": "off",

        /**
         * Disallow the assignment to `exports`.
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-exports-assign.md
         */
        "n/no-exports-assign": "error",

        /**
         * Disallow `import` declarations of extraneous packages.
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-extraneous-import.md
         */
        "n/no-extraneous-import": "off",

        /**
         * Disallow `require()` expressions of extraneous packages.
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-extraneous-require.md
         */
        "n/no-extraneous-require": "off",

        /**
         * Disallow `import` declarations for files that don't exist.
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-missing-import.md
         */
        "n/no-missing-import": "off",

        /**
         * Disallow `require()`s for files that don't exist.
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-missing-require.md
         */
        "n/no-missing-require": "off",

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
         * disallow the use of `process.exit()`
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-process-exit.md
         */
        "n/no-process-exit": "off",

        /**
         * Disallow `bin` files that npm ignores.
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unpublished-bin.md
         */
        "n/no-unpublished-bin": "off",

        /**
         * Disallow `import` declarations for files that npm ignores.
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unpublished-import.md
         */
        "n/no-unpublished-import": "off",

        /**
         * Disallow `require()`s for files that npm ignores.
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unpublished-require.md
         */
        "n/no-unpublished-require": "off",

        /**
         * Disallow unsupported ECMAScript built-ins on the specified version.
         * 
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unsupported-features/es-builtins.md
         */
        "n/no-unsupported-features/es-builtins": "off",

        /**
         * Disallow unsupported ECMAScript syntax on the specified version.
         * 
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unsupported-features/es-syntax.md
         */
        "n/no-unsupported-features/es-syntax": "off",

        /**
         * Disallow unsupported Node.js built-in APIs on the specified version.
         * 
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unsupported-features/node-builtins.md
         */
        "n/no-unsupported-features/node-builtins": "off",

        /**
         * Make the same code path as throw at `process.exit()`.
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/process-exit-as-throw.md
         */
        "n/process-exit-as-throw": "off",

        /**
         * 🔧 Suggest correct usage of shebang.
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/shebang.md
         */
        "n/shebang": "error",

        /* --------------- eslint-plugin-node | Best Practices --------------- */

        /**
         * Disallow deprecated API.
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-deprecated-api.md
         */
        "n/no-deprecated-api": "warn",

        /* --------------- eslint-plugin-node | Stylistic Issues --------------- */

        /**
         * require `return` statements after callbacks
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/callback-return.md
         */
        "n/callback-return": "off",

        /**
         * 🔧 Enforce either `module.exports` or `exports`.
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/exports-style.md
         */
        "n/exports-style": "off",

        /**
         * 🔧 Enforce the style of file extensions in `import` declarations.
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
         * disallow `require` calls to be mixed with regular variable declarations
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-mixed-requires.md
         */
        "n/no-mixed-requires": "off",

        /**
         * disallow the use of `process.env`
         *
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-process-env.md
         */
        "n/no-process-env": "off",

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
         * Enforce either `Buffer` or `require("buffer").Buffer`.
         * 
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/buffer.md
         */
        "n/prefer-global/buffer": "off",

        /**
         * Enforce either `console` or `require("console")`.
         * 
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/console.md
         */
        "n/prefer-global/console": "off",

        /**
         * Enforce either `process` or `require("process")`.
         * 
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/process.md
         */
        "n/prefer-global/process": "off",

        /**
         * Enforce either `TextDecoder` or `require("util").TextDecoder`
         * 
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/text-decoder.md
         */
        "n/prefer-global/text-decoder": "off",

        /**
         * Enforce either `TextEncoder` or `require("util").TextEncoder`
         * 
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/text-encoder.md
         */
        "n/prefer-global/text-encoder": "off",

        /**
         * Enforce either `URLSearchParams` or `require("url").URLSearchParams`.
         * 
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/url-search-params.md
         */
        "n/prefer-global/url-search-params": "off",

        /**
         * Enforce either `URL` or `require("url").URL`.
         * 
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/url.md
         */
        "n/prefer-global/url": "off",

        /**
         * Enforce `require("dns").promises`
         * 
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-promises/dns.md
         */
        "n/prefer-promises/dns": "off",

        /**
         * Enforce `require("fs").promises`
         * 
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-promises/fs.md
         */
        "n/prefer-promises/fs": "off",

    },

};
