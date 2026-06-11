# SchedulaCore — Framework integrations

This folder is a **dev workspace** (not published to npm). It contains the official
framework wrappers and runnable demo apps for [SchedulaCore](https://www.npmjs.com/package/schedula-core).

```
integrations/
  packages/
    react/      → schedula-core-react   (npm package)
    vue/        → schedula-core-vue      (npm package)
    angular/    → schedula-core-angular  (npm package)
  examples/
    react/      → Vite + React demo  (Free edition)
    vue/        → Vite + Vue 3 demo  (Free edition)
    angular/    → Angular CLI demo   (Free edition)
```

## Wrappers

Each wrapper is a thin, MIT-licensed component around the vanilla `SchedulaCore`
class. It works identically with the Free and PRO editions — PRO plugins are passed
through `settings.plugins`, so the wrapper never bundles them.

| Package | Framework | Build |
|---|---|---|
| `schedula-core-react` | React 17+ | tsup (ESM + CJS + d.ts) |
| `schedula-core-vue` | Vue 3 | Vite library mode |
| `schedula-core-angular` | Angular 16+ | ng-packagr |

`schedula-core` and the framework are **peer dependencies** — consumers install only
what they use.

## Quick start (React / Vue demos via npm workspaces)

From this `integrations/` folder:

```bash
npm install            # installs workspaces + links wrappers locally
npm run build:wrappers # build react + vue wrappers once
npm run dev:react      # http://localhost:5173
npm run dev:vue        # http://localhost:5173
```

The Angular wrapper and demo use the Angular CLI and live outside the npm-workspaces
graph (see `packages/angular/` and `examples/angular/` READMEs).

> The demos use only the **Free** API (`schedula-core` from npm): theme switching,
> item shape, visible days, and text filtering. Drag/resize and dependency links
> require the PRO edition.
