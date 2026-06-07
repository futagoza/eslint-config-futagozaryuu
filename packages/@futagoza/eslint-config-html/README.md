> This package contains configuration files for ESLint v10+<br>

This is a configuration file for ESLint that is used to lint JavaScript source (and optionally TypeScript if the required configurations are installed) embedded within `.html` files.

**NOTE:** This configuration is only for enabling linting of HTML/XML for JavaScript and/or TypeScript, therefore it is recommended to also use [@futagoza/eslint-config-javascript](https://www.npmjs.com/package/@futagoza/eslint-config-javascript), [@futagoza/eslint-config-typescript](https://www.npmjs.com/package/@futagoza/eslint-config-typescript) or something similar alongside this configuration.

## installation

```console
$ npm i --save-dev @futagoza/eslint-config-html
```

## usage

Put either of the following into your eslint configuration file:

```js
import { defineConfig } from "eslint/config"
import html from "@futagoza/eslint-config-html"

// Used alongside other configurations:
export default [

    // ...

    html,

    // ...

]

// Used as base configuration for other configurations:
export default defineConfig(
    {

        // ...

        extends: [ html ],

        // ...

    },
)

// or direct access to the javascript objects used in the config
import { config as htmlConfig } from "@futagoza/eslint-config-html"
```

## license

Copyright © 2019+ Futago-za Ryuu<br>
Released under the MIT License, [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
