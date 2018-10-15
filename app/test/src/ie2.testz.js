

const {Builder, By, until} = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');
 ie = require('selenium-webdriver/ie');

test.describe('IE2', function() {
  let driver;

  test.before(function *() {
     var options = new ie.Options();
         options.requireWindowFocus(true)

driver = new webdriver.Builder()
    .forBrowser('ie')
    .setIeOptions(options)
    .build();
  });



  test.it('works with generators', function*() {
    yield driver.get('http://localhost:8080/#/');
    yield driver.findElement(By.className('pull-right')).click();
    yield driver.findElement(By.className('pull-right')).click();
  });

  test.after(() => driver.quit());
});

