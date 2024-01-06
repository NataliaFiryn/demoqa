import { test, expect } from '@playwright/test';
import { PageObjectsManager } from '../PageObjects/PageObjectsManager';

test('First test', async ({ page }) => {
  const pageObjectsManager = new PageObjectsManager(page);
  const navigationPage = pageObjectsManager.navigationPO();
  await page.goto('');
  await navigationPage.navigateToMainPage('elements');
  await navigationPage.navigateToElementsSubpage('radioButton');
  await navigationPage.navigateToPractiseFormsSubpage();
  await navigationPage.navigateToAlertsWindowsSubpage('alerts');
  await navigationPage.navigateToWidgetsSubpage('slider');
  await navigationPage.navigateToInteractionsSubpage('dragabble');
});
