// searchParams

const {Console} = require('console');
const url = require('url');
const { URL } = url;

const string = 'https://sesac.seoul.kr/common/greeting.do';
const naver = new URL(string);

console.log(url.format(naver));
console.log(url.parse(string));

console.log(naver.searchParams);


