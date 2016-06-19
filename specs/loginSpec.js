var loginPage = require('../pages/loginPage');
describe('Verify Login functionality', function () {
    it('User should login to application', function () {
        loginPage.getLoginPage();
        loginPage.login('kumar', 'posa');
    });
});