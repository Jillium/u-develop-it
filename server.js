// require db module
// requires express
const express = require('express');
const db = require('./db/connection.js');
// module that checks user input and validates it
const inputCheck = require('./utils/inputCheck');

const apiRoutes = require('./routes/apiRoutes');





// port designation 
const PORT = process.env.PORT || 3007;
const app = express();

// Express middlewar
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', apiRoutes);











// default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});



// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });