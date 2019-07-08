[![dependencies](https://img.shields.io/david/futagoza/eslint-config-futagozaryuu.svg?path=packages/@futagoza/eslint-config-vue)](https://david-dm.org/futagoza/eslint-config-futagozaryuu?path=packages/@futagoza/eslint-config-vue)
[![History](https://img.shields.io/badge/history-CHANGELOG.md-orange.svg)](https://github.com/futagoza/eslint-config-futagozaryuu/blob/master/CHANGELOG.md)
[![License](https://img.shields.io/badge/license-mit-blue.svg)](https://opensource.org/licenses/MIT)

> This package contains configuration files for ESLint v6+<br>

This is a configuration file for ESLint that is used to lint my Vue.js projects.

**NOTE:** This configuration will only check for [@vue/*][VUE] rules, therefore it is recommended to also use [@futagoza/eslint-config-javascript](https://www.npmjs.com/package/@futagoza/eslint-config-javascript) or something similar alongside this configuration.

## installation

```console
$ npm i --save-dev @futagoza/eslint-config-vue
```

## usage

Put the following into your configuration (`.eslintrc.*` file or the _"eslintConfig"_ field in `package.json`):

```json
{
    "extends": "@futagoza/vue"
}
```

## configurations

A list of usable configurations as well the configurations they use:

- __`@futagoza/vue`__ (_default_, extends _[plugin:vue/recommended][VUE]_)

[VUE]: https://eslint.vuejs.org

## license

Copyright © 2017+ Futago-za Ryuu<br>
Released under the MIT License, [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
