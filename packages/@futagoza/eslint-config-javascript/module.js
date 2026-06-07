import { defineConfig } from "eslint/config"

const config = {

    name: "@futagoza/eslint-config-javascript/module",

    // language: "js/js",

    languageOptions: {

        sourceType: "module",

    },

    rules: {

        "strict": [ "error", "never" ],

    },

}

export default defineConfig( config )
