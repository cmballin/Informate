// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	//console.log(data);
	res.render('index', data);
	var fulldesc = req.query.newcontent;
	//self.teaser = "fjdksafjs";
	this.teaser = fulldesc;

	var newPost = {
		"title": req.query.newtitle,
		"teaser": this.teaser,
		"description": req.query.newcontent,
		"imageURL": "http://lorempixel.com/400/400/people",
		"postnumber": req.query.postnumber,
		"know": "0",
		"notknow": "0"
	}

	console.log(newPost);

	data["posts"].push(newPost);
};