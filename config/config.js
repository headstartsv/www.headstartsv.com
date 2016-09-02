var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

module.exports = {
  root: rootPath,
  app: {
    name: 'www-headstartsv-com'
  },
  port: process.env.PORT || 3000,
  aws: {
    accessKeyId: 'AKIAJ7RCKGY5EBPELPHQ',
    secretAccessKey: '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',
    region: 'us-west-2'
  },
  env: env,
  db: {
    create: env !== 'production',
    waitForActive: true,
    waitForActiveTimeout: 180000,
    prefix: env + '-'
  }
};
