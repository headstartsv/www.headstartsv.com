const express = require('express'),
  config = require('./config/config'),
  glob = require('glob'),
  dynamoose = require('dynamoose');

dynamoose.setDefaults(config.db);
dynamoose.AWS.config.update(config.aws);

glob.sync(config.root + '/app/models/*.js').forEach(function (model) {
  require(model);
});
var app = express();

require('./config/express')(app, config);

module.exports = app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});
