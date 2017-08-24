"use strict";

module.exports = {

    "rules": {

        /**
         * 📝 legacy version of `indent`
         *
         * Was originally called `indent`, a stylistic rule, but after the rule was rewrote, the
         * original was renamed so developers can opt-in to the original behaviour of the rule.
         *
         * @deprecated ESLint 4.0.0-alpha.0
         * @see http://eslint.org/docs/rules/indent-legacy
         */
        "indent-legacy": 0,

        /**
         * 📝 require or disallow newlines around directives
         *
         * This rule was deprecated in favor of `padding-line-between-statements`,
         * a new stylistic rule introduced in ESLint 4.0.0.
         *
         * @deprecated ESLint 4.0.0-beta.0
         * @see http://eslint.org/docs/rules/lines-around-directive
         */
        "lines-around-directive": 0,

        /**
         * 📝 require or disallow an empty line after variable declarations
         *
         * This rule was deprecated in favor of `padding-line-between-statements`,
         * a new stylistic rule introduced in ESLint 4.0.0.
         *
         * @deprecated ESLint 4.0.0-beta.0
         * @see http://eslint.org/docs/rules/newline-after-var
         */
        "newline-after-var": 0,

        /**
         * 📝 require an empty line before `return` statements
         *
         * This rule was deprecated in favor of `padding-line-between-statements`,
         * a new stylistic rule introduced in ESLint 4.0.0.
         *
         * @deprecated ESLint 4.0.0-beta.0
         * @see http://eslint.org/docs/rules/newline-before-return
         */
        "newline-before-return": 0

    }

};
