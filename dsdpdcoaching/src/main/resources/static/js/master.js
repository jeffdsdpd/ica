$(document).ready(function() {
	
	//Check if this is a Chicago User and display ONLY the Chicago Forms/Reports
	$("#schoolId option").each(function() {
		if ($(this).text().indexOf("Portage") != -1) {
			$('.chicago').css('display', 'inline');
			console.log(document.getElementById("schoolId").length);
			if (document.getElementById("schoolId").length < 3) {
				$('.master').css('display', 'none');
				}
		}
	});

}); // end of the Ready Function