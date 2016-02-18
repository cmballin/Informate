var data = require("../data.json");

exports.view = function(req, res) {    
	// Your code goes here
	res.render('password', data);

	//data["friends"].push(newFriend);
 }

exports.changepassword = function(req, res) {    
	// Your code goes here
	var oldpassinput = req.body.oldpass;
	var newpassinput = req.body.newpass;

	var userid = data.userlogedin[0].userid;
	var success = false;
	
	if(data.userlogedin[0].password == oldpassinput)
	{
		data.profile[userid].password = newpassinput;
		data.userlogedin[0].password = newpassinput;

		success = true;
	}

	res.json({success: success});

	//data["friends"].push(newFriend);
 }