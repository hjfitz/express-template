// imports
const express = require('express');
const path = require('path');

// server config
const public = path.join(__dirname, 'public');
const port = process.env.PORT || 8080;

// create a server
const server = express();

// on any GET request, look in public/ for the corresponding file
server.use(express.static(public));

// set up pathways to access a database 
server.get('/api/database', (req, res) => {
  res.send(200);
});

server.listen(port, () => console.log(`server listening on http://localhost:${port}`));