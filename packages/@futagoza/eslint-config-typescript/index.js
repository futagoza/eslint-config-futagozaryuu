"use strict";

const config = {
    ...require( "@futagoza/eslint-config-core/stylistic-issues" ).rules,
    ...require( "@futagoza/eslint-config-core/variables" ).rules,
    ...require( "@futagoza/eslint-config-javascript/es2015" ).rules,
};

let project;

try {

    project = require.resolve( "./tsconfig.json", { paths: [ process.cwd() ] } );

} catch ( _err ) {

    project = require.resolve( "./tsconfig.default.json" );

}

module.exports = {

    "extends": "plugin:@typescript-eslint/eslint-recommended",

    "overrides": [ {

        "files": [ "*.ts", "*.tsx" ],
        "extends": "plugin:@typescript-eslint/recommended",

        "parserOptions": { project },

        "rules": {

            "no-duplicate-imports": [ "error", { "includeExports": false } ],
            "strict": "off",

            "@typescript-eslint/ban-types": "off",
            "@typescript-eslint/camelcase": "off",
            "@typescript-eslint/explicit-function-return-type": [ "error", {
                allowExpressions: true,
            } ],
            "@typescript-eslint/explicit-member-accessibility": "off",
            "@typescript-eslint/indent": config.indent,
            "@typescript-eslint/interface-name-prefix": "off",
            "@typescript-eslint/member-delimiter-style": [ "error", {
                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true,
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": true,
                },
            } ],
            "@typescript-eslint/member-naming": [ "warn", {
                "private": "^_",
            } ],
            "@typescript-eslint/member-ordering": "off",
            "@typescript-eslint/no-array-constructor": config[ "no-array-constructor" ],
            "@typescript-eslint/no-empty-interface": "warn",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-extraneous-class": "error",
            "@typescript-eslint/no-for-in-array": "error",
            "@typescript-eslint/no-inferrable-types": "off",
            "@typescript-eslint/no-type-alias": "off",
            "@typescript-eslint/no-unnecessary-type-assertion": "error",
            "@typescript-eslint/no-unused-vars": "off",
            "@typescript-eslint/no-use-before-define": config[ "no-use-before-define" ],
            "no-useless-constructor": "off",
            "@typescript-eslint/no-useless-constructor": config[ "no-useless-constructor" ],
            "@typescript-eslint/prefer-interface": "off",
            "@typescript-eslint/promise-function-async": "off",
            "@typescript-eslint/restrict-plus-operands": "error",
            "@typescript-eslint/type-annotation-spacing": "error",

        },

    } ],

};
