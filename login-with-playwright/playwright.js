const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto('https://deviser.tech/crawler/1/');

  await page.click('input[type="text"]');
 
  await page.fill('input[type="text"]', 'user');

  await page.click('input[type="password"]');

  await page.fill('input[type="password"]', '123456');
 
  await page.click('input[type="submit"]');
  

  console.log(await page.innerText('div')) 

  await context.close();
  await browser.close();
})();