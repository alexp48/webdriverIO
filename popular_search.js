describe('validate the links for dubai apartments from popular search', () => {

    it('should verify the selection of <To Rent> and verify every link', async () => {
        await browser.url('https://www.bayut.com/');
        const rent = await $('/html/body/div/main/div[5]/div/div[2]/div[2]/div/div/div[2]')
        await rent.click();

        const scrollDown_button = await $('/html/body/div/main/div[5]/div/div[2]/div[1]/div[2]/div/div[1]/div[2]');
        await scrollDown_button.click();

        const list = await browser.$$('[href*="/to-rent/apartments/dubai/"]').map(async (element) => {
            await expect(element).toHaveAttrContaining('href', '/to-rent/apartments/dubai/');
        })
    });

});