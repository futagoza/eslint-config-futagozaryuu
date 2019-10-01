[![dependencies](https://img.shields.io/david/futagoza/eslint-config-futagozaryuu.svg?path=packages/@futagoza/eslint-config-html)](https://david-dm.org/futagoza/eslint-config-futagozaryuu?path=packages/@futagoza/eslint-config-html)
[![History](https://img.shields.io/badge/history-CHANGELOG.md-orange.svg)](https://github.com/futagoza/eslint-config-futagozaryuu/blob/master/CHANGELOG.md)
[![License](https://img.shields.io/badge/license-mit-blue.svg)](https://opensource.org/licenses/MIT)

> This package contains configuration files for ESLint v6+<br>

This is a configuration file for ESLint that is used to lint JavaScript source embedded within my `.html` files.

**NOTE:** This configuration will is only for [html/*][HTML] rules, therefore it is recommended to also use [@futagoza/eslint-config-javascript][ECJ] or something similar alongside this configuration.

## installation

```console
$ npm i --save-dev @futagoza/eslint-config-html
```

## usage

Put the following into your configuration (`.eslintrc.*` file or the _"eslintConfig"_ field in `package.json`):

```json
{
    "extends": "@futagoza/html"
}
```

## configurations

A list of usable configurations as well the configurations they use:

- __`@futagoza/html`__ (_default_)

[HTML]: https://github.com/BenoitZugmeyer/eslint-plugin-html
[ECJ]: https://www.npmjs.com/package/@futagoza/eslint-config-javascript

## license

Copyright © 2019+ Futago-za Ryuu<br>
Released under the MIT License, [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
