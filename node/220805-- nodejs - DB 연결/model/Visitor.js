const mysql = require("mysql");
const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'Sesac1234*', // Sesac1234*
    database: 'visitor'
});

exports.get_visitors = (cd) => {
    cnn.query( 'SELECT * FROM visitor', (err, rows) => {
        if ( err ) throw err;
        console.log( rows );
        cd(rows);
    });
}

exports.insert = (name, comment) => {
    var sql = "INSERT INTO visitor(name, comment) VALUES('" + name + "', '" + comment + "')";
    cnn.query(sql, (err, rows, cb) => {
        if (err) throw err;
        console.log(rows);
        cb(rows.insertId);
    })
}