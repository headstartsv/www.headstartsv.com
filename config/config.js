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
config.development.host =
  config.staging.host =
  config.production.host = process.env.HEADSTART_ENV_HOST;

//ENV
config.development.env =
  config.staging.env =
    config.production.env = env;

//AWS
config.development.aws =
  config.staging.aws =
  config.production.aws = {
    accessKeyId: process.env.HEADSTART_ENV_AWS_ACCESSKEYID,
    secretAccessKey: process.env.HEADSTART_ENV_AWS_SECRETACCESSKEY,
    region: process.env.HEADSTART_ENV_AWS_REGION,
    snsArn: process.env.HEADSTART_ENV_AWS_SNS_ARN
};

//FACEBOOK
config.development.facebook = {
  clientID: process.env.HEADSTART_ENV_FB_ID,
  clientSecret: process.env.HEADSTART_ENV_FB_SECRET,
  callbackURL: config[env].host + ':' + config[env].port + '/auth/facebook/callback'
};
config.staging.facebook =
  config.production.facebook = {
  clientID: process.env.HEADSTART_ENV_FB_ID,
  clientSecret: process.env.HEADSTART_ENV_FB_SECRET,
  callbackURL: config[env].host + '/auth/facebook/callback'
};

//NAVER
config.development.naver = {
  clientID: process.env.HEADSTART_ENV_NAVER_ID,
  clientSecret: process.env.HEADSTART_ENV_NAVER_SECRET,
  callbackURL: config[env].host + ':' + config[env].port + '/auth/naver/callback'
};
config.staging.naver =
  config.production.naver = {
  clientID: process.env.HEADSTART_ENV_NAVER_ID,
  clientSecret: process.env.HEADSTART_ENV_NAVER_SECRET,
  callbackURL: config[env].host + '/auth/naver/callback'
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
