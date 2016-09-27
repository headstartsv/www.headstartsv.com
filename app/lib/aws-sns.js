'use strict';

const AWS = require('aws-sdk')
  , config = require('../../config/config').aws;
AWS.config.update(config);
const sns = new AWS.SNS();

function contactInquiry (email, message, callback) {
  let snsMessage = `Contact Inquiry from ${email}\n--\n${message}`;

  return sns.publish({
    Message: snsMessage,
    TargetArn: config.snsArn
  }, callback);
}

module.exports = {
  contactInquiry: contactInquiry
};
