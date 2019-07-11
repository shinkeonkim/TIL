const url = require('url');

// WHATWG의 url 구분 방법
console.log('------------------------------');
const URL = url.URL;
const myURL = new URL('http://gilbut.co.kr/book/booklist.aspx?sercate1=001001000#anchor');
console.log('new URL():',myURL);
console.log('url.format():',url.format(myURL));
// 기존 node의 url 구분 방법
console.log('------------------------------');
const parsedUrl = url.parse('http://gilbut.co.kr/book/booklist.aspx?sercate1=001001000#anchor');
console.log('url.parse():',parsedUrl);
console.log('url.format():',url.format(parsedUrl));

/*
두 방법은 취향에 따라 사용 가능하다.
하지만 노드의 url 방식을 사용해야 하는 경우가 있다.
주소가 host 부분 없이 hostname 부분만 오는 경우 WHATWG 방식은 이 주소를 처리할 수 없으므로
노드의 url 방식을 사용해야 한다.

WHATWG의 유용한 점
- search 부분을 searchParams라는 특수한 객체로 반환함
- search 부분은 주소를 통해 데이터를 전달할 때 사용함. (?키1 = 값1&키2=값2 ...)

*/