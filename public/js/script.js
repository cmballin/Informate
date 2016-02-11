$(document).ready(function() {
	//Take user to user profile link
	$('#user-profile').click(function() {
		window.open("userprofile.html")
	});

	$(".clickable-row").click(function() {
        window.document.location = $(this).data("href");
    });

	//Needs to check if user credentials are verified -- haven't done so here
    /*$("#login-button").click(function() {
    	window.location("../../views/index.handlebars");
    });*/
}