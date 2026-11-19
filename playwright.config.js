// @ts-check
import { defineConfig, devices } from '@playwright/test';
/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  expect : {
    timeout: 5000
  },
  reporter: 'html',
  use: {
      /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    browserName: 'chromium',
    headless: false,
  },
}); 











