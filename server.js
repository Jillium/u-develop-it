// requires express
const express = require('express');
// port designation 
const PORT = process.env.PORT || 3007;
const app = express();

// Express middlewar
app.use(express.urlencoded({ extended: false }));
app.use(express.json());




// default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});


// starts the server 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});