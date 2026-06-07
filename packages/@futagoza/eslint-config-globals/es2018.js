import globals from "globals"

export const config = {

    name: "@futagoza/eslint-config-globals/es2018",

    languageOptions: {

        globals: {

            ...globals.builtin,
            ...globals.es2018,

        },

    },

}

export default [ config ]
