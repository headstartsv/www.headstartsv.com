'use strict';

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
  console.log(req.params);
  let bootcampId = req.params['bootcampId'] || null;
  //TODO check bootcampId, if it is invalid id, route to bootcamp main page.

  res.render('bootcamp-detail', {
    id: bootcampId,
    name: 'Project 진행 + Feedback Seminar',
    location: '3350 Thomas Rd, Santa Clara, CA, U.S, Headstart SiliconValley',
    campStart: '2016. 12. 28',
    campEnd: '2017. 1. 24',
    scheduleBrief: '9:00 A.M ~ 05:00 P.M (주 2회 Project Feedback Seminar)',
    projectList: '산불 예측<br/>자전거 수요 예측<br/>AirBnB Data 를 활용한 여행객 수요 예측<br/>의료 Data 를 활용한 암 진행 정도와 사망 연관성 분석<br/>기타',
    supplies: '개인 노트북',
    bootcampSpacePictures: [[
      '/img/background0.jpg',
      '/img/background1.jpg'
    ], [
      '/img/background2.jpg',
      '/img/background3.jpg'
    ]],
    bootcampSpaceDesciption: [
      'WIFI제공',
      'Printer, Fax, Copy Machine 사용가능',
      '탕비실 완비',
      '주차장'
    ],
    projectDescription: [[{
      name: 'Project Name 1',
      description: '프로젝트 목표<br/>사용언어<br/>소요시간'
    }, {
      name: 'Project Name 2',
      description: '프로젝트 목표<br/>사용언어<br/>소요시간'
    }], [{
      name: 'Project Name 3',
      description: '프로젝트 목표<br/>사용언어<br/>소요시간'
    }, {
      name: 'Project Name 4',
      description: '프로젝트 목표<br/>사용언어<br/>소요시간'
    }]],
    bootcampDescription: [
      'HeadStart SV<br/>Bootcamp<br/>Description',
      'Job Description<br/>(Glassdoor)',
      'Job Description<br/>(Monster)'
    ],
    schedule: [
      '4주 (월요일 ~ 금요일)',
      '9 am ~ 5 pm',
      '주 1회 기업 방문 및 Field Trip',
      '주 1회 이상 Social Event 참석',
      '주 2회 Data Science Seminar (with Data Scientist)'
    ],
    including: [
      '항공 티켓',
      '차량 운행',
      '숙박 시설',
      '식사 제공(아침 & 저녁)',
      '기업 방문',
      '프로젝트 진행',
      '포트폴리오 제작',
      'Social Event 참여',
      '생활 지원'
    ],
    price: '$10,000'
  });
});


router.get('/:bootcampId/apply', function (req, res, next) {
  console.log(req.params);
  let bootcampId = req.params['bootcampId'] || null;
  //TODO check bootcampId, if it is invalid id, route to bootcamp main page.

  res.render('bootcamp-apply', {});
});
