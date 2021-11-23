// requires mysql
const mysql = require('mysql2');

//Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your mySQL usernmae,
        user: 'root',
        // Your mySQL password
        password: 'bnmc7654',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;