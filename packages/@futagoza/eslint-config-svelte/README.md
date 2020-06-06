[![dependencies](https://img.shields.io/david/futagoza/eslint-config-futagozaryuu.svg?path=packages/@futagoza/eslint-config-svelte)](https://david-dm.org/futagoza/eslint-config-futagozaryuu?path=packages/@futagoza/eslint-config-svelte)
[![History](https://img.shields.io/badge/history-CHANGELOG.md-orange.svg)](https://github.com/futagoza/eslint-config-futagozaryuu/blob/master/CHANGELOG.md)
[![License](https://img.shields.io/badge/license-mit-blue.svg)](https://opensource.org/licenses/MIT)

> This package contains configuration files for ESLint v6+<br>

This is a configuration file for ESLint that is used to lint JavaScript source embedded within my `.svelte` files.

**NOTE 1:** This configuration is only for enabling `.svelte` linting, therefore it is recommended to also use [@futagoza/eslint-config-javascript](https://www.npmjs.com/package/@futagoza/eslint-config-javascript) or something similar alongside this configuration.

**NOTE 2:** This configuration require's Svelte 3+, but the `peerDependencies` field is set as `"svelte": "*"` so that any version of Svelte supported by [eslint-plugin-svelte3](https://github.com/sveltejs/eslint-plugin-svelte3#readme) can be used.

## installation

```console
$ npm i --save-dev @futagoza/eslint-config-svelte
```

## usage

Put the following into your configuration (`.eslintrc.*` file or the _"eslintConfig"_ field in `package.json`):

```json
{
    "extends": "@futagoza/svelte"
}
```

## configurations

A list of usable configurations as well the configurations they use:

- __`@futagoza/svelte`__ (_default_, extends _[@futagoza/dev/code][ECD]_ and _[@futagoza/globals/browser][ECG]_)
- __`@futagoza/svelte/sapper`__ (extends _default_ and optionally more (see below))

## sapper configuration

The _@futagoza/svelte/sapper_ configuration will optionally extend other configurations:

- Having a `src/client.js` file will use _[@futagoza/dev/code][ECD]_ and _[@futagoza/globals/browser][ECG]_
- Having a `src/server.js` file will use _[@futagoza/dev/node][ECD]_
- Having a `src/service-worker.js` file will use _[@futagoza/dev/code][ECD]_ and _[@futagoza/globals/worker][ECG]_

**NOTE:** [Sapper](https://sapper.svelte.dev/) load's other `src/**/*.js` files, but these don't have expectations like the above.

[ECD]: https://www.npmjs.com/package/@futagoza/eslint-config-dev
[ECG]: https://www.npmjs.com/package/@futagoza/eslint-config-globals

## license

Copyright © 2019+ Futago-za Ryuu<br>
Released under the MIT License, [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
