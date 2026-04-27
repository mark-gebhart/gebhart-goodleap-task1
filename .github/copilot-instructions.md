# SauceDemo Test Automation Workspace Instructions

This repository is a Playwright test suite for SauceDemo (https://www.saucedemo.com/) using CommonJS and the Page Object Model.

- Project layout:
  - `pages/` contains Page Object classes
  - `tests/` contains feature suites organized by domain
  - `test-data/test-data.json` contains fixture data and expected messages
  - `config/` contains environment routes and URL configuration
- Build/test commands from `package.json`:
  - `npm test` → run all Playwright tests
  - `npm run test:smoke` → run smoke tests tagged `@smoke`
  - `npm run test:regression` → run regression tests tagged `@regression`
  - `npm run test:performance` → run performance tests tagged `@performance`
  - `npm run test:a11y` → run accessibility tests
  - `npm run test:headed` → run tests in headed mode
- Environment configuration:
  - `playwright.config.js` reads `TEST_ENV`; valid values are `dev`, `staging`, `prod`
  - when `TEST_ENV` is unset, it defaults to `dev`
  - use `config/routes.js` and `config/environments.js` instead of hard-coded URLs or paths
  - Playwright artifacts and reports are stored under `test-results/`
  - desktop coverage currently includes Chromium, Firefox, and WebKit; mobile coverage uses Pixel 5 and iPhone 14 device profiles
- Code style and conventions:
  - use CommonJS `require()` / `module.exports`
  - preserve async/await style for Playwright actions and assertions
  - use existing page object methods and selectors rather than duplicating locator logic
  - prefer explicit route constants from `config/routes.js`
  - do not add unrelated frameworks or change the repository structure without explicit user request
- Test-authoring guidance:
  - keep tests stable by avoiding brittle CSS selectors and fragile UI text when possible
  - use Page Object methods for navigation and actions
  - preserve smoke/regression categorization, and add `@performance` for page load / timing baseline coverage
  - author performance tests using Playwright navigation timing or `performance` metrics, with broad thresholds rather than exact timings
  - add `@visual` screenshot-based tests for page appearance, using Playwright visual snapshot assertions and stable full-page rendering

Keep instructions concise, act as a workspace-specific guide, and do not override repository conventions unless the user asks for a broader refactor.