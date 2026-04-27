const { expect } = require('@playwright/test');
const { test } = require('../../fixtures/auth');
const { ROUTES } = require('../../config/routes');
const InventoryPage = require('../../pages/InventoryPage');
const CartPage = require('../../pages/CartPage');

test.describe('Cart Tests', { tag: '@regression' }, () => {
  let inventoryPage, cartPage;

  test.beforeEach(async ({ authenticatedPage }) => {
    inventoryPage = new InventoryPage(authenticatedPage);
    cartPage = new CartPage(authenticatedPage);
  });

  test('View cart', async ({ authenticatedPage: page }) => {
    await inventoryPage.addFirstProductToCart();
    await cartPage.goto();
    await expect(page).toHaveURL(ROUTES.CART);
    await expect(cartPage.getCartItemsLocator()).toBeVisible();
  });

  test('Continue button is disabled on empty cart', async ({ authenticatedPage: page }) => {
    await cartPage.goto();

    const cartItemCount = await cartPage.getCartItemsLocator().count();
    if (cartItemCount > 0) {
      await cartPage.removeAllItems();
    }

    await expect(cartPage.getCartItemsLocator()).toHaveCount(0);
    await expect(cartPage.getCheckoutButtonLocator()).toBeDisabled();
  });

  test('Remove product from cart', async ({ authenticatedPage: page }) => {
    await inventoryPage.addFirstProductToCart();
    await cartPage.goto();
    await cartPage.removeFirstItem();
    await expect(cartPage.getCartItemsLocator()).not.toBeVisible();
  });

  test('Add all items to cart and then remove each item', async ({ authenticatedPage: page }) => {
    const totalProducts = await inventoryPage.getProductCount();

    await inventoryPage.verifyAllProductsHaveRequiredDetails();

    await inventoryPage.addAllProductsToCart();

    const cartBadge = await inventoryPage.getCartBadgeText();
    await expect(cartBadge).toBe(String(totalProducts));

    const itemPrices = await inventoryPage.getAllProductPrices();
    const expectedTotal = itemPrices.reduce((sum, price) => sum + price, 0);

    await cartPage.goto();
    await expect(page).toHaveURL(ROUTES.CART);
    await expect(cartPage.getCartItemsLocator()).toHaveCount(totalProducts);
    await expect(await cartPage.getCartTotal()).toBe(expectedTotal);

    await cartPage.removeAllItems();
    await expect(cartPage.getCartItemsLocator()).toHaveCount(0);
    await expect(await cartPage.getCartTotal()).toBe(0);
  });

});