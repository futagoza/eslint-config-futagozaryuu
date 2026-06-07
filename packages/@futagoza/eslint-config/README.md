> This package contains configuration files for ESLint v10+<br>

These is the default configuration file I use for ESLint, used for my JavaScript and/or TypeScript projects. It extends my other ESLint configurations to create a single unified configuration that can easily be used when working with:

- Node v20+ (and by extension ECMAScript 2023+)
- TypeScript v6+

## installation

```console
$ npm i --save-dev @futagoza/eslint-config
```

## usage

Put the following into your eslint configuration file:

```js
import futagoza from "@futagoza/eslint-config"

// this if you don't plan to add more configurations
export default futagoza

// this if you need more configurations
export default [

    futagoza,

    // ...

]
```

Unlike the rest of my configuration files, this one does not export a raw javascript object that represents the config, mainly due to the fact that this configuration file is meant to be an all in one ready to use config; this is why I don't recommend you use it in the `extends` array property for _defineConfig_ from `eslint/config`; It's best you just create your own configuration from my other configuration files, some of which should be available simply by only putting this (`@futagoza/eslint-config`) in your projects/packages dependencies.

## configurations

The main configuration file is a combination of all of the following configuration files available as individual packages:

- __[`@futagoza/eslint-config-core`](https://www.npmjs.com/package/@futagoza/eslint-config-core)__
- __[`@futagoza/eslint-config-globals`](https://www.npmjs.com/package/@futagoza/eslint-config-globals)__
- __[`@futagoza/eslint-config-ignore`](https://www.npmjs.com/package/@futagoza/eslint-config-ignore)__
- __[`@futagoza/eslint-config-javascript`](https://www.npmjs.com/package/@futagoza/eslint-config-javascript)__
- __[`@futagoza/eslint-config-node`](https://www.npmjs.com/package/@futagoza/eslint-config-node)__
- __[`@futagoza/eslint-config-typescript`](https://www.npmjs.com/package/@futagoza/eslint-config-typescript)__

## global ignore

This configuration includes _@futagoza/eslint-config-ignore_, which exports a set of file-path globs (mostly recursively), used by this configuration to add a global `ignore` property.

- See ignored patterns: [@futagoza/eslint-config-ignore/index.js](https://github.com/futagoza/eslint-config-futagozaryuu/blob/master/packages/%40futagoza/eslint-config-ignore/index.js)
- See documentation: [eslint.org/docs/latest/use/configure/ignore](https://eslint.org/docs/latest/use/configure/ignore)

## license

Copyright © 2017+ Futago-za Ryuu<br>
Released under the MIT License, [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
