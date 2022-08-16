const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req,res) {
    res.render('index');
})

app.get('/test', function(req,res) {
    res.send('test');
})



app.get('/receive', function(req, res) {
    console.log(req.query);
    // res.send();

    // 딕셔너리 형태로 데이터 보내기
    let name = req.query.name;
    let msg = req.query.name + 'get 안녕';
    res.send({name: name, message: msg});
})



app.post('/receive', function(req, res) {
    console.log(req.body);
    // res.end(req.body.name + '안녕');

    // 딕셔너리 형태로 데이터 보내기
    let name = req.body.name;
    let msg = req.body.name + req.bosy.age + '안녕';
    res.send( {name: name, message: msg} );
})

app.listen(port,()=>{
    console.log('server port : ', port);
})