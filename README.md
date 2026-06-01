# Basic Site

An Angular 19 application with Angular Material UI, built and tested through a Harness Open Source CI pipeline.

## Tech stack

- **Angular 19** with standalone components
- **Angular Material** (azure-blue theme) for UI components
- **Karma + ChromeHeadless** for unit tests
- **Harness Open Source** for CI (self-hosted via Docker)

---

## Getting started

### Prerequisites

- Node.js 20+
- Angular CLI (`npm install -g @angular/cli`)

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
ng serve
```

Open `http://localhost:4200/`. The app reloads automatically on file changes.

---

## Building

```bash
npm run build
```

Output is placed in the `dist/` directory, optimised for production.

---

## Running unit tests

```bash
npm test
```

Tests run via Karma with ChromeHeadless. For a single run (no file watcher):

```bash
npm test -- --watch=false --browsers=ChromeHeadless
```

---

## Branch strategy

| Branch | Purpose |
|---|---|
| `dev` | Active development — all changes go here first |
| `master` | Stable, production-ready code — only updated via Pull Request from `dev` |

**Workflow:**
1. Work on `dev`, push changes
2. CI pipeline runs automatically (install → build → test)
3. If all steps pass, open a Pull Request to merge into `master`
4. `master` is protected — direct pushes are blocked

---

## CI pipeline (`harness-pipeline.yaml`)

The pipeline is defined in [`harness-pipeline.yaml`](harness-pipeline.yaml) and runs on Harness Open Source.

### Trigger

Automatically fires on every push to `dev` or `master`.

### Stages and steps

| Step | Image | What it does |
|---|---|---|
| `npm_install` | `node` | Installs dependencies via `npm install` |
| `npm_build` | `node` | Compiles the app via `npm run build` |
| `npm_test` | `node:20-bookworm` | Installs Chromium, runs unit tests headlessly |

Each step must pass before the next one runs. A failed build prevents tests from executing.

### Running Harness Open Source locally

```bash
docker run -d \
  -p 3000:3000 -p 3022:3022 \
  -e DOCKER_HOST=tcp://host.docker.internal:2375 \
  --add-host=host.docker.internal:host-gateway \
  -v /tmp/harness:/data \
  --name opensource \
  --restart always \
  harness/harness:latest
```

Open `http://localhost:3000` to access the Harness UI.

> **Windows requirement:** Docker Desktop must have "Expose daemon on tcp://localhost:2375" enabled under Settings → General.

---

## Code scaffolding

```bash
ng generate component component-name
```

For a full list of schematics:

```bash
ng generate --help
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
