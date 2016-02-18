var data = require("../data.json");

exports.view = function(req, res) {    
	//Grabs unique user ID
	res.render('userprofile', data);
 }