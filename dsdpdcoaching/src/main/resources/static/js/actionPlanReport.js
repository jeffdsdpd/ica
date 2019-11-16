$(document).ready(function(){
	$("#schoolName").change(function(){
		$("#checkboxes").html("");
		document.getElementById("nodatatodisplay").style.display = "none";
		$("#grade").prop('selectedIndex',0);
		$("#subject").prop('selectedIndex',0);
	});
	
	$("#grade").change(function(){
		$("#subject").prop('selectedIndex',0);
		$("#checkboxes").html("");
		document.getElementById("nodatatodisplay").style.display = "none";
	});
	
	$("#subject").change(function(){
		$("#checkboxes").html("");
		document.getElementById("nodatatodisplay").style.display = "none";
		
		var selectedSchoolId =  $("#schoolName :selected").val();
		var selectedGrade =  $("#grade :selected").val();
		var selectedSubject =  $("#subject :selected").val();
		$.ajax({
            type: "GET",
            url:"getActionPlanBySchoolGradeSubject",
            data:{schoolId:selectedSchoolId, grade:selectedGrade, subject:selectedSubject},
            dataType: "json",
            success: function (response) {
            	
	           $("#gradeheading h2").html(response.grade);
	           $("#gradeheading h3").html(response.subject);
	          
	           var tasks = response.task;
	           
	           tasks.forEach(e => {
	        	   		$("#checkboxes").append( $("<input>").attr('type', 'checkbox').val(e));
	        	   		$("#checkboxes").append( $("<label>").text(e));
	        	   		$("#checkboxes").append("<br/>");
	           });
            },
            	error: function(e){
            		document.getElementById("nodatatodisplay").style.display = "inline";
	         }//end of the 'error' function
		});
	})
 	
});// end of document ready function