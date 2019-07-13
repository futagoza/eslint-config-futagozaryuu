> See [commit history](https://github.com/futagoza/eslint-config-futagozaryuu/commits/master) for a full list of changes.<br>
> The changelog for [eslint-config-futagozaryuu](https://www.npmjs.com/package/eslint-config-futagozaryuu) has been moved to [docs/legacy-changelog.md](https://github.com/futagoza/eslint-config-futagozaryuu/blob/master/docs/legacy-changelog.md)<br>
> You may also want to check out [docs/history.md](https://github.com/futagoza/eslint-config-futagozaryuu/blob/master/docs/history.md) (don't worry, I won't bore you with the _gory_ details 😉)

<a name="8.1.0"></a>
## [v8.1.0](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v8.0.0...v8.1.0) (2019-07-13)

* Update `@typescript-eslint/*` dependencies to `~1.12.0`
* Added all existing `@typescript-eslint/*` rules
* Added `@futagoza/typescript/eslint-overrides` configuration (used by `@futagoza/typescript`)
* Correct copyright years (Use `2019+` instead of `2017+` in the newest configurations)
* DEV: Removed the ugly `publishConfig` field in `@futagoza/eslint-*` packages
* DEV: Use `--access public` directly in the bump script
* DEV: Updated `yarn.lock`

<a name="8.0.0"></a>
## [v8.0.0](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v7.0.4...v8.0.0) (2019-07-13)

* DEV: Migrate to Yarn workspace's format
* Created `@futagoza/eslint-config-core` _(@futagoza/core)_
* Created `@futagoza/eslint-config-javascript` _(@futagoza/javascript)_
    - By default now use's `@futagoza/javascript/es2019` instead of `@futagoza/javascript/es5`
* Created `@futagoza/eslint-config-node` _(@futagoza/node)_
    - Support linting `*.mjs` files correctly
    - Drops the `v` prefix from configuration names
    - Add's an override for TypeScript files to ignore Node.js version-specific syntax
    - By default does not assume a Node.js version which require's specific JavaScript syntax
* Created `@futagoza/eslint-config-dev` _(@futagoza/dev)_
    - Integrates the test configuration automatically now using overrides
    - The test configuration can be used via `@futagoza/dev/test` now
* Created `@futagoza/eslint-config-typescript` _(@futagoza/typescript)_
    - Does not extend a specific javascript configuration, left to consumer to decide now
    - Having a `tsconfig.json` is not enforced now because a _[default](https://github.com/futagoza/eslint-config-futagozaryuu/blob/master/packages/%40futagoza/eslint-config-typescript/tsconfig.default.json)_ is used
* Created `@futagoza/eslint-config-vue` _(@futagoza/vue)_
* Created `@futagoza/eslint-config` _(@futagoza)_
    - Is a unified configuration for simple usage of `@futagoza/eslint-config-*` packages
    - Deprecated `eslint-config-futagozaryuu` in favour of this package
    - Does not have any configuration other then the default now
* ESlint 6+ configuration features are now used (e.g. overrides can now extend configurations)
* Added [docs/overrides.md](https://github.com/futagoza/eslint-config-futagozaryuu/blob/master/docs/overrides.md)
* Added [docs/versioning.md](https://github.com/futagoza/eslint-config-futagozaryuu/blob/master/docs/versioning.md)
* Added [docs/history.md](https://github.com/futagoza/eslint-config-futagozaryuu/blob/master/docs/history.md)
* Added [docs/legacy-changelog.md](https://github.com/futagoza/eslint-config-futagozaryuu/blob/master/docs/legacy-changelog.md)
* DEV: Use the [repository's root README.md](https://github.com/futagoza/eslint-config-futagozaryuu/blob/master/README.md) as an overview of the [scoped configurations](https://github.com/futagoza/eslint-config-futagozaryuu/tree/master/packages/%40futagoza)
* DEV: Added a script that bumps and synchronises version fields for all workspace packages before publishing them
