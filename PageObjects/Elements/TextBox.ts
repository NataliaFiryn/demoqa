import { expect, Locator, Page } from '@playwright/test';
import textBoxModel from '../../TestData/TextBoxModel';

export class TextBoxPage {
  #page: Page;

  #userNameField: Locator;
  #userEmailField: Locator;
  #currentAddressField: Locator;
  #permanentAddressField: Locator;
  #submitBtn: Locator;
  #userNameOutput: Locator;
  #userEmailOutput: Locator;
  #currentAddressOutput: Locator;
  #permanentAddressOutput: Locator;

  constructor(page: Page) {
    this.#page = page;
    this.#userNameField = this.#page.locator('#userName');
    this.#userEmailField = this.#page.locator('#userEmail');
    this.#currentAddressField = this.#page.locator('#currentAddress');
    this.#permanentAddressField = this.#page.locator('#permanentAddress');
    this.#submitBtn = this.#page.locator('#submit');
    this.#userNameOutput = this.#page.locator('#output #name');
    this.#userEmailOutput = this.#page.locator('#output #email');
    this.#currentAddressOutput = this.#page.locator('#output #currentAddress');
    this.#permanentAddressOutput = this.#page.locator('#output #permanentAddress');
  }

  async fillAndSubmitTextBox() {
    await this.fillUserNameField();
    await this.fillUserEmailField();
    await this.fillCurrentAddressField();
    await this.fillPermanentAddressField();
    await this.#submitBtn.click();
  }

  async checkOutput() {
    await expect(this.#userNameOutput).toHaveText(`Name:${textBoxModel.userName}`);
    await expect(this.#userEmailOutput).toHaveText(`Email:${textBoxModel.userEmail}`);
    await expect(this.#currentAddressOutput).toHaveText(`Current Address :${textBoxModel.currentAddress}`);
    await expect(this.#permanentAddressOutput).toHaveText(`Permananet Address :${textBoxModel.permanentAddress}`);
  }

  private async fillUserNameField() {
    await this.#userNameField.fill(textBoxModel.userName);
    await expect(this.#userNameField).not.toBeEmpty();
  }

  private async fillUserEmailField() {
    await this.#userEmailField.fill(textBoxModel.userEmail);
    await expect(this.#userEmailField).not.toBeEmpty();
  }

  private async fillCurrentAddressField() {
    await this.#currentAddressField.fill(textBoxModel.currentAddress);
    await expect(this.#currentAddressField).not.toBeEmpty();
  }

  private async fillPermanentAddressField() {
    await this.#permanentAddressField.fill(textBoxModel.permanentAddress);
    await expect(this.#permanentAddressField).not.toBeEmpty();
  }
}
