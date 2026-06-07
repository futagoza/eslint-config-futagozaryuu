import globals from "globals"

export const config = {

    name: "@futagoza/eslint-config-globals/es2020",

    languageOptions: {

        globals: {

            ...globals.builtin,
            ...globals.es2020,

        },

    },

}

export default [ config ]
