import globals from "globals"

export const config = {

    name: "@futagoza/eslint-config-globals/es2016",

    languageOptions: {

        globals: {

            ...globals.builtin,
            ...globals.es2016,

        },

    },

}

export default [ config ]
