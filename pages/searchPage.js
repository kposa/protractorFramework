'use strict';
var searchPage = function () {
    this.searchTextBox = element(by.model('searchText'));
};
module.exports = new searchPage();