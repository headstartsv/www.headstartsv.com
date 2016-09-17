const express = require('express'),
  router = express.Router(),
  passport = require('passport');
require('../auth/hssv');
require('../auth/naver');
require('../auth/facebook');

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

//HEAD START SV LOCAL AUTH
router.post('/hssv',
  passport.authenticate('local', { failureRedirect: '/signinfail' }),
  function(req, res) {
    res.redirect('/');
  });

//NAVER OAUTH2
router.get('/naver', passport.authenticate('naver', {
  failureRedirect: 'auth/login'
}));

router.get('/naver/callback', passport.authenticate('naver', { failureRedirect: '/login' }),
  function(req, res, next) {
    res.redirect('/');
  });

//FACEBOOK OAUTH2
router.get('/facebook', passport.authenticate('facebook', {
  failureRedirect: 'auth/login'
}));

router.get('/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

//SIGN OUT
router.get('/signout', function (req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = function (app) {
  app.use('/auth', router);
};
