const mysql = require('mysql');
const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'Sesac1234*',
    datasbase: 'visitor' //하나의 DB만 연결가능
});

exports.get_visitor = () => {
    cnn.query('SELECT * FROM visitor', (err, rows) => {
        if (err) throw err;
        console.log(rows);
    });
}