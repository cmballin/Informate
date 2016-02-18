var data = require("../data.json");

exports.view = function(req, res) {    
	//Grabs unique user ID
	res.render('userprofile', data);
 }

exports.updatename = function(req, res) {
	var newName = req.body.firstname;
	var userid = data.userlogedin[0].userid;

	//Change the user database to be user input's new name
	data.userlogedin[0].firstname = newName;
	data.profile[userid].firstname = newName;

	var success = true;

	res.json({success: success});
}