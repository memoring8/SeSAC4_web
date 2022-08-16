

const express = require('express');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('css06');
});

app.listen(port, () => {
    console.log('server port : ', port);
});


