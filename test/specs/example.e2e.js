import { browser, expect, $ } from '@wdio/globals';

describe('Ultimate QA test web', async () => {
  it('should display proper heading message', async () => {
    await browser.url('https://ultimateqa.com/fake-landing-page');

    const heading = await $('h1');
    await expect(heading).toHaveText('Learn to Code Websites, Apps & Games');
  });

  it('should click on the button using ID selector', async () => {
    await browser.url(
      'https://ultimateqa.com/simple-html-elements-for-automation/'
    );

    const button = await $('#idExample');
    await button.click();

    const successMessage = await $('h1');
    await expect(successMessage).toHaveText('Button success');
  });

  it('should click on the button using class selector', async () => {
    await browser.url(
      'https://ultimateqa.com/simple-html-elements-for-automation/'
    );

    const button = await $('.buttonClass');
    await button.click();

    const successMessage = await $('h1');
    await expect(successMessage).toHaveText('Button success');
  });

  it('should click on the button using text as a selector', async () => {
    await browser.url(
      'https://ultimateqa.com/simple-html-elements-for-automation/'
    );

    const button = await $('a=Click me using this link text!');
    await button.click();

    const successMessage = await $('h1');
    await expect(successMessage).toHaveText('Link success');
  });

  it('should click on the button using attribute as selector', async () => {
    await browser.url(
      'https://ultimateqa.com/simple-html-elements-for-automation/'
    );

    const button = await $('[name="button1"]');
    await button.click();

    const successMessage = await $('h1');
    await expect(successMessage).toHaveText('Button success');
  });

  it('should fill in the form, submit it and display success message', async () => {
    //Opens form page
    await browser.url('https://ultimateqa.com/filling-out-forms/');

    // Defines name input selector
    const nameInput = await $('#et_pb_contact_name_0');
    // Populates
    await nameInput.addValue('Maja');

    const messageInput = await $('#et_pb_contact_message_0');
    await messageInput.addValue('Klajic');

    const submitButton = await $('button=Submit');
    await submitButton.click();

    const successMessage = await $('#et_pb_contact_form_0');

    await expect(successMessage).toHaveText('Thanks for contacting us');
    await browser.pause(3000);
  });
});
