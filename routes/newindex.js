var data = require("../data.json");

exports.view = function(req, res) {    
	// Your code goes here
	res.render('newindex', data);

	var newPost = {
		"title": "Hello Bob",
		"description": "I make burgers everyday",
		"imageURL": "http://lorempixel.com/400/400/people"
	}

	data["posts"].push(newPost);
 }