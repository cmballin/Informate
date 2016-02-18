var data = require("../data.json");

exports.view = function(req, res) {    
	// Your code goes here
	var postdata = data.posts[req.query.postnumber];
	//res.render('post', data);
	//var postdata = data.posts[req.query.];
	//var postdata = {
	//	'title': req.query.name,
	//	'description': req.query.description,
	//	'imageURL': req.query.imageURL
	//}

	res.render('post', postdata);

	//data["friends"].push(newFriend);
 }

exports.updateknowvalue = function(req, res) {    
	// Your code goes here
	var postnumber = req.body.postnumber;

	data.posts[postnumber].know++;

	res.render('post', postnumber);
 }

exports.updatenotknowvalue = function(req, res) {    
	// Your code goes here
	var postnumber = req.body.postnumber;

	data.posts[postnumber].notknow++;

	res.render('post', postnumber);
 }