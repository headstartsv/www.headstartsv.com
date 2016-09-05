const passport = require('passport'),
  config = require('../../config/config').facebook,
  FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy(config,
  function(accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    console.log(arguments);
    return done(null, {
      user: 'a-mock-test-user'
    })
  }
));
