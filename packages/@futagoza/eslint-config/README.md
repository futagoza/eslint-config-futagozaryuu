[![dependencies](https://img.shields.io/david/futagoza/eslint-config-futagozaryuu.svg?path=packages/@futagoza/eslint-config)](https://david-dm.org/futagoza/eslint-config-futagozaryuu?path=packages/@futagoza/eslint-config)
[![History](https://img.shields.io/badge/history-CHANGELOG.md-orange.svg)](https://github.com/futagoza/eslint-config-futagozaryuu/blob/master/CHANGELOG.md)
[![License](https://img.shields.io/badge/license-mit-blue.svg)](https://opensource.org/licenses/MIT)

> This package contains configuration files for ESLint v6+<br>

These are configurations for ESLint that I use in my JavaScript and TypeScript projects. Most of the configurations assume development in ES2015+ compatible environments, but the default configuration does not do this.

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

- __`@futagoza`__ (_default_, extends: _possible-errors_, _best-practices_, _stylistic-issues_ and _variables_)
- __`@futagoza/eslint-config/possible-errors`__
- __`@futagoza/eslint-config/best-practices`__
- __`@futagoza/eslint-config/stylistic-issues`__
- __`@futagoza/eslint-config/variables`__
- __`@futagoza/eslint-config/es5`__ (extends: _default_)
- __`@futagoza/eslint-config/es2015`__ (extends: _es5_)
- __`@futagoza/eslint-config/es2016`__ (extends: _es2015_)
- __`@futagoza/eslint-config/es2017`__ (extends: _es2016_)
- __`@futagoza/eslint-config/es2018`__ (extends: _es2017_)
- __`@futagoza/eslint-config/es2019`__ (extends: _es2018_)
- __`@futagoza/eslint-config/node`__
- __`@futagoza/eslint-config/node-v4`__ (extends: _es2015_ and _node_)
- __`@futagoza/eslint-config/node-v6`__ (extends: _es2015_ and _node_)
- __`@futagoza/eslint-config/node-v8`__ (extends: _es2017_ and _node_)
- __`@futagoza/eslint-config/node-v10`__ (extends: _es2018_ and _node_)
- __`@futagoza/eslint-config/node-v12`__ (extends: _es2019_ and _node_)
- __`@futagoza/eslint-config/typescript`__ (extends: _es2019_)
- __`@futagoza/eslint-config/typescript/node`__ (extends: _node_, _test_ and _typescript_)
- __`@futagoza/eslint-config/typescript/node-v4`__ (extends: _node-v4_, _test_ and _typescript_)
- __`@futagoza/eslint-config/typescript/node-v6`__ (extends: _node-v6_, _test_ and _typescript_)
- __`@futagoza/eslint-config/typescript/node-v8`__ (extends: _node-v8_, _test_ and _typescript_)
- __`@futagoza/eslint-config/typescript/node-v10`__ (extends: _node-v10_, _test_ and _typescript_)
- __`@futagoza/eslint-config/typescript/node-v12`__ (extends: _node-v12_, _test_ and _typescript_)
- __`@futagoza/eslint-config/vue`__
- __`@futagoza/eslint-config/deprecated`__
- __`@futagoza/eslint-config/test`__
- __`@futagoza/eslint-config/dev`__ (extends: _es2019_, _node_ and _test_)

If you open the source files for these configurations, you will find each rule has a JSDoc description. Some of these descriptions have icons:

- ⚠️ means a feature that has not been widely implemented
- 📝 means a rule that can be fixed using the `--fix` flag

## license

Copyright © 2017+ Futago-za Ryuu<br>
Released under the MIT License, [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
