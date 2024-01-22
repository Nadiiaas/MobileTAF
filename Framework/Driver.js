const { remote } = require('webdriverio');

class Driver { 
    async setup(wdOpts) {
        this.driver = await remote(wdOpts);
    }

    clickElementById(elementId) {
        return this.driver.$(elementId).click();
    }

    getTextById(elementId) {
        return this.driver.$(elementId).getText();
    }

    quit() {
        if(this.driver) {
            return this.driver.deleteSession();
        }
    }
}

module.exports = {
    Driver
}