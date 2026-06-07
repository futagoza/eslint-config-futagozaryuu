import globals from "globals"

export const config = {

    name: "@futagoza/eslint-config-globals/es2023",

    languageOptions: {

        globals: {

            ...globals.builtin,
            ...globals.es2023,

        },

    },

}

export default [ config ]
