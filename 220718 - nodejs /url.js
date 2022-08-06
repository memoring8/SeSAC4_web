// searchParams

// url 이란 인터넷 주소를 쉽게 조작하도록 도와 주는 모듈 입니다 

const {Console} = require('console');
const url = require('url');
const { URL } = url;

const string = 'https://sesac.seoul.kr/common/greeting.do';
const naver = new URL(string);
// new 연산자는 사용자 정의 객체 타입 또는 내장 객체 타입의 인스턴스를 생성한다.
// https://ko.javascript.info/constructor-new
// new 연산자와 생성자 함수
// 객체 리터럴 {...} 을 사용하면 객체를 쉽게 만들 수 있습니다. 그런데 개발을 하다 보면 유사한 객체를 여러 개 만들어야 할 때가 생기곤 합니다. 복수의 사용자, 메뉴 내 다양한 아이템을 객체로 표현하려고 하는 경우가 그렇죠.
// 'new' 연산자와 생성자 함수를 사용하면 유사한 객체 여러 개를 쉽게 만들 수 있습니다.
// 생성자 함수
// 생성자 함수(constructor function)와 일반 함수에 기술적인 차이는 없습니다. 다만 생성자 함수는 아래 두 관례를 따릅니다.
// 함수 이름의 첫 글자는 대문자로 시작합니다.
// 반드시 'new' 연산자를 붙여 실행합니다.



console.log(url.format(naver));
// url.format(객체);  분해되었던 url 객체를 다시 원래 상태로 조립합니다 

console.log(url.parse(string));
// url.parse
// url.parse(주소) 는 주소를 분해 합니다 
// url 문자열을 url 객체로 변환하여 리턴합니다. 
// Url {
//   protocol: 'https:',
//   slashes: true,
//   auth: null,
//   host: 'sesac.seoul.kr',
//   port: null,
//   hostname: 'sesac.seoul.kr',
//   hash: null,
//   search: null,
//   query: null,
//   pathname: '/common/greeting.do',
//   path: '/common/greeting.do',
//   href: 'https://sesac.seoul.kr/common/greeting.do'
// }

console.log(naver.searchParams);


querystring.parse(쿼리) //: url 의 query 부분을 자바스크립트 객체로 분해 
querystring.stringify(객체) //: 분해된 query 객체를 문자열로 다시 조립합니다 
