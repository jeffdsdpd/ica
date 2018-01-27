$(document).ready(function(){
	$("#schoolName").change(function(){
		var selectedSchoolId =  $("#schoolName :selected").val();
		document.getElementById("classphoto").src = "";
		$("#teacherlabel").text("");
        	$("#adminlabel").text("");
        	$("#date").empty();
		$("#date").append($('<option></option>').attr('value', '').text('Please Select'));
		$("#timestart").val("");
		$("#timeend").val("");
		$("#user").val("");
		$("#lessontitle").val("");
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
		$("#teacherlabel").text("");
		$("#teachercheckbox").prop("checked", false);
	    	$("#adminlabel").text("");
		$("#admincheckbox").prop("checked", false);
		$(".button").fadeOut("slow");

		document.getElementById("classphoto").src  = "";
		$("#date").empty();
		$("#date").append($('<option></option>').attr('value', '').text('Please Select'));
		$("#timestart").val("");
		$("#timeend").val("");
		$("#lessontitle").val("");
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
		document.getElementById("teachercheckbox").style.display = "inline";
		document.getElementById("admincheckbox").style.display = "inline";
		$.ajax({
			type: "GET",
			url:"GetEmailAddress",
			data:{teacherId: selectedTeacherId},
			dataType: "json",
			success: function (response) {
                	$.each(response, function(key, value) {
	            		if (key == 0) {
	            			$("#teacherlabel").text(value);
                		} else if (key == 1) {
                			$("#userlabel").text(value);
                		} else $("#adminlabel").text(value);
                 });
                	if ( $("#teacherlabel").text() == "Teacher Email Unavailable" && 
		        			$("#adminlabel").text() == "Admin Email Unavailable") {
                		document.getElementById("teachercheckbox").style.display = "none";
                		document.getElementById("admincheckbox").style.display = "none";
                		$("button").prop("disabled",true);
                	}
            }
        });
	});
		
	$("#date").change(function(){
		var selectedId = $("#date :selected").val();
		if (selectedId == 0){
			document.getElementById("classphoto").src = "";
			$("#timestart").val("");
			$("#timeend").val("");
			$("#lessontitle").val("");
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
            		 
    				$("#coachlabel").text((response.userId));

    				if (response.photo == "") {
            			document.getElementById("classphoto").style.display = "none";
            		} else  {
            			document.getElementById("classphoto").style.display = "block";
            		}
            		
    				document.getElementById("classphoto").src  = "data:image/png;base64," + response.photo;
            		 
    				if (response.lessonTitle == undefined) {
            			document.getElementById("lessontitle").value ="Not Recorded";
            		} else {
            			document.getElementById("lessontitle").value = (response.lessonTitle);
            		}
            		 
				document.getElementById("notes").value = removeBRStrings(response.notes);
				document.getElementById("timestart").value = (new Date(response.startTime)).toLocaleTimeString();
				document.getElementById("timeend").value = (new Date(response.endTime)).toLocaleTimeString()
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
		
		if ( $("#teachercheckbox").is(':checked')) {
			teacherEmail = $("#teacherlabel").text();
		} else teacherEmail = "not selected";
		
		if ( $("#usercheckbox").is(':checked')) {
			userEmail = $("#userlabel").text();
		} else userEmail = "not selected";
		
		if ( $("#admincheckbox").is(':checked')) {
			adminEmail = $("#adminlabel").text();
		} else adminEmail = "not selected";
		
		var date = $("#date :selected").text();
		var lessontitle = $("#lessontitle").val();
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