import CreateConfig from "./internal/create-node-config.js"

const x = await CreateConfig( {

    versions: {
        es: 2018,
        node: 10,
    },

} )

export const config = x.ConfigObject
export default x.ConfigArray
