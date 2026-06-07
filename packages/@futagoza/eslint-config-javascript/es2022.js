import CreateConfig from "./internal/create-config.js"

const x = await CreateConfig( 2022 )

export const config = x.ConfigObject
export default x.ConfigArray
