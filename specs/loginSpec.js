var loginPage = require('../pages/loginPage');
var homePage = require('../pages/homePage');
var testData = require('../testData/testData.json');

describe('Verify Login functionality', function () {
    it('User should login to application', function () {
        loginPage.getLoginPage();
        loginPage.login(testData.Admin_UserName, testData.Admin_Password);
    });
    it('Select Customer', function () {
        homePage.selectCustomer('Testing - No Class Table');
    });

    it('Perform Search', function () {
        homePage.getSearchPage();
    });
});