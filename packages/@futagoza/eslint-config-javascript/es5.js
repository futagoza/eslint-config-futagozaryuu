import CreateConfig from "./internal/create-config.js"

const x = await CreateConfig( 5, {

    rules: {

        "prefer-object-has-own": "off",

        "strict": [ "error", "safe" ],

    },

} )

export const config = x.ConfigObject
export default x.ConfigArray
