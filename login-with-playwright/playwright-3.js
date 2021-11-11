
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
 
  const page = await context.newPage();
  
  await page.goto('https://deviser.tech/crawler/3/');
  setTimeout(async() => {
    await page.click('form[action="form.php"] >> input >>nth=3');
 
    await page.fill('form[action="form.php"] >> input >>nth=3','user');
   
    await page.click('form[action="form.php"] >> input >>nth=4');
   
    await page.fill('form[action="form.php"] >> input >>nth=4', '123456');
  
    span=await page.textContent('span');
    console.log(span)
    plusI=span.indexOf('+')
    equalsI=span.indexOf('=')
    firstNum=parseInt(span.substring(0,plusI-1)) 
    console.log(firstNum)
    secondNum=parseInt(span.substring(plusI+1,equalsI)) 
    total=firstNum+secondNum;
    console.log(total)
    await page.click('form[action="form.php"] >> input >>nth=5');
    await page.fill('form[action="form.php"] >> input >>nth=5',total.toString());
    await page.click('form[method="post"] >> input[type="submit"]',{delay:2000});
    preText=await page.innerText('pre');
    console.log(preText)
   
    await context.close();
    await browser.close();
  }, 7000);
  
  
})();