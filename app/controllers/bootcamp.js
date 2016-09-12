const express = require('express'),
  router = express.Router();



module.exports = function (app) {
  app.use('/bootcamp', router);
};

router.get('/', function (req, res, next) {
  res.render('bootcamp', {
    itemRows: [[{
      id: '1',
      loc: 'US',
      title: 'Data Science Bootcamp',
      campStart: '2016. 12. 28',
      campEnd: '2017. 1. 24',
      applyStart: '2016. 11. 1',
      applyEnd: '2016. 12. 10',
      target: 'Advanced'
    }, {
      id: '2',
      loc: 'Korea',
      title: 'Data Science Bootcamp',
      campStart: '2016. 12. 28',
      campEnd: '2017. 1. 24',
      applyStart: '2016. 11. 1',
      applyEnd: '2016. 12. 10',
      target: 'Advanced'
    }, {
      id: '3',
      loc: 'US',
      title: 'Data Science Bootcamp',
      campStart: '2016. 12. 28',
      campEnd: '2017. 1. 24',
      applyStart: '2016. 11. 1',
      applyEnd: '2016. 12. 10',
      target: 'Advanced'
    }], [{
      id: '4',
      loc: 'Korea',
      title: 'Data Science Bootcamp',
      campStart: '2016. 12. 28',
      campEnd: '2017. 1. 24',
      applyStart: '2016. 11. 1',
      applyEnd: '2016. 12. 10',
      target: 'Advanced'
    }, {
      id: '5',
      loc: 'US',
      title: 'Data Science Bootcamp',
      campStart: '2016. 12. 28',
      campEnd: '2017. 1. 24',
      applyStart: '2016. 11. 1',
      applyEnd: '2016. 12. 10',
      target: 'Advanced'
    }, {
      id: '6',
      loc: 'Korea',
      title: 'Data Science Bootcamp',
      campStart: '2016. 12. 28',
      campEnd: '2017. 1. 24',
      applyStart: '2016. 11. 1',
      applyEnd: '2016. 12. 10',
      target: 'Advanced'
    }]]
  });
});
