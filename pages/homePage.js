'use strict';
var searchPage = require('../pages/searchPage');
var welcomeMenu = element(by.css('.usermenu.ng-binding'));
var customerTextBox = element(by.id('searchTextBoxId'));
var customerOption = element(by.linkText('Testing - No Class Table'));
var searchIcon = element.all(by.css('.vm-icon.icon-search')).filter(function (elem, index) {
    return elem.getAttribute('href').then(function (text) {
        return text = '/Home/Search';
    });
});
var customerChange = element(by.linkText('Change'));

var homePage = function () {
    this.isHomePageDisplayed = function () {
        return welcomeMenu.isPresent();
    };
    this.selectCustomer = function (customer) {
        customerTextBox.sendKeys(customer).then(function () {
            customerOption.click().then(function () {
                expect(customerChange).not.toBeNull();
            });
        });

    };

    this.getSearchPage = function () {
        browser.enterRepl();
        searchIcon.click().then(function () {
            browser.enterRepl();
            expect(searchPage.searchTextBox).not.toBeNull();
        });
    };

};
module.exports = new homePage();