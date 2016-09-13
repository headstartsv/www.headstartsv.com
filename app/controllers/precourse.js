const express = require('express'),
  router = express.Router();

module.exports = function (app) {
  app.use('/precourse', router);
};

router.get('/', function (req, res, next) {
  console.log(req.params);
  res.render('precourse', {});
});
