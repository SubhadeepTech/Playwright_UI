const { test, expect } = require('@playwright/test');

test('First Test', async ({ page }) => {
    await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Playwright logo Playwright' }).click();
  await page.getByRole('link', { name: 'API' }).click();
  await page.getByRole('link', { name: 'Docs' }).click();
  await page.getByRole('link', { name: 'Playwright logo Playwright' }).click();

});