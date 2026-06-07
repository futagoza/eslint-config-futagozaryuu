import CreateConfig from "./internal/create-config.js"

const x = await CreateConfig( 2018, {

    rules: {

        "prefer-object-has-own": "off",

    },

} )

export const config = x.ConfigObject
export default x.ConfigArray
