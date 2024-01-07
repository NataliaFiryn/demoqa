import { expect, Locator, Page } from '@playwright/test';

export class CheckboxPage {
  #page: Page;

  #expandAllBtn: Locator;
  #collapseAllBtn: Locator;

  #checkbox: {
    home: Locator;
    desktop: Locator;
    notes: Locator;
    commands: Locator;
    documents: Locator;
    workspace: Locator;
    react: Locator;
    angular: Locator;
    veu: Locator;
    office: Locator;
    public: Locator;
    private: Locator;
    classified: Locator;
    general: Locator;
    downloads: Locator;
    wordFile: Locator;
    exelFile: Locator;
  };
  #output: Locator;

  constructor(page: Page) {
    this.#page = page;
    this.#expandAllBtn = this.#page.locator('[title="Expand all"]');
    this.#collapseAllBtn = this.#page.locator('[title="Collapse all"]');

    this.#checkbox = {
      home: this.#page.locator('#tree-node-home'),
      desktop: this.#page.locator('#tree-node-desktop'),
      notes: this.#page.locator('#tree-node-notes'),
      commands: this.#page.locator('#tree-node-commands'),
      documents: this.#page.locator('#tree-node-documents'),
      workspace: this.#page.locator('#tree-node-workspace'),
      react: this.#page.locator('#tree-node-react'),
      angular: this.#page.locator('#tree-node-angular'),
      veu: this.#page.locator('#tree-node-veu'),
      office: this.#page.locator('#tree-node-office'),
      public: this.#page.locator('#tree-node-public'),
      private: this.#page.locator('#tree-node-private'),
      classified: this.#page.locator('#tree-node-classified'),
      general: this.#page.locator('#tree-node-general'),
      downloads: this.#page.locator('#tree-node-downloads'),
      wordFile: this.#page.locator('#tree-node-wordFile'),
      exelFile: this.#page.locator('[for="tree-node-excelFile"]'),
    };
    this.#output = this.#page.locator('.display-result');
  }

  async expandAll() {
    if (!(await this.#checkbox.exelFile.isVisible())) {
      await this.#expandAllBtn.click();
      await expect(this.#checkbox.exelFile).toBeVisible();
    }
  }
  //to edit
  // async checkCheckbox(...files: File[]) {
  //   await this.expandAll();
  //   await this.#page.pause();
  //   files.forEach(async (file) => {
  //     console.log(file);
  //     console.log(this.#checkbox[file]);
  //     await expect(this.#checkbox[file]).toBeVisible();
  //     await this.#checkbox[file].check({ force: true });
  //     await expect(this.#checkbox[file]).toBeChecked();
  //     await expect(this.#output).toContainText(file);
  //   });
  // }
}

type File =
  | 'home'
  | 'desktop'
  | 'notes'
  | 'commands'
  | 'documents'
  | 'workspace'
  | 'react'
  | 'angular'
  | 'veu'
  | 'office'
  | 'public'
  | 'private'
  | 'classified'
  | 'general'
  | 'downloads'
  | 'wordFile'
  | 'exelFile';
