const url = require('url');
const querystring = require('querystring');

const parsedURL = url.parse('http://gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
// url의 query 부분을 자바스크립트 객체로 분해해줌.
const query = querystring.parse(parsedURL.query);
console.log('querystring.parse():',query);
// 분해된 query 객체를 다시 조립
console.log('querystring.stringify():',querystring.stringify(query));