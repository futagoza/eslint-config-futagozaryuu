## about

These are ESLint configurations I use in my JavaScript projects. They mostly assume development in ES2015+ compatible enviroments, unless otherwise stated.

## installation

```console
$ npm install --save-dev eslint-config-futagozaryuu
```

## usage

Put the following into your `.eslintrc.json` file:

```json
{
  "extends": "futagozaryuu"
}
```

## development

I will update the configuration files as I change my style, but this will mostly just change the `minor` number.
Any change to the `major` number means that I have added or removed either rules or configuration files.
