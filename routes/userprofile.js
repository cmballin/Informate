var data = require("../data.json");

exports.view = function(req, res) {    
	//Grabs unique user ID
	var namedata = data.profile[req.query.userid];

	res.render('userprofile', data);
 }