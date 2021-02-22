const express = require('express'),
	mysql = require('mysql');

// setup database
var database = mysql.createPool({
  connectionLimit: 10,
  host: '',
  user: '',
  password: '',
  database: ''
})

module.exports = database;
