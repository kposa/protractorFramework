'use strict';
var loginPage = function () {
    this.getLoginPage = function () {
        browser.get(browser.baseUrl);
        browser.waitForAngular();
    };
    this.login = function (userId, password) {

    }
};
module.exports = new loginPage();