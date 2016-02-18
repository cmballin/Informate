var data = require("../data.json");

exports.view = function(req, res) {    
	res.render('login', data);
 }

exports.login = function(req, res) {
	var username = req.body.username;
	var password = req.body.password;

	console.log(username);
	console.log(password);
	var success = false;
	for(var i = 0; i < data["profile"].length; i++)
	{
		if(username == data.profile[i].username && password == data.profile[i].password)
		{
			data["userlogedin"] = [];
			data["userlogedin"].push(data.profile[i]);
			success = true;
		}
	}

	res.json({success: success});
}

/*exports.display = function(req, res) {
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
}*/