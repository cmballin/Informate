$(document).ready(function() {
	//Hiding error logs until prompted when user commits error
	$('#password-updated').hide();
	$('#password-error').hide();
	$('#fill-fields').hide();

	$('#usernamewarning').hide();
	$('#passwordwarning').hide();

	//Take user to user profile link
	$('#user-profile').click(function() {
		window.open("userprofile.html");
	});

	$('.clickable-row').click(function() {
        window.document.location = $(this).data("href");
    });

	$('#profile-button').click(function() {
		var text = $('#profile-button').text();
		$('#profile-button').html(
			//Toggle between Save and Edit
			text == "Save" ? "Edit" : "Save"
		);
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
			$('#login-form').attr("action", "/index");
		}
	});

	
	$('#username').on('input', function(e) {
		var username = $('#username');

		if (username.val().length > 0) {
			$('#usernamewarning').hide();
		}
	});
	
	$('#password').on('input', function(e) {
		var password = $('#password');

		if (password.val().length > 0) {
			$('#passwordwarning').hide();
		}
	});
	
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

		if (firstname.val().length == 0 || lastname.val().length == 0 || 
			username.val().length == 0 || password.val().length == 0) {
			$('#fill-fields').show();
			$('#signup-form').attr("action", "/signup");
			e.preventDefault();
		}

		else {
			$('#signup-form').attr("action", "/index");
		}
	})

	$('#cancel-button').click(function() {
		$('#signup-form').attr("action", "/");
	})
});

