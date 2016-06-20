exports.config = {
    directConnect: true,
    specs: ['../specs/loginSpec.js'],
    multiCapabilities: [{
            'browserName': 'chrome'
         }
         ],
    maxSessions: -1,
    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 3
    },

    baseUrl: 'http://abc.com',
    beforeLaunch: function () {

    },
    onPrepare: function () {
        browser.manage().window().maximize();
        var SpecReporter = require('jasmine-spec-reporter');
        jasmine.getEnv().addReporter(new SpecReporter({
            displayStacktrace: 'all'
        }));
    },
    onComplete: function () {},
    resultJsonOutputFile: '../results/test.json',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 120000
    },
};