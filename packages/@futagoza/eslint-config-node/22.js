import CreateConfig from "./internal/create-node-config.js"

const x = await CreateConfig( {

    versions: {
        es: 2024,
        node: 22,
    },

} )

export const config = x.ConfigObject
export default x.ConfigArray
