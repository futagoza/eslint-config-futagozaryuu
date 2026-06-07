> This package contains configuration files for ESLint v10+<br>

These are configuration files for ESLint that are used to lint my Node.js projects.

**NOTE:** Apart from the default configuration, all configurations extend [@futagoza/eslint-config-javascript](https://www.npmjs.com/package/@futagoza/eslint-config-javascript) (which itself extends [@futagoza/eslint-config-core](https://www.npmjs.com/package/@futagoza/eslint-config-core)), so you don't have to include either as a dependency when using this package.

## installation

```console
$ npm i --save-dev @futagoza/eslint-config-node
```

## usage

Put the following into your eslint configuration file:

```js
import { defineConfig } from "eslint/config"
import nodeConfig from "@futagoza/eslint-config-node"

// Used alongside other configurations:
export default [

    // ...

    nodeConfig,

    // ...

]

// Used as base configuration for other configurations:
export default defineConfig(
    {

        // ...

        extends: [ nodeConfig ],

        // ...

    },
)

// direct access to unprocessed config object
import { config } from "@futagoza/eslint-config-node"

// direct access to `eslint-plugin-n` rules used in this config
import { configRules } from "@futagoza/eslint-config-node"
```

## configurations

A list of usable configurations:

- __`@futagoza/eslint-config-node`__ (_default_, extends the below auto-generated _@futagoza/eslint-config-node/rules/*_ configurations)
- __`@futagoza/eslint-config-node/rules/deprecated.js`__
- __`@futagoza/eslint-config-node/rules/general.js`__
- __`@futagoza/eslint-config-node/rules/layout.js`__
- __`@futagoza/eslint-config-node/rules/problem.js`__
- __`@futagoza/eslint-config-node/rules/suggestion.js`__

These configurations target LTS versions (and from 2026, current versions) of Node:

- __`@futagoza/eslint-config-node/4.js`__
- __`@futagoza/eslint-config-node/6.js`__
- __`@futagoza/eslint-config-node/8.js`__
- __`@futagoza/eslint-config-node/10.js`__
- __`@futagoza/eslint-config-node/12.js`__
- __`@futagoza/eslint-config-node/14.js`__
- __`@futagoza/eslint-config-node/16.js`__
- __`@futagoza/eslint-config-node/18.js`__
- __`@futagoza/eslint-config-node/20.js`__
- __`@futagoza/eslint-config-node/22.js`__
- __`@futagoza/eslint-config-node/24.js`__
- __`@futagoza/eslint-config-node/26.js`__

## license

Copyright © 2017+ Futago-za Ryuu<br>
Released under the MIT License, [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
