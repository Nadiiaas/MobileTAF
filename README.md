## Installation

Use the package manager npm to install all needed dependencies.

Appium server should be installed.

```bash
npm install
```

## Usage
For test definition Test class should be imported

```node
const { Test} = require('../Framework/Test');
```
For assertion operation AssertionHelperclass should be imported

```node
const { AssertionHelper } = require('../Framework/AssertionHelper');
```

## Template of the test file
```node
// create test object
const test = new Test("Some test name");

// this function will be executed before each scenario
test.Before( async () => {
  // init some stuff
}),

// this function will be executed after each scenario
test.After( async () => {
  // cleanup
}),

// define test scenarios
test.Scenarios(
  [
    {
      title: "Scenario name",
      Run: async () => {
        // perform some actions
        // verify results
      }
    }
]);

// Important: All tests should be exported using exports object
// test runner loads test using require statement
exports.Tests = [
  test
];
```

## Run from command line
To run tests from command line the following command should be used:

node godzila <list of tests>

Example:
node godzila .\Tests\Test_1.js .\Tests\Test_2.js  