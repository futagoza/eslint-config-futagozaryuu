[![dependencies](https://img.shields.io/david/futagoza/eslint-config-futagozaryuu.svg?path=packages/@futagoza/eslint-config-core)](https://david-dm.org/futagoza/eslint-config-futagozaryuu?path=packages/@futagoza/eslint-config-core)
[![History](https://img.shields.io/badge/history-CHANGELOG.md-orange.svg)](https://github.com/futagoza/eslint-config-futagozaryuu/blob/master/CHANGELOG.md)
[![License](https://img.shields.io/badge/license-mit-blue.svg)](https://opensource.org/licenses/MIT)

> This package contains configuration files for ESLint v7.2+<br>

These are configuration files for ESLint that are mostly extended upon by my other ESLint configurations.

The rules set in these files are the core set of built in rules separated by 4 categories: _possible-errors_, _best-practices_, _stylistic-issues_ and _variables_.

## installation

```console
$ npm i --save-dev @futagoza/eslint-config-core
```

## usage

Put the following into your configuration (`.eslintrc.*` file or the _"eslintConfig"_ field in `package.json`):

```json
{
    "extends": "@futagoza/core"
}
```

## configurations

A list of usable configurations as well the configurations they use:

- __`@futagoza/core`__ (_default_, extends: _possible-errors_, _best-practices_, _stylistic-issues_ and _variables_)
- __`@futagoza/core/possible-errors`__
- __`@futagoza/core/best-practices`__
- __`@futagoza/core/stylistic-issues`__
- __`@futagoza/core/variables`__

## license

Copyright © 2017+ Futago-za Ryuu<br>
Released under the MIT License, [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
