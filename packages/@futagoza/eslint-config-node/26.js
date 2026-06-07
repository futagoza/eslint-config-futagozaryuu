import CreateConfig from "./internal/create-node-config.js"

const x = await CreateConfig( {

    versions: {
        es: 2026,
        node: 26,
    },

} )

export const config = x.ConfigObject
export default x.ConfigArray
