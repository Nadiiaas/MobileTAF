const { TestRunner } = require('./Framework/TestRunner');

// get list of files with tests
const testFiles = process.argv.slice(2);
if(testFiles.length == 0) {
    throw new Error("No tests provided");
}

const testRun = new TestRunner();
const tests = [];

// load test objects
testFiles.forEach(testFile => {
    tests.push(...require(testFile).Tests);
});

(async () => {
    await testRun.Run(tests);
})();