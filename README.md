[![Build status](https://api.travis-ci.org/futagoza/eslint-config-futagozaryuu.svg?branch=master)](https://travis-ci.org/futagoza/eslint-config-futagozaryuu)
[![License](https://img.shields.io/badge/license-mit-blue.svg)](https://opensource.org/licenses/MIT)

> This package contains configuration files for ESLint v6+<br>
> TypeScript configurations require TypeScript v3+

These are configurations for ESLint that I use in my JavaScript and TypeScript projects. Most of the configurations assume development in ES2015+ compatible environments, but the default configuration does not do this.

| package | release | dependency status | weight |
| ------- | ------- | ----------------- | ------ |
| [@futagoza/eslint-config][01a] | [![release][01b]][01c] | [![dependencies][01d]][01e] | [![install size][01f]][01g] |

<!-- @futagoza/eslint-config -->
[01a]: https://github.com/futagoza/eslint-config-futagozaryuu/tree/master/packages/@futagoza/eslint-config
[01b]: https://img.shields.io/npm/v/@futagoza/eslint-config.svg
[01c]: https://www.npmjs.com/package/@futagoza/eslint-config
[01d]: https://img.shields.io/david/futagoza/eslint-config-futagozaryuu.svg?path=packages/@futagoza/eslint-config
[01e]: https://david-dm.org/futagoza/eslint-config-futagozaryuu?path=packages/@futagoza/eslint-config
[01f]: https://packagephobia.now.sh/badge?p=@futagoza/eslint-config
[01g]: https://packagephobia.now.sh/result?p=@futagoza/eslint-config

## versioning

Since v7 of this package I will try to follow a semver based versioning:

`4.17.0` = `RELEASE.REVISION.PATCH`

* `RELEASE`
  - a new configuration has been added
  - a new dependency is required
* `REVISION`
  - confirmed compatibility with ESLint release's
  - changes to existing configurations
* `PATCH`
  - a bug is fixed
  - docs are updated
  - dependency upgrades _(without configuration updates)_
  - is reset when `REVISION` increments

Also to note on dependencies; before 4.17 my dependencies were always fixed (on any package), but since I've started to embrace tools like Yarn, I thought why not also use practices like tildes (e.g. `~`) and carets (e.g. `^`). See [this answer on StackOverflow](https://stackoverflow.com/a/22345808/1518408) for a clear explanation about the two.

## license

Copyright © 2017+ Futago-za Ryuu<br>
Released under the MIT License, [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
