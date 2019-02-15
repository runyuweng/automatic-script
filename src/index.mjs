import webdriver from 'webdriver';
const WebDriver = webdriver.default;

const identifier = 'element-6066-11e4-a52e-4f735466cecf';

async function main () {
    const client = await WebDriver.newSession({
        path: '/',
        capabilities: { browserName: 'firefox' }
    })
 
    await client.navigateTo('https://www.google.com/ncr')
 
    const searchInput = await client.findElement('css selector', 'input[aria-label="Search"]')
    await client.elementSendKeys(searchInput[identifier], 'WebDriver')
 
    console.log(await client.getTitle())
    // await client.deleteSession()
}

main();