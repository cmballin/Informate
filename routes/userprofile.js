var data = require("../data.json");

exports.view = function(req, res) {    
	//Grabs unique user ID
	var namedata = data.userlogedin;

	res.render('userprofile', data);
 }