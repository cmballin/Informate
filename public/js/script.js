$(document).ready(function() {
	$('#password-updated').hide();
	$('#password-error').hide();

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
	//Do some error checking for the user textfields
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
	})
});