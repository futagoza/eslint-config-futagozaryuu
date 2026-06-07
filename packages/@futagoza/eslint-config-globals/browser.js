import globals from "globals"

export const config = {

    name: "@futagoza/eslint-config-globals/browser",

    languageOptions: {

        globals: {

            ...globals.browser,
            ...globals.webextensions,
            ...globals.greasemonkey,
            ...globals.devtools,

        },

    },

}

export default [ config ]
