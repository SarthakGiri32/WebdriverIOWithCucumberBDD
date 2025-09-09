import { $, expect } from '@wdio/globals';
import Page from './page';
import GoogleSearchPageElements from '../pageelements/GoogleSearchPage';

/**
 * sub page containing specific selectors and methods for google.com
 */
class GooglePage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputSearchField () {
        return $(GoogleSearchPageElements.inputSearchTextbox);
    }

    get buttonSubmit () {
        return $(GoogleSearchPageElements.googleSearchButton);
    }

    get buttonStaySignedOut () {
        return $(GoogleSearchPageElements.staySignedOutButton);
    }

    /**
     * a method to look for and dismiss 'Sign in to Google' prompt
     */
    async dismissSignInToGooglePrompt () {
        await expect(this.buttonStaySignedOut).toBeExisting();
        await this.buttonStaySignedOut.click();
    }

    /**
     * a method to enter a search query and start the google search
     * @param {string} inputSearchQuery 
     */
    async enterGoogleSearchQuery (inputSearchQuery) {
        await this.inputSearchField.setValue(inputSearchQuery);
        await this.buttonSubmit.click();
    }

    /**
     * overwriting openUrl() to open google.com
     */
    openUrl () {
        return super.openUrl('https://www.google.com/');
    }
}

export default new GooglePage();