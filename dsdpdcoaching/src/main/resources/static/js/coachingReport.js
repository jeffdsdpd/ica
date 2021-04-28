$(document).ready(function(){
	
	//document.getElementById("classPhoto").src = "";
 	$('#notes').addClass('input-disabled');
 	$('#strategies').addClass('input-disabled');
 	$('#goals').addClass('input-disabled');
 	$('#tools').addClass('input-disabled');
	
	//executed when the email button is clicked
	$("button").click(function() {
		var selectedSchoolId = $("#schoolName :selected").text();
		var selectedTeacherId = $("#teacherName :selected").text();
		var teacherEmail = null;
		var adminEmail = null;
		
		if ( $("#teachercheckbox").is(':checked')) {
			teacherEmail = $("#teacherlabel").text();
		} else teacherEmail = "not selected";
		
		if ( $("#admincheckbox").is(':checked')) {
			adminEmail = $("#adminlabel").text();
		} else adminEmail = "not selected";
		
		var date = $("#date :selected").text();
		var lessontitle = $("#lessonTitle").val();
		var notes = $("#notes").val();
		var strategies = $("#strategies").val();
		var steps = $("#goals").val();
		var tools = $("#tools").val();
	
            $.ajax({
                type: 'GET',
                url: 'sendCoachingEmail',
                data:{date:date, schoolId:selectedSchoolId, teacherId:selectedTeacherId, lessonTitle:lessontitle, teacherEmail:teacherEmail, adminEmail:adminEmail, notes:notes, strategies:strategies, steps:steps, tools:tools},
             	async: false,
                success: function(data) {
                	alert("Email has been sent!");
                }
            });
	 });//end of button click function
	
		
	//start of changing school function
	 	$("#schoolName").change(function(){
		var selectedSchoolId =  $("#schoolName :selected").val();
		//document.getElementById("classPhoto").src = "";
		
		document.getElementById("emailreport").style.display = "none";
		document.getElementById("teachercheckbox").style.display = "none";
		document.getElementById("admincheckbox").style.display = "none";
		document.getElementById("teacherlabel").style.display = "none";
		document.getElementById("adminlabel").style.display = "none";
		document.getElementById("button").style.display = "none";
		
		$("#teacherlabel").text("");
        	$("#adminlabel").text("");
        	$("#date").empty();
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
		$("#teacherlabel").text("");
		$("#teachercheckbox").prop("checked", false);
	    	$("#adminlabel").text("");
		$("#admincheckbox").prop("checked", false);
		$(".button").fadeOut("slow");

		//document.getElementById("classPhoto").src  = "";
		
		$("#date").empty();
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
                            $dropdownList.append($("<option></option>").attr("value", key.id).text(key.entryDate+" - "+key.userId));	                    
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
			url:"getEmailAddress",
			data:{teacherId: selectedTeacherId},
			dataType: "json",
			success: function (response) {
				    
				$.each(response, function(key, value) {
            		if (value[0] != null) {
            			$("#teacherlabel").text(value[0]);
            		} else {
            			document.getElementById("teachercheckbox").style.display = "none";
            		}
            		
            		if (value[1] != null) {
            			$("#adminlabel").text(value[1]);
            			
            		} else {
            			document.getElementById("admincheckbox").style.display = "none";
            		}
			})
            }
        });
	});
		
	$("#date").change(function(){
		var selectedId = $("#date :selected").val();
		if ( $("#teacherlabel").text() != "" ) {
			document.getElementById("teacherlabel").style.display = "inline";
			document.getElementById("button").style.display = "inline";
			document.getElementById("emailreport").style.display = "inline";
			document.getElementById("teachercheckbox").style.display = "inline";
		}
		
		if ( $("#adminlabel").text() != "" ) {
			document.getElementById("adminlabel").style.display = "inline";
				document.getElementById("button").style.display = "inline";
				document.getElementById("emailreport").style.display = "inline";
				document.getElementById("admincheckbox").style.display = "inline";
		}
		
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
});


function removeBRStrings(str) {
	var newStr = str.replace(/<br *\/?>/gi,'');
	return newStr;
};