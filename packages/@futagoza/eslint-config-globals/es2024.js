import globals from "globals"

export const config = {

    name: "@futagoza/eslint-config-globals/es2024",

    languageOptions: {

        globals: {

            ...globals.builtin,
            ...globals.es2024,

        },

    },

}

export default [ config ]
