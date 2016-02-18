var data = require("../data.json");

exports.view = function(req, res) {    
	//Grabs unique user ID
	var namedata = data.userlogedin[0];

	res.render('userprofile', data);
 }