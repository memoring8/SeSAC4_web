// callback 방식

// const fs = require('fs');

// fs.readFile('./test.txt', function(err, data) {
//     if(err) throw err;

//     console.log(data);

//     console.log(data.toString());
// });


// promise 방식

// const fs = require('fs').promises;

// fs.readFile('./test.txt')
//     .then  ((data) => {
//         console.log(data);
//         console.log(data.toString());
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// 파일 만들기

// const fs = require('fs').promises;

// fs.writeFile('./write.txt', '안녕')
//     .then(() => {
//         console.log('작성완료');
//     })
//     .catch((err) => {
//         console.log(err);
//     })


// 파일 복사하기

// const fs = require('fs').promises;

// fs.copyFile('./write.txt', './new.txt')
//     .then(() => {
//         console.log('복사완료');
//     })
//     .catch((err) => {
//         console.log(err);
//     })


// 동기 처리

const fs = require('fs').promises; // = fs.readFileSync;

async function exec() {
    await fs.writeFile('./write.txt', '안녕');
    await fs.copyFile('./write.txt', './new2.txt');

}
exec();