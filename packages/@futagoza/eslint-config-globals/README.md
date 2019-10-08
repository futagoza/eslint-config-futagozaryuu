[![dependencies](https://img.shields.io/david/futagoza/eslint-config-futagozaryuu.svg?path=packages/@futagoza/eslint-config-globals)](https://david-dm.org/futagoza/eslint-config-futagozaryuu?path=packages/@futagoza/eslint-config-globals)
[![History](https://img.shields.io/badge/history-CHANGELOG.md-orange.svg)](https://github.com/futagoza/eslint-config-futagozaryuu/blob/master/CHANGELOG.md)
[![License](https://img.shields.io/badge/license-mit-blue.svg)](https://opensource.org/licenses/MIT)

> This package contains configuration files for ESLint v6+<br>

This is a configuration file for ESLint that is used to enable [JavaScript global variables](https://github.com/sindresorhus/globals).

## installation

```console
$ npm i --save-dev @futagoza/eslint-config-globals
```

## usage

Put the following into your configuration (`.eslintrc.*` file or the _"eslintConfig"_ field in `package.json`):

```json
{
    "extends": "@futagoza/globals"
}
```

## configurations

A list of usable configurations as well the configurations they use:

- __`@futagoza/globals`__ (_default_, enables common built-in ECMAScript variables)
- __`@futagoza/globals/browser`__
- __`@futagoza/globals/es5`__ (extends _@futagoza/globals_)
- __`@futagoza/globals/es2015`__ (extends _es5_)
- __`@futagoza/globals/es2017`__ (extends _es2015_)
- __`@futagoza/globals/es2020`__ (extends _es2017_)
- __`@futagoza/globals/gui`__ (extends _browser_ and _node_)
- __`@futagoza/globals/loaders`__
- __`@futagoza/globals/node`__
- __`@futagoza/globals/test`__
- __`@futagoza/globals/worker`__

## license

Copyright © 2019+ Futago-za Ryuu<br>
Released under the MIT License, [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
