[![Build status](https://api.travis-ci.org/futagoza/eslint-config-futagozaryuu.svg?branch=master)](https://travis-ci.org/futagoza/eslint-config-futagozaryuu)
[![npm version](https://img.shields.io/npm/v/eslint-config-futagozaryuu.svg)](https://www.npmjs.com/package/eslint-config-futagozaryuu)
[![dependencies](https://img.shields.io/david/futagoza/eslint-config-futagozaryuu.svg)](https://david-dm.org/futagoza/eslint-config-futagozaryuu)
[![History](https://img.shields.io/badge/history-CHANGELOG.md-orange.svg)](https://github.com/futagoza/eslint-config-futagozaryuu/blob/master/CHANGELOG.md)
[![License](https://img.shields.io/badge/license-mit-blue.svg)](https://opensource.org/licenses/MIT)

> This package contains configuration files for ESLint v6+<br>
> TypeScript configurations require TypeScript v3+

## about

These are configurations for ESLint that I use in my JavaScript and TypeScript projects. Most of the configurations assume development in ES2015+ compatible environments, but the default configuration does not do this.

## installation

```console
$ npm install --save-dev eslint-config-futagozaryuu
```

## usage

Put the following into your configuration (`.eslintrc.json` file or the _"eslintConfig"_ field in `package.json`):

```json
{
    "extends": "futagozaryuu"
}
```

## configurations

A list of usable configurations as well the configurations they use:

- __`futagozaryuu`__ (_default_, includes: _possible-errors_, _best-practices_, _stylistic-issues_ and _variables_)
- __`futagozaryuu/possible-errors`__
- __`futagozaryuu/best-practices`__
- __`futagozaryuu/stylistic-issues`__
- __`futagozaryuu/variables`__
- __`futagozaryuu/es5`__ (includes: _default_)
- __`futagozaryuu/es2015`__ (includes: _es5_)
- __`futagozaryuu/es2016`__ (includes: _es2015_)
- __`futagozaryuu/es2017`__ (includes: _es2016_)
- __`futagozaryuu/es2018`__ (includes: _es2017_)
- __`futagozaryuu/es2019`__ (includes: _es2018_)
- __`futagozaryuu/node`__
- __`futagozaryuu/node-v4`__ (includes: _es2015_ and _node_)
- __`futagozaryuu/node-v6`__ (includes: _es2015_ and _node_)
- __`futagozaryuu/node-v8`__ (includes: _es2017_ and _node_)
- __`futagozaryuu/node-v10`__ (includes: _es2018_ and _node_)
- __`futagozaryuu/node-v12`__ (includes: _es2019_ and _node_)
- __`futagozaryuu/typescript`__ (includes: _es2019_)
- __`futagozaryuu/typescript/node`__ (includes: _node_, _test_ and _typescript_)
- __`futagozaryuu/typescript/node-v4`__ (includes: _node-v4_, _test_ and _typescript_)
- __`futagozaryuu/typescript/node-v6`__ (includes: _node-v6_, _test_ and _typescript_)
- __`futagozaryuu/typescript/node-v8`__ (includes: _node-v8_, _test_ and _typescript_)
- __`futagozaryuu/typescript/node-v10`__ (includes: _node-v10_, _test_ and _typescript_)
- __`futagozaryuu/typescript/node-v12`__ (includes: _node-v12_, _test_ and _typescript_)
- __`futagozaryuu/deprecated`__
- __`futagozaryuu/test`__
- __`futagozaryuu/dev`__ (includes: _es2019_, _node_ and _test_)

If you open the source files for these configurations, you will find each rule has a JSDoc description. Some of these descriptions have icons:

- ⚠️ means a feature that has not been widely implemented
- 📝 means a rule that can be fixed using the `--fix` flag

## versioning

Since v7 of this package I will try to follow a semver based versioning:

`4.17.0` = `RELEASE.REVISION.PATCH`

* `RELEASE`
  - a new configuration has been added
  - a new dependency is required
* `REVISION`
  - confirmed compatibility with ESLint release's
  - changes to existing configurations
* `PATCH`
  - a bug is fixed
  - docs are updated
  - dependency upgrades _(without configuration updates)_
  - is reset when `REVISION` increments

Also to note on dependencies; before 4.17 my dependencies were always fixed (on any package), but since I've started to embrace tools like Yarn, I thought why not also use practices like tildes (e.g. `~`) and carets (e.g. `^`). See [this answer on StackOverflow](https://stackoverflow.com/a/22345808/1518408) for a clear explanation about the two.

## license

Copyright (c) 2017+ Futago-za Ryuu<br>
Released under the MIT License, [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
