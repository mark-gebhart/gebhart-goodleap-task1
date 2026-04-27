# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Cart\cart.spec.js >> Cart Tests >> Continue button is disabled on empty cart
- Location: tests\Cart\cart.spec.js:22:3

# Error details

```
Error: expect(locator).toBeDisabled() failed

Locator:  locator('#checkout')
Expected: disabled
Received: enabled
Timeout:  5000ms

Call log:
  - Expect "toBeDisabled" with timeout 5000ms
  - waiting for locator('#checkout')
    8 × locator resolved to <button id="checkout" name="checkout" data-test="checkout" class="btn btn_action btn_medium checkout_button ">Checkout</button>
      - unexpected value "enabled"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e11]: Swag Labs
      - generic [ref=e15]: Your Cart
    - generic [ref=e17]:
      - generic [ref=e18]:
        - generic [ref=e19]: QTY
        - generic [ref=e20]: Description
      - generic [ref=e21]:
        - button "Go back Continue Shopping" [ref=e22] [cursor=pointer]:
          - img "Go back" [ref=e23]
          - text: Continue Shopping
        - button "Checkout" [ref=e24] [cursor=pointer]
  - contentinfo [ref=e25]:
    - list [ref=e26]:
      - listitem [ref=e27]:
        - link "Twitter" [ref=e28]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e29]:
        - link "Facebook" [ref=e30]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e31]:
        - link "LinkedIn" [ref=e32]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e33]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | const { expect } = require('@playwright/test');
  2  | const { test } = require('../../fixtures/auth');
  3  | const { ROUTES } = require('../../config/routes');
  4  | const InventoryPage = require('../../pages/InventoryPage');
  5  | const CartPage = require('../../pages/CartPage');
  6  | 
  7  | test.describe('Cart Tests', { tag: '@regression' }, () => {
  8  |   let inventoryPage, cartPage;
  9  | 
  10 |   test.beforeEach(async ({ authenticatedPage }) => {
  11 |     inventoryPage = new InventoryPage(authenticatedPage);
  12 |     cartPage = new CartPage(authenticatedPage);
  13 |   });
  14 | 
  15 |   test('View cart', async ({ authenticatedPage: page }) => {
  16 |     await inventoryPage.addFirstProductToCart();
  17 |     await cartPage.goto();
  18 |     await expect(page).toHaveURL(ROUTES.CART);
  19 |     await expect(cartPage.getCartItemsLocator()).toBeVisible();
  20 |   });
  21 | 
  22 |   test('Continue button is disabled on empty cart', async ({ authenticatedPage: page }) => {
  23 |     await cartPage.goto();
  24 | 
  25 |     const cartItemCount = await cartPage.getCartItemsLocator().count();
  26 |     if (cartItemCount > 0) {
  27 |       await cartPage.removeAllItems();
  28 |     }
  29 | 
  30 |     await expect(cartPage.getCartItemsLocator()).toHaveCount(0);
> 31 |     await expect(cartPage.getCheckoutButtonLocator()).toBeDisabled();
     |                                                       ^ Error: expect(locator).toBeDisabled() failed
  32 |   });
  33 | 
  34 |   test('Remove product from cart', async ({ authenticatedPage: page }) => {
  35 |     await inventoryPage.addFirstProductToCart();
  36 |     await cartPage.goto();
  37 |     await cartPage.removeFirstItem();
  38 |     await expect(cartPage.getCartItemsLocator()).not.toBeVisible();
  39 |   });
  40 | 
  41 |   test('Add all items to cart and then remove each item', async ({ authenticatedPage: page }) => {
  42 |     const totalProducts = await inventoryPage.getProductCount();
  43 | 
  44 |     await inventoryPage.verifyAllProductsHaveRequiredDetails();
  45 | 
  46 |     await inventoryPage.addAllProductsToCart();
  47 | 
  48 |     const cartBadge = await inventoryPage.getCartBadgeText();
  49 |     await expect(cartBadge).toBe(String(totalProducts));
  50 | 
  51 |     const itemPrices = await inventoryPage.getAllProductPrices();
  52 |     const expectedTotal = itemPrices.reduce((sum, price) => sum + price, 0);
  53 | 
  54 |     await cartPage.goto();
  55 |     await expect(page).toHaveURL(ROUTES.CART);
  56 |     await expect(cartPage.getCartItemsLocator()).toHaveCount(totalProducts);
  57 |     await expect(await cartPage.getCartTotal()).toBe(expectedTotal);
  58 | 
  59 |     await cartPage.removeAllItems();
  60 |     await expect(cartPage.getCartItemsLocator()).toHaveCount(0);
  61 |     await expect(await cartPage.getCartTotal()).toBe(0);
  62 |   });
  63 | 
  64 | });
```