var data = require("../data.json");

exports.view = function(req, res) {    
	// Your code goes here
	res.render('analytics', data);


	//data["friends"].push(newFriend);
 }
 
 exports.getflotdata = function(req, res) {

	var line = data.profile[req.query.index];
	res.json(line);

}