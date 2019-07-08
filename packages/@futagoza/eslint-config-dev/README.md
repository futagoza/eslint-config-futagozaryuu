[![dependencies](https://img.shields.io/david/futagoza/eslint-config-futagozaryuu.svg?path=packages/@futagoza/eslint-config-dev)](https://david-dm.org/futagoza/eslint-config-futagozaryuu?path=packages/@futagoza/eslint-config-dev)
[![History](https://img.shields.io/badge/history-CHANGELOG.md-orange.svg)](https://github.com/futagoza/eslint-config-futagozaryuu/blob/master/CHANGELOG.md)
[![License](https://img.shields.io/badge/license-mit-blue.svg)](https://opensource.org/licenses/MIT)

> This package contains configuration files for ESLint v6+<br>

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

- __`@futagoza/dev`__ (_default_, extends _[@futagoza/javascript][ECJ]_, _[@futagoza/node][ECN]_ and _test_)
- __`@futagoza/dev/test`__

[ECC]: https://www.npmjs.com/package/@futagoza/eslint-config-core
[ECJ]: https://www.npmjs.com/package/@futagoza/eslint-config-javascript
[ECN]: https://www.npmjs.com/package/@futagoza/eslint-config-node

## license

Copyright © 2017+ Futago-za Ryuu<br>
Released under the MIT License, [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
