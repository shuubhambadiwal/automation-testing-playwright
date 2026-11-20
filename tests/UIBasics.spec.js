const {test, expect} = require('@playwright/test');

test ('Browser Context Playwright Test', async ({browser})=> {
// Playwright code
  // Using the browser.newConetxt we can create a browser with no cookies & plugins.  
  const context = await browser.newContext();
  // Here we are creating an new page in the browser.
  const page = await context.newPage(); 
  // The below code will naviagte to the URL in the page.
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  console.log(await page.title());
  // css,xpath
  await page.locator("#username").fill("rahulshetty");
  await page.locator("[type = 'password']").fill("learning");
  await page.locator("#signInBtn").click();
  console.log (await page.locator("[style*='block']").textContent());
  
})

// test ('Page Playwright Test', async ({page})=> {
// // Playwright code
//   // The below code will naviagte to the URL in the page.
//   await page.goto('https://www.google.com/');
//   console.log(await page.title());
//   await  expect(page).toHaveTitle("Google");
// })  






