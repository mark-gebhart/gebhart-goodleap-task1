const { test: base, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const { ROUTES } = require('../config/routes');
const testData = require('../test-data/test-data.json');

exports.test = base.extend({
  authenticatedPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.fillCredentials(testData.users.standard.username, testData.users.standard.password);
    await expect(loginPage.getUsernameInputLocator()).toHaveValue(testData.users.standard.username);
    await loginPage.submitLogin();
    await expect(page).toHaveURL(ROUTES.INVENTORY);
    await use(page);
  },
});