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
