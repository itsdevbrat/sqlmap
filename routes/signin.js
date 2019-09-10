var express = require('express');
var router = express.Router();
var connection = require('../model');

/* GET home page. */
router.post('/', function(req, res, next) {

 		   console.log(req.body);
	connection.query(
		"SELECT * FROM users WHERE email = '"+req.body.email+"' AND password = '"+req.body.password+"'",
		function(err, results, fields) {
 		    console.log(results.email);
			res.json(JSON.stringify(results));
		});
});

module.exports = router;