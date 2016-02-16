var data = require("../data.json");

exports.view = function(req, res) {    
	var namedata = data.profile[req.query.userid];

	res.render('userprofile', data);
 }