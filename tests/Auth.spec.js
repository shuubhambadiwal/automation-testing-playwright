// @ts-check
import { test, expect } from '@playwright/test';

test('Auth Page', async ({ page }) => {
  // Navigation to the EduTive website
  await page.goto('https://dev.edu-tive.com/');
  // Locate the "Login" link on the page
  const loginLink = page.getByText('Login', { exact: true }).first();
  await expect(loginLink).toBeVisible();
  await expect(loginLink).toHaveText('Login');
  // Click the "Login" link to navigate to the login page
  await loginLink.click();
});
