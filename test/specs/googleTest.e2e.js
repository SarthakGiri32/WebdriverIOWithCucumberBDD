import GooglePage from "../pageobjects/google.page";

describe('Google demo test', () => {
    it('Search for "WebdriverIO"', async () => {
        await GooglePage.openUrl(); // opening google.com page

        await GooglePage.dismissSignInToGooglePrompt(); // dismiss 'Sign in to Google' prompt
        await GooglePage.enterGoogleSearchQuery('WebdriverIO'); // searching for 'WebdriverIO'
    })
})