const express = require('express'),
  router = express.Router();

var db = require('../dbconn');

router.get('/:tablename/year/:year', function(req, res) {
  var tablename = req.params.tablename
  var year = req.params.year
  let sql = `SELECT val` + year + ` FROM ` + tablename + `;`;
  db.query(sql, function(err, data, fields) {
    if (err) {
      db.release();  
      throw err;
    }  
    res.json({
      status: 200,
      data,
      message: year + " values retrieved correctly from " + tablename
    });
  });
});

router.get('/:tablename/coord/:coord', function(req, res) {
  var tablename = req.params.tablename
  var coord = req.params.coord
  let sql = 'SELECT * FROM ' + tablename + ` WHERE coord=` + `'` + coord + `'` + `;`;
  db.query(sql, function(err, data, fields) {
    if (err){
      db.release();
      throw err;
    } 
    res.json({
      status: 200,
      data,
      message: "All coords retrieved successfully from " + tablename + " at coordinate " + coord
    });
  });
});

module.exports = router;