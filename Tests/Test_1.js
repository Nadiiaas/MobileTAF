/* 
 * Test case title - TEST_1 Verification of mathematical operations
 * Purpose - Test to verify mathematical operations.
 */
const { MainPage } = require('../PageObject/MainPage');
const { Driver } = require('../Framework/Driver');
const { Test} = require('../Framework/Test');
const { AssertionHelper } = require('../Framework/AssertionHelper');

const assertionHelper = new AssertionHelper();

let driverAppium;
let basePage;

const wdOpts = {
  hostname: process.env.APPIUM_HOST || 'localhost',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: 'error',
  capabilities: {
    platformName: "Android",
    'appium:automationName': 'UiAutomator2',
    'appium:app': __dirname + "\\calculator.apk",
  }
};

const test = new Test("Verification of mathematical operations");

// this function will be executed before each scenario
test.Before( async () => {
  console.log("\t\tScenario before");
  driverAppium = new Driver();
  await driverAppium.setup(wdOpts);
  
  basePage = new MainPage(driverAppium);
}),

// this function will be executed after each scenario
test.After( async () => {
  console.log("\t\tScenario after");
  await driverAppium.quit();
}),

// define test scenarios
test.Scenarios(
  [
    {
      title: "Scenario 1. Verify sum operation",
      Run: async () => {
        await basePage.clickNumber(2);
        await basePage.clickPlusButton();
        await basePage.clickNumber(2);

        const sum = await basePage.getResult();

        assertionHelper.assertEqual("Verify sum operation", +sum, 4);
      }
    },

    {
      title: "Scenario 2. Verify diff operation",
      Run: async () => {
        await basePage.clickNumber(7);
        await basePage.clickMinusButton();
        await basePage.clickNumber(5);

        const diff = await basePage.getResult();

        assertionHelper.assertNotNull("Diff should not be null or undefined", diff);
      }
    },

    {
      title: "Scenario 3. Verify multiply operation",
      Run: async () => {
        await basePage.clickNumber(6);
        await basePage.clickMultiplyButton();
        await basePage.clickNumber(7);
        
        await driverAppium.driver.pause(2000);
        const mult = await basePage.getResult();

        assertionHelper.assertTrue("Verify multiply operation", +mult === 42);
      }
    }
]);

// All tests should be exported using exports object
// test runner loads test using require statement
exports.Tests = [
  test
];