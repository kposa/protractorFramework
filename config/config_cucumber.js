exports.config = {
    specs: [
    '../features/*.feature'
  ],
    baseUrl: 'http://mozart-qa.iso.com',
    directConnect: true,
    // set to "custom" instead of cucumber.
    framework: 'custom',

    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    // relevant cucumber command line options
    cucumberOpts: {
        require: ['util\hook.js'],
        format: "json"
    }
};