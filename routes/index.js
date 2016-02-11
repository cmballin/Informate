// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	//console.log(data);
	res.render('index', data);

	var newPost = {
		"title": "My name is Bob",
		"description": "I make burgers everyday",
		"imageURL": "http://lorempixel.com/400/400/people"
	}

	data["posts"].push(newPost);
};