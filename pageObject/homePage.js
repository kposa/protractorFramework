'use strict';
var testData = require('../testData/testData.json');
var searchPage = require('../pageObject/searchPage');
var welcomeMenu = element(by.css('.usermenu.ng-binding'));
var customerTextBox = element(by.id('searchTextBoxId'));
var customerOption = element(by.linkText(testData.client));
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
        browser.get('http://mozart-qa.iso.com/Home/Search');
    };

};
module.exports = new homePage();