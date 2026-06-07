import globals from "globals"

export const config = {

    name: "@futagoza/eslint-config-globals/gui",

    languageOptions: {

        globals: {

            ...globals.browser,
            ...globals.webextensions,
            ...globals.greasemonkey,
            ...globals.devtools,

            ...globals.node,
            ...globals[ "shared-node-browser" ],

        },

    },

}

export default [ config ]
