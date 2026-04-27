class HeaderPage {
  constructor(page) {
    this.page = page;
    this.burgerMenuButton = '#react-burger-menu-btn';
    this.logoutLink = '#logout_sidebar_link';
  }

  async logout() {
    await this.page.click(this.burgerMenuButton);
    await this.page.click(this.logoutLink);
  }
}

module.exports = HeaderPage;