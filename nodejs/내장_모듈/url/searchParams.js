const {URL} = require('url');

const myURL = new URL('http://gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
console.log('searchParams:',myURL.searchParams);
//category key를 가지고 있는 모든 value를 가져옴.
console.log('searchParams.getAll():',myURL.searchParams.getAll('category'));
//limit key를 가지고 있는 첫번째 value를 가져옴.
console.log('searchParams.get():',myURL.searchParams.get('limit'));
//page key를 가지고 있는지 검사
console.log('searchParams.has():',myURL.searchParams.has('page'));

//모든 key를 반복기 객체로 가져옴.
console.log('searchParams.keys()',myURL.searchParams.keys());
//모든 value를 반복기 객체로 가져옴.
console.log('myURL.searchParams.values():',myURL.searchParams.values());


//append 해당 키에 value를 추가함
// 기존에 있던 value를 지우지 않음.
myURL.searchParams.append('filter','es3');
myURL.searchParams.append('filter','es5');
console.log(myURL.searchParams.getAll('filter'));

//set 해당 키에 value 추가
// 기존에 있던 value 삭제후 추가
myURL.searchParams.set('filter','es6');
console.log(myURL.searchParams.getAll('filter'));

//해당 키 제거
myURL.searchParams.delete('filter');
console.log(myURL.searchParams.getAll('filter'));

//searchParams 객체를 다시 문자열로 만듬
console.log('searchParams.toString():',myURL.searchParams.toString());
//문자열을 search에 대입 => 주소 객체에 반영됨.
myURL.search = myURL.searchParams.toString();