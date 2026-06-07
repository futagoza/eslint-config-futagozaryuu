> This package contains configuration files for ESLint v10+<br>

These are configuration files for ESLint that are mostly extended upon by my other ESLint configurations.

Most of the rules set in these files are from the core set of built-in ESLint rules, with the rest from the `@stylistic` plugin

## installation

```console
$ npm i --save-dev @futagoza/eslint-config-core
```

## usage

Put the following into your eslint configuration file:

```js
import { defineConfig } from "eslint/config"
import coreConfig from "@futagoza/eslint-config-core"

// Used alongside other configurations:
export default [

    // ...

    coreConfig,

    // ...

]

// Used as base configuration for other configurations:
export default defineConfig(
    {

        // ...

        extends: [ coreConfig ],

        // ...

    },
)

// direct access to unprocessed config object
import { config } from "@futagoza/eslint-config-core"

// direct access to core ESLint rules used in this config
import { EslintRules } from "@futagoza/eslint-config-core"

// or direct access to ALL rules (ESLint + @stylistic) used in this config
import { ConfigRules } from "@futagoza/eslint-config-core"
```

## configurations

A list of usable configurations:

- __`@futagoza/eslint-config-core`__ (_default_, extends the below auto-generated configurations)
- __`@futagoza/eslint-config-core/rules/layout.js`__
- __`@futagoza/eslint-config-core/rules/problem.js`__
- __`@futagoza/eslint-config-core/rules/style.js`__
- __`@futagoza/eslint-config-core/rules/suggestion.js`__

## license

Copyright © 2017+ Futago-za Ryuu<br>
Released under the MIT License, [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
