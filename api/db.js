const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'admin',
    database: 'fullstack'
});

db.connect(err => {
    if (err) throw err;
    console.log('Conectado a la base de datos :)');
});

module.exports = db;