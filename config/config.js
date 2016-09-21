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
    config.production.port = process.env.PORT || 3001;

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
      region: 'us-east-1'
};

//FACEBOOK
config.development.facebook =
  config.staging.facebook =
    config.production.facebook = {
      clientID: 'S0I1f6STn3vBTb0lQ1hu',
      clientSecret: 'vWLgAuXgc1',
      callbackURL: "http://localhost:3000/auth/facebook/callback"
};

//NAVER
config.development.naver = {
  clientID: 'S0I1f6STn3vBTb0lQ1hu',
  clientSecret: 'vWLgAuXgc1',
  callbackURL: 'http://localhost:3000/auth/naver/callback'
};
config.staging.naver = {
  clientID: 'S0I1f6STn3vBTb0lQ1hu',
  clientSecret: 'vWLgAuXgc1',
  callbackURL: 'http://localhost:3000/auth/naver/callback'
}
config.production.naver = {
  clientID: 'b_V1ta71LrxKVBMWMGUF',
  clientSecret: 'KIoNKRK6te',
  callbackURL: 'http://www-headstartsv-com.us-east-1.elasticbeanstalk.com/auth/naver/callback'
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
