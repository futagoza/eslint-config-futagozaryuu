"use strict";

module.exports = {

    "extends": "@futagoza/globals/node",

    "plugins": [ "node" ],

    "overrides": [
        {

            "files": [ "*.cjs", "*.js" ],
            "rules": { "strict": [ "error", "global" ] },

        },
        {

            "files": [ "*.mjs" ],
            "extends": "@futagoza/javascript/modules",

        },
    ],

    "rules": {

        /* --------------- ESLint Core Rules --------------- */

        /**
         * require `return` statements after callbacks
         *
         * @see http://eslint.org/docs/rules/callback-return
         */
        "callback-return": "off",

        /**
         * require `require()` calls to be placed at top-level module scope
         *
         * @see http://eslint.org/docs/rules/global-require
         */
        "global-require": "off",

        /**
         * require error handling in callbacks
         *
         * @see http://eslint.org/docs/rules/handle-callback-err
         */
        "handle-callback-err": "off",

        /**
         * disallow use of the Buffer() constructor
         *
         * @see http://eslint.org/docs/rules/no-buffer-constructor
         */
        "no-buffer-constructor": "off",

        /**
         * disallow `require` calls to be mixed with regular variable declarations
         *
         * @see http://eslint.org/docs/rules/no-mixed-requires
         */
        "no-mixed-requires": "off",

        /**
         * disallow `new` operators with calls to `require`
         *
         * @see http://eslint.org/docs/rules/no-new-require
         */
        "no-new-require": "off",

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
        "no-process-env": "off",

        /**
         * disallow the use of `process.exit()`
         *
         * @see http://eslint.org/docs/rules/no-process-exit
         */
        "no-process-exit": "off",

        /**
         * disallow specified modules when loaded by `require`
         *
         * @see http://eslint.org/docs/rules/no-restricted-modules
         */
        "no-restricted-modules": "off",

        /**
         * disallow synchronous methods
         *
         * @see http://eslint.org/docs/rules/no-sync
         */
        "no-sync": "off",

        /* --------------- eslint-plugin-node | Possible Errors --------------- */

        /**
         * Ensure Node.js-style error-first callback pattern is followed
         *
         * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-callback-literal.md
         */
        "node/no-callback-literal": "off",

        /**
         * Disallow the assignment to `exports`.
         *
         * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-exports-assign.md
         */
        "node/no-exports-assign": "error",

        /**
         * Disallow `import` declarations of extraneous packages.
         *
         * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-import.md
         */
        "node/no-extraneous-import": "off",

        /**
         * Disallow `require()` expressions of extraneous packages.
         *
         * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-require.md
         */
        "node/no-extraneous-require": "off",

        /**
         * Disallow `import` declarations for files that don't exist.
         *
         * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-import.md
         */
        "node/no-missing-import": "off",

        /**
         * Disallow `require()`s for files that don't exist.
         *
         * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-require.md
         */
        "node/no-missing-require": "off",

        /**
         * Disallow `bin` files that npm ignores.
         *
         * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-bin.md
         */
        "node/no-unpublished-bin": "off",

        /**
         * Disallow `import` declarations for files that npm ignores.
         *
         * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-import.md
         */
        "node/no-unpublished-import": "off",

        /**
         * Disallow `require()`s for files that npm ignores.
         *
         * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-require.md
         */
        "node/no-unpublished-require": "off",

        /**
         * Disallow unsupported ECMAScript built-ins on the specified version.
         * 
         * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-builtins.md
         */
        "node/no-unsupported-features/es-builtins": "off",

        /**
         * Disallow unsupported ECMAScript syntax on the specified version.
         * 
         * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-syntax.md
         */
        "node/no-unsupported-features/es-syntax": "off",

        /**
         * Disallow unsupported Node.js built-in APIs on the specified version.
         * 
         * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/node-builtins.md
         */
        "node/no-unsupported-features/node-builtins": "off",

        /**
         * Make the same code path as throw at `process.exit()`.
         *
         * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/process-exit-as-throw.md
         */
        "node/process-exit-as-throw": "off",

        /**
         * 🔧 Suggest correct usage of shebang.
         *
         * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/shebang.md
         */
        "node/shebang": "error",

        /* --------------- eslint-plugin-node | Best Practices --------------- */

        /**
         * Disallow deprecated API.
         *
         * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api.md
         */
        "node/no-deprecated-api": "warn",

        /* --------------- eslint-plugin-node | Stylistic Issues --------------- */

        /**
         * Enforce either `module.exports` or `exports`.
         *
         * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/exports-style.md
         */
        "node/exports-style": "off",

        /**
         * 🔧 Enforce the style of file extensions in `import` declarations.
         *
         * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/file-extension-in-import.md
         */
        "node/file-extension-in-import": "off",

        /**
         * Enforce either `Buffer` or `require("buffer").Buffer`.
         * 
         * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/buffer.md
         */
        "node/prefer-global/buffer": "off",

        /**
         * Enforce either `console` or `require("console")`.
         * 
         * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/console.md
         */
        "node/prefer-global/console": "off",

        /**
         * Enforce either `process` or `require("process")`.
         * 
         * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/process.md
         */
        "node/prefer-global/process": "off",

        /**
         * Enforce either `TextDecoder` or `require("util").TextDecoder`
         * 
         * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/text-decoder.md
         */
        "node/prefer-global/text-decoder": "off",

        /**
         * Enforce either `TextEncoder` or `require("util").TextEncoder`
         * 
         * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/text-encoder.md
         */
        "node/prefer-global/text-encoder": "off",

        /**
         * Enforce either `URLSearchParams` or `require("url").URLSearchParams`.
         * 
         * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/url-search-params.md
         */
        "node/prefer-global/url-search-params": "off",

        /**
         * Enforce either `URL` or `require("url").URL`.
         * 
         * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/url.md
         */
        "node/prefer-global/url": "off",

        /**
         * Enforce `require("dns").promises`
         * 
         * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-promises/dns.md
         */
        "node/prefer-promises/dns": "off",

        /**
         * Enforce `require("fs").promises`
         * 
         * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-promises/fs.md
         */
        "node/prefer-promises/fs": "off",

    },

};
