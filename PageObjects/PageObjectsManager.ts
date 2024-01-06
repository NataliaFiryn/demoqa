import { Page } from '@playwright/test';
import { Navigation } from './Navigation';

export class PageObjectsManager {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  navigationPO() {
    return new Navigation(this.page);
  }
}
