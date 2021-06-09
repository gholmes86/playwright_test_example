const {chromium} = require('playwright');
const expect = require('expect');
const assert = require("assert");
let browser;
let page;
beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
});
afterAll(async () => {
    await browser.close();
});
beforeEach(async () => {
    page = await browser.newPage();
});
afterEach(async () => {
    await page.close();
});

it('should add a new course', async () => {
    const email = 'gabriel.holmes@testingti.com'
    const password = 'testtest'
    await page.goto('https://danas.thoughtindustries.com/');
    expect(await page.title()).toBe('This school is closed right now');
    await page.click('//*[@href="/learn/sign_in?return_to=/"]');
    await page.fill('//*[@id="email"]',email);
    await page.fill('//*[@id="password"]',password);
    await page.click('//*[@value="Sign In"]');
    await page.keyboard.press('Enter');
    expect(await page.title()).toBe('Danas');
    await page.click('//span[contains(text(),"Manager Access")]');
    await page.keyboard.press('Enter');
    await page.click('//*[@class="icon-notebook"]');
    await page.click('//*[contains(text(),"Manage Content")]');
    await page.$('//*[contains(@href,"/learn/manager/course/new")]')
    await page.click('//*[contains(@href,"/learn/manager/course/new")]');
    await page.$('//*[contains(@class,"btn btn--primary--manager")]')
    await page.$('//*[contains(@class,"btn btn--primary--manager")]')
    const example = await page.$('//*[contains(@class,"btn btn--primary--manager")]');
    await example.click();
    await page.$('//*[@class="ember-view ember-text-field form-control input--large"]')
    await page.fill('//*[@class="ember-view ember-text-field form-control input--large"]',"Test Course"+Math.floor(Math.random()*6) + 1);
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    await page.$('//button[contains(text(),"Release")]');
    await page.click('//button[contains(text(),"Release")]');
    await page.click('//*[@class="btn btn--success-new btn--right"][contains(text(),"Save & Release)]');
    expect(await page.$('//*[contains(@placeholder,"Enter section name")]'));
});

it('should login sucessfully', async () => {
    const email = 'gabriel.holmes@testingti.com'
    const password = 'testtest'
    await page.goto('https://danas.thoughtindustries.com/');
    expect(await page.title()).toBe('This school is closed right now');
    await page.click('//*[@href="/learn/sign_in?return_to=/"]');
    await page.fill('//*[@id="email"]',email);
    await page.fill('//*[@id="password"]',password);
    await page.click('//*[@value="Sign In"]');
    await page.keyboard.press('Enter');
    expect(await page.title()).toBe('Danas');

});
