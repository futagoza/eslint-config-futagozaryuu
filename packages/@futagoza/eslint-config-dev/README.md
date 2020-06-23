[![dependencies](https://img.shields.io/david/futagoza/eslint-config-futagozaryuu.svg?path=packages/@futagoza/eslint-config-dev)](https://david-dm.org/futagoza/eslint-config-futagozaryuu?path=packages/@futagoza/eslint-config-dev)
[![History](https://img.shields.io/badge/history-CHANGELOG.md-orange.svg)](https://github.com/futagoza/eslint-config-futagozaryuu/blob/master/CHANGELOG.md)
[![License](https://img.shields.io/badge/license-mit-blue.svg)](https://opensource.org/licenses/MIT)

> This package contains configuration files for ESLint v7.3+<br>

These are configuration files for ESLint that are used to lint my Node.js based development projects (source files, tests, etc).

**NOTE:** All configurations extend [@futagoza/eslint-config-javascript][ECJ] (which itself extends [@futagoza/eslint-config-core][ECC]) as well as [@futagoza/eslint-config-node][ECN], so you don't have to include any of them as a dependency when using this package.

## installation

```console
$ npm i --save-dev @futagoza/eslint-config-dev
```

## usage

Put the following into your configuration (`.eslintrc.*` file or the _"eslintConfig"_ field in `package.json`):

```json
{
    "extends": "@futagoza/dev"
}
```

## configurations

A list of usable configurations as well the configurations they use:

- __`@futagoza/dev`__ (_default_, extends _dev/node_ and _dev/test_)
- __`@futagoza/dev/code`__ (extends _[@futagoza/javascript][ECJ]_ and _[@futagoza/javascript/modules][ECJ]_)
- __`@futagoza/dev/node`__ (extends  _dev/code_ and _[@futagoza/node][ECN]_)
- __`@futagoza/dev/test`__ (extends _[@futagoza/globals/test][ECG]_)

[ECC]: https://www.npmjs.com/package/@futagoza/eslint-config-core
[ECG]: https://www.npmjs.com/package/@futagoza/eslint-config-globals
[ECJ]: https://www.npmjs.com/package/@futagoza/eslint-config-javascript
[ECN]: https://www.npmjs.com/package/@futagoza/eslint-config-node

## @futagoza/dev/test

1. Although included with the default `@futagoza/dev` config, on non-esnext setups it is preferred on it's own.
2. `.ts` test files will also be linted by this config if they are being checked by the ESLint CLI.

## license

Copyright © 2017+ Futago-za Ryuu<br>
Released under the MIT License, [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
