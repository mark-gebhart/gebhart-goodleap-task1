const { expect } = require('@playwright/test');
const { test } = require('../../fixtures/auth');
const InventoryPage = require('../../pages/InventoryPage');
const CartPage = require('../../pages/CartPage');
const CheckoutPage = require('../../pages/CheckoutPage');
const { ROUTES } = require('../../config/routes');
const testData = require('../../test-data/test-data.json');

test.describe('Visual Regression Tests', { tag: '@visual' }, () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
  });

  test('Login page appearance', async ({ page }) => {
    await page.goto(ROUTES.LOGIN);
    await page.waitForSelector('#login-button');
    await expect(page).toHaveScreenshot('login-page.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Inventory page appearance', async ({ authenticatedPage: page }) => {
    const inventoryPage = new InventoryPage(page);

    await page.waitForSelector('.inventory_list');
    await expect(inventoryPage.getInventoryListLocator()).toBeVisible();
    await expect(page).toHaveScreenshot('inventory-page.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Cart page appearance', async ({ authenticatedPage: page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await inventoryPage.addProductToCartByIndex(0);
    await cartPage.goto();
    await expect(cartPage.getCartItemsLocator()).toBeVisible();
    await expect(page).toHaveScreenshot('cart-page.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Checkout page appearance', async ({ authenticatedPage: page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await inventoryPage.addProductToCartByIndex(0);
    await cartPage.goto();
    await cartPage.checkout();
    await page.waitForLoadState('networkidle');
    await checkoutPage.fillInformation(
      testData.checkout.firstName,
      testData.checkout.lastName,
      testData.checkout.postalCode
    );

    await expect(checkoutPage.getSummaryInfoLocator()).toBeVisible();
    await expect(page).toHaveScreenshot('checkout-page.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });
});
