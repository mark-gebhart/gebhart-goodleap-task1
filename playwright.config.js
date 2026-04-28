const { defineConfig, devices } = require('@playwright/test');
const environments = require('./config/environments');
const { ENVIRONMENTS, DEFAULT_ENV } = require('./config/constants');

const envName = (process.env.TEST_ENV || DEFAULT_ENV).toLowerCase();
const envConfig = environments[envName];

if (!envConfig) {
  throw new Error(
    `Unknown TEST_ENV '${envName}'. Valid values are: ${Object.values(ENVIRONMENTS).join(', ')}`
  );
}

module.exports = defineConfig({
  testDir: './',
  testMatch: ['**/tests/**/*.spec.js', '**/api/**/*.spec.js'],
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  outputDir: 'test-results/artifacts',
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { outputFolder: 'test-results/html-report' }]],
  expect: {
    toHaveScreenshot: { maxDiffPixelRatio: 0.02 },
  },
  use: {
    baseURL: envConfig.baseURL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    actionTimeout: 10000,
    navigationTimeout: 30000,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Pixel 5',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'iPhone 14',
      use: { ...devices['iPhone 14'] },
    },
  ],
});