const { ROUTES } = require('../config/routes');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = '#user-name';
    this.passwordInput = '#password';
    this.loginButton = '#login-button';
    this.errorMessage = '.error-message-container';
  }

  async goto() {
    await this.page.goto(ROUTES.LOGIN);
    await this.page.waitForLoadState('networkidle');
  }

  async fillCredentials(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
  }

  async submitLogin() {
    await this.page.click(this.loginButton);
    await this.page.waitForLoadState('networkidle');
  }

  async login(username, password) {
    await this.fillCredentials(username, password);
    await this.submitLogin();
  }

  getUsernameInputLocator() {
    return this.page.locator(this.usernameInput);
  }

  async getErrorMessage() {
    return this.page.locator(this.errorMessage);
  }

  getErrorMessageLocator() {
    return this.page.locator(this.errorMessage);
  }
}

module.exports = LoginPage;