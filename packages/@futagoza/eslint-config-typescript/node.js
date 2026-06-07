import { defineConfig } from "eslint/config"
import { config } from "./index.js"

if ( ! config.rules ) config.rules = {}

config.rules[ "n/no-unsupported-features/es-syntax" ] = "off"

/**
 * ESLint ready config for `@futagoza/eslint-config-typescript`
 */
export default defineConfig( config )
