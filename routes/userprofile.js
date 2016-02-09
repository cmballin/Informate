var data = require("../data.json");

exports.view = function(req, res) {    
	// Your code goes here
	res.render('userprofile', data);

	//data["friends"].push(newFriend);
 }