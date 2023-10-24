![dependencies](https://badgen.net/runkit/futagoza/badgen-checkdeps/@futagoza/eslint-config-svelte.ts?cache=0)
[![History](https://img.shields.io/badge/history-CHANGELOG.md-orange.svg)](https://github.com/futagoza/eslint-config-futagozaryuu/blob/master/CHANGELOG.md)
[![License](https://img.shields.io/badge/license-mit-blue.svg)](https://opensource.org/licenses/MIT)

> This package contains configuration files for ESLint v7.15+<br>

This is a configuration file for ESLint that is used to lint JavaScript & TypeScript source embedded within my `.svelte` files.

## installation

```console
$ npm i --save-dev @futagoza/eslint-config-svelte.ts
```

## usage

Put the following into your configuration (`.eslintrc.*` file or the _"eslintConfig"_ field in `package.json`):

```json
{
    "extends": "@futagoza/svelte.ts"
}
```

## configurations

A list of usable configurations as well the configurations they use:

- __`@futagoza/svelte.ts`__ (_default_, extends _[@futagoza/svelte][ECS]_ and _[@futagoza/typescript][ECT]_)

[ECS]: https://www.npmjs.com/package/@futagoza/eslint-config-svelte
[ECT]: https://www.npmjs.com/package/@futagoza/eslint-config-typescript

## license

Copyright © 2021+ Futago-za Ryuu<br>
Released under the MIT License, [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
