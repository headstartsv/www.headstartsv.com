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
      subject: 'Big Data Regression',
      campStart: '2016. 12. 28',
      campEnd: '2017. 1. 24',
      applyStart: '2016. 11. 1',
      applyEnd: '2016. 12. 10',
      class: 'Advanced',
      target: '학교 / 기업 / 관공서'
    }, {
      id: '2',
      loc: 'Korea',
      title: 'Data Science Bootcamp',
      subject: 'Basic R & Python',
      campStart: '2016. 12. 28',
      campEnd: '2017. 1. 24',
      applyStart: '2016. 11. 1',
      applyEnd: '2016. 12. 10',
      class: 'Beginner',
      target: '학교 / 기업 / 관공서'
    }, {
      id: '3',
      loc: 'US',
      title: 'Data Science Bootcamp',
      subject: 'Data Analysis & Visualization',
      campStart: '2016. 12. 28',
      campEnd: '2017. 1. 24',
      applyStart: '2016. 11. 1',
      applyEnd: '2016. 12. 10',
      class: 'Advanced',
      target: '학교 / 기업 / 관공서'
    }], [{
      id: '4',
      loc: 'Korea',
      title: 'Data Science Bootcamp',
      subject: 'Big Data Regression ',
      campStart: '2016. 12. 28',
      campEnd: '2017. 1. 24',
      applyStart: '2016. 11. 1',
      applyEnd: '2016. 12. 10',
      class: 'Beginner',
      target: '학교 / 기업 / 관공서'
    }, {
      id: '5',
      loc: 'US',
      title: 'Data Science Bootcamp',
      subject: 'Big Data Regression ',
      campStart: '2016. 12. 28',
      campEnd: '2017. 1. 24',
      applyStart: '2016. 11. 1',
      applyEnd: '2016. 12. 10',
      class: 'Advanced',
      target: '학교 / 기업 / 관공서'
    }, {
      id: '6',
      loc: 'Korea',
      title: 'Data Science Bootcamp',
      subject: 'Big Data Regression ',
      campStart: '2016. 12. 28',
      campEnd: '2017. 1. 24',
      applyStart: '2016. 11. 1',
      applyEnd: '2016. 12. 10',
      class: 'Advanced',
      target: '학교 / 기업 / 관공서'
    }]]
  });
});

router.get('/:bootcampId', function (req, res, next) {
  res.render('bootcamp-detail', {});
});
