// os 모듈

const os = require('os');

// 1 사용 가능한 메모리(ram ) 출력하기
console.log(os.freemem());

// 2 전체 메모리 용량 출력하기
console.log(os.totalmem());

// 3 홈 디렉토리 경로 출력하기
console.log(os.homedir());







// path 모듈

const path = require("path");

// 1 경로 구분자 출력하기
console.log(path.dirname(__filename));

// 2 현재 파일의 확장자 출력하기
console.log(path.extname(__filename));

// 3 현재 파일의 경로를 분리해서 출력하기
console.log(path.parse(__filename));



