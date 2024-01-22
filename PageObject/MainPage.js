class MainPage {
  constructor(driver) {
    this.name = "MainPage";
    this.driver = driver;

    this.number="com.google.android.calculator:id/digit_${i}";
    this.digitLocators = Array.from({ length: 10 }, (_, i) => `com.google.android.calculator:id/digit_${i}`);
    this.plusBtn = "com.google.android.calculator:id/op_add";
    this.operatorBtn = "com.google.android.calculator:id/op_${operator}";
    this.pointBtn ="com.google.android.calculator:id/dec_point";
    this.deleteBtn ="com.google.android.calculator:id/del";
    this.multiplyBtn = "com.google.android.calculator:id/op_mul";
    this.minusBtn = "com.google.android.calculator:id/op_sub";
    this.result ="com.google.android.calculator:id/result_preview";
  }
  
  //methods
  clickNumber(digit) {
    const locator = `android=new UiSelector().resourceId("${this.digitLocators[digit]}")`;
    return this.driver.clickElementById(locator);
  }

  getResult() {
    const resultResourceId = `android=new UiSelector().resourceId("${this.result}")`;
    return this.driver.getTextById(resultResourceId);
  }

  clickEquals() {
    const locator = `android=new UiSelector().resourceId("${this.equalsBtn}")`;
    return this.driver.clickElementById(locator);
  }

  clickDigit(digit){
    const digitLocator = this.digitLocators[digit];
    return this.driver.clickElementById(digitLocator);
  }

  clickPlusButton() {
    const locator = `android=new UiSelector().resourceId("${this.plusBtn}")`;
    return this.driver.clickElementById(locator);
  }

  clickPointBtn() {
    const locator = `android=new UiSelector().resourceId("${this.pointBtn}")`;
    return this.driver.clickElementById(locator);
  }

  clickDeleteBtn() {
    const locator = `android=new UiSelector().resourceId("${this.deleteBtn}")`;
    return this.driver.clickElementById(locator);
  }

  clickMultiplyButton() {
    const locator = `android=new UiSelector().resourceId("${this.multiplyBtn}")`;
    return this.driver.clickElementById(locator);
  }

  clickMinusButton() {
    const locator = `android=new UiSelector().resourceId("${this.minusBtn}")`;
    return this.driver.clickElementById(locator);
  }
}

module.exports= {
  MainPage
};