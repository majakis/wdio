import { browser, expect, $ } from '@wdio/globals';

describe('Webdriver.io homepage', () => {
  it('should display the heading', async () => {
    // Opens the Webdriver.io homepage in the browser
    await browser.url('https://webdriver.io/docs/gettingstarted');

    // Selects the h1 heading element on the page
    const heading = await $('h1');

    // Asserts that the h1 element contains the expected text
    await expect(heading).toHaveText('Getting Started');
  });
});
