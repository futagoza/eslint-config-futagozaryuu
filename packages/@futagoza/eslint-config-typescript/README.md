> This package contains configuration files for ESLint v10+<br>

This is a configuration file for ESLint that is used to lint my TypeScript projects.

**NOTE 1:** This configuration will only check for __@typescript-eslint/*__ rules, therefore it is recommended to also use [@futagoza/eslint-config-javascript][ECJ] or something similar alongside this configuration.

**NOTE 2:** This configuration require's TypeScript, but the `peerDependencies` field is set as `"typescript": "*"` so that any version of TypeScript supported by the [Typescript-ESLint][TETE] project can be used.

## installation

```console
$ npm i --save-dev @futagoza/eslint-config-typescript
```

## usage

Put the following into your eslint configuration file:

```js
import { defineConfig } from "eslint/config"
import tsConfig from "@futagoza/eslint-config-typescript"

// Used alongside other configurations:
export default [

    // ...

    tsConfig,

    // ...

]

// Used as base configuration for other configurations:
export default defineConfig(
    {

        // ...

        extends: [ tsConfig ],

        // ...

    },
)

// direct access to unprocessed config object
import { config as rawTypeScriptConfig } from "@futagoza/eslint-config-typescript"

// Do this if you aren't using any TypeScript files with these extensions: "*.cts", "*.mts", "*.ts", "*.tsx"
delete rawTypeScriptConfig.files

// direct access to Typescript-ESLint rules used in this config
import { configRules } from "@futagoza/eslint-config-typescript"
```

## configurations

A list of usable configurations:

- __`@futagoza/eslint-config-typescript`__ (_default_, extends the below auto-generated configurations)
- __`@futagoza/eslint-config-typescript/rules/deprecated.js`__
- __`@futagoza/eslint-config-typescript/rules/extension.js`__
- __`@futagoza/eslint-config-typescript/rules/general.js`__
- __`@futagoza/eslint-config-typescript/rules/inference.js`__
- __`@futagoza/eslint-config-typescript/rules/layout.js`__
- __`@futagoza/eslint-config-typescript/rules/problem.js`__
- __`@futagoza/eslint-config-typescript/rules/suggestion.js`__
- __`@futagoza/eslint-config-typescript/node.js`__ _(recommended default when using with @futagoza/eslint-config-node)_

## tsconfig.json

[@typescript-eslint/eslint-plugin][TETE] requires a `tsconfig.json` in the current working directory to function correctly, but I believe in zero-config, so what this configuration does is the following in order:

1. Try to load `tsconfig.eslint.json` from the current working directory
2. Try to load `tsconfig.json` from the current working directory
3. Try to load (and fallback to creating it instead) a `tsconfig.json` from your systems temporary directory

If the third choice is reached, this configuration will create a temporary `tsconfig.json` (based on the built-in [`tsconfig.default.json`][CONFIG]) in the user's temporary directory with path's linked to the current working directory so that it functions like a normal `tsconfig.json` (albeit _slightly opinionated_). This is a great alternative to the `createDeafultProgram` option provided by [@typescript-eslint/eslint-plugin][TETE] as it can have performance issues (e.g. I've had VS Code slow down).

## license

Copyright © 2019+ Futago-za Ryuu<br>
Released under the MIT License, [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)

[TETE]: https://github.com/typescript-eslint/typescript-eslint
[ECJ]: https://www.npmjs.com/package/@futagoza/eslint-config-javascript
[CONFIG]: https://github.com/futagoza/eslint-config-futagozaryuu/blob/master/packages/%40futagoza/eslint-config-typescript/internal/tsconfig.default.json
