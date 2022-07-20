const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/automation/movieList/index.html')
})

// And after our test has completed, we want to close our browser
afterAll(async () => {
    await driver.quit()
})
//check for deleting 
test(' add and then delete movie', async () => {
    const inputField = await driver.findElement(By.xpath('//form/input')) // could do   //input also. cuz only one input on the page.
    await inputField.sendKeys('dune')
    

    const thebutton = await driver.findElement(By.css('button'))
    await thebutton.click()
    
    let deletebutton = await driver.findElement(By.id(`dune`))
    await deletebutton.click()
    


      //test for crossing out                                                    
})
test('check for crossing out', async () => {
    const inputField = await driver.findElement(By.xpath('//form/input'))
  
    await inputField.sendKeys('starwars')
    

    const thebutton = await driver.findElement(By.css('button'))
    await thebutton.click()

    let crossClick = await driver.findElement(By.xpath('//span'))
    await crossClick.click()
    await driver.sleep(200)
    
    

})
//test for h1 element existing 
test('check for h1 element existing', async () => {
    
    expect(await driver.findElement(By.xpath('//h1'))).toBeTruthy
})


