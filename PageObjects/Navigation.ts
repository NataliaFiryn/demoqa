import { defineConfig, expect, Locator, Page, request } from '@playwright/test';
import URLS from '../TestData/URLS';

export class Navigation {
  #page: Page;
  #mainMenuItem: {
    elements: Locator;
    forms: Locator;
    alertsWindows: Locator;
    widgets: Locator;
    interactions: Locator;
    bookStore: Locator;
  };
  #sideMenuItem: {
    elements: Locator;
    forms: Locator;
    alertsWindows: Locator;
    widgets: Locator;
    interactions: Locator;
    bookStore: Locator;
  };

  #elementsSubpage: {
    textBox: Locator;
    checkBox: Locator;
    radioButton: Locator;
    webTables: Locator;
    buttons: Locator;
    links: Locator;
    broken: Locator;
    uploadDownload: Locator;
    dynamicProperties: Locator;
  };

  #practiceFormSubpage: Locator;
  #alertsWindowsSubpage: {
    browserWindows: Locator;
    alerts: Locator;
    frames: Locator;
    nestedframes: Locator;
    modalDialogs: Locator;
  };

  #widgetsSubpage: {
    accordian: Locator;
    autoComplete: Locator;
    datePicker: Locator;
    slider: Locator;
    progressBar: Locator;
    tabs: Locator;
    toolTips: Locator;
    menu: Locator;
    selectMenu: Locator;
  };

  #interactionsSubpage: {
    sortable: Locator;
    selectable: Locator;
    resizable: Locator;
    droppable: Locator;
    dragabble: Locator;
  };

  #bookStoreSubpage: {
    login: Locator;
    books: Locator;
    profile: Locator;
  };

  constructor(page: Page) {
    this.#page = page;
    this.#mainMenuItem = {
      elements: this.#page.locator('.category-cards .card-body:has-text("Elements")'),
      forms: this.#page.locator('.category-cards .card-body:has-text("Forms")'),
      alertsWindows: this.#page.locator('.category-cards .card-body:has-text("Alerts, Frame & Windows")'),
      widgets: this.#page.locator('.category-cards .card-body:has-text("Widgets")'),
      interactions: this.#page.locator('.category-cards .card-body:has-text("Interactions")'),
      bookStore: this.#page.locator('.category-cards .card-body:has-text("Book Store Application")'),
    };

    this.#sideMenuItem = {
      elements: this.#page.locator('.element-group:has-text("Elements")'),
      forms: this.#page.locator('.element-group:has-text("Forms")'),
      alertsWindows: this.#page.locator('.element-group:has-text("Alerts, Frame & Windows")'),
      widgets: this.#page.locator('.element-group:has-text("Widgets")'),
      interactions: this.#page.locator('.element-group:has-text("Interactions")'),
      bookStore: this.#page.locator('.element-group:has-text("Book Store Application")'),
    };

    this.#elementsSubpage = {
      textBox: this.#sideMenuItem.elements.locator('#item-0'),
      checkBox: this.#sideMenuItem.elements.locator('#item-1'),
      radioButton: this.#sideMenuItem.elements.locator('#item-2'),
      webTables: this.#sideMenuItem.elements.locator('#item-3'),
      buttons: this.#sideMenuItem.elements.locator('#item-4'),
      links: this.#sideMenuItem.elements.locator('#item-5'),
      broken: this.#sideMenuItem.elements.locator('#item-6'),
      uploadDownload: this.#sideMenuItem.elements.locator('#item-7'),
      dynamicProperties: this.#sideMenuItem.elements.locator('#item-8'),
    };

    this.#practiceFormSubpage = this.#sideMenuItem.forms.locator('#item-0');

    this.#alertsWindowsSubpage = {
      browserWindows: this.#sideMenuItem.alertsWindows.locator('#item-0'),
      alerts: this.#sideMenuItem.alertsWindows.locator('#item-1'),
      frames: this.#sideMenuItem.alertsWindows.locator('#item-2'),
      nestedframes: this.#sideMenuItem.alertsWindows.locator('#item-3'),
      modalDialogs: this.#sideMenuItem.alertsWindows.locator('#item-4'),
    };

    this.#widgetsSubpage = {
      accordian: this.#sideMenuItem.widgets.locator('#item-0'),
      autoComplete: this.#sideMenuItem.widgets.locator('#item-1'),
      datePicker: this.#sideMenuItem.widgets.locator('#item-2'),
      slider: this.#sideMenuItem.widgets.locator('#item-3'),
      progressBar: this.#sideMenuItem.widgets.locator('#item-4'),
      tabs: this.#sideMenuItem.widgets.locator('#item-5'),
      toolTips: this.#sideMenuItem.widgets.locator('#item-6'),
      menu: this.#sideMenuItem.widgets.locator('#item-7'),
      selectMenu: this.#sideMenuItem.widgets.locator('#item-8'),
    };

    this.#interactionsSubpage = {
      sortable: this.#sideMenuItem.interactions.locator('#item-0'),
      selectable: this.#sideMenuItem.interactions.locator('#item-1'),
      resizable: this.#sideMenuItem.interactions.locator('#item-2'),
      droppable: this.#sideMenuItem.interactions.locator('#item-3'),
      dragabble: this.#sideMenuItem.interactions.locator('#item-4'),
    };

    this.#bookStoreSubpage = {
      login: this.#sideMenuItem.bookStore.locator('#item-0'),
      books: this.#sideMenuItem.bookStore.locator('#item-1'),
      profile: this.#sideMenuItem.bookStore.locator('#item-2'),
    };
  }

  async navigateToMainPage(page: PageNames) {
    await Promise.all([this.#mainMenuItem[page].click(), this.#page.waitForURL(URLS[page])]);
  }

  async navigateToElementsSubpage(subpage: ElementsSubpage) {
    if (!(await this.#elementsSubpage[subpage].isVisible())) {
      await this.#sideMenuItem.elements.click();
      await this.#elementsSubpage[subpage].isVisible();
    }
    await Promise.all([this.#elementsSubpage[subpage].click(), this.#page.waitForURL(URLS[subpage])]);
  }

  async navigateToPractiseFormsSubpage() {
    if (!(await this.#practiceFormSubpage.isVisible())) {
      await this.#sideMenuItem.forms.click();
      await this.#practiceFormSubpage.isVisible();
    }
    await Promise.all([this.#practiceFormSubpage.click(), this.#page.waitForURL(URLS.practiceForm)]);
  }

  async navigateToAlertsWindowsSubpage(subpage: AlertsWindowsSubpage) {
    if (!(await this.#alertsWindowsSubpage[subpage].isVisible())) {
      await this.#sideMenuItem.alertsWindows.click();
      await this.#alertsWindowsSubpage[subpage].isVisible();
    }
    await Promise.all([this.#alertsWindowsSubpage[subpage].click(), this.#page.waitForURL(URLS[subpage])]);
  }

  async navigateToWidgetsSubpage(subpage: WidgetsSubpage) {
    if (!(await this.#widgetsSubpage[subpage].isVisible())) {
      await this.#sideMenuItem.widgets.click();
      await this.#widgetsSubpage[subpage].isVisible();
    }
    await Promise.all([this.#widgetsSubpage[subpage].click(), this.#page.waitForURL(URLS[subpage])]);
  }

  async navigateToInteractionsSubpage(subpage: InteractionsSubpage) {
    if (!(await this.#interactionsSubpage[subpage].isVisible())) {
      await this.#sideMenuItem.interactions.click();
      await this.#interactionsSubpage[subpage].isVisible();
    }
    await Promise.all([this.#interactionsSubpage[subpage].click(), this.#page.waitForURL(URLS[subpage])]);
  }

  async navigateToBookStoreSubpage(subpage: BookStoreSubpage) {
    if (!(await this.#bookStoreSubpage[subpage].isVisible())) {
      await this.#sideMenuItem.bookStore.click();
      await this.#bookStoreSubpage[subpage].isVisible();
    }
    await Promise.all([this.#bookStoreSubpage[subpage].click(), this.#page.waitForURL(URLS[subpage])]);
  }
}

type PageNames = 'elements' | 'forms' | 'alertsWindows' | 'widgets' | 'interactions' | 'bookStore';
type ElementsSubpage =
  | 'textBox'
  | 'checkBox'
  | 'radioButton'
  | 'webTables'
  | 'buttons'
  | 'links'
  | 'broken'
  | 'uploadDownload'
  | 'dynamicProperties';
type AlertsWindowsSubpage = 'browserWindows' | 'alerts' | 'frames' | 'nestedframes' | 'modalDialogs';
type WidgetsSubpage =
  | 'accordian'
  | 'autoComplete'
  | 'datePicker'
  | 'slider'
  | 'progressBar'
  | 'tabs'
  | 'toolTips'
  | 'menu'
  | 'selectMenu';
type InteractionsSubpage = 'sortable' | 'selectable' | 'resizable' | 'droppable' | 'dragabble';
type BookStoreSubpage = 'login' | 'books' | 'profile';
