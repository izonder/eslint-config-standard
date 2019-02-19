# eslint-config-standard
Standard set of ESLint rules

NOTE! There are split rules:
- base.yml
- jsdoc.yml
- mocha.yml
- react.yml
- test.yml

### installation
```
npm i --save-dev izonder/eslint-config-standard
```

or

```
yarn add izonder/eslint-config-standard --dev
```

### how to
Just add `.eslintrc` file:

```
---
root: true
extends:
- standard
```

In order to use config rules separately:

```
---
root: true
extends:
- standard/rules/base.yml
- standard/rules/jsdoc.yml
- standard/rules/mocha.yml
- standard/rules/react.yml
- standard/rules/test.yml
```
