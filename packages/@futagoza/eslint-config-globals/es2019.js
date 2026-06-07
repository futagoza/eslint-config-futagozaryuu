import globals from "globals"

export const config = {

    name: "@futagoza/eslint-config-globals/es2019",

    languageOptions: {

        globals: {

            ...globals.builtin,
            ...globals.es2019,

        },

    },

}

export default [ config ]
