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

A list of usable configurations:

- __`@futagoza/core`__ (_default_, all of the below configurations)
- __`@futagoza/core/layout-and-formatting`__
- __`@futagoza/core/possible-problems`__
- __`@futagoza/core/style`__
- __`@futagoza/core/suggestions`__

You can also use `import { config } from "@futagoza/eslint-config-core/internal"` to get the default options for these rules.

## license

Copyright © 2017+ Futago-za Ryuu<br>
Released under the MIT License, [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
