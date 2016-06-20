var loginPage = require('../pages/loginPage');
var homePage = require('../pages/homePage');

describe('Verify Login functionality', function () {
    it('User should login to application', function () {
        loginPage.getLoginPage();
        loginPage.login('kumar', 'posa');
    });
    it('Select Customer', function () {
        homePage.selectCustomer('Testing - No Class Table');
    });

    it('Perform Search', function () {
        homePage.getSearchPage();
    });
});