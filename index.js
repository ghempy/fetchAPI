const express = require('express'),
  app = express(),
  mysql = require('mysql'), // import mysql module
  cors = require('cors'),
  bodyParser = require('body-parser');

// make server object that contain port property and the value for our server.
var server = {
  port: 4040
};

// routers
const co2Router = require('./routes/co2');
const tableRouter = require('./routes/tables')
// use the modules
app.use(cors());
app.use(bodyParser.json());
// use router
app.use('/co2', co2Router);
app.use('/table', tableRouter);

app.listen( server.port , () => console.log(`Server started, listening on port: ${server.port}`));


