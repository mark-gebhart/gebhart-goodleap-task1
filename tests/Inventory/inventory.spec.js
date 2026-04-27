const { expect } = require('@playwright/test');
const { test } = require('../../fixtures/auth');
const InventoryPage = require('../../pages/InventoryPage');

test.describe('Inventory Tests', { tag: '@regression' }, () => {
  let inventoryPage;

  test.beforeEach(async ({ authenticatedPage }) => {
    inventoryPage = new InventoryPage(authenticatedPage);
  });

  test('Browse products', { tag: '@smoke' }, async ({ authenticatedPage: page }) => {
    await expect(inventoryPage.getInventoryListLocator()).toBeVisible();
    expect(await inventoryPage.getProductCount()).toBeGreaterThan(2);
  });

  test('Add button changes to Remove after adding an item', async () => {
    await inventoryPage.addFirstProductToCart();
    await expect(await inventoryPage.getItemButtonTextByIndex(0)).toBe('Remove');
  });

  test('Sort preserves correct remove/add button state after adding items', async () => {
    const firstItemName = (await inventoryPage.getItemNameLocatorByIndex(0).textContent()).trim();
    const thirdItemName = (await inventoryPage.getItemNameLocatorByIndex(2).textContent()).trim();

    await inventoryPage.addProductToCartByIndex(0);
    await inventoryPage.addProductToCartByIndex(2);

    await expect(await inventoryPage.getItemButtonTextByName(firstItemName)).toBe('Remove');
    await expect(await inventoryPage.getItemButtonTextByName(thirdItemName)).toBe('Remove');

    await inventoryPage.sortByLabel('Name (Z to A)');

    await expect(await inventoryPage.getItemButtonTextByName(firstItemName)).toBe('Remove');
    await expect(await inventoryPage.getItemButtonTextByName(thirdItemName)).toBe('Remove');

    const allProductCount = await inventoryPage.getProductCount();
    for (let index = 0; index < allProductCount; index += 1) {
      const itemName = (await inventoryPage.getItemNameLocatorByIndex(index).textContent()).trim();
      const expectedButton = [firstItemName, thirdItemName].includes(itemName) ? 'Remove' : 'Add to cart';
      await expect(await inventoryPage.getItemButtonTextByIndex(index)).toBe(expectedButton);
    }
  });
});