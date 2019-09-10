$(document).ready(function(){
	$("#schoolName").change(function(){
		var selectedSchoolId =  $("#schoolName :selected").val();
		//document.getElementById("classPhoto").src = "";
		
		$("#teacherLabel").text("");
        	$("#adminLabel").text("");
        	$("#date").empty();
		$("#date").append($('<option></option>').attr('value', '').text('Please Select'));
		$("#timeStart").val("");
		$("#timeEnd").val("");
		$("#user").val("");
		$("#lessonTitle").val("");
		$("#notes").val("");
		$("#strategies").val("");
		$("#goals").val("");
		$("#tools").val("");
		$(".button").fadeOut("slow");
		
		if (selectedSchoolId != 0) {
	        $.ajax({
	            type: "GET",
	            url:"getTeachersBySchool",
	            data:{schoolId: selectedSchoolId},
	            dataType: "json",
	            success: function (response) {
		            	var $dropdownList = $("#teacherName");
		            	$dropdownList.empty();
		            	$dropdownList.append($("<option></option>").attr("value", '').text('Please Select'));
	            		$.each(response, function(value, key) {
	        				$dropdownList.append($("<option></option>").attr("value", key.id).text((key.name)));
	            		});
	            }
	        });
		}
    });
		
	$("#teacherName").change(function(){
		var selectedSchoolId = $("#schoolName :selected").val();
		var selectedTeacherId = $("#teacherName :selected").val();
		$("#teacherLabel").text("");
		$("#teacherCheckbox").prop("checked", false);
	    	$("#adminLabel").text("");
		$("#adminCheckbox").prop("checked", false);
		$(".button").fadeOut("slow");

		//document.getElementById("classPhoto").src  = "";
		
		$("#date").empty();
		$("#date").append($('<option></option>').attr('value', '').text('Please Select'));
		$("#timeStart").val("");
		$("#timeEnd").val("");
		$("#lessonTitle").val("");
		$("#user").val("");
		$("#notes").val("");
		$("#strategies").val("");
		$("#goals").val("");
		$("#tools").val("");
		
		if (selectedTeacherId != 0){
            $.ajax({
                type: "GET",
                url:"getCoachingDatesBySchoolAndTeacher",
                data:{schoolId: selectedSchoolId, teacherId: selectedTeacherId},
                dataType: "json",
                success: function (response) {
                		var $dropdownList = $("#date");
                    	$dropdownList.empty();
                    	$dropdownList.append($("<option></option>").attr("value", '').text('Please Select'));
                    	$.each(response, function(value, key) {
                             $dropdownList.append($("<option></option>").attr("value", key.id).text((key.date)));	                    
                     });
                }
            });
        }
	});
	
	$("#teacherName").change(function(){
		var selectedTeacherId = $("#teacherName :selected").val();
		$("button").prop("disabled",false);
		document.getElementById("teacherCheckbox").style.display = "inline";
		document.getElementById("adminCheckbox").style.display = "inline";
		$.ajax({
			type: "GET",
			url:"getEmailAddress",
			data:{teacherId: selectedTeacherId},
			dataType: "json",
			success: function (response) {
				    
                $.each(response, function(key, value) {
                		$("#teacherLabel").text(value[0]);
                		$("#adminLabel").text(value[1]);
                })
      
                	if ( $("#teacherLabel").text() == "" && 
		        			$("#adminLabel").text() == "") {
                		document.getElementById("teacherCheckbox").style.display = "none";
                		document.getElementById("adminCheckbox").style.display = "none";
                		$("button").prop("disabled",true);
                	}
            }
        });
	});
		
	$("#date").change(function(){
		var selectedId = $("#date :selected").val();
		if (selectedId == 0) {
			
			//document.getElementById("classPhoto").src = "";
			
			$("#timeStart").val("");
			$("#timeEnd").val("");
			$("#lessonTitle").val("");
			$("#user").val("");
			$("#notes").val("");
			$("#strategies").val("");
			$("#goals").val("");
			$("#tools").val("");
		}
        $.ajax({
	        type: "GET",
	        url:"getCoachingDataById",
	        data:{id: selectedId},
	        dataType: "json",
	        success: function (response) {	               
    				if (response.userId == undefined) {
            			document.getElementById("user").value ="Not Recorded";
    				} else {
    					document.getElementById("user").value = (response.userId);
					}
            		 
    				$("#coachLabel").text((response.userId));

    				if (response.photo == "") {
            			//document.getElementById("classPhoto").style.display = "none";
            		} else  {
            			//document.getElementById("classPhoto").style.display = "block";
            		}
            		
    				// document.getElementById("classPhoto").src  = "data:image/png;base64," + response.photo;
            		 
    				if (response.lessonTitle == undefined) {
            			document.getElementById("lessonTitle").value ="Not Recorded";
            		} else {
            			document.getElementById("lessonTitle").value = (response.lessonTitle);
            		}
            		 
				document.getElementById("notes").value = removeBRStrings(response.notes);
				document.getElementById("timeStart").value = (new Date(response.startTime)).toLocaleTimeString();
				document.getElementById("timeEnd").value = (new Date(response.endTime)).toLocaleTimeString()
				document.getElementById("strategies").value = removeBRStrings(response.strategies);
				document.getElementById("goals").value = removeBRStrings(response.goals);
				document.getElementById("tools").value = removeBRStrings(response.tools);
				                	
				$(".button").fadeIn("slow");
            }
        });
	});
	
	$("button").click(function(){
		var selectedSchoolId = $("#schoolName :selected").text();
		var selectedTeacherId = $("#teacherName :selected").text();
		var teacherEmail = null;
		var userEmail = null;
		var adminEmail = null;
		
		if ( $("#teacherCheckbox").is(':checked')) {
			teacherEmail = $("#teacherLabel").text();
		} else teacherEmail = "not selected";
		
		if ( $("#adminCheckbox").is(':checked')) {
			adminEmail = $("#adminLabel").text();
		} else adminEmail = "not selected";
		
		var date = $("#date :selected").text();
		var lessontitle = $("#lessonTitle").val();
		var notes = $("#notes").val();
		var strategies = $("#strategies").val();
		var steps = $("#goals").val();
		var tools = $("#tools").val();
            $.ajax({
                type: 'POST',
                url: 'SendEmail',
                data:{date:date, schoolId:selectedSchoolId, teacherId:selectedTeacherId, lessonTitle:lessontitle, teacherEmail:teacherEmail, userEmail:userEmail, adminEmail:adminEmail, notes:notes, strategies:strategies, steps:steps, tools:tools},
                success: function(data) {
                	alert("Email has been sent!");
                }
            });
	 });
});


function removeBRStrings(str) {
	var newStr = str.replace(/<br *\/?>/gi,'');
	return newStr;
};