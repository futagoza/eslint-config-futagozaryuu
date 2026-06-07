import { defineConfig } from "eslint/config"
import CoreConfig from "@futagoza/eslint-config-core"

/**
 * A helper function to build `@futagoza/eslint-config-javascript` configuration files
 * 
 * @param {number} ecmaVersion 
 */
export default async function CreateConfig( ecmaVersion, config = {} ) {

    // https://stackoverflow.com/a/67880017
    const { default: GlobalsConfig } = await import( `@futagoza/eslint-config-globals/es${ ecmaVersion }.js` )

    // build the main extends list
    const extendList = [

        GlobalsConfig,
        CoreConfig,

    ]

    // if any extends were passed, join them with `extendList`
    if ( Array.isArray( config.extends ) ) extendList.push( ...config.extends )

    // delete (if passed) the provided extends
    delete config.extends

    // the JavaScript config
    const ConfigObject = {

        name: "@futagoza/eslint-config-javascript/es" + ecmaVersion,

        extends: extendList,

        languageOptions: { ecmaVersion },

        ...config,

    }

    return {

        ConfigObject,

        // generate eslint config array to used as the default export
        ConfigArray: defineConfig( ConfigObject ),

    }

}
