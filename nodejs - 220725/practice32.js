const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req,res){
    res.render('practice32');
});

app.get('/p32', function(req,res){
    console.log(req);
    console.log(req.query);
    res.render('p32',req.query);
});

app.post('/p32', function(req,res){
    console.log(req.body);

    const fs = require('fs').promises;
    fs.writeFile('./p32.txt', req.body.name + '//' + req.body.id + '//' + req.body.password)
        .then(() => {
            console.log('작성완료')
        })
        .catch((err) => {
            throw err;
        })

    res.render('p32',req.body);
});

app.listen(port,()=>{
    console.log('server port : ', port);
})