$(document).ready(function() {
	$('#add-button').click(function(){
    	var userInput = $("#new-item").val();
		console.log("log message" , userInput);
		$('#shopping-list').append('<li>' + userInput + '</li>');
		return false;
	});
});