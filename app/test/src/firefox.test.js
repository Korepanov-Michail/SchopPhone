
const {Builder, By, until} = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');

test.describe('firefox', function() {
  let driver;

  test.before(function *() {
    driver = yield new Builder().forBrowser('firefox').build();
  });

  it('works with promises', function() {
  return driver.get('http://localhost:8080/#/')
  .then(_ => driver.findElement(By.className('pull-right')).click())
  .then(_ => driver.findElement(By.className('pull-right')).click())
});

  test.it('works with generators', function*() {
    yield driver.get('http://localhost:8080/#/');
    yield driver.findElement(By.className('pull-right')).click();
    yield driver.findElement(By.className('pull-right')).click();
  });

     test.it('3', function*() {
    yield driver.get('http://localhost:8080/#/');
    yield driver.findElement(By.linkText("Apple iPhone 5c")).click();
    yield driver.findElement(By.className('btn-info')).click();
    yield driver.findElement(By.linkText("Apple")).click();
    yield driver.findElement(By.linkText("Apple iPhone 5c")).click();
    yield driver.findElement(By.className('btn-info')).click();
  });

  test.after(() => driver.quit());
});
