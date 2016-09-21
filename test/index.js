'use strict';

const assert = require('assert')
  , app = require('../app');

describe('app', function () {
  it('should have unit test!', function (done) {
    assert(true, 'we expected this package author to add actual unit tests.');

    app.close(function () {
      done();
    });
  });
});
