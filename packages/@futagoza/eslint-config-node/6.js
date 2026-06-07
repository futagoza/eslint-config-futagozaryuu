import CreateConfig from "./internal/create-node-config.js"

const x = await CreateConfig( {

    versions: {
        es: 2015,
        node: 6,
    },

} )

export const config = x.ConfigObject
export default x.ConfigArray
