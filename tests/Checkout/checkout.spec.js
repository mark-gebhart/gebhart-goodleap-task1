const { expect } = require('@playwright/test');
const { test } = require('../../fixtures/auth');
const InventoryPage = require('../../pages/InventoryPage');
const CartPage = require('../../pages/CartPage');
const CheckoutPage = require('../../pages/CheckoutPage');
const testData = require('../../test-data/test-data.json');

test.describe('Checkout Tests', { tag: '@regression' }, () => {
  let inventoryPage, cartPage, checkoutPage;

  test.beforeEach(async ({ authenticatedPage }) => {
    inventoryPage = new InventoryPage(authenticatedPage);
    cartPage = new CartPage(authenticatedPage);
    checkoutPage = new CheckoutPage(authenticatedPage);
  });

  test('Checkout process', { tag: '@smoke' }, async ({ authenticatedPage: page }) => {
    await inventoryPage.addFirstProductToCart();
    await cartPage.goto();
    await cartPage.checkout();
    await page.waitForLoadState('networkidle');
    await checkoutPage.fillInformation(testData.checkout.firstName, testData.checkout.lastName, testData.checkout.postalCode);
    await expect(checkoutPage.getSummaryInfoLocator()).toBeVisible();
    await checkoutPage.finishOrder();
    await expect(checkoutPage.getCompleteHeaderLocator()).toHaveText(testData.checkout.completeMessage);
  });

  test('Checkout validation prevents submit without first name', async ({ authenticatedPage: page }) => {
    await inventoryPage.addFirstProductToCart();
    await cartPage.goto();
    await cartPage.checkout();
    await page.waitForLoadState('networkidle');
    await checkoutPage.fillLastName(testData.checkout.lastName);
    await checkoutPage.fillPostalCode(testData.checkout.postalCode);
    await checkoutPage.continueCheckout();
    await expect(checkoutPage.getErrorMessage()).toHaveText(testData.checkout.errors.missingFirstName);
  });

  test('Checkout validation prevents submit without last name', async ({ authenticatedPage: page }) => {
    await inventoryPage.addFirstProductToCart();
    await cartPage.goto();
    await cartPage.checkout();
    await page.waitForLoadState('networkidle');
    await checkoutPage.fillFirstName(testData.checkout.firstName);
    await checkoutPage.fillPostalCode(testData.checkout.postalCode);
    await checkoutPage.continueCheckout();
    await expect(checkoutPage.getErrorMessage()).toHaveText(testData.checkout.errors.missingLastName);
  });

  test('Checkout validation prevents submit without postal code', async ({ authenticatedPage: page }) => {
    await inventoryPage.addFirstProductToCart();
    await cartPage.goto();
    await cartPage.checkout();
    await page.waitForLoadState('networkidle');
    await checkoutPage.fillFirstName(testData.checkout.firstName);
    await checkoutPage.fillLastName(testData.checkout.lastName);
    await checkoutPage.continueCheckout();
    await expect(checkoutPage.getErrorMessage()).toHaveText(testData.checkout.errors.missingPostalCode);
  });

  test('Checkout with missing required information', async ({ authenticatedPage: page }) => {
    await inventoryPage.addFirstProductToCart();
    await cartPage.goto();
    await cartPage.checkout();
    await page.waitForLoadState('networkidle');
    await checkoutPage.continueWithoutInfo();
    await expect(checkoutPage.getErrorMessage()).toBeVisible();
  });
});