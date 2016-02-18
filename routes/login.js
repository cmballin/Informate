var data = require("../data.json");

exports.view = function(req, res) {    
	res.render('login', data);
 }

exports.login = function(req, res) {
	//Username and password field that the user is entering in text fields
	var username = req.body.username;
	var password = req.body.password;

	var success = false;

	//Iterate through all the users in profile, which is the total number of users
	for(var i = 0; i < data["profile"].length; i++)
	{
		//If the username and password the user entered matches up to the ones in database, login success
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