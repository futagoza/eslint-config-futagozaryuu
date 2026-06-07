import { defineConfig } from "eslint/config"
import coreConfig from "@futagoza/eslint-config-core"
import moduleConfig from "./module.js"

const config = {

    name: "@futagoza/eslint-config-javascript/latest",

    extends: [ coreConfig, moduleConfig ],

    languageOptions: {

        ecmaVersion: "latest",

    },

}

export default defineConfig( config )
