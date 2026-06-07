import globals from "globals"

export const config = {

    name: "@futagoza/eslint-config-globals/es2025",

    languageOptions: {

        globals: {

            ...globals.builtin,
            ...globals.es2025,

        },

    },

}

export default [ config ]
