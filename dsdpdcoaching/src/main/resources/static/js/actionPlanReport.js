$(document).ready(function(){
	
	$("#grade").change(function(){
		var selectedSchoolId =  $("#schoolName :selected").val();
		var selectedGrade =  $("#grade :selected").val();
		$.ajax({
            type: "GET",
            url:"getActionPlanBySchoolAndGrade",
            data:{schoolId:selectedSchoolId, grade:selectedGrade},
            dataType: "json",
            success: function (response) {
	            alert(response);
            		}
		});
	})
 	
});// end of document ready function