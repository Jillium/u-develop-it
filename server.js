// requires mysql
const mysql = require('mysql2');


// requires express
const express = require('express');
// port designation 
const PORT = process.env.PORT || 3007;
const app = express();

// Express middlewar
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your mySQL usernmae,
        user: 'root',
        // Your mySQL password
        password: '1rq42ew3',
        database: 'election'
    },
    console.log('Connected to the election database.')
);


db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

// default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});


// starts the server 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});