// @ts-check
import { test, expect } from '@playwright/test';

test('Auth Automation', async ({ page }) => {
  // Navigation to the EduTive website
  await page.goto('https://dev.edu-tive.com/');
  // Locate the "Login" link on the page
  const loginLink = page.getByText('Login', { exact: true }).first();
  await expect(loginLink).toBeVisible();
  await expect(loginLink).toHaveText('Login');  
  // Click the "Login" link to navigate to the login page
  await loginLink.click();
  // I have these two elements on the login page, username and password through locators
  const usernameInput = page.getByRole('textbox', { name: 'Username or email' });
  const passwordInput = page.getByRole('textbox', { name: 'Password' });
  await expect(usernameInput).toBeVisible();
  await expect(passwordInput).toBeVisible();
  await usernameInput.fill('sunena1@pshss.com');
  await passwordInput.fill('edu123');
  
  const signInButton = page.getByRole('button', { name: 'Sign In' });
  await expect(signInButton).toBeVisible();
  await signInButton.click();
 
  // Wait for 1 min 
  await page.waitForTimeout(60000);

  // Drill through the sidebar menu items
  // const assessmentsLink = page.getByRole('link', { name: 'Assessments', exact: true }).locator('span');
  // await assessmentsLink.click();
  // const questionbank = page.getByRole('link', { name: 'Question Bank', exact: true }).locator('span');
  // await questionbank.click();
  // const generateQuestionPaperLink = page.getByRole('link', { name: 'Generate Question Paper', exact: true }).locator('span');
  // await generateQuestionPaperLink.click();

});
