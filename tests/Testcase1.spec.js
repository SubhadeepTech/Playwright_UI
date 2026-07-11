const { test, expect } = require('@playwright/test');

test('First Test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('Subha');
  await page.getByRole('textbox', { name: 'Enter EMail' }).click();
  await page.getByRole('textbox', { name: 'Enter EMail' }).fill('Subha@gmail.com');
  await page.getByRole('textbox', { name: 'Enter Phone' }).click();
  await page.getByRole('textbox', { name: 'Enter Phone' }).fill('6543456543');
});