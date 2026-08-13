// @ts-check

import { defineConfig, devices } from '@playwright/test';
const path = require('path');
const dotenv = require('dotenv');

const ENV = process.env.ENV || 'qa';

dotenv.config({
  path: path.resolve(__dirname, `config/${ENV}.env`)
});


export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    viewport: { width: 1920, height: 1080 },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

  ],
});

