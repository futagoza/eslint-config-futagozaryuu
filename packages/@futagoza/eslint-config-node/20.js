import CreateConfig from "./internal/create-node-config.js"

const x = await CreateConfig( {

    versions: {
        es: 2023,
        node: 20,
    },

} )

export const config = x.ConfigObject
export default x.ConfigArray
