//MODULES
//Express Middleware Import
const express = require('express');
//FS import for reading and writing to files
const fs = require("fs");
//Uniqid import for generating unique id's
const uniqid = require("uniqid");


//Path import
const path = require("path");
//Note import
const Note = require('./routes/note')
//Initialize an instance of Express.js
const app = express();
//Port which the Express.js server will run
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));



// Define a route for '/notes'
app.get('/notes', (req, res) => {
    console.log('Accessed /notes route'); // Add this line for logging
    res.sendFile(path.join(__dirname, '/notes.html'));
  });


// Define a default route
// Serve 'index.html' as the default route ('*')
// the star is a wildcard that will match any route not previously defined
// very important to run this route last in the code
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});



  

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
