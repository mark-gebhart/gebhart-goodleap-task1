const { expect } = require('@playwright/test');

class InventoryPage {
  constructor(page) {
    this.page = page;
    this.inventoryList = '.inventory_list';
    this.inventoryItem = '.inventory_item';
    this.productName = '.inventory_item_name';
    this.productDescription = '.inventory_item_desc';
    this.productPrice = '.inventory_item_price';
    this.productImage = '.inventory_item_img img';
    this.cartBadge = '.shopping_cart_badge';
    this.addToCartButton = () => this.page.getByRole('button', { name: 'Add to cart' }).first();
  }

  getInventoryItemLocatorByIndex(index) {
    return this.page.locator(this.inventoryItem).nth(index);
  }

  getItemNameLocatorByIndex(index) {
    return this.getInventoryItemLocatorByIndex(index).locator(this.productName);
  }

  getItemDescriptionLocatorByIndex(index) {
    return this.getInventoryItemLocatorByIndex(index).locator(this.productDescription);
  }

  getItemPriceLocatorByIndex(index) {
    return this.getInventoryItemLocatorByIndex(index).locator(this.productPrice);
  }

  getItemImageLocatorByIndex(index) {
    return this.getInventoryItemLocatorByIndex(index).locator(this.productImage);
  }

  getItemAddToCartButtonByIndex(index) {
    return this.getInventoryItemLocatorByIndex(index).getByRole('button', { name: 'Add to cart' });
  }

  getItemButtonByIndex(index) {
    return this.getInventoryItemLocatorByIndex(index).locator('button');
  }

  async getItemButtonTextByIndex(index) {
    return (await this.getItemButtonByIndex(index).textContent()).trim();
  }

  getItemRowByName(name) {
    return this.page.locator(this.inventoryItem).filter({ hasText: name });
  }

  async getItemButtonTextByName(name) {
    return (await this.getItemRowByName(name).locator('button').textContent()).trim();
  }

  getSortSelectLocator() {
    return this.page.locator('select.product_sort_container');
  }

  async sortByLabel(label) {
    await this.getSortSelectLocator().selectOption({ label });
  }

  async verifyAllProductsHaveRequiredDetails() {
    const totalProducts = await this.getProductCount();
    for (let index = 0; index < totalProducts; index += 1) {
      await expect(this.getItemNameLocatorByIndex(index)).toBeVisible();
      await expect(this.getItemDescriptionLocatorByIndex(index)).toBeVisible();
      await expect(this.getItemPriceLocatorByIndex(index)).toBeVisible();
      await expect(this.getItemImageLocatorByIndex(index)).toBeVisible();
      await expect(this.getItemAddToCartButtonByIndex(index)).toBeVisible();
    }
  }

  async getProductCount() {
    return this.page.locator(this.inventoryItem).count();
  }

  async addFirstProductToCart() {
    await this.addToCartButton().click();
  }

  async addProductToCartByIndex(index) {
    //const button = this.page.getByRole('button', { name: 'Add to cart' }).nth(index);
    const button = this.getItemButtonByIndex(index);
    await button.click();
  }

  async addAllProductsToCart() {
    let remaining = await this.page.getByRole('button', { name: 'Add to cart' }).count();
    while (remaining > 0) {
      await this.page.getByRole('button', { name: 'Add to cart' }).first().click();
      remaining = await this.page.getByRole('button', { name: 'Add to cart' }).count();
    }
  }

  async getProductPriceByIndex(index) {
    const priceText = await this.getItemPriceLocatorByIndex(index).textContent();
    return parseFloat(priceText.replace('$', ''));
  }

  async getAllProductPrices() {
    const count = await this.getProductCount();
    const prices = [];
    for (let index = 0; index < count; index += 1) {
      prices.push(await this.getProductPriceByIndex(index));
    }
    return prices;
  }

  async getCartBadgeText() {
    return this.page.locator(this.cartBadge).textContent();
  }

  getInventoryListLocator() {
    return this.page.locator(this.inventoryList);
  }
}

module.exports = InventoryPage;