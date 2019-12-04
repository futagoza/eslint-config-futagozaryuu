[![dependencies](https://img.shields.io/david/futagoza/eslint-config-futagozaryuu.svg?path=packages/@futagoza/eslint-config-ignore)](https://david-dm.org/futagoza/eslint-config-futagozaryuu?path=packages/@futagoza/eslint-config-ignore)
[![History](https://img.shields.io/badge/history-CHANGELOG.md-orange.svg)](https://github.com/futagoza/eslint-config-futagozaryuu/blob/master/CHANGELOG.md)
[![License](https://img.shields.io/badge/license-mit-blue.svg)](https://opensource.org/licenses/MIT)

> This package contains configuration files for ESLint v6.7+<br>

This configuration includes a set of globs to ignore files (mostly recursively) using the `ignorePatterns` property.

- See ignored patterns: [@futagoza/eslint-config-ignore/index.js](https://github.com/futagoza/eslint-config-futagozaryuu/blob/master/packages/%40futagoza/eslint-config-ignore/index.js)
- See documentation: [eslint.org/docs/user-guide/configuring#ignoring-files-and-directories](https://eslint.org/docs/user-guide/configuring#ignoring-files-and-directories)

## installation

```console
$ npm i --save-dev @futagoza/eslint-config-ignore
```

## usage

Put the following into your configuration (`.eslintrc.json` file or the _"eslintConfig"_ field in `package.json`):

```json
{
    "extends": "@futagoza/ignore"
}
```

## license

Copyright © 2019+ Futago-za Ryuu<br>
Released under the MIT License, [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
