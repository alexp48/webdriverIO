// const { default: $$ } = require("webdriverio/build/commands/browser/$$");

// describe('search for dubai marina and check the result', () => {

//     it('should verify the title of the main page', async () => {
//         await browser.url('https://www.bayut.com/');
//         await expect(browser).toHaveTitle("Bayut: UAE's Largest Real Estate Portal");
//     });

//     it('should search for Dubai Marina selling properties', async () => {

//         const locationInput = await $('/html/body/div/header/div[4]/div/div[2]/div/div[1]/div[2]/div/div/ul/input');
//         await locationInput.setValue('Dubai Marina');
//         await browser.keys("Enter");
        

//         const purposeInput = await $('//header/div[4]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]').click();

//         const purposeInput2 = await $('/html/body/div/header/div[4]/div/div[2]/div/div[1]/div[1]/div/div[2]/div/div[1]/div/span[1]/button').click();

//         const searchButton = await $('a=Find');
//         await searchButton.click();
    
//         await expect(browser).toHaveTitle("Properties for Sale in Dubai Marina | Bayut.com");
//     });

//     it('should verify the search results to satisfy the search criteria', async () => {
//         const liTexts = await browser.$$("._7afabd84").map(async (element) => {
//             await expect(element).toHaveTextContaining("Dubai Marina");
//         });

//     });

// });