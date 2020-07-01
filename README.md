# Sigbit ESLint config
> 👮‍♂️ Enforce code style

## Usage
Add `eslint` and this config to your project:
```sh
$ yarn add eslint "significantbit/eslint-config-sigbit#<release>" -D
```

Use default config:
```js
// .eslintrc.js
module.exports = {
  root: true,
  extends: [
    'sigbit'
  ]
}
```

Use specific config:
```js
// .eslintrc.js
module.exports = {
  root: true,
  extends: [
    'sigbit/nuxt'
  ]
}
```
