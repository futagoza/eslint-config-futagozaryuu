Before March 2017 I used a new ESLint configuration for each project, with mostly the same rules and settings repeated over and over again, but this got very annoying at some point and I started to stop using ESLint for some time, until it became obvious how much I had relied on ESlint to enforce my various coding styles across different JavaScript projects. That's when I created [eslint-config-futagozaryuu](https://www.npmjs.com/package/eslint-config-futagozaryuu) as well as setting my self to use a coding style that was both clean and simple, both to use while programming and reading my code (I do that alot, read other peaples code 😂) which at times I felt was not possible because of my ever changing coding style.

Here's a brief overview of important changes:

- On _30/03/2017_ I released v1 of `eslint-config-futagozaryuu`, which only contained my up-till then used rules.
- On _02/04/2017_ I released v2, which contained every rule in [ESlint](http://eslint.org/docs/rules/) at the time.
- On _14/02/2018_, with the release of v4 I started only making Node configurations for LTS versions of Node.
- On _15/03/2018 (v4.17)_, I changed both my versioning strategy (to follow ESLint) and how I use dependency locking.
- From _20/07/2018_ till _26/06/2019_ I used v5 `eslint-config-futagozaryuu`, with only minor updates!
- On _03/07/2019_ I once again changed my versioning strategy, relaxing it to make it easier for my self.
- A few days later I decided to deprecate `eslint-config-futagozaryuu` in favour of [npm scoped configuration](https://eslint.org/docs/developer-guide/shareable-configs#npm-scoped-modules).
