[![dependencies](https://img.shields.io/david/futagoza/eslint-config-futagozaryuu.svg?path=packages/@futagoza/eslint-config-javascript)](https://david-dm.org/futagoza/eslint-config-futagozaryuu?path=packages/@futagoza/eslint-config-javascript)
[![History](https://img.shields.io/badge/history-CHANGELOG.md-orange.svg)](https://github.com/futagoza/eslint-config-futagozaryuu/blob/master/CHANGELOG.md)
[![License](https://img.shields.io/badge/license-mit-blue.svg)](https://opensource.org/licenses/MIT)

> This package contains configuration files for ESLint v6.7+<br>

These are configuration files for ESLint that are used to lint my JavaScript projects.

**NOTE:** All configurations include [@futagoza/eslint-config-core][ECC], so you don't have to include it as a dependency when using this package.

## installation

```console
$ npm i --save-dev @futagoza/eslint-config-javascript
```

## usage

Put the following into your configuration (`.eslintrc.*` file or the _"eslintConfig"_ field in `package.json`):

```json
{
    "extends": "@futagoza/javascript"
}
```

## configurations

A list of usable configurations as well the configurations they use:

- __`@futagoza/javascript`__ (_default_, extends: _es2020_)
- __`@futagoza/javascript/es5`__ (extends [@futagoza/core][ECC] and _[@futagoza/globals/es5][ECG]_)
- __`@futagoza/javascript/es2015`__ (extends: _es5_ and _[@futagoza/globals/es2015][ECG]_)
- __`@futagoza/javascript/es2016`__ (extends: _es2015_)
- __`@futagoza/javascript/es2017`__ (extends: _es2016_ and _[@futagoza/globals/es2017][ECG]_)
- __`@futagoza/javascript/es2018`__ (extends: _es2017_)
- __`@futagoza/javascript/es2019`__ (extends: _es2018_)
- __`@futagoza/javascript/es2020`__ (extends: _es2019_ and _[@futagoza/globals/es2020][ECG]_)
- __`@futagoza/javascript/modules`__

[ECC]: https://www.npmjs.com/package/@futagoza/eslint-config-core
[ECG]: https://www.npmjs.com/package/@futagoza/eslint-config-globals

## license

Copyright © 2017+ Futago-za Ryuu<br>
Released under the MIT License, [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
