const { test: base, expect } = require('@playwright/test');
const { test: authTest } = require('../../fixtures/auth');
const { ROUTES } = require('../../config/routes');
const LoginPage = require('../../pages/LoginPage');
const InventoryPage = require('../../pages/InventoryPage');
const CartPage = require('../../pages/CartPage');
const HeaderPage = require('../../pages/HeaderPage');

base.describe('Route protection tests', { tag: '@regression' }, () => {
  base('Unauthenticated user is redirected from inventory route to login', async ({ page }) => {
    await page.goto(ROUTES.INVENTORY);
    await expect(page).toHaveURL(ROUTES.LOGIN);
  });

  base('Unauthenticated user is redirected from checkout route to login', async ({ page }) => {
    await page.goto(ROUTES.CHECKOUT);
    await expect(page).toHaveURL(ROUTES.LOGIN);
  });
});

authTest.describe('Authenticated navigation tests', { tag: '@regression' }, () => {
  let loginPage, inventoryPage, cartPage, headerPage;

  authTest.beforeEach(async ({ authenticatedPage }) => {
    loginPage = new LoginPage(authenticatedPage);
    inventoryPage = new InventoryPage(authenticatedPage);
    cartPage = new CartPage(authenticatedPage);
    headerPage = new HeaderPage(authenticatedPage);
  });

  authTest('Navigate from inventory to cart and back using browser history', async ({ authenticatedPage: page }) => {
    await inventoryPage.addFirstProductToCart();
    await cartPage.goto();
    await expect(page).toHaveURL(ROUTES.CART);
    await page.goBack();
    await expect(page).toHaveURL(ROUTES.INVENTORY);
  });

  authTest('Direct route access to cart is allowed after login', async ({ authenticatedPage: page }) => {
    await page.goto(ROUTES.CART);
    await expect(page).toHaveURL(ROUTES.CART);
  });

  authTest('Direct route access to checkout page is allowed after login', async ({ authenticatedPage: page }) => {
    await page.goto(ROUTES.CHECKOUT);
    await expect(page).toHaveURL(ROUTES.CHECKOUT);
  });

  authTest('Logout prevents access to protected routes', async ({ authenticatedPage: page }) => {
    await headerPage.logout();
    await expect(page).toHaveURL(ROUTES.LOGIN);
    await page.goto(ROUTES.INVENTORY);
    await expect(page).toHaveURL(ROUTES.LOGIN);
  });

});
