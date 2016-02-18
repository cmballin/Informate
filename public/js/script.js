$(document).ready(function() {
	//Hiding error logs until prompted when user commits error
	$('#password-updated').hide();
	$('#password-error').hide();
	$('#fill-fields').hide();

	$('#usernamewarning').hide();
	$('#passwordwarning').hide();
	$('#firstnamewarning').hide();
	$('#lastnamewarning').hide();
	$('#contentwarning').hide();
	$('#titlewarning').hide();
	$('#invalidwarning').hide();

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
		$('#edit-button').html(
			//Toggle between Save and Edit
			text == "Save" ? "Edit" : "Save"
		);

		/*if ($('#edit-button').text() == 'Edit') {
			$('#name').prop('disabled', true);
		}*/

		//User clicks "Save"
		if ($('#edit-button').text() == 'Edit') {
			$('#name').prop('disabled', true);
		}

		//User clicks "Edit" so they can edit textbox
		else {
			$('#name').prop('disabled', false);
		}
	});


	//Save button should prop up a confirmation when user saves new password
	$('#password-button').click(function() {
		var current = $('#current-password');
		var newPass = $('#new-password');
		var confirm = $('#confirm-password');

		if (current.val().length == 0 || newPass.val().length == 0 || confirm.val().length == 0) {
			$('#password-error').show();
		}

		else {
			$('#password-updated').show();
			$('#password-error').hide();
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
			$('#signup-form').attr("action", "/addprofile");
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
