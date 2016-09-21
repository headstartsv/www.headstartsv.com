'use strict';

const assert = require('assert')
  // , app = require('../app')
  , sns = require('../app/lib/aws-sns');

describe('aws-sns', function () {
  it('should have unit test!', function (done) {
    assert(true, 'we expected this package author to add actual unit tests.');
    sns('message again', done);
  });
});

// describe('app', function () {
//   it('should have unit test!', function (done) {
//     assert(true, 'we expected this package author to add actual unit tests.');
//
//     app.close(function () {
//       done();
//     });
//   });
// });
