var SpecReporter = require('jasmine-spec-reporter');
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var reporter = new HtmlScreenshotReporter({
    dest: 'results/htmlReports',
    cleanDestination: true,
    showSummary: true,
    showConfiguration: true,
    reportTitle: 'Automation Test Resutls',
    filename: 'Automation_Test_Resutls.html',
    ignoreSkippedSpecs: false,
    pathBuilder: function (currentSpec, suites, browserCapabilities) {
        // will return chrome/your-spec-name.png
        return browserCapabilities.get('browserName') + '/' + currentSpec.fullName;
    }
});
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

    baseUrl: 'http://qa123.com',
    beforeLaunch: function () {
        return new Promise(function (resolve) {
            reporter.beforeLaunch(resolve);
        });
    },
    onPrepare: function () {
        browser.manage().window().maximize();
        jasmine.getEnv().addReporter(new SpecReporter({
            displayStacktrace: 'all'
        }));
        jasmine.getEnv().addReporter(reporter);

    },
    afterLaunch: function (exitCode) {
        return new Promise(function (resolve) {
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    },
    onComplete: function () {},
    resultJsonOutputFile: 'results/test.json',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 120000
    },
};