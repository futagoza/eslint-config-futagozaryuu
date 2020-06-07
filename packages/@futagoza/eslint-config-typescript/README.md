[![dependencies](https://img.shields.io/david/futagoza/eslint-config-futagozaryuu.svg?path=packages/@futagoza/eslint-config-typescript)](https://david-dm.org/futagoza/eslint-config-futagozaryuu?path=packages/@futagoza/eslint-config-typescript)
[![History](https://img.shields.io/badge/history-CHANGELOG.md-orange.svg)](https://github.com/futagoza/eslint-config-futagozaryuu/blob/master/CHANGELOG.md)
[![License](https://img.shields.io/badge/license-mit-blue.svg)](https://opensource.org/licenses/MIT)

> This package contains configuration files for ESLint v7.2+<br>

This is a configuration file for ESLint that is used to lint my TypeScript projects.

**NOTE 1:** This configuration will only check for [@typescript-eslint/*][TETE] rules, therefore it is recommended to also use [@futagoza/eslint-config-javascript][ECJ] or something similar alongside this configuration.

**NOTE 2:** This configuration require's TypeScript, but the `peerDependencies` field is set as `"typescript": "*"` so that any version of TypeScript supported by the [Typescript-ESLint][TETE] project can be used.

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

## tsconfig.json

[@typescript-eslint/eslint-plugin][TETE] requires a `tsconfig.json` in the current working directory to function correctly, but I believe in zero-config, so what this configuration does is the following in order:

1. Try to load `tsconfig.eslint.json` from the current working directory
2. Try to load `tsconfig.json` from the current working directory
3. Create and load a temporary `tsconfig.json` for the current working directory

If the third choice is reached, this configuration will create a temporary `tsconfig.json` (based on the built-in [`tsconfig.default.json`](./tsconfig.default.json)) in the user's temporary directory with path's linked to the current working directory so that it functions like a normal `tsconfig.json` (albiet _slighly opionated_). This is a great alternative to the `createDeafultProgram` option provided by [@typescript-eslint/eslint-plugin][TETE] as it can have performance issues (e.g. I've had VS Code slow down on me).

[TETE]: https://github.com/typescript-eslint/typescript-eslint
[ECJ]: https://www.npmjs.com/package/@futagoza/eslint-config-javascript

## license

Copyright © 2019+ Futago-za Ryuu<br>
Released under the MIT License, [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
