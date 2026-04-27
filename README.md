# SauceDemo Test Automation Suite

This project contains automated tests for the SauceDemo website (https://www.saucedemo.com/) using Playwright with a modular Page Object Model framework.

## Project Structure

- `pages/`: Page Object classes for UI interactions
  - `LoginPage.js`: Login functionality
  - `InventoryPage.js`: Product inventory management
  - `CartPage.js`: Shopping cart operations
  - `CheckoutPage.js`: Checkout process
  - `HeaderPage.js`: Common header actions
- `tests/`: Organized test suites by feature
  - `Login/`: Authentication tests
  - `Inventory/`: Product browsing tests
  - `Product/`: Product interaction tests
  - `Cart/`: Cart management tests
  - `Checkout/`: Order completion tests
  - `Performance/`: Page load and timing baseline tests
  - `Visual/`: Screenshot-based page appearance tests
  - `Mobile/`: Mobile device responsive and touch flow tests
- `test-data/`: Externalized test data
  - `test-data.json`: JSON file containing test users, checkout information, and expected messages

## Setup

1. Install dependencies: `npm install`
2. Install browsers: `npx playwright install` (optional, done automatically on first run)

## Running Tests

- Run all tests: `npm test`
- Run smoke tests: `npm run test:smoke` (quick validation of core functionality)
- Run regression tests: `npm run test:regression` (full test suite)
- Run accessibility tests: `npm run test:a11y`
- Run performance tests: `npm run test:performance`
- Run visual regression tests: `npm run test:visual`
- Run mobile experience tests: `npm run test:mobile`
- Run in headed mode: `npm run test:headed`
- View last report: `npx playwright show-report test-results/html-report`

## Test Coverage

The suite validates the following critical user-facing behaviors:

- **Login**: Valid and invalid credential scenarios, logout
- **Inventory**: Display and browsing of product catalog
- **Product**: Adding items to cart
- **Cart**: Viewing cart contents and removing items
- **Checkout**: Complete order flow from cart to confirmation

**Test Categories:**
- **Smoke Tests** (@smoke): Core functionality validation - Login, Browse Products, Add to Cart, Checkout
- **Regression Tests** (@regression): Full test suite for comprehensive validation

Tests run across Chromium, Firefox, and WebKit browsers for cross-browser compatibility.