exports.config = {
    directConnect: true,

    specs: [
        '../specs/demoSpec.js'
    ],

    maxSessions: -1,
    baseUrl: 'http://mozart-qa.iso.com/',
    allScriptsTimeout: 11000,
    getPageTimeout: 10000,
    beforeLaunch: function () {},
    onPrepare: function () {},
    onComplete: function () {},
    onCleanUp: function (exitCode) {},
    afterLaunch: function (exitCode) {},
    params: {
        login: {
            user: 'stangudu',
            password: 'Verisk@123'
        }
    },
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function () {},
        grep: 'pattern',
        invertGrep: false
    }
};