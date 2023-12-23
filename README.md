# Turborepo starter kit 🚀

### Tools and Technologies Used

1. [turbo.build](https://turbo.build/repo)
2. [pnpm](https://pnpm.io/)
3. [Create React App](https://create-react-app.dev/)
4. [Express](https://expressjs.com/)
5. [Jest](https://jestjs.io/)
6. [MongoDB](https://www.mongodb.com/)
7. [Mongoose](https://mongoosejs.com/)
8. [React](https://reactjs.org/)
6. [TypeScript](https://www.typescriptlang.org/)

## Dev

Following command will start all the apps and packages in dev mode.

```
pnpm install
pnpm dev
```

## Create a build

```
pnpm build
```

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [create-react-app](https://create-react-app.dev) app
- `web`: another [create-vite-app](https://vitejs.dev/guide/) app
- `server`: a [Express](https://expressjs.com) server
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-plugin-react` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting
