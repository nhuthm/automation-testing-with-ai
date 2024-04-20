import { Given, When, Then } from "@cucumber/cucumber"
import { Browser, BrowserContext, Page, chromium } from "playwright"

Given('User is on homepage', { timeout: 2 * 10000 }, async function () {
    let browser: Browser = await chromium.launch({ headless: false, channel: "chrome", args: ['--start-maximized'] });
    let bCtx: BrowserContext = await browser.newContext({ viewport: null, javaScriptEnabled: true });
    let page: Page = await bCtx.newPage();
    await page.goto('https://ecommerce-playground.lambdatest.io/');
    await page.close();
    await browser.close();
});


When('User enter login details', function () {
    console.log('-------User is on login details-------')
});


Then('Login should be successful', function () {
    console.log('-------Login should be successful-------')
});

Then('Home page should be displayed', function () {
    console.log('-------Home page should be displayed-------')
});