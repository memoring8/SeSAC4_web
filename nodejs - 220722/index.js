// https://expressjs.com/ko/guide/routing.html


const express = require('express');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');
// https://rat2.tistory.com/9

app.use('/abc', express.static('public'));
// app.use()의 값으로 시작하는 모든 경로에 응답

app.get('/', (req, res) => {
    var list = ['apple', 'banana']; //DB에서 정보를 가져왔다.
    res.render('test', {list: list});
});
// 특정 경로

app.listen(port, () => {
    console.log('server port : ', port);
});