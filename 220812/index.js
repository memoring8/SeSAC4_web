const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();

app.set('view engine', 'ejs');
app.use(cookieParser('1234'));
app.use(session({
    secret: "secret key",   // session에 무조건 있어야 함. (필수값)
    // resave: false, 
    // saveUninitialized: true,    // session을 만들어 놓음 ,,?
}));
    

const cookieConfig = {
    maxAge: 30000,   // 설정한 시간 뒤에 사라짐
    path: '/',  // 쿠키에 접근할 수 있는 루트   // 시작 경로 (라우트 같은)
    httpOnly: true,  // 웹서버 통해서만 쿠키 접근 가능
    signed: true,   // value 암호화
};

app.get('/', (req, res) => {
    req.session.name = '홍길동';

    res.cookie('key', 'value', cookieConfig);
    res.cookie('key2', 'value2', cookieConfig);
    res.render('index');
});

app.get('/get', (req, res) => {
    console.log(req.session.name);

    console.log(req.cookies);
    res.send(req.cookies);
});

app.get ('/cookie', (req, res) => {
    res.render('cookie');
});

app.get ('/destroy', (req, res) => {
    req.session.destroy(function(err){
        res.send('삭제');
    });
    req.session.name = "";  // 하나만 바꾸고 싶을때, 빈값으로 둔다.
});


// 

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    var flag = true;
    if (flag) {
       req.session.id = req.body.id; 
        res.redirect('profile');    // redirect = 이동 
    } else res.redirect('login');
});

app.get('/profile', (req, res) => {
    if (req.session.id == undefined || req.session.id == "") {
        res.redirect('/login');
        return false;
    }

    req.session.id // 로 작업 ~
    res.render('profile');
});

app.get('/main', (req, res) => {

});


// 실습 48
// app.get('/popup', (req, res) => {
//     res.render('실습48');
// })

app.listen(8000, () => {
    console.log('server : ', 8000);
});