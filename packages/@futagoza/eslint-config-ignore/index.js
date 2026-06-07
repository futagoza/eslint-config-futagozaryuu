export const config = {

    name: "@futagoza/eslint-config-ignore",

    ignores: [

        // root based ignores
        ".idea/*",
        ".nyc_output/*",
        "coverage/*",
        "temp/*",

        // recursive ignores
        "**/assets/*",
        "**/dist/*",
        "**/node_modules/*",
        "**/out/*",

    ],

}

export default [ config ]
