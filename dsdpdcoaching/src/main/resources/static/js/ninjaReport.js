	$(document).ready(function() {
		
	 	$('#rubricnotes').addClass('input-disabled');
		var selectedSchoolId = null;
		var selectedTeacherId = null;
		var selectedDate = null;
		var recordId = null;
		var teacherEmail = null;
		var adminEmail = null;
		
		//THE PIECE OF JS WILL OPEN THE HEADERS WHEN CLICKED
		var coll = document.getElementsByClassName("hokeexpandable");
			var i;

			for (i = 0; i < coll.length; i++) {
			  coll[i].addEventListener("click", function() {
			    this.classList.toggle("hokeactive");
			    var content = this.nextElementSibling;
			    if (content.style.display === "block") {
			      content.style.display = "none";
			    } else {
			      content.style.display = "block";
			    }
			  });
			}

		 $("button").click(function(e) {
			e.preventDefault();
			selectedSchoolId = $("#schoolId :selected").text();
			selectedTeacherId = $("#teacherName :selected").text();
			teacherEmail = null;
			adminEmail = null;
				
				if ( $("#teachercheckbox").is(':checked')) {
					teacherEmail = $("#teacherlabel").text();
				} else teacherEmail = "not selected";
				
				if ( $("#admincheckbox").is(':checked')) {
					adminEmail = $("#adminlabel").text();
				} else adminEmail = "not selected";
				
				var rubricnotes = document.getElementById("rubricnotes").innerText;
		
	/*	
		            $.ajax({
		                type: 'GET',
		                url: 'sendRubricEmail',
		                data:{date:date, schoolId:selectedSchoolId, teacherId:selectedTeacherId, teacherEmail:teacherEmail,
		                	adminEmail:adminEmail, planning:planning, assessanddata:assessanddata, path:path, place:place, pace:pace, classmgmt:classmgmt, 
		                	teacherrole:teacherrole, studentengage:studentengage, studentcollab:studentcollab, technology:technology, rubricnotes:rubricnotes, questions:questions,
		                	planningLevelData:planningLevelData, assessLevelData:assessLevelData, pathLevelData:pathLevelData, placeLevelData:placeLevelData,
		                	paceLevelData:paceLevelData, classmgmtLevelData:classmgmtLevelData, teachroleLevelData:teachroleLevelData, stengageLevelData:stengageLevelData,
		                	stcollabLevelData:stcollabLevelData, technologyLevelData:technologyLevelData, rubricTotal:rubricTotal
		             },
		             	async: false,
		                success: function(data) {
		                	alert("Email has been sent!");
		                }
		            });

*/
			 });

		$('[data-toggle="popover"]').popover();
 

		//SCHOOL HAS BEEN SELECTED SO CLEAR OUT SOME FIELDS IF PREVIOUSLY SELECTED
		$("#schoolId").change(function(){
			rubricTotal = 0;
			$(".container").fadeOut("slow");
			
			document.getElementById("emailreport").style.display = "none";
			document.getElementById("teachercheckbox").style.display = "none";
			document.getElementById("admincheckbox").style.display = "none";
			document.getElementById("teacherlabel").style.display = "none";
			document.getElementById("adminlabel").style.display = "none";
			document.getElementById("button").style.display = "none";
			//document.getElementById("nodatatodisplay").style.display = "none";

			$("#teacherlabel").text("");
        	$("#adminlabel").text("");
			$("#teacherId").empty();
			$("#teacherId").append($("<option></option>").attr("value", '').text('Please Select'));
			$("#entryDate").empty();
			$(".user").html("");
			$("#smallgroup").html("");
			$("#rubricnotes").val("");
			
			$(".container").fadeOut("slow");
				
			selectedSchoolId =  $("#schoolId :selected").val();
	            $.ajax({
                    type: "GET",
                    url:"getTeachersBySchool",
                    data:{schoolId: selectedSchoolId},
                    dataType: "json",
                    success: function (response) {
                    	var $dropdownList = $("#teacherId");
                    	$dropdownList.empty();
						$("#teacherId").append($("<option></option>").attr("value", '').text('Please Select'));
                    	$.each(response, function(value, key) {
                        	$dropdownList.append($("<option></option>").attr("value", key.id).text((key.name)));
                         });			
                        }
                    });
                });


		//TEACHER HAS BEEN SELECTED SO GO GET THE NINJA TRAINING RECORDS FOR THAT TEACHER
		$("#teacherId").change(function(){
			$(".container").fadeOut("slow");
			//document.getElementById("nodatatodisplay").style.display = "none";
			selectedSchoolId = $("#schoolId :selected").val();
			selectedTeacherId = $("#teacherId :selected").val();
			
            $.ajax({
                type: "GET",
                url:"getNinjaFormDatesByTeacherID",
                data:{schoolId: selectedSchoolId, teacherId: selectedTeacherId, date: selectedDate},
                dataType: "json",
                success: function (response) {
                	
                	if(response.length==0) {
                		//document.getElementById("nodatatodisplay").style.display = "inline";
                	 } else {
						ninjaTrainingRecord = response;
                		var $dropdownList = $("#entryDate");
	                    $dropdownList.empty();
	                    $dropdownList.append($("<option></option>").attr("value", '').text('Please Select'));
	                    $.each(response, function(value, key) {
	                    	$dropdownList.append($("<option></option>").attr("value", key.id).text(key.date+" - "+key.userId));	                    
                     });
                    }}
                });
			});
		
		
		//DATE HAS BEEN SELECTED SO GO GET THE SINGLE RECORD DETAILS
		$("#entryDate").change(function() {
			$(".container").fadeOut("slow");
			selectedSchoolId = $("#schoolId :selected").val();
			selectedTeacherId = $("#teacherId :selected").val();
			selectedDate = $("#entryDate :selected").text();
			recordId = $("#entryDate :selected").val();
			
			$.ajax({
                type: "GET",
                url:"getNinjaTrainingRecordById",
                data:{recordId: recordId},
                dataType: "json",
                success: function (response) {
                	
                	if(response.length==0) {
                		//document.getElementById("nodatatodisplay").style.display = "inline";
                	 } else {
						$(".container").fadeIn("slow");
						//Set the UserId
						$("#user").text(response.userId);
						
						//SMALLGROUP
						var img = document.getElementById('smallgroupbeltimage');
					    img.src = "/images/"+response.smallGroupColor+"beltimage.png";
						$("#smallgrouplevelupvalue").text(response.smallGroupLevelUp);
						
						//CHECKLIST
						var img = document.getElementById('checklistbeltimage');
					    img.src = "/images/"+response.checklistColor+"beltimage.png";
						$("#checklistlevelupvalue").text(response.checklistLevelUp);
	
						//DATA
						var img = document.getElementById('databeltimage');
					    img.src = "/images/"+response.dataColor+"beltimage.png";
						
						//STUDENT CHOICE
						var img = document.getElementById('studentchoicebeltimage');
					    img.src = "/images/"+response.studentChoiceColor+"beltimage.png";
	
						//INDEPENEDENT STUDIO
						var img = document.getElementById('independentstudiobeltimage');
					    img.src = "/images/"+response.independentStudioColor+"beltimage.png";
						
						//DIGITAL CONTENT
						var img = document.getElementById('digitalcontentbeltimage');
					    img.src = "/images/"+response.digitalContentColor+"beltimage.png";
	
                    }}
                });
			
			});

	});// end of document ready function

	function loopForm(form) {
	    var checkedArray = new Array();
	    var uncheckedArray = new Array();
	    
	    for (var i = 0; i < form.elements.length; i++ ) {
	        if (form.elements[i].type == 'checkbox') {
	        		if (form.elements[i].name != 'teachercheckbox' && form.elements[i].name != 'admincheckbox' ) {
		            if (form.elements[i].checked == true) {
		                checkedArray.push(form.elements[i].value);
		           
		            } else {
		            		uncheckedArray.push(form.elements[i].value);
		            		
		            }
	        		}
	        }
	    }
	    document.getElementById("checkedValues").value=checkedArray;
	    document.getElementById("unCheckedValues").value=uncheckedArray;
	};
