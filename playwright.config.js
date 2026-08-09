// @ts-check
import { defineConfig, devices } from '@playwright/test';

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

   /* {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },*/
    /* Test against branded browsers. */
    //{
    //  name: 'Google Chrome',
  //    use: { ...devices['Desktop Chrome'], channel: 'chrome' }, // or 'chrome-beta'
  //  },
    //{
     // name: 'Microsoft Edge',
    //  use: { ...devices['Desktop Edge'], channel: 'msedge' }, // or 'msedge-dev'
   // },

  ],
});

