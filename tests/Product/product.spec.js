const { expect } = require('@playwright/test');
const { test } = require('../../fixtures/auth');
const InventoryPage = require('../../pages/InventoryPage');

test.describe('Product Tests', { tag: '@regression' }, () => {
  let inventoryPage;

  test.beforeEach(async ({ authenticatedPage }) => {
    inventoryPage = new InventoryPage(authenticatedPage);
  });

  test('Add product to cart', { tag: '@smoke' }, async ({ authenticatedPage: page }) => {
    await inventoryPage.addFirstProductToCart();
    expect(await inventoryPage.getCartBadgeText()).toBe('1');
  });
});