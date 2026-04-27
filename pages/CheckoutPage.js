class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = '#first-name';
    this.lastNameInput = '#last-name';
    this.postalCodeInput = '#postal-code';
    this.continueButton = '#continue';
    this.summaryInfo = '.summary_info';
    this.finishButton = '#finish';
    this.completeHeaderText = 'Thank you for your order!';
  }

  async fillInformation(firstName, lastName, postalCode) {
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.fill(this.lastNameInput, lastName);
    await this.page.fill(this.postalCodeInput, postalCode);
    await this.page.click(this.continueButton);
  }

  async fillFirstName(firstName) {
    await this.page.fill(this.firstNameInput, firstName);
  }

  async fillLastName(lastName) {
    await this.page.fill(this.lastNameInput, lastName);
  }

  async fillPostalCode(postalCode) {
    await this.page.fill(this.postalCodeInput, postalCode);
  }

  async continueCheckout() {
    await this.page.click(this.continueButton);
  }

  async isSummaryVisible() {
    return this.page.locator(this.summaryInfo).isVisible();
  }

  async continueWithoutInfo() {
    await this.page.click(this.continueButton);
  }

  getErrorMessage() {
    return this.page.locator('.error-message-container');
  }

  async finishOrder() {
    await this.page.click(this.finishButton);
  }

  getSummaryInfoLocator() {
    return this.page.locator(this.summaryInfo);
  }

  getCompleteHeaderLocator() {
    return this.page.locator(`text=${this.completeHeaderText}`);
  }
}

module.exports = CheckoutPage;