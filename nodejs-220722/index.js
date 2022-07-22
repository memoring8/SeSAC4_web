

const express = require('express');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');

app.use('/abc', express.static('public'));

app.get('/', (req, res) => {
    res.render('test');
});

app.listen(port, () => {
    console.log('server port : ', port);
});