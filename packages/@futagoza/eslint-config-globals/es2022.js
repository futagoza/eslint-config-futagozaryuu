import globals from "globals"

export const config = {

    name: "@futagoza/eslint-config-globals/es2022",

    languageOptions: {

        globals: {

            ...globals.builtin,
            ...globals.es2022,

        },

    },

}

export default [ config ]
