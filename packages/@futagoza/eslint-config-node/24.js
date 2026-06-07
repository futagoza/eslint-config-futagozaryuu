import CreateConfig from "./internal/create-node-config.js"

const x = await CreateConfig( {

    versions: {
        es: 2025,
        node: 24,
    },

} )

export const config = x.ConfigObject
export default x.ConfigArray
