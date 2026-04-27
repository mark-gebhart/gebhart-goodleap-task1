const { ROUTES } = require('../config/routes');

class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItem = '.cart_item';
    this.cartItemPrice = '.inventory_item_price';
    this.checkoutButton = '#checkout';
    this.removeButton = () => this.page.getByRole('button', { name: 'Remove' });
  }

  async goto() {
    await Promise.all([
      this.page.waitForLoadState('networkidle'),
      this.page.click('.shopping_cart_link'),
    ]);
  }

  async isLoaded() {
    await this.page.waitForURL(ROUTES.CART);
  }

  async hasItems() {
    return this.page.locator(this.cartItem).isVisible();
  }

  getCheckoutButtonLocator() {
    return this.page.locator(this.checkoutButton);
  }

  async checkout() {
    await this.page.click(this.checkoutButton);
  }

   async removeFirstItem() {
    await this.removeButton().first().click();
  }

  async removeAllItems() {
    while (await this.page.locator(this.cartItem).count() > 0) {
      await this.removeButton().first().click();
    }
  }

  async getCartTotal() {
    const priceLocators = this.page.locator(this.cartItem).locator(this.cartItemPrice);
    const count = await priceLocators.count();
    let total = 0;
    for (let index = 0; index < count; index += 1) {
      const text = await priceLocators.nth(index).textContent();
      total += parseFloat(text.replace('$', ''));
    }
    return total;
  }

  getCartItemsLocator() {
    return this.page.locator(this.cartItem);
  }
}

module.exports = CartPage;