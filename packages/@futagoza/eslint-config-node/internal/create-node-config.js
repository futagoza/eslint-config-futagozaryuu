import { defineConfig } from "eslint/config"
import MainNodeConfig from "../index.js"

const noUnsupportedFeatures = [

    "es-builtins",
    "es-syntax",
    "node-builtins",

]

/**
 * A helper function to build configurations that use rules from `eslint-plugin-n`
 * 
 * @param {{ action: string, ignore: string[], versions: Record<string,string|number>, rules: {} }} param0 
 */
export default async function CreateNodeConfig( { action = "error", ignore = {}, versions = {}, rules = {} } ) {

    const esVersion = typeof versions.es === "number"
        ? `es${ versions.es }`
        : ( versions.es ?? "es2015" )

    const version = typeof versions.node === "number"
        ? `>=${ versions.node }`
        : ( versions.node ?? ">=4" )

    for ( const rule of noUnsupportedFeatures )

        rules[ "n/no-unsupported-features/" + rule ] = [ action, {

            ignores: ignore[ rule ],
            version,

        } ]

    // https://stackoverflow.com/a/67880017
    const { default: JavascriptConfig } = await import( `@futagoza/eslint-config-javascript/${ esVersion }.js` )

    // the Node.js config
    const ConfigObject = {

        name: "@futagoza/eslint-config-node/" + version,

        files: [
            "**/*.cjs",
            "**/*.mjs",
            "**/*.js",
            "**/*.jsx",
            "**/*.cts",
            "**/*.mts",
            "**/*.ts",
            "**/*.tsx",
        ],

        extends: [ MainNodeConfig ],

        settings: {

            "n": { version },

        },

        rules,

    }

    return {

        ConfigObject,

        ConfigArray: defineConfig(
            {
                name: "@futagoza/eslint-config-node/commonjs",
                files: [
                    "**/*.cjs",
                    "**/*.cts",
                ],
                languageOptions: {
                    sourceType: "commonjs",
                },
            },
            {
                name: "@futagoza/eslint-config-node/module",
                files: [
                    "**/*.mjs",
                    "**/*.js",
                    "**/*.jsx",
                    "**/*.mts",
                    "**/*.ts",
                    "**/*.tsx",
                ],
                languageOptions: {
                    sourceType: "module",
                },
            },
            JavascriptConfig,
            ConfigObject,
        ),

    }

}
