const path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {},
  staging: {},
  production: {}
};

config.development.root =
  config.staging.root =
    config.production.root = rootPath;

config.development.app =
  config.staging.app =
    config.production.app = {
  name: 'www-headstartsv-com'
};

config.development.port =
  config.staging.port =
    config.production.port = process.env.PORT || 3000;

config.development.host = 'http://localhost';
config.staging.host = 'http://dev.headstartsv.com';
config.production.host = 'http://www.headstartsv.com';

config.development.aws =
  config.staging.aws =
    config.production.aws = {
      accessKeyId: 'AKIAJ7RCKGY5EBPELPHQ',
      secretAccessKey: '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',
      region: 'us-west-2'
    };

config.development.env =
  config.staging.env =
    config.production.env = env;

config.development.db =
  config.staging.db =
    config.production.db = {
      create: env !== 'production',
      waitForActive: true,
      waitForActiveTimeout: 180000,
      prefix: env + '-'
    };



module.exports = config[env];
