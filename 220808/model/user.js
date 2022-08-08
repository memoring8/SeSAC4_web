const mysql = require("mysql");
const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'Sesac1234*', // Sesac1234*
    database: 'sign'
});

exports.signup = (name, id, password, cb) => {
    var sql = "INSERT INTO sign(name, id, password) VALUES('"+name+"','"+id+"','"+password+"')";
    cnn.query(sql, (err, rows) => {
        if(err) throw err;
        cb(rows.insertId);
    });
}

exports.signin = (num, cb) => {
    cnn.query(`select * from visitor where id = ${num} limit 1;`, (err,rows) => {
        if (err) throw err;
        cb(rows);
    });
}