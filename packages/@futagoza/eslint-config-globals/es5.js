import globals from "globals"

export const config = {

    name: "@futagoza/eslint-config-globals/es5",

    languageOptions: {

        globals: {

            ...globals.builtin,
            ...globals.es5,

        },

    },

}

export default [ config ]
