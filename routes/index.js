// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	//console.log(data);
	res.render('index', data);
	/*
	var fulldesc = req.query.newcontent;
	this.teaser = fulldesc;
	this.postnumber = data.posts.length;

	var newPost = {
		"title": req.query.newtitle,
		"teaser": this.teaser,
		"description": req.query.newcontent,
		"imageURL": "http://lorempixel.com/400/400/people",
		"postnumber": this.postnumber,
		"know": "0",
		"notknow": "0"
	}

	data["posts"].push(newPost);
	*/
};