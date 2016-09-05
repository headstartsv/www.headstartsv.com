const express = require('express'),
  router = express.Router(),
  passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  FacebookStrategy = require('passport-facebook').Strategy,
  NaverStrategy = require('passport-naver').Strategy;

//define REST proxy options based on logged in user
passport.serializeUser(function(user, done) {
  console.log('serialize');
  console.log(user);
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  console.log('deserialize');
  console.log(obj);
  done(null, obj);
});

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'passwd',
    session: true
  },
  function(username, password, done) {
    // User.findOne({ username: username }, function (err, user) {
    //   if (err) { return done(err); }
    //   if (!user) { return done(null, false); }
    //   if (!user.verifyPassword(password)) { return done(null, false); }
    //   return done(null, user);
    // });
    console.log('local sign in : ' + username + ', ' + password);
    return done(null, {
      user: 'a-mock-test-user'
    });
  }
));

passport.use(new NaverStrategy({
    clientID: 'b_V1ta71LrxKVBMWMGUF',
    clientSecret: 'KIoNKRK6te',
    callbackURL: 'http://localhost:3000/auth/naver/callback'
  },
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

passport.use(new FacebookStrategy({
    clientID: '1263439097023233',
    clientSecret: '339206f287ebe507a6b7a13aa8b50b2c',
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
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


router.post('/hssv',
  passport.authenticate('local', { failureRedirect: '/signinfail' }),
  function(req, res) {
    res.redirect('/');
  });

router.get('/naver', passport.authenticate('naver', {
  failureRedirect: 'auth/login'
}));

router.get('/naver/callback', passport.authenticate('naver', { failureRedirect: '/login' }),
  function(req, res, next) {
    console.log('naver callback next ok /naver/callback');
    // Successful authentication, redirect home.
    res.redirect('/');
  });

router.get('/facebook', passport.authenticate('facebook', {
  failureRedirect: 'auth/login'
}));

router.get('/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

module.exports = function (app) {
  app.use('/auth', router);
};
