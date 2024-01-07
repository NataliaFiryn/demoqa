import { expect, Locator, Page } from '@playwright/test';

export class RadioButtonPage {
  #page: Page;
  #radioButton: {
    yes: Locator;
    impressive: Locator;
    no: Locator;
  };
  #output: Locator;

  constructor(page: Page) {
    this.#page = page;
    this.#radioButton = {
      yes: this.#page.locator('#yesRadio'),
      impressive: this.#page.locator('#impressiveRadio'),
      no: this.#page.locator('#noRadio'),
    };
    this.#output = this.#page.locator('.text-success');
  }

  async checkRadioButton(radioButton: RadioButton) {
    if (radioButton === 'no') {
      await expect(this.#radioButton[radioButton]).toHaveAttribute('disabled');
      return;
    }
    await this.#radioButton[radioButton].check({ force: true });
    await expect(this.#radioButton[radioButton]).toBeChecked();
    await expect(this.#output).toHaveText(radioButton.charAt(0).toUpperCase() + radioButton.slice(1));
  }
}

type RadioButton = 'yes' | 'impressive' | 'no';
