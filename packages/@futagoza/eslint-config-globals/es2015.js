import globals from "globals"

export const config = {

    name: "@futagoza/eslint-config-globals/es2015",

    languageOptions: {

        globals: {

            ...globals.builtin,
            ...globals.es2015,

        },

    },

}

export default [ config ]
