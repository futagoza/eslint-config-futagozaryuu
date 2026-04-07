> This package contains configuration files for ESLint v7.15+<br>

These are configuration files for ESLint that are used to lint my JavaScript projects.

**NOTE:** Since the base configuration includes [@futagoza/eslint-config-core][ECC], all the configurations also include it; this ensures you don't have to include [@futagoza/eslint-config-core][ECC] as a dependency when using this package.

## installation

```console
$ npm i --save-dev @futagoza/eslint-config-javascript
```

## usage

Put the following into your configuration (`.eslintrc.*` file or the _"eslintConfig"_ field in `package.json`):

```json
{
    "extends": "@futagoza/javascript"
}
```

## configurations

A list of usable configurations as well the configurations they use:

- __`@futagoza/javascript`__ (_default_, extends: _esnext_)
- __`@futagoza/javascript/es5`__ (extends [@futagoza/core][ECC] and _[@futagoza/globals/es5][ECG]_)
- __`@futagoza/javascript/es2015`__ (extends: [@futagoza/core][ECC] and _[@futagoza/globals/es2015][ECG]_)
- __`@futagoza/javascript/es2016`__ (extends: [@futagoza/core][ECC] and _[@futagoza/globals/es2016][ECG]_)
- __`@futagoza/javascript/es2017`__ (extends: [@futagoza/core][ECC] and _[@futagoza/globals/es2017][ECG]_)
- __`@futagoza/javascript/es2018`__ (extends: [@futagoza/core][ECC] and _[@futagoza/globals/es2018][ECG]_)
- __`@futagoza/javascript/es2019`__ (extends: [@futagoza/core][ECC] and _[@futagoza/globals/es2019][ECG]_)
- __`@futagoza/javascript/es2020`__ (extends: [@futagoza/core][ECC] and _[@futagoza/globals/es2020][ECG]_)
- __`@futagoza/javascript/es2021`__ (extends: [@futagoza/core][ECC] and _[@futagoza/globals/es2021][ECG]_)
- __`@futagoza/javascript/es2022`__ (extends: [@futagoza/core][ECC] and _[@futagoza/globals/es2022][ECG]_)
- __`@futagoza/javascript/es2023`__ (extends: [@futagoza/core][ECC] and _[@futagoza/globals/es2023][ECG]_)
- __`@futagoza/javascript/es2024`__ (extends: [@futagoza/core][ECC] and _[@futagoza/globals/es2024][ECG]_)
- __`@futagoza/javascript/es2025`__ (extends: [@futagoza/core][ECC] and _[@futagoza/globals/es2025][ECG]_)
- __`@futagoza/javascript/es2026`__ (extends: [@futagoza/core][ECC] and _[@futagoza/globals/es2026][ECG]_)
- __`@futagoza/javascript/esnext`__ (extends: _es2026_)
- __`@futagoza/javascript/modules`__

[ECC]: https://www.npmjs.com/package/@futagoza/eslint-config-core
[ECG]: https://www.npmjs.com/package/@futagoza/eslint-config-globals

## license

Copyright © 2017+ Futago-za Ryuu<br>
Released under the MIT License, [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
