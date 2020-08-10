"use strict";

module.exports = {

    "rules": {

        /* ---------- Optional ---------- */

        // Do not include `export *` statements
        "no-duplicate-imports": [ "error", { "includeExports": false } ],

        // Not really required when checking `.ts` or `.tsx` files
        "strict": "off",

        // Checked by Typescript - ts(2378)
        "getter-return": "off",

        // Checked by Typescript - ts(2300)
        "no-dupe-args": "off",

        // Checked by Typescript - ts(1117)
        "no-dupe-keys": "off",

        // Checked by Typescript - ts(7027)
        "no-unreachable": "off",

        // Checked by Typescript - ts(2367)
        "valid-typeof": "off",

        // Checked by Typescript - ts(2588)
        "no-const-assign": "off",

        // Checked by Typescript - ts(2588)
        "no-new-symbol": "off",

        // Checked by Typescript - ts(2376)
        "no-this-before-super": "off",

        // This is checked by Typescript using the option `strictNullChecks`.
        "no-undef": "off",

        // This is already checked by Typescript.
        "no-dupe-class-members": "off",

        // This is already checked by Typescript.
        "no-redeclare": "off",

        /* ---------- Required ---------- */

        // Use `@typescript-eslint/brace-style` instead
        "brace-style": "off",

        // Use `@typescript-eslint/naming-convention` instead
        "camelcase": "off",

        // Use `@typescript-eslint/comma-spacing` instead
        "comma-spacing": "off",

        // Use `@typescript-eslint/default-param-last` instead
        "default-param-last": "off",

        // Use `@typescript-eslint/dot-notation` instead
        "dot-notation": "off",

        // Use `@typescript-eslint/func-call-spacing` instead
        "func-call-spacing": "off",

        // Use `@typescript-eslint/indent` instead
        "indent": "off",

        // Use `@typescript-eslint/init-declarations` instead
        "init-declarations": "off",

        // Use `@typescript-eslint/keyword-spacing` instead
        "keyword-spacing": "off",

        // Use `@typescript-eslint/lines-between-class-members` instead
        "lines-between-class-members": "off",

        // Use `@typescript-eslint/no-array-constructor` instead
        "no-array-constructor": "off",

        // Use `@typescript-eslint/no-extra-parens` instead
        "no-extra-parens": "off",

        // Use `@typescript-eslint/no-implied-eval` instead
        "no-implied-eval": "off",

        // Use `@typescript-eslint/no-invalid-this` instead
        "no-invalid-this": "off",

        // Use `@typescript-eslint/no-extra-semi` instead
        "no-extra-semi": "off",

        // Use `@typescript-eslint/no-extra-function` instead
        "no-empty-function": "off",

        // Use `@typescript-eslint/no-magic-numbers` instead
        "no-magic-numbers": "off",

        // Use `@typescript-eslint/no-throw-literal` instead
        "no-throw-literal": "off",

        // Use `@typescript-eslint/no-unused-expressions` instead
        "no-unused-expressions": "off",

        // Use `@typescript-eslint/no-unused-vars` instead
        "no-unused-vars": "off",

        // Use `@typescript-eslint/no-use-before-define` instead
        "no-use-before-define": "off",

        // Use `@typescript-eslint/no-useless-constructor` instead
        "no-useless-constructor": "off",

        // Use `@typescript-eslint/quotes` instead
        "quotes": "off",

        // Use `@typescript-eslint/require-await` instead
        "require-await": "off",

        // Use `@typescript-eslint/semi` instead
        "semi": "off",

        // Use `@typescript-eslint/space-before-function-paren` instead
        "space-before-function-paren": "off",

    },

};
