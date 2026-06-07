import globals from "globals"

export const config = {

    name: "@futagoza/eslint-config-globals/worker",

    languageOptions: {

        globals: {

            ...globals.worker,
            ...globals.serviceworker,

        },

    },

}

export default [ config ]
