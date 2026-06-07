import globals from "globals"

export const config = {

    name: "@futagoza/eslint-config-globals/test",

    languageOptions: {

        globals: {

            ...globals.chai,
            ...globals.jasmine,
            ...globals.jest,
            ...globals.mocha,
            ...globals.qunit,
            ...globals.phantomjs,

            "suite": false,
            "bench": false,
            "benchmark": false,

        },

    },

}

export default [ config ]
