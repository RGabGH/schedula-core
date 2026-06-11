# SchedulaCore — Demo apps

Runnable demos for the official framework wrappers. They use only the **Free**
edition of `schedula-core` (theme switching, item shape, visible days, text filter).

Each demo links the local wrapper packages — build the wrappers first.

## React / Vue (npm workspaces)

From `public/integrations/`:

```bash
npm install
npm run build:wrappers
npm run dev:react   # http://localhost:5173
npm run dev:vue     # http://localhost:5174
```

## Angular (standalone Angular CLI)

The Angular wrapper and demo are built with the Angular toolchain, outside the
npm-workspaces graph.

```bash
# 1) build the wrapper
cd public/integrations/packages/angular
npm install
npm run build            # ng-packagr → dist/

# 2) run the demo
cd ../../examples/angular
npm install
npm start                # http://localhost:4200
```

> For real projects you simply `npm install schedula-core schedula-core-<framework>`
> from npm — the `file:` links here exist only so the demos run against the
> in-repo build.
