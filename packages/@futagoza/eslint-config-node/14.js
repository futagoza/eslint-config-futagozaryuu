import CreateConfig from "./internal/create-node-config.js"

const x = await CreateConfig( {

    versions: {
        es: 2020,
        node: 14,
    },

} )

export const config = x.ConfigObject
export default x.ConfigArray
