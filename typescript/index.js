"use strict";

const resolve = require.resolve;

const config = {
    ...require( "../stylistic-issues" ).rules,
    ...require( "../variables" ).rules,
    ...require( "../es2015" ).rules,
};

module.exports = {

    "extends": resolve( "../es2019.js" ),
    "overrides": [ {

        "files": [ "*.ts" ],
        "parser": resolve( "@typescript-eslint/parser" ),
        "parserOptions": {

            "project": resolve( "./tsconfig.json", { paths: [ process.cwd() ] } ),
            "sourceType": "module",

        },
        "plugins": [ "@typescript-eslint" ],
        "rules": {

            ...require( "@typescript-eslint/eslint-plugin/dist/configs/recommended.json" ).rules,
            ...require( "@typescript-eslint/eslint-plugin/dist/configs/eslint-recommended" ).default.overrides[ 0 ].rules,

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
