import globals from "globals"

export const config = {

    name: "@futagoza/eslint-config-globals/es2021",

    languageOptions: {

        globals: {

            ...globals.builtin,
            ...globals.es2021,

        },

    },

}

export default [ config ]
