// fs 모듈은 FileSystem의 약자로 파일 처리와 관련된 모듈

const fs = require('fs');

fs.readFile('./text.txt', 'utf8', (err, data) => {
    if (err) throw err;
    // https://webruden.tistory.com/947
    // https://itadventure.tistory.com/505
    

    console.log(data);
    console.log(data.toString());
    //  toString 데이터타입을 문자로 변경
})