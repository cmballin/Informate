var data = require("../data.json");

exports.view = function(req, res) {    
	res.render('signup', data);
}

exports.addprofile = function(req, res) {
	var credentials = {
		"firstname": req.body.firstname,
		"lastname": req.body.lastname,
		"username": req.body.username,
		"userid": data.profile.length,
		"password": req.body.password
	}

	//console.log(credentials);

	data["profile"].push(credentials);

	data["userlogedin"] = [];
	data["userlogedin"].push(credentials);

	console.log(data["userlogedin"]);

	res.redirect("/index");
}
 