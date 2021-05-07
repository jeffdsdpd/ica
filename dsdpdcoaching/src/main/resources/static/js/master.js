$(document).ready(function() {
	
	//Check if this is a Hoke User and display the hoke nav
	$("#schoolId option").each(function() {
		if ($(this).text().indexOf("Hoke") != -1) {
			$('.hokemenu').css('display', 'inline');
		}});

}); // end of the Ready Function