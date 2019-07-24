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

        // Use `@typescript-eslint/camelcase` instead
        "camelcase": "off",

        // Use `@typescript-eslint/func-call-spacing` instead
        "func-call-spacing": "off",

        // Use `@typescript-eslint/indent` instead
        "indent": "off",

        // Use `@typescript-eslint/no-array-constructor` instead
        "no-array-constructor": "off",

        // Use `@typescript-eslint/no-extra-parens` instead
        "no-extra-parens": "off",

        // Use `@typescript-eslint/no-magic-numbers` instead
        "no-magic-numbers": "off",

        // Use `@typescript-eslint/no-unused-vars` instead
        "no-unused-vars": "off",

        // Use `@typescript-eslint/no-useless-constructor` instead
        "no-useless-constructor": "off",

        // Use `@typescript-eslint/require-await` instead
        "require-await": "off",

        // Use `@typescript-eslint/semi` instead
        "semi": "off",

    },

};
