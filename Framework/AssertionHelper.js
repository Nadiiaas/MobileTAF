class AssertionHelper {
    assertEqual(message, actual, expected) {
        console.log(`\t\t${message}. Actual: ${actual}, Expected: ${expected}`);
        if (actual !== expected) {
            throw new Error(message || `Assertion failed: Expected ${expected}, but got ${actual}`);
        }
    }

    assertTrue(message, condition) {
        console.log(`\t\t${message}. Value: ${condition}`);
        if (!condition) {
            throw new Error(message || "Assertion failed: Expected true, but got false");
        }
    }

    assertNotNull(message, value) {
        console.log(`\t\t${message}. Value: ${value}`);
        if (value === null || value === undefined) {
            throw new Error(message || "Assertion failed: Expected a non-null value, but received null or undefined");
        }
    }
}

module.exports= {
    AssertionHelper
};