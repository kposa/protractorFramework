'use strict';
module.exports = function () {
    this.Given(/^I have login page$/, function () {
        console.log('hello1');
    });
    this.When(/^I login as 'Admin' user$/, function () {
        console.log('hello2');
    });
    this.Then(/^User should login to application$/, function () {
        console.log('hello3');
    });
};