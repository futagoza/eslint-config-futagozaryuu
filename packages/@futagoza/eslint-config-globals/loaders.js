import globals from "globals"

export const config = {

    name: "@futagoza/eslint-config-globals/loaders",

    languageOptions: {

        globals: {

            ...globals.commonjs,
            ...globals.amd,

            "import": false,
            "System": false,

        },

    },

}

export default [ config ]
