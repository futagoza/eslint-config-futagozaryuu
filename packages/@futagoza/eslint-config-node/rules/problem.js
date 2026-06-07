// 
// WARNING: AUTO-GENERATED USING eslint-plugin-n
//
// These rules relate to possible logic errors in code
// 

/**
 * Raw config for `@futagoza/eslint-config-node/rules/problem.js`
 */
export const config = {

    name: "@futagoza/eslint-config-node/problem",

    rules: {

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
         * require that `process.exit()` expressions use the same code path as `throw`
         * 
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/process-exit-as-throw.md
         */
        "n/process-exit-as-throw": "off",

        /**
         * 🔧 require correct usage of hashbang
         * 
         * @see https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/hashbang.md
         */
        "n/hashbang": [
            "error",
            {
                "ignoreUnpublished": true,
                "executableMap": {
                    ".js": "node",
                    ".ts": "ts-node",
                },
            },
        ],

    },

}

/**
 * ESLint ready config for `@futagoza/eslint-config-node/rules/problem.js`
 */
export default [ config ]
