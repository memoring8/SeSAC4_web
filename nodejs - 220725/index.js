const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
// 데이터를 쉽게 처리할 수 있도록 도와주는 라이브러리
// Post로 정보를 전송할 때 body로 받을 수 있게 도와준다.

app.set('view engine', 'ejs');
// app.set(키, 값)으로 app, 즉 express 인스턴스에 변수들을 저장할 수 있다.
app.use(express.static('public'));
// 이미지, CSS 파일 및 JavaScript 파일과 같은 정적 파일을 제공하려면 Express의 기본 제공 미들웨어 함수인 express.static을 사용하십시오.
// 정적 자산이 포함된 디렉토리의 이름을 express.static 미들웨어 함수에 전달하면 파일의 직접적인 제공을 시작할 수 있습니다. 
app.use(express.urlencoded({extended: true}));
// https://velog.io/@hyunju-song/body-parser의-urlencoded는-도대체-어떤-역할을-하는-걸까
// https://reload1bronze.tistory.com/m/252
// https://medium.com/@chullino/1분-패키지-소개-body-parser를-소개합니다-하지만-body-parser를-쓰지-마세요-bc3cbe0b2fd
// 요청의 본문에 있는 데이터를 해석해서 req.body 객체로 만들어주는 미들웨어입니다.
// express 서버로 POST 요청을 할 때 input 태그의 value를 전달하기 위해 사용합니다.

app.use(bodyParser.json());
// 클라이언트 POST request data의 body로부터 파라미터를 편리하게 추출합니다.
// req.body는 body-parser를 사용하기 전에는 디폴트 값으로 Undefined이 설정됨

app.get('/', function(req,res){
    res.render('index');
});

app.get('/receive', function(req,res){
    console.log(req);
    console.log(req.query);
    res.render('receive',req.query);
});

app.post('/receive', function(req,res){
    // console.log('receive-post');
    // console.log(req.body);
    // res.render('index');

    console.log(req.body);
    res.render('receive',req.body);
});

app.listen(port,()=>{
    console.log('server port : ', port);
})