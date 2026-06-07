import { defineConfig } from "eslint/config"
import { config as LayoutConfig } from "./rules/layout.js"
import { config as ProblemConfig } from "./rules/problem.js"
import { config as SuggestionConfig } from "./rules/suggestion.js"
import { config as StyleConfig } from "./rules/style.js"

/**
 * ESLint's built-in rules
 */
export const EslintRules = {

    ...LayoutConfig.rules,
    ...ProblemConfig.rules,
    ...SuggestionConfig.rules,

}

/**
 * ESLint's built-in rules + `@stylistic` rules
 */
export const ConfigRules = {

    ...EslintRules,
    ...StyleConfig.rules,

}

/**
 * Raw config for `@futagoza/eslint-config-core`
 * 
 * **NOTE:** Will not work properly with ESLint until passed through `require( "eslint/config" ).defineConfig`
 */
export const config = {

    name: "@futagoza/eslint-config-core",

    extends: [
        LayoutConfig,
        ProblemConfig,
        SuggestionConfig,
        StyleConfig,
    ],

    linterOptions: {

        reportUnusedDisableDirectives: "warn",

    },

}

/**
 * ESLint ready config for `@futagoza/eslint-config-core`
 */
export default defineConfig( config )
