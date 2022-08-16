const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req,res){
    res.render('practice30-33');
});

app.get('/test', function(req,res){
    let dict = { msg1: "a", msg2: "b" };
    console.log( dict.msg1 );
    console.log( dict["msg2"] );

    
    res.send({a:1, b:2});
});

app.get('/p30', function(req,res){
    // 실습 30
    // console.log(req);
    // console.log(req.query);
    // res.render('p30',req.query);

    // 실습 33
    let name = req.query.name;
    let msg = req.query.name + '님 회원가입 완료';
    res.send({name: name, message: msg});
    
});

app.post('/p30', function(req,res){
    console.log(req.body);
    res.render('p30',req.body);
});

app.listen(port,()=>{
    console.log('server port : ', port);
});