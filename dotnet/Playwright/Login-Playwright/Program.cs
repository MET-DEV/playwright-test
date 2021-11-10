using System;
using System.Threading.Tasks;
using Microsoft.Playwright;
class Program
{
    public static async Task Main()
    {
        using var playwright = await Playwright.CreateAsync();
        await using var browser = await playwright.Chromium.LaunchAsync(new BrowserTypeLaunchOptions
        {
            Headless = false,
        });
        var context = await browser.NewContextAsync();
       
        var page = await context.NewPageAsync();
        
        await page.GotoAsync("https://deviser.tech/crawler/1/");
  
        await page.ClickAsync("input[type=\"text\"]");
   
        await page.FillAsync("input[type=\"text\"]", "user");
    
        await page.ClickAsync("input[type=\"password\"]");
    
        await page.FillAsync("input[type=\"password\"]", "123456");
      
        await page.ClickAsync("input[type=\"submit\"]");
        Console.WriteLine(await page.InnerTextAsync("div"));
    }
}
