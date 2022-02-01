	$(document).ready(function() {
		
	 	$('#rubricnotes').addClass('input-disabled');
	 
		var selectedSchoolId = null;
		var ninjaTrainingRecord = null;
		
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
				var selectedSchoolId = $("#schoolId :selected").text();
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
				var smallgroup = $("#smallgroup").text();
				
				var rubricnotes = document.getElementById("rubricnotes").innerText;
			
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
			 });

		$('[data-toggle="popover"]').popover();
 
		$("#schoolId").change(function(){
			rubricTotal = 0;
			
			document.getElementById("emailreport").style.display = "none";
			document.getElementById("teachercheckbox").style.display = "none";
			document.getElementById("admincheckbox").style.display = "none";
			document.getElementById("teacherlabel").style.display = "none";
			document.getElementById("adminlabel").style.display = "none";
			document.getElementById("button").style.display = "none";
			document.getElementById("nodatatodisplay").style.display = "none";
			
		
			//Clear out fields when a new school is selected
			$("#teacherlabel").text("");
        	$("#adminlabel").text("");
			$("#teacherId").empty();
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
                    	$dropdownList.append($("<option></option>").attr("value", '').text('Please Select'));
                    	 $.each(response, function(value, key) {
                             $dropdownList.append($("<option></option>").attr("value", key.id).text((key.name)));
                         });			
                        }
                    });
                });
		
		$("#teacherId").change(function(){
			document.getElementById("nodatatodisplay").style.display = "none";
			var selectedSchoolId = $("#schoolId :selected").val();
			var selectedTeacherId = $("#teacherId :selected").val();
			
				$("#date").empty();
				$(".user").html("");
				$(".smallgroup").html("");
				
				
	            $.ajax({
	                type: "GET",
	                url:"getNinjaFormDatesByTeacherID",
	                data:{schoolId: selectedSchoolId, teacherId: selectedTeacherId},
	                dataType: "json",
	                success: function (response) {
	                	
	                	if(response.length==0) {
	                		document.getElementById("nodatatodisplay").style.display = "inline";
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


			var selectedTeacherId = $("#teacherName :selected").val();
			$("button").prop("disabled",false);
			
	/*
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
	        }); //end of the ajax call
	*/

		});
		
		
		
		$("#entryDate").change(function() {
			console.log("Here is smallgroupyellow" + ninjaTrainingRecord[0].smallgroupyellow);
			
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
			
			
			$(".user").html("");
			$(".smallgroup").html("");
			
			
			if (selectedSchoolId == 0){
				 $(".button").fadeOut("slow");
				 $(".container").fadeOut("slow");
				 $(".additionalRubricItems").fadeOut("slow");
			} else {
				$(".button").fadeIn("slow");
				$(".container").fadeIn("slow");
			
        		//$(".user").html(response.userId);
        		//$(".observed").html(response.observed);

				//if (!$.trim(response.smallgroup)) {
				//	$(".smallgroup").html("Not Recorded");
				//} else {
				//	$(".smallgroup").html(response.smallgroup);
				//	}
							
				}
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
