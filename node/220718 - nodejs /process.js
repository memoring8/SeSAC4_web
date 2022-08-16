// process
// https://m.blog.naver.com/pjok1122/221522745239

// console.log(process.version);
// console.log(process.arch);
// console.log(process.platform);
// console.log(process.uptime());
// console.log(process.execPath);
// console.log(process.cpuUsage());
// console.log(process.env);

console.log(process.env);           // 컴퓨터 환경과 관련된 정보를 가진 객체
console.log(process.version);       // node.js의 버전
console.log(process.versions);      // node.js와 연관된 프로그램들의 버전을 가진 객체
console.log(process.arch);          // 프로세서의 아키텍처(arm/ia32/x64)
console.log(process.platform);      // 플랫폼(win32/linux/sunos/freebsd/darwin)
console.log(process.memoryUsage()); // 메모리 사용 정보를 가진 객체
console.log(process.uptime());      // 현재 프로그램이 실행된 시간



// os 모듈
// 운영체제의 정보를 담고 있는 내장 모듈

const os = require('os');
console.log(os.hostname());



// path 모듈
// 파일/폴더/디렉터리 등의 경로를 편리하게 설정할 수 있는 기능을 제공한다.
// 폴더와 파일의 경로를 쉽게 조작하도록 도와주는 모듈

const path = require('path');
const string = __filename;
console.log(string);
console.log (path.extname(string));
// path.extname(__filename) - "확장자" 확인
// https://curryyou.tistory.com/361


