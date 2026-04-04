> This package contains configuration files for ESLint v7.15+<br>

These are configuration files for ESLint that are used to lint my Node.js projects.

**NOTE:** Apart from the default configuration, all configurations extend [@futagoza/eslint-config-javascript][ECJ] (which itself extends [@futagoza/eslint-config-core][ECC]), so you don't have to include either as a dependency when using this package.

## installation

```console
$ npm i --save-dev @futagoza/eslint-config-node
```

## usage

Put the following into your configuration (`.eslintrc.*` file or the _"eslintConfig"_ field in `package.json`):

```json
{
    "extends": "@futagoza/node"
}
```

## configurations

A list of usable configurations as well the configurations they use:

- __`@futagoza/node`__ (_default_ and _[@futagoza/globals/node][ECG]_)
- __`@futagoza/node/4`__ (extends _[@futagoza/javascript/es2015][ECJ]_ and _default_)
- __`@futagoza/node/6`__ (extends: _[@futagoza/javascript/es2015][ECJ]_ and _default_)
- __`@futagoza/node/8`__ (extends: _[@futagoza/javascript/es2017][ECJ]_ and _default_)
- __`@futagoza/node/10`__ (extends: _[@futagoza/javascript/es2018][ECJ]_ and _default_)
- __`@futagoza/node/12`__ (extends: _[@futagoza/javascript/es2019][ECJ]_ and _default_)
- __`@futagoza/node/14`__ (extends: _[@futagoza/javascript/es2020][ECJ]_ and _default_)
- __`@futagoza/node/16`__ (extends: _[@futagoza/javascript/es2021][ECJ]_ and _default_)
- __`@futagoza/node/18`__ (extends: _[@futagoza/javascript/es2022][ECJ]_ and _default_)
- __`@futagoza/node/20`__ (extends: _[@futagoza/javascript/es2023][ECJ]_ and _default_)

[ECC]: https://www.npmjs.com/package/@futagoza/eslint-config-core
[ECG]: https://www.npmjs.com/package/@futagoza/eslint-config-globals
[ECJ]: https://www.npmjs.com/package/@futagoza/eslint-config-javascript

## license

Copyright © 2017+ Futago-za Ryuu<br>
Released under the MIT License, [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
