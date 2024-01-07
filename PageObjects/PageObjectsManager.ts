import { Page } from '@playwright/test';
import { Navigation } from './Navigation';
import { TextBoxPage } from './Elements/TextBox';
import { RadioButtonPage } from './Elements/RadioButton';
import { ButtonsPage } from './Elements/Buttons';
import { CheckboxPage } from './Elements/Checkbox';

export class PageObjectsManager {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  navigationPO() {
    return new Navigation(this.page);
  }

  TextBoxPage() {
    return new TextBoxPage(this.page);
  }

  CheckboxPage() {
    return new CheckboxPage(this.page);
  }

  RadioButtonPage() {
    return new RadioButtonPage(this.page);
  }

  ButtonsPage() {
    return new ButtonsPage(this.page);
  }
}
