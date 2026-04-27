const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const HeaderPage = require('../../pages/HeaderPage');
const { ROUTES } = require('../../config/routes');
const testData = require('../../test-data/test-data.json');

test.describe('Login Tests', { tag: '@regression' }, () => {
  let loginPage, headerPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    headerPage = new HeaderPage(page);
  });

  test('Login with valid credentials', { tag: '@smoke' }, async ({ page }) => {
    await loginPage.goto();
    await loginPage.login(testData.users.standard.username, testData.users.standard.password);
    await expect(page).toHaveURL(ROUTES.INVENTORY);
  });

  // Parameterized error tests
  testData.loginErrorScenarios.forEach((scenario) => {
    test(`Login with ${scenario.name}`, async ({ page }) => {
      await loginPage.goto();
      await loginPage.login(scenario.username, scenario.password);
      await expect(loginPage.getErrorMessageLocator()).toContainText(scenario.expectedError);
    });
  });

  test('Login with SQL injection payloads', async ({ page }) => {
    for (const payload of testData.users.sqlInjection) {
      await loginPage.goto();
      await loginPage.login(payload.username, payload.password);
      await expect(loginPage.getErrorMessageLocator()).toContainText(testData.errorMessages.invalidCredentials);
      await expect(page).toHaveURL(ROUTES.LOGIN);
    }
  });

  test('Logout', async ({ page }) => {
    await loginPage.goto();
    await loginPage.login(testData.users.standard.username, testData.users.standard.password);
    await headerPage.logout();
    await expect(page).toHaveURL(ROUTES.LOGIN);
  });
});