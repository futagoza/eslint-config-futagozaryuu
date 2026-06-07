> This package contains configuration files for ESLint v10+<br>

This is a configuration file for ESLint that is used to enable [JavaScript global variables](https://github.com/sindresorhus/globals).

## installation

```console
$ npm i --save-dev @futagoza/eslint-config-globals
```

## usage

Put the following into your eslint configuration file:

```js
// Eslint config array
import globals from "@futagoza/eslint-config-globals"

// or direct access to the javascript objects used in the config
import { config as globalsConfig } from "@futagoza/eslint-config-globals"
```

## configurations

This is a list of importable ESLint configurations:

- __`@futagoza/eslint-config-globals`__ (_default_, enables common built-in ECMAScript variables)
- __`@futagoza/eslint-config-globals/browser.js`__
- __`@futagoza/eslint-config-globals/es5.js`__
- __`@futagoza/eslint-config-globals/es2015.js`__
- __`@futagoza/eslint-config-globals/es2016.js`__
- __`@futagoza/eslint-config-globals/es2017.js`__
- __`@futagoza/eslint-config-globals/es2018.js`__
- __`@futagoza/eslint-config-globals/es2019.js`__
- __`@futagoza/eslint-config-globals/es2020.js`__
- __`@futagoza/eslint-config-globals/es2021.js`__
- __`@futagoza/eslint-config-globals/es2022.js`__
- __`@futagoza/eslint-config-globals/es2023.js`__
- __`@futagoza/eslint-config-globals/es2024.js`__
- __`@futagoza/eslint-config-globals/es2025.js`__
- __`@futagoza/eslint-config-globals/es2026.js`__
- __`@futagoza/eslint-config-globals/gui.js`__
- __`@futagoza/eslint-config-globals/loaders.js`__
- __`@futagoza/eslint-config-globals/node.js`__
- __`@futagoza/eslint-config-globals/test.js`__
- __`@futagoza/eslint-config-globals/worker.js`__

## license

Copyright © 2019+ Futago-za Ryuu<br>
Released under the MIT License, [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
