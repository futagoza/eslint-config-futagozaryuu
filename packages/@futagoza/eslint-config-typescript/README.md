[![dependencies](https://img.shields.io/david/futagoza/eslint-config-futagozaryuu.svg?path=packages/@futagoza/eslint-config-typescript)](https://david-dm.org/futagoza/eslint-config-futagozaryuu?path=packages/@futagoza/eslint-config-typescript)
[![History](https://img.shields.io/badge/history-CHANGELOG.md-orange.svg)](https://github.com/futagoza/eslint-config-futagozaryuu/blob/master/CHANGELOG.md)
[![License](https://img.shields.io/badge/license-mit-blue.svg)](https://opensource.org/licenses/MIT)

> This package contains configuration files for ESLint v6+<br>

This is a configuration file for ESLint that is used to lint my TypeScript projects.

**NOTE 1:** This configuration will only check for [@typescript-eslint/*][TETE] rules, therefore it is recommended to also use [@futagoza/eslint-config-javascript][ECJ] or something similar alongside this configuration.

**NOTE 2:** This configuration require's TypeScript, which is included by default, but set as `"typescript": "*"` so that if another module require's a specific version of TypeScript, that will be used instead.

## installation

```console
$ npm i --save-dev @futagoza/eslint-config-typescript
```

## usage

Put the following into your configuration (`.eslintrc.*` file or the _"eslintConfig"_ field in `package.json`):

```json
{
    "extends": "@futagoza/typescript"
}
```

## configurations

A list of usable configurations as well the configurations they use:

- __`@futagoza/typescript`__ (_default_, extends _eslint-overrides_)
- __`@futagoza/typescript/eslint-overrides`__

> The _eslint-overrides_ configuration is tailored either to switch off or alter core ESLint rules so that [@typescript-eslint/eslint-plugin][TETE] can do it's job and no unnecessary checks are made. _It is not recommended to use this!_

[TETE]: https://github.com/typescript-eslint/typescript-eslint
[ECJ]: https://www.npmjs.com/package/@futagoza/eslint-config-javascript

## license

Copyright © 2017+ Futago-za Ryuu<br>
Released under the MIT License, [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
