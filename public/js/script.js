$(document).ready(function() {
	//Hiding error logs until prompted when user commits error
	$('#password-updated').hide();
	$('#password-error').hide();
	$('#diff-password-error').hide();
	$('#fill-fields').hide();

	$('#usernamewarning').hide();
	$('#passwordwarning').hide();
	$('#firstnamewarning').hide();
	$('#lastnamewarning').hide();
	$('#contentwarning').hide();
	$('#titlewarning').hide();
	$('#invalidwarning').hide();
	$('#profile-updated').hide();

	$('#uploaded-image').hide();

	//User can't edit name unless they click "Edit" button
	$('#name').prop('disabled', true);

	//Take user to user profile link
	$('#user-profile').click(function() {
		window.open("userprofile.html");
	});

	$('.clickable-row').click(function() {
        window.document.location = $(this).data("href");
    });


/********************************************************************
                         Change password
********************************************************************/
	$('#edit-button').click(function() {
		var text = $('#edit-button').text();
		var username = $('#name').val();

		$('#edit-button').html(
			//Toggle between Save and Edit
			text == "Save" ? "Edit" : "Save"
		);

		//User clicks "Save"
		if (text == 'Edit') {
			$('#name').prop('disabled', false);
		}

		//User clicks "Edit" so they can edit textbox
		else {
			$('#name').prop('disabled', true);
			newName(username);
		}
	});

	//Change new name and update to database
	function newName(username) {
		var name = {
			username: username
		}

		$.post("/updatename", name, nameUpdated);
	}

	function nameUpdated(result) {
		//Show update success message
		$('#profile-updated').show();
	}


	//Save button should prop up a confirmation when user saves new password
	$('#password-button').click(function() {
		var current = $('#current-password');
		var newPass = $('#new-password');
		var confirm = $('#confirm-password');

		if (current.val().length == 0 || newPass.val().length == 0 || confirm.val().length == 0) {
			$('#password-error').show();
			$('#password-updated').hide();
			$('#diff-password-error').hide();
		}
		else if(newPass.val() != confirm.val())
		{
			$('#diff-password-error').show();
		}
		else {
			$('#password-error').hide();
			$('#diff-password-error').hide();
			validatePassword(current.val(), newPass.val());
		}
	});

	$('#current-password').on('input', function(e) {
		var oldpassword = $('#current-password');

		if (oldpassword.val().length > 0) {
			$('#password-error').hide();
			$('#password-updated').hide();
			$('#diff-password-error').hide();

		}
	});

	$('#new-password').on('input', function(e) {
		var newpassword = $('#new-password');

		if (newpassword.val().length > 0) {
			$('#password-error').hide();
			$('#password-updated').hide();
			$('#diff-password-error').hide();
		}
	});

	$('#confirm-password').on('input', function(e) {
		var confirmpassword = $('#confirm-password');

		if (confirmpassword.val().length > 0) {
			$('#password-error').hide();
			$('#password-updated').hide();
			$('#diff-password-error').hide();
		}
	});

/*******************************************************************
                               Login
*******************************************************************/

	//Checks for user field input and change "action" path for login page
	$('#login-button').click(function(e) {
		var username = $('#username');
		var password = $('#password');

		if (username.val().length == 0) {
			$('#usernamewarning').show();
			$('#login-form').attr("action", "/");
			e.preventDefault();
		}
		if (password.val().length == 0) {
			$('#passwordwarning').show();
			$('#login-form').attr("action", "/");
			e.preventDefault();
		}

		else {
			e.preventDefault();
			//$('#login-form').attr("action", "/index");
			validateUser(username.val(), password.val());
		}
	});

	
	$('#username').on('input', function(e) {
		var username = $('#username');

		if (username.val().length > 0) {
			$('#usernamewarning').hide();
			$('#invalidwarning').hide();
		}
	});

	$('#firstname').on('input', function(e) {
		var username = $('#firstname');

		if (username.val().length > 0) {
			$('#firstnamewarning').hide();
		}
	});

	$('#lastname').on('input', function(e) {
		var username = $('#lastname');

		if (username.val().length > 0) {
			$('#lastnamewarning').hide();
		}
	});
	
	$('#password').on('input', function(e) {
		var password = $('#password');

		if (password.val().length > 0) {
			$('#passwordwarning').hide();
			$('#invalidwarning').hide();
		}
	});
	

/****************************************************************
                             Signup
*****************************************************************/
	//New user on login page button
	$('#newuser-button').click(function() {
		$('#login-form').attr("action", "/signup");
	})

	//Change "action" path for sign up page
	$('#signup-button').click(function(e) {
		var firstname = $('#firstname');
		var lastname = $('#lastname');
		var username = $('#username');
		var password = $('#password');

		if (firstname.val().length == 0) {
			$('#firstnamewarning').show();
			$('#signup-form').attr("action", "/signup");
			e.preventDefault();
		} 
		if (lastname.val().length == 0) {
			$('#lastnamewarning').show();
			$('#signup-form').attr("action", "/signup");
			e.preventDefault();
		}

		if (username.val().length == 0) {
			$('#usernamewarning').show();
			$('#signup-form').attr("action", "/signup");
			e.preventDefault();
		}
		if (password.val().length == 0) {
			$('#passwordwarning').show();
			$('#signup-form').attr("action", "/signup");
			e.preventDefault();
		}
		else {
			e.preventDefault();
			validateSignUpUser(username.val(), password.val(), firstname.val(), lastname.val());
		}
	})

/************************************************************
                         Add post
*************************************************************/
	//Add photo functionality in addpost
	/*$('#addphoto').click(function() {
		$('#upload').click();

		var filename = ($('#upload').val(), function() {
			alert(filename);
		});
	})*/

	$('#addphoto').click(function() {
		$('#upload').click();
	})

	function displayImage(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#uploaded-image')
                    .attr('src', e.target.result)
                    .width(310)
                    .height(250);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }

   	//Display photo on page
    $('#upload').change(function() {
    	$('#uploaded-image').show();
    	displayImage(this);
    });


	//Check for empty title and content in New Post
	$('#submitBtn').click(function(e) {
		//If empty, tell user to fill out the fields
		var newcontent = $('#newcontent');
		var newtitle = $('#newtitle');

		if (!newcontent.val()) {
			$('#contentwarning').show();
			e.preventDefault();
		}

		if (!newtitle.val()) {
			$('#titlewarning').show();	
			e.preventDefault();
		}
	})

/**************************************************************
                    Ajax for username/password
***************************************************************/
	$('#signup-form').submit(function() {
		var dataform = $('#signup-form').serialize();

		$.ajax({
			type: "GET",
			cache: false,
			data: dataform,
			url: "/data.json",
			success: function(data) {
				console.log("Data is loaded!!");
			}
		});
		return true;
	});

	/************************************************************
	                    Individual Posts
	*************************************************************/
	$('#knowbutton').click(updateKnowValue);

	$('#notknowbutton').click(updateNotKnowValue);
});


/*******************************************************************
                              Sign Up
*******************************************************************/
function validateSignUpUser(username, password, firstname, lastname) {
	var userinfo = {
		username: username,
		password: password,
		firstname: firstname,
		lastname: lastname
	}

	$.post("/addprofile", userinfo, validated);
}

/*******************************************************************
                               Login
*******************************************************************/

function validateUser(username, password) {
	var userinfo = {
		username: username,
		password: password
	}

	$.post("/login", userinfo, validated);
}

function validated(result) {
	if(result.success == false)
	{
		$('#invalidwarning').show();
	}
	else
	{
		window.location.href = "/index";
	}
}

/*******************************************************************
                            Password
*******************************************************************/
function validatePassword(oldpass, newpass)
{
	var pass = {
		oldpass: oldpass,
		newpass: newpass
	}

	$.post("/changepassword", pass, passValidated);
}

function passValidated(result)
{
	if(result.success == false)
	{
		$('#invalidwarning').show();
	}
	else
	{
		$('#current-password').val("");
		$('#new-password').val("");
		$('#confirm-password').val("");
		$('#password-updated').show();
	}
}

/************************************************************
                    Individual Posts
*************************************************************/


function updateKnowValue (e) {
	e.preventDefault();

	var postnumber = {
		postnumber: getParameterByName("postnumber")
	}

	$.post("/know", postnumber, refreshPage);
	console.log(postnumber);
}

function updateNotKnowValue (e) {
	e.preventDefault();

	var postnumber = {
		postnumber: getParameterByName("postnumber")
	}

	$.post("/notknow", postnumber, refreshPage);
	console.log(postnumber);
}

function refreshPage(result) {
	location.reload();
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
