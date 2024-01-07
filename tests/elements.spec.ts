import { test, expect } from '@playwright/test';
import { PageObjectsManager } from '../PageObjects/PageObjectsManager';

test('Text Box', async ({ page }) => {
  const pageObjectsManager = new PageObjectsManager(page);
  const navigationPage = pageObjectsManager.navigationPO();
  const textBoxPage = pageObjectsManager.TextBoxPage();
  await page.goto('');
  await navigationPage.navigateToMainPage('elements');
  await navigationPage.navigateToElementsSubpage('textBox');
  await textBoxPage.fillAndSubmitTextBox();
  await textBoxPage.checkOutput();
});

test.describe.only('Checkbox', () => {
  test.beforeEach(async ({ page }) => {
    const pageObjectsManager = new PageObjectsManager(page);
    const navigationPage = pageObjectsManager.navigationPO();
    await page.goto('');
    await navigationPage.navigateToMainPage('elements');
    await navigationPage.navigateToElementsSubpage('checkBox');
  });

  test('Select All', async ({ page }) => {
    const pageObjectsManager = new PageObjectsManager(page);
    const navigationPage = pageObjectsManager.navigationPO();
    const checkBoxPage = pageObjectsManager.CheckboxPage();
    // await checkBoxPage.checkCheckbox('exelFile'); to edit
  });
});

test('Radio Button', async ({ page }) => {
  const pageObjectsManager = new PageObjectsManager(page);
  const navigationPage = pageObjectsManager.navigationPO();
  const radioButtonPage = pageObjectsManager.RadioButtonPage();
  await page.goto('');
  await navigationPage.navigateToMainPage('elements');
  await navigationPage.navigateToElementsSubpage('radioButton');
  await radioButtonPage.checkRadioButton('yes');
  await radioButtonPage.checkRadioButton('impressive');
  await radioButtonPage.checkRadioButton('no');
});

test('Buttons', async ({ page }) => {
  const pageObjectsManager = new PageObjectsManager(page);
  const navigationPage = pageObjectsManager.navigationPO();
  const buttonPage = pageObjectsManager.ButtonsPage();
  await page.goto('');
  await navigationPage.navigateToMainPage('elements');
  await navigationPage.navigateToElementsSubpage('buttons');
  await buttonPage.doubleClick();
  await buttonPage.rightClick();
  await buttonPage.dynamicClick();
});
