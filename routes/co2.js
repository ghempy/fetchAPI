const express = require('express'),
  router = express.Router();

var db = require('../dbconn');

// get co2 vals
router.get('/all', function(req, res) {
  let sql = `SELECT co2_val FROM co2_vals;`;
  db.query(sql, function(err, data, fields) {
    if (err){
      db.release();
      throw err;
    } 
    res.json({
      status: 200,
      data,
      message: "All CO2 vals retrieved successfully"
    });
  })
});

module.exports = router;
