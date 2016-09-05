const passport = require('passport'),
  config = require('../../config/config').naver,
  NaverStrategy = require('passport-naver').Strategy;

passport.use(new NaverStrategy(config,
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      console.log('naver validation');
      console.log(accessToken);
      console.log(arguments);
      // return done('asdfasdf', {'id': 'test-user'});
      return done(null, {
        user: 'a-mock-test-user'
      });
    });
    // User.findOne({
    //   'naver.id': profile.id
    // }, function(err, user) {
    //   if (!user) {
    //     user = new User({
    //       name: profile.displayName,
    //       email: profile.emails[0].value,
    //       username: profile.displayName,
    //       provider: 'naver',
    //       naver: profile._json
    //     });
    //     user.save(function(err) {
    //       if (err) console.log(err);
    //       return done(err, user);
    //     });
    //   } else {
    //     return done(err, user);
    //   }
    // });
  }
));
