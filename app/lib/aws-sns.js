'use strict';

const AWS = require('aws-sdk')
  , config = require('../../config/config').aws;
AWS.config.update(config);
const sns = new AWS.SNS();

module.exports = function (message, callback) {
  sns.publish({
    Message: message,
    TargetArn: 'arn:aws:sns:us-east-1:333306551330:www-headstartsv-com-contact-inquiry'
  }, callback);
};
