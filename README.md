[![Build status](https://api.travis-ci.org/futagoza/eslint-config-futagozaryuu.svg?branch=master)](https://travis-ci.org/futagoza/eslint-config-futagozaryuu)
[![npm version](https://img.shields.io/npm/v/eslint-config-futagozaryuu.svg)](https://www.npmjs.com/package/eslint-config-futagozaryuu)
[![dependencies](https://img.shields.io/david/futagoza/eslint-config-futagozaryuu.svg)](https://david-dm.org/futagoza/eslint-config-futagozaryuu)
[![License](https://img.shields.io/badge/license-mit-blue.svg)](https://opensource.org/licenses/MIT)

## about

These are ESLint configurations I use in my JavaScript projects. They mostly assume development in ES2015+ compatible enviroments, unless otherwise stated.

## installation

```console
$ npm install --save-dev eslint-config-futagozaryuu
```

## usage

Put the following into your `.eslintrc.json` file:

```json
{
  "extends": "futagozaryuu"
}
```

## notes

- ⚠️ means a feature that has not been widely implemented
- 📝 means a rule that can be fixed using the `--fix` flag

## configurations

- __`futagozaryuu`__ (_default_, includes: _possible-errors_, _best-practices_, _stylistic-issues_ and _variables_)
- __`futagozaryuu/possible-errors`__
- __`futagozaryuu/best-practices`__
- __`futagozaryuu/stylistic-issues`__
- __`futagozaryuu/variables`__
- __`futagozaryuu/es5`__ (includes: _default_)
- __`futagozaryuu/es2015`__ (includes: _es5_)
- __`futagozaryuu/es2016`__ (includes: _es2015_)
- __`futagozaryuu/es2017`__ (includes: _es2016_)
- __`futagozaryuu/esnext`__ (includes: _es2017_)
- __`futagozaryuu/node`__
- __`futagozaryuu/node-v4`__ (includes: _es2015_ and _node_)
- __`futagozaryuu/node-v5`__ (includes: _node-v4_)
- __`futagozaryuu/node-v6`__ (includes: _node-v5_)
- __`futagozaryuu/node-v7`__ (includes: _node-v6_ and _es2016_)
- __`futagozaryuu/node-v7.6`__ (includes: _node-v7_ and _es2017_)
- __`futagozaryuu/node-v8`__ (includes: _node-v7.6_)
- __`futagozaryuu/jsdoc`__
- __`futagozaryuu/deprecated`__
- __`futagozaryuu/test`__
- __`futagozaryuu/dev`__ (includes: _esnext_, _node_ and _test_)

## development

I will update the configuration files as I change my style, but this will mostly just change the `minor` number.
Any change to the `major` number means that I have added or removed either rules or configuration files.
