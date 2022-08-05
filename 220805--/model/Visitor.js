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