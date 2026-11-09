const {test} = require('@playwright/test');

test ('Browser Context Playwright Test', async ({browser})=> {
// Playwright code
  // Using the browser.newConetxt we can create a browser with no cookies & plugins.  
  const context = await browser.newContext();
  // Here we are creating an new page in the browser.
  const page = await context.newPage(); 
  // The below code will naviagte to the URL in the page.
  page.goto('https://rahulshettyacademy.com/loginpagePractise/');
})

test ('Page Playwright Test', async ({page})=> {
// Playwright code
  // The below code will naviagte to the URL in the page.
  page.goto('https://www.google.com/');
})  






