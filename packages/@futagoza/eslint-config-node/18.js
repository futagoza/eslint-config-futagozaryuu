import CreateConfig from "./internal/create-node-config.js"

const x = await CreateConfig( {

    versions: {
        es: 2022,
        node: 18,
    },

} )

export const config = x.ConfigObject
export default x.ConfigArray
