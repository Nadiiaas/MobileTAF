class TestRunner {
    constructor() {
        this.report = {
            duration: 0,
            success: 0,
            fail: 0
        };
    }

    async Run(tests) {
        console.log(`Running ${tests.length} tests`);
        const startTime = new Date();
        for (let i = 0; i < tests.length; i++) {
            const result = await tests[i].Run();
            if (result.totalScenarios === result.passed) {
                this.report.success++;
            }
            else {
                this.report.fail++;
            }
        }

        this.report.duration = (new Date() - startTime);
        console.log(`Finished in ${this.report.duration}, passed: ${this.report.success}, failed: ${this.report.fail}`);
        return this.report;
    }
}

module.exports = {
    TestRunner
}