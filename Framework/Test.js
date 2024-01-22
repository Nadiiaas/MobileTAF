class Test {
    constructor(name) {
        this.name = name;
        this.before = undefined;
        this.after = undefined;
        this.scenarios = [];

        this.result = {
            totalScenarios: 0,
            passed: 0,
            failed: 0
        };
    }

    Before(func) {
        this.before = func;
    }

    After(func) {
        this.after = func;
    }

    Scenarios(scenarios) {
        this.scenarios = scenarios;
    }

    async Run() {
        console.log(`Start test: ${this.name}`);

        this.result.totalScenarios = this.scenarios.length;
        this.result.failed = 0;
        this.result.passed = 0;

        for(let i = 0; i < this.scenarios.length; i++) {
            console.log(`\tStart test scenario: ${this.scenarios[i].title}`);
            try {
                await this.before();
                await this.scenarios[i].Run();
                await this.after();
            }
            catch(error) {
                console.log(`\t${this.scenarios[i].title} failed. ${error.message}`);

                this.result.failed++;
            }

            this.result.passed++;
        }

        console.log(`Test finished. Total scenarios: ${this.result.totalScenarios}, passed: ${this.result.passed}, failed: ${this.result.failed}`);

        return this.result;
    }
}

module.exports= {
    Test
};