Some note's for myself on the use of overrides in ESLint configurations:

- If an override extends a configuration that has it's own overrides, this can cause side-effects.
- A configuration may support a file extension, but these overrides won't be used unless specified via `eslint --ext [list]`
