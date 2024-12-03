import { browser, expect, $ } from '@wdio/globals';

describe('Ultimate QA test web', async () => {
  /**
   * TEST 1: Otvaranje stranice i provjera naslova
   * Koraci:
   * 1. Otvori URL 'https://ultimateqa.com/fake-landing-page'.
   * 2. Kreiraj selektor za naslov koristeći h1 element.
   * 3. Provjeri sadrži li odabrani element tekst "Learn to Code Websites, Apps & Games" - https://webdriver.io/docs/api/expect-webdriverio/#tohavetext
   */
  it('trebao bi prikazati točan naslov', async () => {
    

  });

  /**
   * TEST 2: Klik na gumb pomoću ID selektora
   * Koraci:
   * 1. Otvori URL 'https://ultimateqa.com/simple-html-elements-for-automation/'.
   * 2. Kreiraj selektor za gumb pomoću ID selektora - https://webdriver.io/docs/selectors/#id-attribute
   * 3. Klikni na gumb - https://webdriver.io/docs/api/element/click
   * 4. Provjeri je li prikazan tekst 'Button success' - https://webdriver.io/docs/api/expect-webdriverio/#tohavetext
   */
  it('trebao bi kliknuti na gumb koristeći ID selektor', async () => {


  });

  /**
   * TEST 3: Klik na gumb pomoću class name selektora
   * Koraci:
   * 1. Otvori URL 'https://ultimateqa.com/simple-html-elements-for-automation/'.
   * 2. Kreiraj selektor za gumb pomoću klase - https://webdriver.io/docs/selectors/#class-name
   * 3. Klikni na gumb - https://webdriver.io/docs/api/element/click
   * 4. Provjeri je li prikazan tekst 'Button success' - - https://webdriver.io/docs/api/expect-webdriverio/#tohavetext
   */
  it('trebao bi kliknuti na gumb koristeći klasu kao selektor', async () => {


  });

  /**
   * TEST 4: Klik na gumb pomoću elementa s određenim tekstom
   * Koraci:
   * 1. Otvori URL 'https://ultimateqa.com/simple-html-elements-for-automation/'.
   * 2. Odaberi gumb pomoću teksta linka - https://webdriver.io/docs/selectors/#element-with-certain-text
   * 3. Klikni na gumb - https://webdriver.io/docs/api/element/click
   * 4. Provjeri je li prikazan tekst 'Link success'.
   */
  it('trebao bi kliknuti na gumb koristeći element s određenim tekstom kao selektor', async () => {


  });

  /**
   * TEST 5: Klik na gumb pomoću name atribute selektora
   * Koraci:
   * 1. Otvori URL 'https://ultimateqa.com/simple-html-elements-for-automation/'.
   * 2. Kreiraj selektor za gumb pomoću name atributa - https://webdriver.io/docs/selectors/#name-attribute
   * 3. Klikni na gumb - https://webdriver.io/docs/api/element/click
   * 4. Provjeri je li prikazan tekst 'Button success' - https://webdriver.io/docs/api/expect-webdriverio/#tohavetext
   */
  it('trebao bi kliknuti na gumb koristeći name atribut kao selektor', async () => {


  });

  /**
   * TEST 6: Popunjavanje i slanje forme
   * Koraci:
   * 1. Otvori URL 'https://ultimateqa.com/filling-out-forms/'.
   * 2. Kreiraj selektor za name input field pomoću ID-a - https://webdriver.io/docs/selectors/#id-attribute
   * 3. Unesi tekst u name input field - https://webdriver.io/docs/api/element/setValue/
   * 4. Kreiraj selektor za message input field pomoću ID-a - https://webdriver.io/docs/selectors/#id-attribute
   * 5. Unesi tekst u name input field - https://webdriver.io/docs/api/element/setValue/
   * 6. Kreiraj selektor za submit gumb pomoću teksta - https://webdriver.io/docs/selectors/#element-with-certain-text
   * 7. Klikni na gumb za submitanje forme - https://webdriver.io/docs/api/element/click
   * 8. Provjeri je li prikazana poruka "Thanks for contacting us" - https://webdriver.io/docs/api/expect-webdriverio/#tohavetext
   */
  it('trebao bi popuniti formu, poslati je i prikazati poruku o uspjehu', async () => {


  });
});
