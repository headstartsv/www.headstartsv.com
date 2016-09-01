var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'www-headstartsv-com'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/www-headstartsv-com-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'www-headstartsv-com'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/www-headstartsv-com-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'www-headstartsv-com'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/www-headstartsv-com-production'
  }
};

module.exports = config[env];
