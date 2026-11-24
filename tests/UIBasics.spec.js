const {test, expect} = require('@playwright/test');

test ('Browser Context Playwright Test', async ({browser})=> {
// Playwright code
  // Using the browser.newConetxt we can create a browser with no cookies & plugins.  
  const context = await browser.newContext();
  // Here we are creating an new page in the browser.
  const page = await context.newPage(); 
  const userName = page.locator("#username");
  const password = page.locator("[type = 'password']");
  const signInBtn = page.locator("#signInBtn");
  const cardTitles = page.locator(".card-body a");
  // The below code will naviagte to the URL in the page.v
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  console.log(await page.title());
  // css,xpath
  await userName.fill("rahulshetty");
  await password.fill("Learning@830$3mK2");
  await signInBtn.click();
  //web driver wait
  console.log (await page.locator("[style*='block']").textContent());
  await expect(page.locator("[style*='block']")).toContainText('Incorrect');
  
  await userName.fill("");
  await userName.fill("rahulshettyacademy");
  await signInBtn.click();
  console.log(await cardTitles.first().textContent());
  console.log(await cardTitles.nth(2).textContent());
})

// test ('Page Playwright Test', async ({page})=> {
// // Playwright code
//   // The below code will naviagte to the URL in the page.
//   await page.goto('https://www.google.com/');
//   console.log(await page.title());
//   await  expect(page).toHaveTitle("Google");
// })  






