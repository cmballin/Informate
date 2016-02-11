$(document).ready(function() {
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
});