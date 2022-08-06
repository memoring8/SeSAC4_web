const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req,res){
    res.render('practice30');
});

app.get('/p30', function(req,res){
    console.log(req);
    console.log(req.query);
    res.render('p30',req.query);
});

app.post('/p30', function(req,res){
    console.log(req.body);
    res.render('p30',req.body);
});

app.listen(port,()=>{
    console.log('server port : ', port);
})