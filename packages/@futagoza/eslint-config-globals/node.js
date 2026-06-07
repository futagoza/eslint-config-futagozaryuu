import globals from "globals"

export const config = {

    name: "@futagoza/eslint-config-globals/node",

    languageOptions: {

        globals: {

            ...globals.node,

        },

    },

}

export default [ config ]
