import { defineConfig } from "eslint/config"

const config = {

    name: "@futagoza/eslint-config-javascript/script",

    // language: "js/js",

    languageOptions: {

        sourceType: "script",

        parserOptions: {

            ecmaFeatures: {

                globalReturn: false,

            },

        },

    },

    rules: {

        "strict": [ "error", "function" ],

    },

}

export default defineConfig( config )
