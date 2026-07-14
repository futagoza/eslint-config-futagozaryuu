import { defineConfig } from "eslint/config"
import tseslint from "typescript-eslint"
import GetProjectConfig from "./internal/get-project-config.js"
import { config as DeprecatedConfig } from "./rules/deprecated.js"
import { config as DisableCoreConfig } from "./rules/eslint.js"
import { config as ExtensionConfig } from "./rules/extension.js"
import { config as GeneralConfig } from "./rules/general.js"
import { config as InferenceConfig } from "./rules/inference.js"
import { config as LayoutConfig } from "./rules/layout.js"
import { config as ProblemConfig } from "./rules/problem.js"
import { config as SuggestionConfig } from "./rules/suggestion.js"

// Ovoid glob compounding (intersection of 2 patterns)
delete tseslint.configs.eslintRecommended.files

// controlled in @futagoza/eslint-config-node
delete tseslint.configs.base.languageOptions.sourceType

/**
 * `@typescript-eslint` rules
 */
export const ConfigRules = {
    ...DeprecatedConfig.rules,
    ...ExtensionConfig.rules,
    ...GeneralConfig.rules,
    ...InferenceConfig.rules,
    ...LayoutConfig.rules,
    ...ProblemConfig.rules,
    ...SuggestionConfig.rules,
}

/**
 * Raw config for `@futagoza/eslint-config-typescript`
 * 
 * **NOTE:** Will not work properly with ESLint until passed through `require( "eslint/config" ).defineConfig`
 */
export const config = {

    name: "@futagoza/eslint-config-typescript",

    files: [ "**/*.cts", "**/*.mts", "**/*.ts", "**/*.tsx" ],

    extends: [
        tseslint.configs.base,
        tseslint.configs.eslintRecommended,
        DisableCoreConfig,
        DeprecatedConfig,
        ExtensionConfig,
        GeneralConfig,
        InferenceConfig,
        LayoutConfig,
        ProblemConfig,
        SuggestionConfig,
    ],

    languageOptions: {
        parserOptions: {
            project: await GetProjectConfig(),
        },
    },

}

/**
 * ESLint ready config for `@futagoza/eslint-config-typescript`
 */
export default defineConfig( config )
