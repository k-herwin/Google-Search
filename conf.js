//var jasmineReporters = require('jasmine-reporters');

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['botify.js'],
capabilities: {
  'browserName': 'chrome'
},
    useAllAngular2AppRoots: true,
  allScriptsTimeout: 1800000, 
  getPageTimeout: 1800000,
  framework: "jasmine",
JasmineNodeOpts: {
    onComplete: null,
    showColors: true,
    // if true display spec Name
    isVerbose: true,
    silent: true,
    // if true, include stack traces in failures
    includeStackTrace: true,
    // default time to wait in ms before a test fails
    defaultTimeoutInterval: 1800000,
    print: function() {}
	}
};

