var data = require("../data.json");

exports.view = function(req, res) {    
	res.render('signup', data);
}

exports.addprofile = function(req, res) {
	res.render('index', data);

	var credentials = {
		"firstname": req.query.firstname,
		"lastname": req.query.lastname,
		"username": req.query.username,
		"userid": data.profile.length,
		"password": req.query.password
	}

	//console.log(credentials);

	data["profile"].push(credentials);
}
 