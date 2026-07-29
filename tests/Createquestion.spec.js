import { test, expect } from '@playwright/test';

test('Q Creation Automation', async ({ page }) => {
  await page.goto('https://dev.edu-tive.com/home');
  await page.getByText('Login').click();
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('sunena1@pshss.com');
  await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('edu123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Assessments ' }).click();
  await page.getByRole('link', { name: 'Question Bank ' }).click();
  await page.getByRole('link', { name: 'Create Questions' }).click();
  await page.locator('app-questionbank-for-creator a').first().click();
  await page.locator('#addQuestionbank i').click();
  await page.getByRole('radio', { name: 'VIII' }).check();
  await page.locator('#addQuestionbank').getByRole('combobox').first().selectOption('10: CBSE-VIII-Computer');
  await page.locator('#addQuestionbank').getByRole('combobox').nth(2).selectOption('bbe30c55-add3-4ec6-b9fc-15566ec44062');
  await page.locator('#addQuestionbank').getByRole('combobox').nth(3).selectOption('0c85be64-2cfa-4391-98fe-00ece9f5501b');
  await page.locator('#addQuestionbank').getByRole('combobox').nth(4).selectOption('general');
  await page.locator('.edv-select.ng-untouched.ng-pristine.ng-invalid').first().selectOption('651e837f62fdfd5800e43b02');
  await page.locator('div').filter({ hasText: /^EasyMediumHard$/ }).getByRole('combobox').selectOption('easy');
  await page.locator('.edv-select.ng-untouched.ng-pristine.ng-invalid').first().selectOption('Analyzing');
  await page.locator('.edv-select.ng-untouched.ng-pristine.ng-invalid').selectOption('COMP');
  await page.getByRole('spinbutton').nth(1).fill('2');
  await page.locator('iframe[title="Rich Text Editor, editor6"]').contentFrame().locator('html').click();
  await page.locator('iframe[title="Rich Text Editor, editor6"]').contentFrame().locator('body').fill('Test ABC Q');
  await page.locator('a').filter({ hasText: 'Save & Submit' }).click();
});