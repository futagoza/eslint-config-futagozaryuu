> This package contains configuration files for ESLint v10+<br>

These are configuration files for ESLint that are used to lint my JavaScript projects.

**NOTE:** All the main configuration files...
- extend [@futagoza/eslint-config-core](https://www.npmjs.com/package/@futagoza/eslint-config-core), so it's already included as a dependency when using this package
- extend their relevant configuration files from [@futagoza/eslint-config-globals](https://www.npmjs.com/package/@futagoza/eslint-config-globals) (e.g `@futagoza/eslint-config-javascript/es2022.js` extends `@futagoza/eslint-config-globals/es2022.js`)

## installation

```console
$ npm i --save-dev @futagoza/eslint-config-javascript
```

## usage

Put the following into your eslint configuration file:

```js
import { defineConfig } from "eslint/config"
import javascript from "@futagoza/eslint-config-javascript"

// Used alongside other configurations:
export default [

    // ...

    javascript,

    // ...

]

// Used as base configuration for other configurations:
export default defineConfig(
    {

        // ...

        extends: [ javascript ],

        // ...

    },
)
```

## configurations

A list of importable ESLint configuration files:

- __`@futagoza/eslint-config-javascript`__ (_alias for my current default_)
- __`@futagoza/eslint-config-javascript/es5.js`__
- __`@futagoza/eslint-config-javascript/es2015.js`__
- __`@futagoza/eslint-config-javascript/es2016.js`__
- __`@futagoza/eslint-config-javascript/es2017.js`__
- __`@futagoza/eslint-config-javascript/es2018.js`__
- __`@futagoza/eslint-config-javascript/es2019.js`__
- __`@futagoza/eslint-config-javascript/es2020.js`__
- __`@futagoza/eslint-config-javascript/es2021.js`__
- __`@futagoza/eslint-config-javascript/es2022.js`__
- __`@futagoza/eslint-config-javascript/es2023.js`__ (_default_)
- __`@futagoza/eslint-config-javascript/es2024.js`__
- __`@futagoza/eslint-config-javascript/es2025.js`__
- __`@futagoza/eslint-config-javascript/es2026.js`__

Additionally, there are some base configuration files that help target source types (the intention was to use them with the above configuration files, but I ended up finding a much better way to implement them and decided to leave these as they can provide a way to quickly switch (or target) source types; e.g. commonjs on Node):

- __`@futagoza/eslint-config-javascript/common.js`__ _(common.js based JavaScript modules)_
- __`@futagoza/eslint-config-javascript/latest.js`__ _(the latest supported JavaScript version by ESLint; e.g. ESNext)_
- __`@futagoza/eslint-config-javascript/module.js`__ _(ES2015+ import/export based JavaScript modules)_
- __`@futagoza/eslint-config-javascript/script.js`__ _(plain JavaScript code)_

## license

Copyright © 2017+ Futago-za Ryuu<br>
Released under the MIT License, [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
