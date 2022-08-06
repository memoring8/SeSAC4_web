// https://wayhome25.github.io/nodejs/2017/02/21/nodejs-15-file-upload/
// https://inpa.tistory.com/entry/EXPRESS-📚-multer-미들웨어

const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const multer = require('multer');
// 사용자가 전송한 파일을 처리하는 작업
// form 의 type을 enctype="multipart/form-data" 로 설정해야 사용자가 전송한 파일을 서버로 전송할 수 있다.
// 이미지, 동영상 등을 비롯한 여러 가지 파일들을 멀티파트 형식으로 업로드할 때 사용하는 미들웨어이다.
// 멀티파트 형식이란 enctype이 multipart/form-data 인 폼을 통해 업로드하는 데이터의 형식을 의미한다.

const path = require('path');
const upload = multer({
    // dest: 'uploads/'
        // 입력한 파일이 uploads/ 폴더 내에 저장된다.
    storage: multer.diskStorage({
        destination(req, file, done){
            done(null, 'uploads/');
            // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
        },
        filename(req, file, done){
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
            
        },
    }),
    limits: {filesize: 5*1024*1024},
})
// multer 패키지 안에는 여러 종류의 미들웨어가 들어있다.
    // storage는 저장할 공간에 대한 정보. 디스크나 메모리 저장 가능.
    // diskStorage는 하드디스크에 업로드 파일을 저장한다는 것
    // destination은 저장할 경로
    // filename은 저장할 파일명(파일명+날짜+확장자 형식)
    // Limits는 파일 개수나 파일 사이즈를 제한할 수 있음.

    // https://inpa.tistory.com/entry/EXPRESS-📚-multer-미들웨어
    // const upload = multer({
    //     storage: multer.diskStorage({ // 저장한공간 정보 : 하드디스크에 저장
    //         destination(req, file, done) { // 저장 위치
    //             done(null, 'uploads/'); // uploads라는 폴더 안에 저장
    //         },
    //         filename(req, file, done) { // 파일명을 어떤 이름으로 올릴지
    //             const ext = path.extname(file.originalname); // 파일의 확장자
    //             done(null, path.basename(file.originalname, ext) + Date.now() + ext); // 파일이름 + 날짜 + 확장자 이름으로 저장
    //         }
    //     }),
    //     limits: { fileSize: 5 * 1024 * 1024 } // 5메가로 용량 제한
    // });
    // => 이렇게 설정한 upload라는 객체를 뒤에 라우터에 장착하면 된다.


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', test, test2, function(req,res) {
    res.render('index');
})

// 파일 하나
app.post('/upload', upload.single('userfile'),function(req, res){
    console.log(req.body);
    console.log(req.file);
    res.send('Upload');
})
// 미들웨어 upload.single('avatar')는 뒤의 function(req, res)함수가 실행되기 전에 먼저 실행.

// 파일 여러개
app.post('/upload/array', upload.array('userfile'),function(req, res){
    console.log(req.body);
    console.log(req.files);
    res.send('Upload array');
})

// 
app.post('/upload/fields', upload.fields([{name:'userfile'},{name:'userfile2'},{name:'userfile3'} ]),function(req, res){
    console.log(req.body);
    console.log(req.files);
    res.send('Upload fields');
})



function test(req, res, next) {
    console.log('test 함수');
    console.log(req.path);
    req.aaa = '....';
    next();
}

function test2(req, res, next) {
    console.log('test2 함수');
    console.log(req.aaa);
    next();
}

app.listen(port,()=>{
    console.log('server port : ', port);
})