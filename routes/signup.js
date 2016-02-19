var data = require("../data.json");

exports.view = function(req, res) {    
	res.render('signup', req.query);
}

exports.addprofile = function(req, res) {
	var success = true;
	for(var i = 0; i < data["profile"].length; i++)
	{
		if(req.body.username == data.profile[i].username)
		{
			success = false;
		}
	}

	if(success == true)
	{
		var credentials = {
			"firstname": req.body.firstname,
			"lastname": req.body.lastname,
			"username": req.body.username,
			"userid": data.profile.length,
			"password": req.body.password,
			"userphoto": null //null picture when user signs in
		}

		//console.log(credentials);

		data["profile"].push(credentials);

		data["userlogedin"] = [];
		data["userlogedin"].push(credentials);

		console.log(data["userlogedin"]);
	}

	res.json({success: success});
}
 