$(document).ready(function() {
	//Take user to user profile link
	$('#user-profile').click(function() {
		window.open("userprofile.html")
	});

	$(".clickable-row").click(function() {
        window.document.location = $(this).data("href");
    });
}