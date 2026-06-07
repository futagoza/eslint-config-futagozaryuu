import { defineConfig } from "eslint/config"
import globals from "@futagoza/eslint-config-globals/test.js"

const entry = postfix => [

    `**/*.${ postfix }.cjs`,
    `**/*.${ postfix }.mjs`,
    `**/*.${ postfix }.js`,
    `**/*.${ postfix }.jsx`,

    `**/*.${ postfix }.cts`,
    `**/*.${ postfix }.mts`,
    `**/*.${ postfix }.ts`,
    `**/*.${ postfix }.tsx`,

]

export const config = {

    name: "@futagoza/eslint-config-node/test",

    extends: [ globals ],

    files: [

        ...entry( "benchmark" ),
        ...entry( "spec" ),
        ...entry( "test" ),

    ],

}

export default defineConfig( config )
