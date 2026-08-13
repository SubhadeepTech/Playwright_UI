const { test, expect, chromium } = require('@playwright/test');
require('dotenv').config();


test('First Test', async ({ page }) => {
await page.goto(process.env.BASE_URL);
console.log('USERNAME:', process.env.USERNAME);
console.log('PASSWORD:', process.env.PASSWORD);

});