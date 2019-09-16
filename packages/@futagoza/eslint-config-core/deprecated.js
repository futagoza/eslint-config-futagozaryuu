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

    },

};
