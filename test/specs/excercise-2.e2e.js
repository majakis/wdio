import { browser, expect, $ } from '@wdio/globals';

// URL: https://www.saucedemo.com/
describe('Test Sauce Demo web page', async () => {
  /**
   * TEST 1: Pokušaj se ulogirati s neispravnim pristupnim podacima - verificiraj da se ispravna error poruka ispisuje
   */
  it('trebala bi se prikazati error poruka', async () => {
    await browser.url('https://www.saucedemo.com/');

    const usernameField = await $('#user-name');
    const passwordField = await $('#password');
    const loginButton = await $('#login-button');

    await usernameField.setValue('bsdhjafgasdjhfgs');
    await passwordField.setValue('hsjdgfdashjdfgshjd');
    await loginButton.click();

    const errorLabel = await $(
      'h3=Epic sadface: Username and password do not match any user in this service'
    );

    await expect(errorLabel).toBeDisplayed();
  });

  /**
   * TEST 2: Pokušaj se ulogirati s ispravnim pristupnim podacima - verificiraj da je login uspješno prošao
   */
  it('trebao bi se uspješno logirati', async () => {
    await browser.url('https://www.saucedemo.com/');

    const usernameField = await $('#user-name');
    const passwordField = await $('#password');
    const loginButton = await $('#login-button');

    await usernameField.setValue('standard_user');
    await passwordField.setValue('secret_sauce');
    await loginButton.click();

    const productsTitle = await $('span=Products');

    await expect(productsTitle).toBeDisplayed();
  });

  /**
   * TEST 3: Pokušaj se odlogirati - verificiraj da je korisnik odlogiran, odnosno da je ponovno na početnom screenu
   */
  it('trebao bi se odlogirati', async () => {
    const dropdown = await $('#react-burger-menu-btn');
    dropdown.click();

    const logoutButton = await $('a=Logout');
    await logoutButton.click();

    const usernameField = await $('#user-name');
    expect(usernameField).toBeDisplayed();
  });
});
