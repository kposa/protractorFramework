var SpecReporter = require('jasmine-spec-reporter');
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var reporter = new HtmlScreenshotReporter({
    dest: '../results/htmlReports',
    cleanDestination: true,
    showSummary: true,
    showConfiguration: true,
    reportTitle: 'AutomationTestResutls',
    filename: 'AutomationTestResutls.html',
    ignoreSkippedSpecs: true,
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

    baseUrl: 'http://abc.com',
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
    resultJsonOutputFile: '../results/test.json',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 120000
    },
};