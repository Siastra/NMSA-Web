// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js

    browser
      .url('http://localhost/#/dashboard')
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('#app')
      .waitForElementVisible('#missings', 5000)
      .assert.elementPresent('#missings')
      .execute("document.querySelectorAll('input[type=file]')[0].style.display = 'block';")
      .execute("document.querySelectorAll('input[type=file]')[1].style.display = 'block';")
      .execute("document.querySelectorAll('input[type=file]')[0].id = 'absenceUpload';")
      .execute("document.querySelectorAll('input[type=file]')[1].id = 'testUpload';")
      .pause(100)
      .setValue('#absenceUpload', require('path').resolve(__dirname + '/AbsencePerStudent.txt'))
      .setValue('#testUpload', require('path').resolve(__dirname + '/Examinations.txt'))
      .waitForElementVisible('.dz-success-mark', 60000)
      .assert.elementPresent('.dz-success-mark')
      .click('a[href="#/log"]')
      .useXpath()
      .waitForElementVisible('//td[text()="The driver name is SQLiteJDBC"]', 10000)
      .assert.elementPresent('//td[text()="The driver name is SQLiteJDBC"]')
      .end()
  }
}
