const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req,res){
    res.render('practice32-1');
});

app.get('/p32', function(req,res){
    console.log(req);
    console.log(req.query);
    res.render('p32',req.query);
});

app.post('/p32', function(req,res){
    console.log(req.body);

    const fs = require('fs').promises;
    fs.readFile('./p32.txt', 'utf-8')
        .then((data) => {
            console.log(data);
            console.log(data.toString());
        })
        .catch((err) => {
            throw err;
        })

    res.render('p32-1',req.body);

    let id = req.body.id;
    let password = req.body.password;
    console.log(id);
    console.log(password);
    res.send({});
    
});

app.listen(port,()=>{
    console.log('server port : ', port);
})