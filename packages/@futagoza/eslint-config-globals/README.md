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
- __`@futagoza/globals/es5`__
- __`@futagoza/globals/es2015`__
- __`@futagoza/globals/es2016`__
- __`@futagoza/globals/es2017`__
- __`@futagoza/globals/es2018`__
- __`@futagoza/globals/es2019`__
- __`@futagoza/globals/es2020`__
- __`@futagoza/globals/es2021`__
- __`@futagoza/globals/es2022`__
- __`@futagoza/globals/es2023`__
- __`@futagoza/globals/es2024`__
- __`@futagoza/globals/es2025`__
- __`@futagoza/globals/es2026`__
- __`@futagoza/globals/gui`__ (extends _browser_ and _node_)
- __`@futagoza/globals/loaders`__
- __`@futagoza/globals/node`__
- __`@futagoza/globals/test`__
- __`@futagoza/globals/worker`__

## license

Copyright © 2019+ Futago-za Ryuu<br>
Released under the MIT License, [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
