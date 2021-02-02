[![dependencies](https://img.shields.io/david/futagoza/eslint-config-futagozaryuu.svg?path=packages/@futagoza/eslint-config)](https://david-dm.org/futagoza/eslint-config-futagozaryuu?path=packages/@futagoza/eslint-config)
[![History](https://img.shields.io/badge/history-CHANGELOG.md-orange.svg)](https://github.com/futagoza/eslint-config-futagozaryuu/blob/master/CHANGELOG.md)
[![License](https://img.shields.io/badge/license-mit-blue.svg)](https://opensource.org/licenses/MIT)

> This package contains configuration files for ESLint v7.15+<br>

These is the default configuration for ESLint that I use in my JavaScript and/or TypeScript projects. It extends my other ESLint configurations to create a single unified configuration that can easily be used when working with:

- Node LTS release's
- TypeScript
- Test files

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

- __`@futagoza`__ (extends _[@futagoza/ignore][ECI]_, _[@futagoza/node/10][ECN]_, _[@futagoza/typescript][ECT]_ and _[@futagoza/dev/test][ECD]_)

If you are using this configuration via `yarn install` (Yarn 1 only) then the following should be available as well:

- __[`@futagoza/core`][ECC]__
- __[`@futagoza/dev`][ECD]__ (extends _[@futagoza/globals][ECG]_, _[@futagoza/javascript][ECJ]_ and _[@futagoza/node][ECN]_)
- __[`@futagoza/globals`][ECG]__
- __[`@futagoza/ignore`][ECI]__
- __[`@futagoza/javascript`][ECJ]__ (extends _[@futagoza/core][ECC]_ and _[@futagoza/globals][ECG]_)
- __[`@futagoza/node`][ECN]__  (extends _[@futagoza/globals][ECG]_ and _[@futagoza/javascript][ECJ]_)
- __[`@futagoza/typescript`][ECT]__ (pulls in rule settings from _[@futagoza/core][ECC]_ and _[@futagoza/javascript][ECJ]_)

[ECC]: https://www.npmjs.com/package/@futagoza/eslint-config-core
[ECD]: https://www.npmjs.com/package/@futagoza/eslint-config-dev
[ECG]: https://www.npmjs.com/package/@futagoza/eslint-config-globals
[ECI]: https://www.npmjs.com/package/@futagoza/eslint-config-ignore
[ECJ]: https://www.npmjs.com/package/@futagoza/eslint-config-javascript
[ECN]: https://www.npmjs.com/package/@futagoza/eslint-config-node
[ECT]: https://www.npmjs.com/package/@futagoza/eslint-config-typescript

## ignored patterns

This configuration includes _[@futagoza/ignore][ECI]_, which exports a set of file-path globs (mostly recursively) to ignore files using the `ignorePatterns` property (a top-level configuration property for ESLint configuration files).

- See ignored patterns: [@futagoza/eslint-config-ignore/index.js](https://github.com/futagoza/eslint-config-futagozaryuu/blob/master/packages/%40futagoza/eslint-config-ignore/index.js)
- See documentation: [eslint.org/docs/user-guide/configuring#ignoring-files-and-directories](https://eslint.org/docs/user-guide/configuring#ignoring-files-and-directories)

## license

Copyright © 2017+ Futago-za Ryuu<br>
Released under the MIT License, [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
