// 
// WARNING: AUTO-GENERATED USING eslint-plugin-n
//
// These rules suggest alternate ways of doing things
// 

/**
 * Raw config for `@futagoza/eslint-config-node/rules/suggestion.js`
 */
export const config = {

    name: "@futagoza/eslint-config-node/suggestion",

    rules: {

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
         * disallow string concatenation with `__dirname`, `__filename`, and `import.meta` paths
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
         * enforce either `URLSearchParams` or `require("url").URLSearchParams`
         * 
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/url-search-params.md
         */
        "n/prefer-global/url-search-params": "warn",

        /**
         * enforce either `URL` or `require("url").URL`
         * 
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/url.md
         */
        "n/prefer-global/url": "warn",

        /**
         * enforce either global timer functions or `require("timers")`
         * 
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/timers.md
         */
        "n/prefer-global/timers": "warn",

        /**
         * enforce using `node:assert/strict` instead of `node:assert`.
         * 
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-import/assert-strict.md
         */
        "n/prefer-import/assert-strict": "warn",

        /**
         * 🔧 enforce using the `node:` protocol when importing Node.js builtin modules.
         * 
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-node-protocol.md
         */
        "n/prefer-node-protocol": "off",

        /**
         * enforce using `process.getBuiltinModule()` to load Node.js built-in modules
         * 
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-process-get-builtin-module.md
         */
        "n/prefer-process-get-builtin-module": "warn",

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

    },

}

/**
 * ESLint ready config for `@futagoza/eslint-config-node/rules/suggestion.js`
 */
export default [ config ]
