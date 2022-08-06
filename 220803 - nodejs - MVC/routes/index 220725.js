const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const { get_receive, post_receive } = require('../controller/index 220725');


app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/', function(req,res){
    res.render('index');
});

app.get('/receive', get_receive);

app.post('/receive', post_receive);


app.listen(port,()=>{
    console.log('server port : ', port);
})