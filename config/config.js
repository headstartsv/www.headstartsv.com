const path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {},
  staging: {},
  production: {}
};

//ROOT
config.development.root =
  config.staging.root =
    config.production.root = rootPath;

//APP
config.development.app =
  config.staging.app =
    config.production.app = {
  name: 'www-headstartsv-com'
};

//PORT
config.development.port =
  config.staging.port =
    config.production.port = process.env.PORT || 3000;

//HOST
config.development.host = 'http://localhost';
config.staging.host = 'http://dev.headstartsv.com';
config.production.host = 'http://www.headstartsv.com';

//ENV
config.development.env =
  config.staging.env =
    config.production.env = env;

//AWS
config.development.aws =
  config.staging.aws =
    config.production.aws = {
      accessKeyId: 'AKIAJ7RCKGY5EBPELPHQ',
      secretAccessKey: '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',
      region: 'us-west-2'
};

//FACEBOOK
config.development.facebook =
  config.staging.facebook =
    config.production.facebook = {
      clientID: '1263439097023233',
      clientSecret: '339206f287ebe507a6b7a13aa8b50b2c',
      callbackURL: "http://localhost:3000/auth/facebook/callback"
};

//NAVER
config.development.naver =
  config.staging.naver =
    config.production.naver = {
      clientID: 'b_V1ta71LrxKVBMWMGUF',
      clientSecret: 'KIoNKRK6te',
      callbackURL: 'http://localhost:3000/auth/naver/callback'
};

//DB
config.development.db =
  config.staging.db =
    config.production.db = {
      create: env !== 'production',
      waitForActive: true,
      waitForActiveTimeout: 180000,
      prefix: env + '-'
};

module.exports = config[env];
