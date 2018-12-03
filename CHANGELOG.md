## unreleased

* Confirmed compatibility with ESLint v5.9
* Ensure NPM does not publish this package's `.eslintrc.js` and `yarn.lock`

<a name="5.3.0"></a>
## [v5.3.0](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v5.2.0...v5.3.0) (2018-10-05)

* Confirmed compatibility with ESLint v5.6
* Updated dependency `babel-eslint` to `^10.0.0`
* Removed support for TypeScript, use [eslint-config-typescript](https://www.npmjs.com/package/eslint-config-typescript) instead
* DEV: Updated `yarn.lock`
* Released: https://github.com/futagoza/eslint-config-futagozaryuu/releases/tag/v5.3.0

<a name="5.2.0"></a>
## [v5.2.0](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v5.1.0...v5.2.0) (2018-08-24)

* Updated dependency `typescript` to `~3.0.0`
* Updated dependency `typescript-eslint-parser` to `^18.0.0`
* Confirmed compatibility with ESLint v5.4
* DEV: Updated `yarn.lock`
* Released: https://github.com/futagoza/eslint-config-futagozaryuu/releases/tag/v5.2.0

<a name="5.1.0"></a>
## [v5.1.0](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v5.0.0...v5.1.0) (2018-08-05)

* Added new rule `no-misleading-character-class` to `futagozaryuu/possible-errors`
* Added new rule `require-atomic-updates` to `futagozaryuu/possible-errors`
* Added new rule `no-async-promise-executor` to `futagozaryuu/possible-errors`
* Added new rule `require-unicode-regexp` to `futagozaryuu/best-practices`
* Set minimum ESLint requirement to `v5.3`
* Updated dependency `typescript-eslint-parser` to `^17.0.0`
* DEV: Updated `yarn.lock`
* Released: https://github.com/futagoza/eslint-config-futagozaryuu/releases/tag/v5.1.0

<a name="5.0.0"></a>
## [v5.0.0](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v4.18.1...v5.0.0) (2018-07-22)

* DEV: Added Node.js v10 to the list of LTS release's checked against
* DEV: Set Travis to run the latest release of each Node.js LTS
* Fixed spelling and grammar error in `README.md`
* Removed support for running in Node.js v4 _(linting to check if script can run in Node.js v4 is still supported)_
* Set minimum version of Node.js required to `>= 6`
* Updated dependency `typescript` to `~2.9.0`
* Updated dependency `typescript-eslint-parser` to `^16.0.0`
* Upgraded configuration files for ESLint `v5.0` and `v5.1`
  * Added options for rule `no-self-assign` to ensure self-assigned properties are excluded
  * Updated options for rule `no-unused-vars` to always throw errors on local unused variables
  * Added new rule `prefer-object-spread` to `stylistic-issues.js` (`futagozaryuu/stylistic-issues`)
  * Added new rule `max-classes-per-file` to `best-practices.js` (`futagozaryuu/best-practices`)
  * Updated comment for rule `one-var` to indicate that it is now fixable
  * Updated options for rule `one-var` to ensure uninitialized variables can be defined consecutively
  * Added option `requireParamType` to rule `valid-jsdoc` in `jsdoc.js` (`futagozaryuu/jsdoc`)
  * Updated option `requireReturnType` for rule `valid-jsdoc` to be `true` (`requireReturn` is still `false`)
  * Added new rule `max-lines-per-function` to `stylistic-issues.js` (`futagozaryuu/stylistic-issues`)
  * Moved `no-catch-shadow` from `variables.js` (`futagozaryuu/variables`) to `deprecated.js` (`futagozaryuu/deprecated`)
  * Removed the autofixer icon in the comment for `no-debugger`; It is not fixable anymore
  * Update options for `no-implied-eval` and `no-eval` to throw a warning
* Added support for ES2019 (`futagozaryuu/es2019`), and updated dev (`futagozaryuu/dev`)
* Updated dependency `eslint-plugin-node` to `~7.0.0`
* Updated `node-v*` configuration files to support changes in `eslint-plugin-node`
* Added configuration file for Node.js v10 (`futagozaryuu/node-v10`)
* Confirmed compatibility with _ESLint v5.2_
* Added note to `README.md` about minimum ESLint required to `v5.1`
* DEV: Updated `yarn.lock`
* Updated the `configurations` section in `README.md`
* Released: https://github.com/futagoza/eslint-config-futagozaryuu/releases/tag/v5.0.0

<a name="4.18.1"></a>
## [v4.18.1](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v4.18.0...v4.18.1) (2018-05-13)

* Use NPM and not Yarn when running the `version` command _(Released on NPM now)_
* Released: https://github.com/futagoza/eslint-config-futagozaryuu/releases/tag/v4.18.1

<a name="4.18.0"></a>
## [v4.18.0](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v4.17.2...v4.18.0) (2018-05-13)

* Rule `prefer-rest-params` for ES2015+ is now disabled when using `futagozaryuu/node-v4`
* Rule `prefer-spread` for ES2015+ is now disabled when using `futagozaryuu/node-v4`
* Updated dependency `typescript-eslint-parser` to `^15.0.0`
* Updated dependency `typescript` to `~2.8.0`
* Updated the `versioning` section in `README.md` to include a note about tildes and carets
* DEV: Updated `yarn.lock`
* Released: https://github.com/futagoza/eslint-config-futagozaryuu/releases/tag/v4.18.0

<a name="4.17.2"></a>
## [v4.17.2](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v4.17.1...v4.17.2) (2018-03-23)

* Switch to use of tildes (`~`) and carets (`^`) in `dependencies` and `devDependencies`
* Removed `peerDependencies`, fixes annoying warning from NPM/Yarn
* DEV: Updated `yarn.lock`
* Confirmed compatibility with ESLint v4.19.1
* Released: https://github.com/futagoza/eslint-config-futagozaryuu/releases/tag/v4.17.2

<a name="4.17.1"></a>
## [v4.17.1](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v4.17.0...v4.17.1) (2018-03-17)

* Confirmed compatibility with ESLint v4.19
* Fix unmet peer dependency warning for TypeScript
* Released: https://github.com/futagoza/eslint-config-futagozaryuu/releases/tag/v4.17.1

<a name="4.17.0"></a>
## [v4.17.0](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v4.0.0...v4.17.0) (2018-03-15)

* Set minimum ESLint requirement to `v4.18`
* DEV: Added a lock-file for Yarn
* DEV: Ignore `*.log` files in the root
* DEV: Use `yarn` on CI
* Removed `ecmaFeatures#experimentalObjectRestSpread` option in `futagozaryuu/es2018`
* DEV: Remove `.npmrc` as I'm now using Yarn
* Added support for TypeScript via `futagozaryuu/typescript`
* Updated the `about` section in `README.md`
* Updated the `configurations` section in `README.md`
* Added the `versioning` section to `README.md`
* Released: https://github.com/futagoza/eslint-config-futagozaryuu/releases/tag/v4.17.0

<a name="4.0.0"></a>
## [v4.0.0](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v3.9.0...v4.0.0) (2018-02-14)

* DEV: Only run travis on master branch
* Confirmed compatibility with ESLint v4.17
* Updated dependency `eslint-plugin-node` to `6.0.x`
* Removed configurations for non-LTS versions of Node.js
* Updated configurations for LTS versions of Node.js
* Updated `README.md` to be slightly more clear about configurations
* Updated license year from `2017` to `2017+`
* Released: https://github.com/futagoza/eslint-config-futagozaryuu/releases/tag/v4.0.0

<a name="3.9.0"></a>
## [v3.9.0](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v3.8.1...v3.9.0) (2018-01-26)

* Confirmed compatibility with ESLint v4.16
* Added support for _ES2018_
* DEV: Re-introduce `.eslintrc.js` for VS Code
* Removed `futagozaryuu/esnext`, as _ES2018_ has made it temporarily redundant
* Move content from `futagozaryuu/esnext` to `futagozaryuu/dev`
* Released: https://github.com/futagoza/eslint-config-futagozaryuu/releases/tag/v3.9.0

<a name="3.8.1"></a>
## [v3.8.1](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v3.8.0...v3.8.1) (2018-01-10)

* Confirmed compatibility with ESLint v4.15
* Updated dependency `babel-eslint` to `8.2.x`
* Released: https://github.com/futagoza/eslint-config-futagozaryuu/releases/tag/v3.8.1

<a name="3.8.0"></a>
## [v3.8.0](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v3.7.1...v3.8.0) (2018-01-03)

* Updated dependency `babel-eslint` to `8.1.x`
* Confirmed compatibility with ESLint v4.14
* DEV: Stopped using the `--cache` option for ESLint in test
* DEV: Moved config path into test script using ESLint's `-c` option
* DEV: Removed `preversion` script
* Released: https://github.com/futagoza/eslint-config-futagozaryuu/releases/tag/v3.8.0

<a name="3.7.1"></a>
## [v3.7.1](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v3.7.0...v3.7.1) (2017-12-16)

* Fix NPM v2 (Node.js v4) compatibility issue by resolving plugin `babel-eslint` using `require.resolve`
* Confirmed compatibility with ESLint v4.13
* Released: https://github.com/futagoza/eslint-config-futagozaryuu/releases/tag/v3.7.1

<a name="3.7.0"></a>
## [v3.7.0](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v3.6.0...v3.7.0) (2017-11-27)

* Set minimum version of ESLint required to `v4.12`
* Added new rule `implicit-arrow-linebreak` to `stylistic-issues.js` (`futagozaryuu/stylistic-issues`)
* Updated JSDoc for `sort-vars` (`futagozaryuu/stylistic-issues`)
* Updated dependency `globals` to `>= 11.0.0`
* Updated list of global's used (`futagozaryuu/es2015` and `futagozaryuu/es2017`)
* Released: https://github.com/futagoza/eslint-config-futagozaryuu/releases/tag/v3.7.0

<a name="3.6.0"></a>
## [v3.6.0](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v3.5.1...v3.6.0) (2017-10-19)

* Updated dependency `eslint-plugin-node` to `5.2.x`
* Set minimum version of ESLint required to `v4.9`
* Added new option `FunctionExpression` for rule `require-jsdoc` (`futagozaryuu/jsdoc`)
* Added new rule `lines-between-class-members` to `stylistic-issues.js` (`futagozaryuu/stylistic-issues`)
* Added new rule `multiline-comment-style` to `stylistic-issues.js` (`futagozaryuu/stylistic-issues`)
* Released: https://github.com/futagoza/eslint-config-futagozaryuu/releases/tag/v3.6.0

<a name="3.5.1"></a>
## [v3.5.1](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v3.5.0...v3.5.1) (2017-09-17)

* Updated dependency `babel-eslint` to `8.0.x`
* Confirmed compatibility with ESLint v4.7
* Released: https://github.com/futagoza/eslint-config-futagozaryuu/releases/tag/v3.5.1

<a name="3.5.0"></a>
## [v3.5.0](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v3.4.0...v3.5.0) (2017-09-03)

* Enable the `generator-star-spacing` rule, and set it's options
* Set minimum version of ESLint required to `v4.6`
* Added new rule `function-paren-newline` to `stylistic-issues.js` (`futagozaryuu/stylistic-issues`)
* DEV: Dropped CI support for non-LTS releases (Node.js v5 and Node.js v7)
* Released: https://github.com/futagoza/eslint-config-futagozaryuu/releases/tag/v3.5.0

<a name="3.4.0"></a>
## [v3.4.0](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v3.3.1...v3.4.0) (2017-08-24)

* Use `indent`, disabling `indent-legacy` ([eslint/eslint#8847](https://github.com/eslint/eslint/issues/8847), [eslint/eslint#8594](https://github.com/eslint/eslint/issues/8594), [eslint/eslint#9105](https://github.com/eslint/eslint/issues/9105))
* Set minimum version of ESLint required to `v4.5`
* Confirmed compatibility with v10.1.0 of the `globals` package
* Released: https://github.com/futagoza/eslint-config-futagozaryuu/releases/tag/v3.4.0

<a name="3.3.1"></a>
## [v3.3.1](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v3.3.0...v3.3.1) (2017-08-05)

* Confirmed compatibility with ESLint v4.3
* DEV: Ignore `package-lock.json` generated by NPM v5, bundled with Node.js 8
* Updated dependency `babel-eslint` to `>= 8.0.0-alpha.17`
* Released: https://github.com/futagoza/eslint-config-futagozaryuu/releases/tag/v3.3.1

<a name="3.3.0"></a>
## [v3.3.0](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v3.2.1...v3.3.0) (2017-07-15)

* Set minimum version of ESLint required to `v4.2`
* Updated devDependency `eslint` to `v4.2.0`
* Added new rule `getter-return` to `possible-errors.js` (`futagozaryuu/possible-errors`)
* Added an up to date `CHANGELOG.md`, and a badge for it in `README.md`
* Updated license blurb in the `LICENSE` file
* Released: https://github.com/futagoza/eslint-config-futagozaryuu/releases/tag/v3.3.0

<a name="3.2.1"></a>
## [v3.2.1](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v3.2.0...v3.2.1) (2017-07-08)

* Fixed 2 spelling mistakes in `README.md`
* Removed 2 rules from `node-v4.js` (`futagozaryuu/node-v4`): `node/no-deprecated-api` and `node/shebang`
* Enabled the 2 rules in `node.js` (`futagozaryuu/node`), previously set in `node-v4.js` (`futagozaryuu/node-v4`)
* Modified extended configurations and rules in `node-v7.js` (`futagozaryuu/node-v7`) and `node-v7.6.js` (`futagozaryuu/node-v7.6`)
* Released: https://github.com/futagoza/eslint-config-futagozaryuu/releases/tag/v3.2.1

<a name="3.2.0"></a>
## [v3.2.0](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v3.1.1...v3.2.0) (2017-07-01)

* Updated `README.md`
* Fix `node-v8.js` (`futagozaryuu/node-v8`) configuration file extending itself
* Added support for Node.js v7.6 via the `node-v7.6.js` (`futagozaryuu/node-v7.6`) configuration file
* Released: https://github.com/futagoza/eslint-config-futagozaryuu/releases/tag/v3.2.0

<a name="3.1.1"></a>
## [v3.1.1](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v3.1.0...v3.1.1) (2017-06-30)

* Removed the lock file `package-lock.json` generated by NPM 5 (see [npm/npm#16866](https://github.com/npm/npm/issues/16866))
* Use `indent-legacy` instead of `indent` (see [eslint/eslint#8847](https://github.com/eslint/eslint/issues/8847))
* Released: https://github.com/futagoza/eslint-config-futagozaryuu/releases/tag/v3.1.1

<a name="3.1.0"></a>
## [v3.1.0](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v3.0.0...v3.1.0) (2017-06-30)

* Fix broken `esnext.js` (`futagozaryuu/esnext`)
* Change operator used by dependencies
* Released: https://github.com/futagoza/eslint-config-futagozaryuu/releases/tag/v3.1.0

<a name="3.0.0"></a>
## [v3.0.0](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v2.3.0...v3.0.0) (2017-06-30)

* Updated `README.md`
* Updated dependency `eslint-plugin-node` from `5.0.0` to `5.1.0`
* Set minimum version of ESLint required to `v4.1`
* Updated devDependency `eslint` to `v4.1.1`
* Added support for ESLint v4.1 (rules and options)
* Tweaked various other rules used
* Added `deprecated.js` (`futagozaryuu/deprecated`) configuration file
* Updated JSDocs for some rules
* Added `test.js` (`futagozaryuu/test`) configuration file
* Added `dev.js` (`futagozaryuu/dev`) configuration file
* Released: https://github.com/futagoza/eslint-config-futagozaryuu/releases/tag/v3.0.0

<a name="2.3.0"></a>
## [v2.3.0](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v2.2.0...v2.3.0) (2017-06-12)

* Released `v3.0.0-rc.1` of `eslint-config-futagozaryuu` (ESLint 4 alpha support)
* Reverted `v3.0.0-rc.1` release by releasing `v2.2.1` of `eslint-config-futagozaryuu` (install and linting errors)
* Updated dependency `globals` from `9.17.0` to `10.0.0`
* Updated dependency `eslint-plugin-node` from `4.2.2` to `5.0.0`
* Added support for Node.js 8 (Travis and `node-v8.js` (`futagozaryuu/node-v8`) configuration file)
* Added the lock file `package-lock.json` generated by NPM 5
* Added 2 new rules: `node/no-extraneous-import` and `node/no-extraneous-require`
* Released: https://github.com/futagoza/eslint-config-futagozaryuu/releases/tag/v2.3.0

<a name="2.2.0"></a>
## [v2.2.0](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v2.1.0...v2.2.0) (2017-05-02)

* Enable support for ES2015+ modules in `esnext.js` (`futagozaryuu/esnext`)
* Fix some links in JSDoc comments for rules
* Set `mode` option for the `key-spacing` rule to `minimum`
* Update dependency `babel-eslint` to `v7.2.3`
* Released: https://github.com/futagoza/eslint-config-futagozaryuu/releases/tag/v2.2.0

<a name="2.1.0"></a>
## [v2.1.0](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v2.0.0...v2.1.0) (2017-04-06)

* Updated `README.md` (added badges)
* Updated devDependency `eslint` to `v3.19.0`
* Added `eslint-plugin-node` as a peerDependency ([mysticatea/eslint-plugin-node#76](https://github.com/mysticatea/eslint-plugin-node/issues/76))
* Released: https://github.com/futagoza/eslint-config-futagozaryuu/releases/tag/v2.1.0

<a name="2.0.0"></a>
## [v2.0.0](https://github.com/futagoza/eslint-config-futagozaryuu/compare/v1.0.0...v2.0.0) (2017-04-02)

* Updated `README.md`
* Set minimum version of ESLint required to `v3.17`
* Added all rules listed on http://eslint.org/docs/rules/ (02 April 2017)
* Updated options and/or configurations for quite a few rules
* Added JSDoc comment blocks for all rules (makes it easier deciding on what to edit)
* Added most rules related to Node.js to `node.js` (`futagozaryuu/node`)
* Depending on the version of Node.js required, certain options are changed in `node-v*.js` (`futagozaryuu/node-v*`) configurations files
* Added rules related to JSDoc to `jsdoc.js` (`futagozaryuu/jsdoc`)
* Use Babel as the parser for ES2015+ code, using the added dependency `babel-eslint`
* Added '.travis.yml' as an ignored file when publishing to NPM
* Certain configuration files now extend others based on on what that configuration is about
* Released: https://github.com/futagoza/eslint-config-futagozaryuu/releases/tag/v2.0.0

<a name="1.0.0"></a>
## [v1.0.0](https://github.com/futagoza/eslint-config-futagozaryuu/commits/v1.0.0) (2017-03-30)

* Released: https://github.com/futagoza/eslint-config-futagozaryuu/releases/tag/v1.0.0
