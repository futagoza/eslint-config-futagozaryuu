import globals from "globals"

export const config = {

    name: "@futagoza/eslint-config-globals/es2026",

    languageOptions: {

        globals: {

            ...globals.builtin,
            ...globals.es2026,

        },

    },

}

export default [ config ]
