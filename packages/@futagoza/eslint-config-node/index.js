import { defineConfig } from "eslint/config"
import node from "eslint-plugin-n"
import globals from "@futagoza/eslint-config-globals/node.js"
import { config as DeprecatedConfig } from "./rules/deprecated.js"
import { config as GeneralConfig } from "./rules/general.js"
import { config as LayoutConfig } from "./rules/layout.js"
import { config as ProblemConfig } from "./rules/problem.js"
import { config as SuggestionConfig } from "./rules/suggestion.js"

/**
 * `eslint-plugin-n` rules
 */
export const ConfigRules = {
    ...DeprecatedConfig.rules,
    ...GeneralConfig.rules,
    ...LayoutConfig.rules,
    ...ProblemConfig.rules,
    ...SuggestionConfig.rules,
}

/**
 * Raw config for `@futagoza/eslint-config-node`
 * 
 * **NOTE:** Will not work properly with ESLint until passed through `require( "eslint/config" ).defineConfig`
 */
export const config = {

    name: "@futagoza/eslint-config-node",

    plugins: {

        "n": node,

    },

    extends: [
        globals,
        DeprecatedConfig,
        GeneralConfig,
        LayoutConfig,
        ProblemConfig,
        SuggestionConfig,
    ],

}

/**
 * ESLint ready config for `@futagoza/eslint-config-node`
 */
export default defineConfig( config )
