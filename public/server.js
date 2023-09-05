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
//Port which the Express.js server will run

//Initialize an instance of Express.js
const app = express();
const port = 3000;

// Define a route for '/notes'
app.get('/notes', (req, res) => {
  res.send('This is the /notes route');
});

// Define a default route
app.get('/', (req, res) => {
  res.send('This is the default route');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
