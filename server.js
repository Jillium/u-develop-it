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
        password: 'bnmc7654',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

// // returns all data in the candidate table 
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// });


// // return a single candidate
// db.query(`SELECT * FROM candidates WHERE ID = 1`, (err, row) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(row);
// });

// Delete a candidate
// db.query(`DELETE FROM candidates WHERE ID = ?`, 1, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

// //Create a candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
// Values (?,?,?,?)`;
// const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });


// default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});


// starts the server 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});