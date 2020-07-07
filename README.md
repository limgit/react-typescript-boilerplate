# React-Typescript Boilerplate

> For those who are exhausted to pay the cost of installing packages that you will NEVER EVER use

This repository provides a starting point for SPA projects using following stack:
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/) with [airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript) extension
- [Webpack](https://webpack.js.org/) with [webpack-dev-server](https://github.com/webpack/webpack-dev-server) (hot loading enabled)

## Some Notes
- Source root (i.e., `src/`) could be referenced by using `@/` prefix
- Build result goes into `build/` directory
- Items under `public/` will be copied to `build/` directory directly

## TODOs
- Keep tracking the version upgrade of dependencies
- **Fix low severity vulnerabilities of lodash when fix is out**
- Fine-tune `.eslintrc.js` and `tsconfig.json` properly (RTFM!)
- and more..
