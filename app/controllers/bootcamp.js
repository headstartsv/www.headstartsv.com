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
    location: '3350 Thomas Rd, Santa Clara, CA, U.S, Headstart SiliconValley',
    campStart: '2016. 12. 28',
    campEnd: '2017. 1. 24',
    person: 25,
    scheduleBrief: '9:00 A.M ~ 05:00 P.M (주 2회 Project Feedback Seminar)',
    projectList: '스팸 이메일 분류<br/>부동산 가격 예측<br/>은행 자료 시각화<br/>Gapminder 자료 시각화<br/>셰익스티어 희곡 Word Cloud 시각화',
    supplies: '개인 노트북',
    instructorPicture: '/img/instructor-01.png',
    instructorName: '권재명',
    instructorCareer: [
      'UC Berkeley 통계학 박사 (1996 ~ 2000)',
      'UC Berkeley ITS (Institute of Transportation Studies) 연구원 ( 2000 ~ 2004)',
      'California State University, East Bay 통계학과 조교수 (2004 ~ 2009)',
      'Data Science Manager AOL Advertising (2009 ~ 2015)',
      'Silicon Valley "A Company" Senior Data Scientist (2015~)'
    ],
    bootcampPrerequisites: [[{
      name: 'Spam e-mail',
      description: '스팸 메일 분류 분석<br/>사용 언어 : R<br/>소요 기간 : 4일'
    }, {
      name: 'Real-Estimate',
      description: '부동산 가격 예측<br/>사용 언어 : R<br/>소요 시간 : 4일'
    }], [{
      name: 'Word Cloud',
      description: '셰익스피어 희곡 시각화<br/>사용 언어 : R<br/>소요 기간 : 4시간'
    }, {
      name: 'World Bank',
      description: '세계 은행 자료 시각화<br/>사용 언어 : R<br/>소요 시간 : 1일'
    }]],
    descriptionChart: [{
      title: 'Headstart',
      position: 'Data Scientist',
      requirement: 'What you would get after bootcamp',
      requirementList: [
        'Experience with statistical modelling / machine learning',
        'understanding of relevant statistical measures such as confidence intervals, significance of error measurements, development and evaluation data sets',
        'Experience working with statistical packages R',
        'Experience analyzing data related to daily functions',
        'Deep interest and aptitude in data, metrics, analysis and trends, and applied knowledge of measurement, statistics and program evaluation'
      ]
    }, {
      title: 'Amazon',
      position: 'Data Analysist',
      requirement: 'Requirements',
      requirementList: [
        'Bachelor’s or Master’s degree in a relevant field',
        'Experience in Perl, Python, or another scripting language; command line usage',
        'Track record of diving into data to discover hidden patterns and of conducting error/deviation analysis',
        'Experience with statistical modelling / machine learning',
        'understanding of relevant statistical measures such as confidence intervals, significance of error measurements, development and evaluation data sets, etc'
      ]
    }, {
      title: 'Google',
      position: 'Data Scientist',
      requirement: 'Requirements',
      requirementList: [
        'BA/BS degree or equivalent practical experience.',
        'Experience working with statistical packages (e.g., R, SAS, Stata, MATLAB, etc).',
        'Experience analyzing data related to daily functions of an IT organization (e.g. incident ticket volume, ticket response and resolution time, spend, customer satisfaction).',
        'Deep interest and aptitude in data, metrics, analysis and trends, and applied knowledge of measurement, statistics and program evaluation'
      ]
    }],
    expectedResult: [
      '/img/bootcamp-result-1.png',
      '/img/bootcamp-result-2.png',
      '/img/bootcamp-result-3.png'
    ],
    bootcampDescription: [
      'HeadStart SV<br/>Bootcamp<br/>Description',
      'Job Description<br/>(Glassdoor)',
      'Job Description<br/>(Monster)'
    ],
    curriculum: [{
      title: '1주차',
      subTitle: 'R, dplyr 을 이용한 자료처리',
      item: 'R 분석 코드 기초<br/>Gapminder, Flight 자료 분석<br/>Gapminder, Flight 자료 시각화'
    }, {
      title: '2주차',
      subTitle: '분석 기법',
      item: '통계 개념 학습<br/>가설검정과 신뢰구간<br/>범주형/수량형 변수<br/>5 가지 자료 종류 조합 및 분석'
    }, {
      title: '3주차',
      subTitle: '빅 데이터 분류 분석 1',
      item: '분류분석 개념<br/>정확도 지표<br/>모형의 복잡도<br/>모형 평가'
    }, {
      title: '4주차',
      subTitle: '빅 데이터 분류 분석 2',
      item: '로지스틱 회귀분석<br/>라쏘 모형과 Glmnet<br/>나무모형<br/>랜덤 포레스트<br/>부스팅'
    }, {
      title: '5주차',
      subTitle: '빅데이터 회귀분석 1',
      item: '회귀분석 개념<br/>정확도 지표<br/>모형의 복잡도<br/>모형 평가'
    }, {
      title: '6주차',
      subTitle: '빅데이터 회귀분석 2',
      item: '선형 회귀분석 및 변수 선택<br/>라쏘 모형과 Glmnet<br/>나무 모형<br/>랜덤 포레스트<br/>부스팅'
    }, {
      title: '7주차',
      subTitle: '공간자료 시각화',
      item: '공간자료 처리<br/>라이브러리<br/>ggplot 2 maps<br/>Leaflet'
    }, {
      title: '8주차',
      subTitle: '텍스트자료 시각화',
      item: '텍스트 자료<br/>자연어 처리 기본개념<br/>단어구름 (Word Cloud)'
    }],
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
    price: '$0'
  });
});


router.get('/:bootcampId/apply', function (req, res, next) {
  console.log(req.params);
  let bootcampId = req.params['bootcampId'] || null;
  //TODO check bootcampId, if it is invalid id, route to bootcamp main page.

  res.render('bootcamp-apply', {});
});
