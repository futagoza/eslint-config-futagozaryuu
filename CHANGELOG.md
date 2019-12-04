> See [commit history](https://github.com/futagoza/eslint-config-futagozaryuu/commits/master) for a full list of changes.<br>
> The changelog for [eslint-config-futagozaryuu](https://www.npmjs.com/package/eslint-config-futagozaryuu) has been moved to [docs/legacy-changelog.md](https://github.com/futagoza/eslint-config-futagozaryuu/blob/master/docs/legacy-changelog.md)<br>
> You may also want to check out [docs/history.md](https://github.com/futagoza/eslint-config-futagozaryuu/blob/master/docs/history.md) (don't worry, I won't bore you with the _gory_ details 😉)

<a name="12.0.0"></a>
## [v12.0.0](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v11.3.0...v12.0.0) (2019-12-04)

* Update _@futagoza_
    - Removed _@futagoza/html_ from the configuration
    - Include the new _@futagoza/ignore_ configuration
    - Updated the configurations section in the packages `README.md` file
* Update _@futagoza/typescript_
    - Added `sanitize-filename` dependency
    - Reverted [`Relax requirements of a tsconfig.json`](https://github.com/futagoza/eslint-config-futagozaryuu/commit/950e6b28514868f55ce7510b5f5b9e81c54be698)
    - Changed auto-setup of the `project` property for `parserOptions`:
        * First try's requiring a `tsconfig.eslint.json` in the current working directory
        * Then try's requiring a `tsconfig.json` in the current working directory
        * Finally create's a unique `tsconfig.*.json` in the temp directory and returns it's path
    - Added an expanded `tsconfig.default.json` which is used to create the unique `tsconfig.*.json`
* Miscellaneous
    - Added the _@futagoza/eslint-config-ignore_ configuration package

<a name="11.3.0"></a>
## [v11.3.0](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v11.2.0...v11.3.0) (2019-12-04)

* Update _@futagoza_
    - Adopt the new `ignorePatterns` property for ESLint configurations
* Update _@futagoza/core_
    - Added new rule `grouped-accessor-pairs`, set to `[ "warn", "getBeforeSet" ]`
    - Added new rule `no-constructor-return`, set to `error`
    - Added new rule `no-dupe-else-if`, set to `error`
    - Added new rule `no-setter-return`, set to `error`
    - Added new rule `prefer-exponentiation-operator`, set to `warn`
    - Re-enable rule `padding-line-between-statements`, setting it to
        * Expect a blank line before `case *:` labels
        * Expect no blank lines between `case *:` labels (multi-cases)
        * Expect a blank line before `default:` labels
        * Expect a blank line after `"use *";` directives
        * Make blank lines between `"use *";` directives optional
        * Expect a blank line after `import` statements
        * Make blank lines between `import` statements optional
    - Update `key-spacing` options to change `mode` for single and multi line object literals
    - Set minimum ESLint required to `v6.7`
* Update _@futagoza/javascript_
    - Enable the `enforceForClassMembers` option for the `no-useless-computed-key` rule
    - Set minimum ESLint required to `v6.7`
* Update _@futagoza/typescript_
    - Upgrade `@typescript-eslint/*` dependencies to `2.10.0`
    - Set rule `@typescript-eslint/no-unnecessary-condition` to `off`
    - Set rule `@typescript-eslint/generic-type-naming` to `off`
    - Updated `@typescript-eslint/ban-types`: added a `fixWith` option for `Function`
    - Set rule `@typescript-eslint/explicit-function-return-type` to `off`
    - Fixed rule `@typescript-eslint/no-use-before-define` to follow my ESLint configurations convention
    - Added new rule `@typescript-eslint/restrict-template-expressions`, set to `warn` on nullable's only
    - Added new rule `@typescript-eslint/space-before-function-paren`, use's base `space-before-function-paren` rule
    - Added new rule `@typescript-eslint/no-dynamic-delete`, set to `off`
    - Added new rule `@typescript-eslint/no-untyped-public-signature`, set to `off`
    - Rule `typescript-eslint/no-empty-interface` updated:
        * Is now a fixable rule via the `--fix` flag
        * Enabled it's `allowSingleExtends` option
    - Enable the `allowWithDecorator` option for the `@typescript-eslint/no-extraneous-class` rule
    - Added new rule `@typescript-eslint/no-extra-non-null-assertion`, set to `warn`
    - Added new rule `@typescript-eslint/no-unused-vars-experimental`, set to `off`
    - Added new rule `@typescript-eslint/prefer-nullish-coalescing`, set to `warn` and disabling `ignoreMixedLogicalExpressions`
    - Added new rule `@typescript-eslint/prefer-optional-chain`, set to `warn`
    - Added new rule `@typescript-eslint/return-await`, set to `off`
    - Fixed `@typescript-eslint/no-empty-function` to use base `no-empty-function` rule
    - Relax requirements of a `tsconfig.json`
        * Removed built-in use of finding a `tsconfig.json` or `./tsconfig.eslint.json`, letting `@typescript-eslint/parser` handle it
        * The relative search directory is set to the current working directory
        * A `./tsconfig.eslint.json` file is looked for first
        * The glob `./**/tsconfig.json` is used to get all `tsconfig.json` files (if any)
        * If any `.ts(x)` files are not in any `tsconfig.json` files, they are now still linted
* Miscellaneous
    - DEV: Bump `bluebird` to `3.7.2`
    - DEV: Upgrade `eslint` to `6.7.2`
    - DEV: Bump `typescript` to `3.7.3`
    - Confirmed compatibility with ESLint v6.7.2
    - DEV: Updated `yarn.lock`

<a name="11.2.0"></a>
## [v11.2.0](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v11.1.0...v11.2.0) (2019-11-13)

* Update _@futagoza_
    - Extends _@futagoza/node/10_ now instead of _@futagoza/node/8_
    - Updated blurb in README.md regarding use of Node.js v10 (still testing repository against Node.js v8)
* Update _@futagoza/typescript_
    - Upgrade `@typescript-eslint/*` dependencies to `2.7.0`
    - Added new rule `@typescript-eslint/no-unused-expressions`, set to `off`
* Miscellaneous
    - DEV: Avoid running CI on `git tag ...`
    - DEV: Bump `prompts` to `2.3.0`
    - DEV: Bump `typescript` to `3.7.2`
    - DEV: Updated `yarn.lock`

<a name="11.1.0"></a>
## [v11.1.0](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v11.0.1...v11.1.0) (2019-10-27)

* Update _@futagoza/core_
    - Update rule `no-extra-parens`, setting option `enforceForNewInMemberExpressions` to `false`
* Miscellaneous
    - DEV: Bump `bluebird` to `3.7.1`
    - Confirmed compatibility with ESLint v6.6

<a name="11.0.1"></a>
## [v11.0.1](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v11.0.0...v11.0.1) (2019-10-25)

* Update _@futagoza/typescript_
    - Upgrade `@typescript-eslint/*` dependencies to `2.5.0`
* Miscellaneous
    - DEV: Removed configuration file for Travis CI
    - DEV: Renamed GitHub Actions workflow to 'ci'
    - DEV: Fix package information row for _@futagoza/eslint-config-globals_
    - DEV: Fix the link for GitHub Actions workflow badge
    - DEV: Lock `typescript` dependency to `3.6.4` (for easier testing)
    - DEV: Updated `yarn.lock`

<a name="11.0.0"></a>
## [v11.0.0](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v10.0.0...v11.0.0) (2019-10-08)

* Update _@futagoza/dev_
    - Added the configuration _@futagoza/dev/code_ (ESNext and ES modules)
    - _@futagoza/dev/test_ now enables globals by extending _@futagoza/globals/test_
    - Added the configuration _@futagoza/dev/node_
    - Default config now extends _@futagoza/dev/node_ as well as _@futagoza/dev/test_
* Update _@futagoza/html_
    - Enables globals by extending _@futagoza/globals/browser_
* Update _@futagoza/javascript_
    - Updated the configurations section in README.md, adding _@futagoza/javascript/es2020_
    - The _es*_ configurations now enable globals by extending their respective _@futagoza/globals/es*_
    - Added the configuration _@futagoza/javascript/modules_
* Update _@futagoza/node_
    - Enables globals by extending _@futagoza/globals/node_
* Update _@futagoza/svelte_
    - Default configuration now enables globals by extending _@futagoza/globals/browser_
    - Added the configuration _@futagoza/svelte/sapper_
    - Fixed parsing error for `*.svelte` files by adding the `svelte3/svelte3` processor
* Update _@futagoza/typescript_
    - Bump `@typescript-eslint/*` dependencies to `2.3.3`
    - TS: Include `**/*.(ts|tsx)` in bundled fall-back `tsconfig.json`
* Miscellaneous
    - DEV: Bump `bluebird` to `3.7.0`
    - Added the _@futagoza/eslint-config-globals_ configuration package
    - DEV: Add package information and badge for _@futagoza/eslint-config-globals_ to repository's `README.md`

<a name="10.0.0"></a>
## [v10.0.0](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v9.3.0...v10.0.0) (2019-10-01)

* Update _@futagoza_
    - Removed the _@futagoza/vue_ configuration
    - Include the new _@futagoza/html_ configuration
    - Include the _@futagoza/dev/test_ configuration
* Update _@futagoza/core_
    - Update rule `no-extra-parens`, setting option `enforceForSequenceExpressions` to `false`
* Update _@futagoza/dev_
    - Ensure _@futagoza/dev/test_ only works with expected files
    - Added passive support for `.ts` test files
* Update _@futagoza/javascript_
    - Bump `babel-eslint` to `^10.0.3`
* Update _@futagoza/typescript_
    - Bump `@typescript-eslint/*` dependencies to `2.3.2`
* Miscellaneous
    - DEV: Updated the GitHub Actions badge URL (use official badge)
    - Removed the _@futagoza/eslint-config-vue_ configuration package
    - Added the _@futagoza/eslint-config-html_ configuration package for HTML and/or XML files
    - Added the _@futagoza/eslint-config-svelte_ configuration package for Svelte files
    - Confirmed compatibility with ESLint v6.5
    - DEV: Updated `yarn.lock`

<a name="9.3.0"></a>
## [v9.3.0](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v9.2.0...v9.3.0) (2019-09-16)

* Update _@futagoza/core_
    - Added new rule `no-import-assign`, set to `error`
    - Added new rule `prefer-regex-literals`, set to `off`
    - Added new rule `default-param-last`, set to `warn`
    - Remove fixable icon for `no-unsafe-negation` (https://github.com/eslint/eslint/issues/12157)
    - Set minimum ESLint required to `v6.4`
* Update _@futagoza/javascript_
    - Upgrade `globals` dependency to `^12.1.0`
* Update _@futagoza/node_
    - Upgrade `globals` dependency to `^12.1.0`
* Update _@futagoza/typescript_
    - Upgrade `@typescript-eslint/*` dependencies to `~2.3.0`
    - Added new rule `@typescript-eslint/no-unnecessary-condition`, set to `warn`
* Miscellaneous
    - DEV: Tidy-up workflow file for GitHub Actions
    - DEV: Update badge (provided via https://github.com/badges/shields/pull/3898)
    - Confirmed compatibility with ESLint v6.4.0
    - DEV: Updated `yarn.lock`
    - Use `off` instead of `0` to disable rules
    - Use `void 0` instead of any other value for rules in any `deprecated.js` files

<a name="9.2.0"></a>
## [v9.2.0](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v9.1.0...v9.2.0) (2019-09-10)

* Update _@futagoza/core_
    - Enable `reportUnusedDisableDirectives`, a top-level option added in ESLint v6.3
    - Set minimum ESLint required to `v6.3`
* Update _@futagoza/node_
    - Upgrade `eslint-plugin-node` dependency to `~10.0.0`
    - Added new rule `node/no-exports-assign`
* Update _@futagoza/typescript_
    - Look for `tsconfig.eslint.json` first, then `tsconfig.json`
    - Upgrade `@typescript-eslint/*` dependencies to `~2.2.0`
    - Added new rule `@typescript-eslint/brace-style`
    - Added new rule `@typescript-eslint/quotes`
* Miscellaneous
    - Confirmed compatibility with ESLint v6.3.0
    - DEV: Updated `yarn.lock`
    - DEV: Remove ⚠️, and update source note in root `README.md`
    - DEV: Replace 📝 with 🔧

<a name="9.1.0"></a>
## [v9.1.0](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v9.0.0...v9.1.0) (2019-08-21)

* Update _@futagoza/typescript_
    - Also look for `tsconfig.eslint.json` (as shown by typescript-eslint)
    - Disable deprecated rules

<a name="9.0.0"></a>
## [v9.0.0](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v8.3.0...v9.0.0) (2019-08-21)

* Update _@futagoza/core_
    - Added new rule `function-call-argument-newline`
* Update _@futagoza/javascript_
    - Add support for ES2020 (`@futagoza/javascript/es2020`)
* Update _@futagoza/typescript_
    - Upgrade `@typescript-eslint/*` dependencies to `~2.0.0`
    - Added new rule `@typescript-eslint/consistent-type-assertions`
    - Enable `allowUnderscorePrefix` option for `@typescript-eslint/class-name-casing`
    - Added new rule `@typescript-eslint/typedef`
    - Added new rule `@typescript-eslint/no-unnecessary-type-arguments`
    - Fix options for rule `@typescript-eslint/array-type`
* Miscellaneous
    - Confirmed compatibility with ESLint v6.2.1
    - DEV: Upgrade `prompts` devDependency to `2.2.1`

<a name="8.3.0"></a>
## [v8.3.0](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v8.2.0...v8.3.0) (2019-07-24)

* Update _@futagoza/core_
    - Increase allowed chain depth in `newline-per-chained-call` to _5_
    - Fix documentation link in source file for `operator-assignment`
* Update _@futagoza/javascript_
    - Upgrade `globals` dependency to `^12.0.0`
* Update _@futagoza/node_
    - Upgrade `globals` dependency to `^12.0.0`
* Update _@futagoza/typescript_
    - Update `@typescript-eslint/*` dependencies to `~1.13.0`
    - Added new rule `@typescript-eslint/no-misused-promises`
    - Added new rule `@typescript-eslint/require-await`
    - Disable rule `@typescript-eslint/no-object-literal-type-assertion`
    - Disable rule `@typescript-eslint/no-parameter-properties`
    - Disable rule `@typescript-eslint/no-type-alias`
    - Disable rule `@typescript-eslint/restrict-plus-operands`
* Miscellaneous
    - Confirmed compatibility with ESLint v6.1.0
    - DEV: Ignore node_modules from anywhere when testing/linting the whole repository

<a name="8.2.0"></a>
## [v8.2.0](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v8.1.1...v8.2.0) (2019-07-15)

* Enable `fixToUnknown` option for the `@typescript-eslint/no-explicit-any` rule

<a name="8.1.1"></a>
## [v8.1.1](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v8.1.0...v8.1.1) (2019-07-13)

* __@futagoza/typescript:__ Use `plugin:@typescript-eslint/base`

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
