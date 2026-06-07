import { defineConfig } from "eslint/config"
import ignore from "@futagoza/eslint-config-ignore"
import node from "@futagoza/eslint-config-node/20.js"
import typescript from "@futagoza/eslint-config-typescript/node.js"

export default defineConfig( ignore, node, typescript )
