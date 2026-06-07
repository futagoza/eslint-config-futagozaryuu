import CreateConfig from "./internal/create-node-config.js"

const x = await CreateConfig( {

    versions: {
        es: 2017,
        node: 8,
    },

} )

export const config = x.ConfigObject
export default x.ConfigArray
