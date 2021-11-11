const { chromium } = require('playwright');
(async() => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();

  const page = await context.newPage();
  
  await page.goto('https://deviser.tech/crawler/2/');

  
   
  await page.click('form[method="post"] >> input[type="text"]',{delay:3000});
   
  await page.fill('form[method="post"] >> input[type="text"]', 'user');
    
   
  await page.click('form[method="post"] >> input[type="password"]');
  
  await page.fill('form[method="post"] >> input[type="password"]',"123456");  
    
  await page.click('button');

  setTimeout(async() => {
    pageText=await page.innerText('//*[@id="load"]/div')
    console.log(pageText)
    await context.close();
    await browser.close();
  }, 3000);
})();