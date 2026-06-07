import globals from "globals"

export const config = {

    name: "@futagoza/eslint-config-globals/es2017",

    languageOptions: {

        globals: {

            ...globals.builtin,
            ...globals.es2017,

        },

    },

}

export default [ config ]
