'use strict';
var homePage = require('../pages/homePage');
var userNameTextBox = element(By.id('username'));
var passwordTextBox = element(By.id('password'));
var loginButton = element(By.id('signIn'));
var loginPage = function () {
    this.getLoginPage = function () {
        browser.get(browser.baseUrl);
        browser.waitForAngular();
    };
    this.login = function (userId, password) {
        userNameTextBox.sendKeys(userId);
        passwordTextBox.sendKeys(password);
        loginButton.click().then(function () {
            expect(homePage.isHomePageDisplayed()).toBe(true);
        });
    };
};
module.exports = new loginPage();