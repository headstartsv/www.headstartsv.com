const express = require('express'),
  router = express.Router(),
  Dog = require('../models/article');

var odie = new Dog({
  ownerId: 4,
  name: 'Odie',
  breed: 'Beagle',
  color: ['Tan'],
  cartoon: true
});
odie.save(function (err) {
  if(err) { return console.log(err); }
  console.log('Ta-da!');
});


module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  // Article.find(function (err, articles) {
  //   if (err) return next(err);
  //   res.render('index', {
  //     title: 'Generator-Express MVC',
  //     articles: articles
  //   });
  // });
  res.render('home', {});
  // res.sendFile(path.join(__dirname + '../../public/'));
});
router.get('/test.js', function (req, res, next) {
  res.render('test', {
      message: 'Generator-Express MVC',
      articles: {
        title: 'Head Start SV Home'
      }
    });
});
