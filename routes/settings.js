var data = require("../data.json");

exports.view = function(req, res) {    
	// Your code goes here
	res.render('settings', data);

	//data["friends"].push(newFriend);
 }