import { $, expect } from '@wdio/globals';
import Page from './page';
import SecurePageElements from '../pageelements/Herokuappsecure.pageelements';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $(SecurePageElements.flashAlertText);
    }

    /**
     * a method for validating flash alert text
     */
    async validateFlashALertText() {
        await expect(this.flashAlert).toBeExisting();
        await expect(this.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'));
    }
}

export default new SecurePage();
