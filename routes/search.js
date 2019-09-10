var express = require('express');
var router = express.Router();
var connection = require('../model');

/* GET home page. */
router.post('/', function(req, res, next) {
	query = "SELECT * FROM users WHERE email = '"+req.body.email2+"' ";
	console.log(query,req.body);
	connection.query(query,
		function(err, results, fields) {
 		   console.log(results);
 		   res.json(results);
		});
});

module.exports = router;