/**
 * Creating a class containing all xpaths, id and other selector types for elements in
 * 'https://www.google.com/' page
 */
export default class GoogleSeachPageElements {
    static inputSearchTextbox = '//*[@name="q" and @aria-label="Search"]';
    static googleSearchButton = '//input[@type="submit" and @value="Google Search"]';
    static staySignedOutButton = '//span[text()="Sign in to Google"]/parent::div/descendant::div[@role="button" and contains(., "Stay signed out")]';
}