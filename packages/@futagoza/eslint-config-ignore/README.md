> This package contains configuration files for ESLint v10+<br>

This configuration includes a set of globs to ignore files (mostly recursively) using the `ignore` property.

- See ignored patterns: [@futagoza/eslint-config-ignore/index.js](https://github.com/futagoza/eslint-config-futagozaryuu/blob/master/packages/%40futagoza/eslint-config-ignore/index.js)
- See documentation: [eslint.org/docs/latest/use/configure/ignore](https://eslint.org/docs/latest/use/configure/ignore)

## installation

```console
$ npm i --save-dev @futagoza/eslint-config-ignore
```

## usage

Put either of the following into your eslint configuration file:

```js
import { defineConfig } from "eslint/config"
import ignore from "@futagoza/eslint-config-ignore"

// Used as a global ignore pattern:
export default [

    ignore,

    // ...

]

// Used as a local ignore pattern for a single configuration
export default defineConfig(
    {
        files: [ "./**/*.coffee" ],
        extends: [ ignore ],
    },
)

// or direct access to the javascript objects used in the config
import { config as ignoreConfig } from "@futagoza/eslint-config-ignore"
```

## license

Copyright © 2019+ Futago-za Ryuu<br>
Released under the MIT License, [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
