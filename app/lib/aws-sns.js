'use strict';

const AWS = require('aws-sdk')
  , config = require('../../config/config').aws;
AWS.config.update(config);
const sns = new AWS.SNS();

function contactInquiry (email, message, callback) {
  let snsMessage = `Contact Inquiry from ${email}\n--\n${message}`;

  if (process.env.NODE_ENV === 'development') {
    return sns.publish({
      Message: snsMessage,
      TargetArn: 'arn:aws:sns:us-east-1:333306551330:www-headstartsv-com-contact-inquiry-development'
    }, callback);
  }
  if (process.env.NODE_ENV === 'staging') {
    return sns.publish({
      Message: snsMessage,
      TargetArn: 'arn:aws:sns:us-east-1:333306551330:www-headstartsv-com-contact-inquiry-staging'
    }, callback);
  }

  sns.publish({
    Message: snsMessage,
    TargetArn: 'arn:aws:sns:us-east-1:333306551330:www-headstartsv-com-contact-inquiry'
  }, callback);
}

module.exports = {
  contactInquiry: contactInquiry
};
