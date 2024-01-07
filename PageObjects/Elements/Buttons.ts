import { expect, Locator, Page } from '@playwright/test';

const doubleClickMessage: string = 'You have done a double click';
const rightClickMessage: string = 'You have done a right click';
const dynamicClickMessage: string = 'You have done a dynamic click';

export class ButtonsPage {
  #page: Page;
  #doubleClickBtn: Locator;
  #rightClickBtn: Locator;
  #dynamicClickBtn: Locator;

  #doubleClickMessageField: Locator;
  #rightClickMessageField: Locator;
  #dynamicClickMessageField: Locator;

  constructor(page: Page) {
    this.#page = page;
    this.#doubleClickBtn = this.#page.locator('#doubleClickBtn');
    this.#rightClickBtn = this.#page.locator('#rightClickBtn');
    this.#dynamicClickBtn = this.#page.getByRole('button', { name: 'Click Me', exact: true });

    this.#doubleClickMessageField = this.#page.locator('#doubleClickMessage');
    this.#rightClickMessageField = this.#page.locator('#rightClickMessage');
    this.#dynamicClickMessageField = this.#page.locator('#dynamicClickMessage');
  }

  async doubleClick() {
    await this.#doubleClickBtn.dblclick();
    await expect(this.#doubleClickMessageField).toHaveText(doubleClickMessage);
  }

  async rightClick() {
    await this.#rightClickBtn.click({ button: 'right' });
    await expect(this.#rightClickMessageField).toHaveText(rightClickMessage);
  }

  async dynamicClick() {
    await this.#dynamicClickBtn.click();
    await expect(this.#dynamicClickMessageField).toHaveText(dynamicClickMessage);
  }
}
