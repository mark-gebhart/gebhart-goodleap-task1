const { expect } = require('@playwright/test');
const { test } = require('../../fixtures/auth');
const InventoryPage = require('../../pages/InventoryPage');
const CartPage = require('../../pages/CartPage');
const testData = require('../../test-data/test-data.json');

test.describe('Mobile experience tests', { tag: '@mobile' }, () => {
  test('Mobile login and inventory access', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('#login-button');
    await page.fill('#user-name', testData.users.standard.username);
    await page.fill('#password', testData.users.standard.password);
    await page.click('#login-button');
    await page.waitForSelector('.inventory_list');

    await expect(page.locator('.inventory_list')).toBeVisible();
    await expect(page.locator('.shopping_cart_link')).toBeVisible();
  });

  test('Mobile add to cart and remove item', async ({ authenticatedPage: page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await inventoryPage.addProductToCartByIndex(0);
    await inventoryPage.addProductToCartByIndex(1);
    await expect(page.locator('.shopping_cart_badge')).toHaveText('2');

    await cartPage.goto();
    await expect(cartPage.getCartItemsLocator()).toHaveCount(2);

    await cartPage.removeFirstItem();
    await expect(cartPage.getCartItemsLocator()).toHaveCount(1);
  });
});
