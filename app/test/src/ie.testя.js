
const {Builder, By, until} = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');

test.describe('ie', function() {
  let driver;

  test.before(function *() {
    driver = yield new Builder().forBrowser('ie').build();
  });

  test.it('works with generators', function*() {
    yield driver.get('http://localhost:8080/#/');
    var element = driver.wait(until.elementLocated(By.className("pull-right")), 9000/*ms*/);
    yield driver.findElement(By.className("pull-right")).click();
    yield driver.findElement(By.className("pull-right")).click();
  });

  test.after(() => driver.quit());
});
