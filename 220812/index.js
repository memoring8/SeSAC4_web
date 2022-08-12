const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(cookieParser('1234'));

const cookieConfig = {
    maxAge: 30000,   // 설정한 시간 뒤에 사라짐
    path: '/',  // 쿠키에 접근할 수 있는 루트   // 시작 경로 (라우트 같은)
    httpOnly: true,  // 웹서버 통해서만 쿠키 접근 가능
    signed: true,   // value 암호화
};

app.get('/', (req, res) => {
    res.cookie('key', 'value', cookieConfig);
    res.cookie('key2', 'value2', cookieConfig);
    res.render('index');
});

app.get('/get', (req, res) => {
    console.log(req.cookies);
    res.send(req.cookies);
});

app.get ('/cookie', (req, res) => {
    res.render('cookie');
});

app.get('/popup', (req, res) => {
    res.render('실습48');
})

app.listen(8000, () => {
    console.log('server : ', 8000);
});