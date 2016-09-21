const express = require('express')
  , router = express.Router()
  , sns = require('../lib/aws-sns');

module.exports = function (app) {
  app.use('/api', router);
};

router.post('/contact-inquiry', function (req, res, next) {
  console.log(req.body);
  if (!req.body.email) {
    res.json({
      result: 1,
      message: 'no email address'
    });
    return;
  }
  if (!req.body.message) {
    res.json({
      result: 2,
      message: 'no message'
    });
    return;
  }

  sns.contactInquiry(req.body.email, req.body.message, function (err, result) {
    if (err) {
      console.error(err);
      res.json({
        result: 3,
        message: 'internal error'
      });
    } else {
      console.info(result);
      res.json({
        result: 0,
        message: 'email sent ok'
      });
    }
  });
});
