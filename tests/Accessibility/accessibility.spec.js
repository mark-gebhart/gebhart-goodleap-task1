const { expect } = require('@playwright/test');
const { test } = require('../../fixtures/auth');
const { runAxe } = require('../../utils/testHelpers');
const LoginPage = require('../../pages/LoginPage');
const InventoryPage = require('../../pages/InventoryPage');
const CartPage = require('../../pages/CartPage');
const CheckoutPage = require('../../pages/CheckoutPage');
const testData = require('../../test-data/test-data.json');

test.describe('Accessibility Checks', { tag: '@accessibility' }, () => {
  let loginPage, inventoryPage, cartPage, checkoutPage;

  test.beforeEach(async ({ authenticatedPage }) => {
    loginPage = new LoginPage(authenticatedPage);
    inventoryPage = new InventoryPage(authenticatedPage);
    cartPage = new CartPage(authenticatedPage);
    checkoutPage = new CheckoutPage(authenticatedPage);
  });

  test('Login page accessibility', async ({ page }) => {
    await loginPage.goto();
    const results = await runAxe(page);
    expect(results.violations).toEqual([]);
  });

  test('Inventory page accessibility', async ({ authenticatedPage: page }) => {
    const results = await runAxe(page);
    expect(results.violations).toEqual([]);
  });

  test('Cart page accessibility', async ({ authenticatedPage: page }) => {
    await inventoryPage.addFirstProductToCart();
    await cartPage.goto();
    await cartPage.isLoaded();
    const results = await runAxe(page);
    expect(results.violations).toEqual([]);
  });

  test('Checkout page accessibility', async ({ authenticatedPage: page }) => {
    await inventoryPage.addFirstProductToCart();
    await cartPage.goto();
    await cartPage.checkout();
    await page.waitForLoadState('networkidle');
    const results = await runAxe(page);
    expect(results.violations).toEqual([]);
  });
});