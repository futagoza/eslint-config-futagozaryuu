import CreateConfig from "./internal/create-node-config.js"

const x = await CreateConfig( {

    versions: {
        es: 2021,
        node: 16,
    },

} )

export const config = x.ConfigObject
export default x.ConfigArray
