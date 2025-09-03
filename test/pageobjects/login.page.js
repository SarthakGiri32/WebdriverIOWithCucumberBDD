import { $ } from '@wdio/globals';
import Page from './page';
import LoginPageElements from '../pageelements/Herokuapplogin.pageelements';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $(LoginPageElements.usernameTextbox);
    }

    get inputPassword () {
        return $(LoginPageElements.passwordTextbox);
    }

    get btnSubmit () {
        return $(LoginPageElements.submitButton);
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new LoginPage();
