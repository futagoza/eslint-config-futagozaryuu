ESLint 9+ decided that it was okay to ditch the config format (eslintrc configs) that had been used for nearly a decade by the ESLint community and use a new config format (flat configs) that on paper theoretically sounded great but in practice seems to be cumbersome; the learning curve is high especially if you're either used to the old eslintrc format or just find digging for information difficult.

After experimenting with it while looking through various resources (including the official documentation), I settled on a format that I believe somewhat alleviates the pain of using this cumbersome config format.

## non-extended configs

These are config files that don't extend another config

The named export (a plain javascript object) can be queried for data points, and since **no extends property** was used, this should also be compatible with ESLint config arrays.

The default export can be spread into config arrays (`[ ...config ]`); it can also be used as a value for the new _extends_ array-based property that can only be exclusively passed to the _`defineConfig`_ method from `eslint/config`

```js
/* ./eslint.base.config.js */

export const config = {
    name: "my/base/config",
    rules: {
        "no-unused-vars": "warn",
        "semi": "warn",
    },
}

export default [ config ]
```

## extended configs

These are config files that have extended another config

```js
/* ./eslint.config.js */

import { defineConfig } from "eslint/config"
import baseConfigArray, { config as baseConfigObject } from "./eslint.base.config.js"

// The raw config that can ONLY BE USED TO query for data points due to the usage of the `extends` property
export const config = {
    name: baseConfigObject.name + " & my/main/config",
    extends: [ baseConfigArray ],
    rules: {
        "no-unused-vars": "error",
    },
}

// ESlint flat config
export default defineConfig( config )
```

## cascade vs extends

In this new flat config format, the official examples in the docs seem to at first imply that this (an example that aims to lint files in the _dist_ and _src_ folders) is correct

```js
import baseConfig from "./eslint.base.config.js"

export default [
    {
        files: [ "./dist/**/*.js" ],
        rules: {
            "no-unused-vars": "off",
            "semi": "error",
        },
    },
    baseConfig,
    {
        files: [ "./src/**/*.js" ],
        rules: {
            "semi": "off",
        },
    },
]
```

Although technically correct, it's not until you dig deeper into the docs that you realize what this is actually doing. The `baseConfig` import is being passed to the config array, but by doing this the imported config is being used on all files being linted, as well as overriding preceding configs (including any defined rules) in the config array. What if this wasn't the intention? Maybe the intention (based on the config proceeding the `baseConfig` import ) was for it to only be used with files from the _src_ folder? Then this is what it should be:

```js
import { defineConfig } from "eslint/config"
import baseConfig from "./eslint.base.config.js"

export default defineConfig(
    {
        files: [ "./dist/**/*.js" ],
        rules: {
            "no-unused-vars": "off",
            "semi": "error",
        },
    },
    {
        files: [ "./src/**/*.js" ],
        extends: [ baseConfig ],
        rules: {
            "semi": "off",
        },
    },
)
```

Now this is working as it should be; it's also explained in the ESLint docs, but only if you dig deeper, or google, or read through closed issues on the github repo... most people won't do this 🤦
