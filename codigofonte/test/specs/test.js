
describe('configuration bases', () => {
    it('should run the test', () => {
        browser.debug();
        expect(1).toBe(1);
    })
})

// browser
//     .init()
//     .url('https://duckduckgo.com/')
//     .setValue('#search_form_input_homepage', 'WebdriverIO')
//     .click('#search_button_homepage')
//     .getTitle().then(function(title) {
//         console.log('Title is: ' + title);
//         // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
//     })
//     .end();