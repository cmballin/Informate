var data = require("../data.json");

exports.view = function(req, res) {    
	// Your code goes here
	res.render('userprofile', data);

	var credentials = {
		"firstname": req.query.firstname,
		"lastname": req.query.lastname,
		"username": req.query.username,
		"password": req.query.password
	}

	console.log(credentials);

	data["profile"].push(credentials);
 }