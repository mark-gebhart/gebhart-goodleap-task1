const { expect } = require('@playwright/test');
const { test } = require('../../fixtures/auth');
const InventoryPage = require('../../pages/InventoryPage');
const CartPage = require('../../pages/CartPage');
const CheckoutPage = require('../../pages/CheckoutPage');

function getPerformanceTime(page) {
  return page.evaluate(() => performance.now());
}

async function getNavigationMetrics(page) {
  return page.evaluate(() => {
    const [navigation] = performance.getEntriesByType('navigation');
    if (navigation) {
      return {
        loadEventEnd: navigation.loadEventEnd,
        domContentLoadedEventEnd: navigation.domContentLoadedEventEnd,
        responseEnd: navigation.responseEnd,
      };
    }

    const timing = performance.timing;
    return {
      loadEventEnd: timing.loadEventEnd - timing.navigationStart,
      domContentLoadedEventEnd: timing.domContentLoadedEventEnd - timing.navigationStart,
      responseEnd: timing.responseEnd - timing.navigationStart,
    };
  });
}

async function getSortOptionLabels(page) {
  return page.locator('select.product_sort_container option').allTextContents();
}

test.describe('Performance Tests', { tag: '@performance' }, () => {
  test('Inventory page load performance', async ({ authenticatedPage: page }) => {
    await page.waitForLoadState('networkidle');

    const metrics = await getNavigationMetrics(page);

    expect(metrics.loadEventEnd).toBeLessThan(3500);
    expect(metrics.domContentLoadedEventEnd).toBeLessThan(3000);
    expect(metrics.responseEnd).toBeLessThan(2500);
  });

  test('Cycle through each inventory sort option', async ({ authenticatedPage: page }) => {
    const inventoryPage = new InventoryPage(page);

    await page.waitForLoadState('networkidle');
    const sortLabels = await getSortOptionLabels(page);
    expect(sortLabels.length).toBeGreaterThan(0);

    for (const label of sortLabels) {
      const sortStart = await getPerformanceTime(page);
      await inventoryPage.sortByLabel(label);
      await expect(inventoryPage.getInventoryListLocator()).toBeVisible();
      const sortEnd = await getPerformanceTime(page);
      const sortDuration = sortEnd - sortStart;
      expect(sortDuration).toBeLessThan(2000);
      await expect(inventoryPage.getSortSelectLocator()).toHaveValue(
        await page.locator(`select.product_sort_container option:has-text("${label}")`).first().getAttribute('value')
      );
    }
  });

  test('Login page performance baseline', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const metrics = await page.evaluate(() => {
      const [navigation] = performance.getEntriesByType('navigation');
      if (navigation) {
        return {
          responseEnd: navigation.responseEnd,
          domContentLoadedEventEnd: navigation.domContentLoadedEventEnd,
        };
      }

      const timing = performance.timing;
      return {
        responseEnd: timing.responseEnd - timing.navigationStart,
        domContentLoadedEventEnd: timing.domContentLoadedEventEnd - timing.navigationStart,
      };
    });

    expect(metrics.responseEnd).toBeLessThan(2000);
    expect(metrics.domContentLoadedEventEnd).toBeLessThan(1800);
  });

  test('Add items remove one and checkout performance', async ({ authenticatedPage: page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await page.waitForLoadState('networkidle');

    const addStart = await getPerformanceTime(page);
    await inventoryPage.addProductToCartByIndex(0);
    await inventoryPage.addProductToCartByIndex(1);
    await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
    const addEnd = await getPerformanceTime(page);
    const addDuration = addEnd - addStart;
    expect(addDuration).toBeLessThan(2500);

    await cartPage.goto();
    await page.waitForLoadState('networkidle');

    const removeStart = await getPerformanceTime(page);
    await cartPage.removeFirstItem();
    await expect(cartPage.getCartItemsLocator()).toHaveCount(1);
    const removeEnd = await getPerformanceTime(page);
    const removeDuration = removeEnd - removeStart;
    expect(removeDuration).toBeLessThan(1500);

    const checkoutStart = await getPerformanceTime(page);
    await cartPage.checkout();
    await page.waitForLoadState('networkidle');
    await checkoutPage.fillInformation('Performance', 'User', '12345');
    await checkoutPage.finishOrder();
    await expect(checkoutPage.getCompleteHeaderLocator()).toBeVisible();
    const checkoutEnd = await getPerformanceTime(page);
    const checkoutDuration = checkoutEnd - checkoutStart;
    expect(checkoutDuration).toBeLessThan(5000);
  });
});
