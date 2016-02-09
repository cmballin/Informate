var data = require("../data.json");

exports.view = function(req, res) {    
	// Your code goes here
	res.render('post', data);

	//data["friends"].push(newFriend);
 }