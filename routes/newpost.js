var data = require("../data.json");

exports.view = function(req, res) {    
	// Your code goes here
	res.render('newpost', data);

	//data["friends"].push(newFriend);
 }