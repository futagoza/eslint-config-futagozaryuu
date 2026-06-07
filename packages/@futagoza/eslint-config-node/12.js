import CreateConfig from "./internal/create-node-config.js"

const x = await CreateConfig( {

    versions: {
        es: 2019,
        node: 12,
    },

} )

export const config = x.ConfigObject
export default x.ConfigArray
