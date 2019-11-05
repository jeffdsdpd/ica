$(document).ready(function(){
	
	$("#grade").change(function(){
		
	});
	
	$("#subject").change(function(){
		var selectedSchoolId =  $("#schoolName :selected").val();
		var selectedGrade =  $("#grade :selected").val();
		var selectedSubject =  $("#subject :selected").val();
		$.ajax({
            type: "GET",
            url:"getActionPlanBySchoolGradeSubject",
            data:{schoolId:selectedSchoolId, grade:selectedGrade, subject:selectedSubject},
            dataType: "json",
            success: function (response) {
	            alert(response);
            		}
		});
	})
 	
});// end of document ready function