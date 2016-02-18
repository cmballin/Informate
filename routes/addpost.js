var data = require("../data.json");

exports.view = function(req, res) {    
	// Your code goes here
	res.render('addpost', data);
	//data["friends"].push(newFriend);
 }

exports.addnewpost = function(req, res){
	//console.log(data);
	var fulldesc = req.body.newcontent;

	//Grabs the first sentence as a teaser for posts
	var teaser = fulldesc.split('.')[0];
	this.postnumber = data.posts.length;

	var newPost = {
		"title": req.body.newtitle,
		"teaser": teaser,
		"description": fulldesc,
		"imageURL": "http://lorempixel.com/400/400/people",
		"postnumber": this.postnumber,
		"know": "0",
		"notknow": "0"
	}

	data["posts"].push(newPost);

	res.redirect("/index");
};