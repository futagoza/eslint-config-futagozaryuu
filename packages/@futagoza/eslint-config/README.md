[![dependencies](https://img.shields.io/david/futagoza/eslint-config-futagozaryuu.svg?path=packages/@futagoza/eslint-config)](https://david-dm.org/futagoza/eslint-config-futagozaryuu?path=packages/@futagoza/eslint-config)
[![History](https://img.shields.io/badge/history-CHANGELOG.md-orange.svg)](https://github.com/futagoza/eslint-config-futagozaryuu/blob/master/CHANGELOG.md)
[![License](https://img.shields.io/badge/license-mit-blue.svg)](https://opensource.org/licenses/MIT)

> This package contains configuration files for ESLint v6+<br>

These is the default configuration for ESLint that I use in my JavaScript and TypeScript projects. It extends my other ESLint configurations to create a single unified configuration that can easily be used when working with Node v8+ while requiring the use of TypeScript and/or HTML script linting.

## installation

```console
$ npm i --save-dev @futagoza/eslint-config
```

## usage

Put the following into your configuration (`.eslintrc.json` file or the _"eslintConfig"_ field in `package.json`):

```json
{
    "extends": "@futagoza"
}
```

## configurations

A list of usable configurations as well the configurations they use:

- __`@futagoza`__ (extends _[@futagoza/node][ECN]_, _[@futagoza/typescript][ECT]_ and _[@futagoza/html][ECH]_)

If you are using this configuration via `yarn install` then the following should be available as well:

- __[`@futagoza/core`][ECC]__
- __[`@futagoza/html`][ECH]__
- __[`@futagoza/javascript`][ECJ]__ (extends _[@futagoza/core][ECC]_)
- __[`@futagoza/node`][ECN]__  (extends _[@futagoza/javascript][ECJ]_)
- __[`@futagoza/typescript`][ECT]__ (pulls in rule settings from _[@futagoza/core][ECC]_ and _[@futagoza/javascript][ECJ]_)

Working on source files using _esnext_, and/or need a configuration for your test files as well? Try:

- __[`@futagoza/dev`][ECD]__ (extends _[@futagoza/javascript][ECJ]_ and _[`@futagoza/node`][ECN]_)

[ECC]: https://www.npmjs.com/package/@futagoza/eslint-config-core
[ECD]: https://www.npmjs.com/package/@futagoza/eslint-config-dev
[ECH]: https://www.npmjs.com/package/@futagoza/eslint-config-html
[ECJ]: https://www.npmjs.com/package/@futagoza/eslint-config-javascript
[ECN]: https://www.npmjs.com/package/@futagoza/eslint-config-node
[ECT]: https://www.npmjs.com/package/@futagoza/eslint-config-typescript

## license

Copyright © 2017+ Futago-za Ryuu<br>
Released under the MIT License, [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
