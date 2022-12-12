[![dependencies](https://img.shields.io/david/futagoza/eslint-config-futagozaryuu.svg?path=packages/@futagoza/eslint-config-core)](https://david-dm.org/futagoza/eslint-config-futagozaryuu?path=packages/@futagoza/eslint-config-core)
[![History](https://img.shields.io/badge/history-CHANGELOG.md-orange.svg)](https://github.com/futagoza/eslint-config-futagozaryuu/blob/master/CHANGELOG.md)
[![License](https://img.shields.io/badge/license-mit-blue.svg)](https://opensource.org/licenses/MIT)

> This package contains configuration files for ESLint v7.15+<br>

These are configuration files for ESLint that are mostly extended upon by my other ESLint configurations.

The rules found (and set) in these files are the core set of built-in ESLint rules.

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

For a list of configuration files please refer to [@futagoza/eslint-config-core/internal/config.js](https://github.com/futagoza/eslint-config-futagozaryuu/blob/master/packages/%40futagoza/eslint-config-core/internal/config.js), a file which is auto-generated each time an internal script is run on the repository to regenerate the configuration files for _@futagoza/core_.

You can also use `import { config } from "@futagoza/eslint-config-core/internal"` to get the default options for these rules.

## license

Copyright © 2017+ Futago-za Ryuu<br>
Released under the MIT License, [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
