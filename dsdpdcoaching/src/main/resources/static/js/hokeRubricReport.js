	$(document).ready(function() {
		
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
		
		//document.getElementById("classPhoto").src = "";
	 	$('#rubricnotes').addClass('input-disabled');
	 	$('#levelup').addClass('input-disabled');
	 	$('#questions').addClass('input-disabled');
		
		var selectedSchoolId = null;

		 $("emailbutton").click(function() {
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
				
				var rubricnotes = document.getElementById("rubricnotes").innerText;
				var levelup = document.getElementById("levelupcheckboxes").innerText;
				var questions = document.getElementById("questions").value;
				
			
		            $.ajax({
		                type: 'GET',
		                url: 'sendRubricEmail',
		                data:{date:date, schoolId:selectedSchoolId, teacherId:selectedTeacherId, teacherEmail:teacherEmail,
		                	adminEmail:adminEmail, planning:planning, assessanddata:assessanddata, path:path, place:place, pace:pace, classmgmt:classmgmt, 
		                	teacherrole:teacherrole, studentengage:studentengage, studentcollab:studentcollab, technology:technology, rubricnotes:rubricnotes,levelup:levelup, questions:questions,
		                	planningLevelData:planningLevelData, assessLevelData:assessLevelData, pathLevelData:pathLevelData, placeLevelData:placeLevelData,
		                	paceLevelData:paceLevelData, classmgmtLevelData:classmgmtLevelData, teachroleLevelData:teachroleLevelData, stengageLevelData:stengageLevelData,
		                	stcollabLevelData:stcollabLevelData, technologyLevelData:technologyLevelData
		             },
		             	async: false,
		                success: function(data) {
		                	alert("Email has been sent!");
		                }
		            });
			 });

		$('[data-toggle="popover"]').popover();
 
		$("#schoolName").change(function(){
				uncheckAll();
				$("#levelupcheckboxes").html("");
				document.getElementById("emailreport").style.display = "none";
				document.getElementById("teachercheckbox").style.display = "none";
				document.getElementById("admincheckbox").style.display = "none";
				document.getElementById("teacherlabel").style.display = "none";
				document.getElementById("adminlabel").style.display = "none";
				document.getElementById("emailbutton").style.display = "none";
				document.getElementById("nodatatodisplay").style.display = "none";
				
				$(".levelupclass").fadeOut("slow");
				
				$("#teacherlabel").text("");
	        		$("#adminlabel").text("");
				$("#teacherName").empty();
				$("#date").empty();
				$(".user").html("");
				$(".observed").html("");
				$(".timeTaken").html("");
				$("#rubricnotes").val("");
				$("#levelup").val("");
				$("#questions").val("");
			
				$(".container").fadeOut("slow");
				
			selectedSchoolId =  $("#schoolName :selected").val();
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
                });
		
		$("#teacherName").change(function(){
			uncheckAll();
			$("#levelupcheckboxes").html("");
			document.getElementById("nodatatodisplay").style.display = "none";
			var selectedSchoolId = $("#schoolName :selected").val();
			var selectedTeacherId = $("#teacherName :selected").val();
			
			$("#levelupcheckboxes").html("");

				$(".levelupclass").fadeOut("slow");
				
				$("#date").empty();
				$(".user").html("");
				$(".observed").html("");
				$(".timeTaken").html("");
				$("#rubricnotes").val("");
				$("#levelup").val("");
				$("#questions").val("");
				
	            $.ajax({
	                type: "GET",
	                url:"getHokeRubricDatesAndId",
	                data:{schoolId: selectedSchoolId, teacherId: selectedTeacherId},
	                dataType: "json",
	                success: function (response) {
	                	
	                	if(response.length==0){
	                		document.getElementById("nodatatodisplay").style.display = "inline";
	                	 }
	                
	                		 var $dropdownList = $("#date");
		                    	$dropdownList.empty();
		                    	$dropdownList.append($("<option></option>").attr("value", '').text('Please Select'));
		                    	$.each(response, function(value, key) {
		                             $dropdownList.append($("<option></option>").attr("value", key.id).text((key.date)));	                    
	                     });
	                    }
	                });

			var selectedTeacherId = $("#teacherName :selected").val();
			$("emailbutton").prop("disabled",false);
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
		
		
		
		$("#date").change(function() {
			uncheckAll();
			$("#levelupcheckboxes").html("");
			
			if ( $("#teacherlabel").text() != "" ) {
    				document.getElementById("teacherlabel").style.display = "inline";
    				document.getElementById("emailbutton").style.display = "inline";
    				document.getElementById("emailreport").style.display = "inline";
    				document.getElementById("teachercheckbox").style.display = "inline";
			}
			
			if ( $("#adminlabel").text() != "" ) {
				document.getElementById("adminlabel").style.display = "inline";
    				document.getElementById("emailbutton").style.display = "inline";
    				document.getElementById("emailreport").style.display = "inline";
    				document.getElementById("admincheckbox").style.display = "inline";
			}
			
			
			var selectedId = $("#date :selected").val();

			var low = '#FF9900';
			var med = '#6300A5';
			var high = '#0FAD00';
			
			$(".timeTaken").html("");
			$(".user").html("");
			$(".observed").html("");
			$(".timeTaken").html("");
			$("#rubricnotes").val("");
			$("#levelup").val("");
			$("#questions").val("");
			
			if (selectedId == 0){
				 $(".emailbutton").fadeOut("slow");
				 $(".container").fadeOut("slow");
				 $(".additionalRubricItems").fadeOut("slow");
			} else {
			$(".emailbutton").fadeIn("slow");
			$(".container").fadeIn("slow");
			
			$(".levelupclass").fadeIn("slow");
	            $.ajax({
	                type: "GET",
	                url:"getHokeRubricById",
	                data:{recordId: selectedId},
	                dataType: "json",
	                success: function (response) {
	                		 
	                		 $(".user").html(response.userId);
	                		 $(".observed").html(response.observed);
	                		 
	                		 if (!$.trim(response.timeObserved)) {
	                			 $(".timeTaken").html("Not Recorded");
	                		 } else {
	                			 $(".timeTaken").html(format12Hour(response.timeObserved));
	                			 }
	                		 
	                		 $("#levelupcheckboxes").append( $("<label>").attr('id', 'levelupheader').text("Next Steps"));
	                		 $("#levelupcheckboxes").append( $("<br />"));
	                		 $("#levelupcheckboxes").append( $("<br />"));
	                				 
	                		 //loop through the levelup list and build the html
	                		 for (i = 0; i < response.levelupList.length; i++) {
	                		 		if (response.levelupList[i].completed == 'true') {
	                		 			$("#levelupcheckboxes").append( $("<input>")
	                   	   						.attr('type', 'checkbox')
	                   	   						.attr('id', 'checkbox')
	                   	   						.attr('name','checkbox')
	                   	   						.attr('checked','checked')
	                   	   						.val(response.id + ' ' + response.levelupList[i].levelupid));
	                		 	} else {
	                		 		$("#levelupcheckboxes").append( $("<input>")
	               	   						.attr('type', 'checkbox')
	               	   						.attr('id', 'checkbox')
	               	   						.attr('name','checkbox')
	               	   						.val(response.id + ' ' + response.levelupList[i].levelupid) );
	                		 		}
	                		 		$("#levelupcheckboxes").append( $("<label>").text(response.levelupList[i].levelup));
	        	        	   			$("#levelupcheckboxes").append("<br/>");
	                		 	};
	                			 
	                		 	
	                		 	//start placing check marks in the rubric categories
	                		 	//INTEGRATED DIGITAL CONTENT
	                		 	if (response.idccontentalignment1 == 'Not Yet') {
	                		 		$("#idccontentalignment1NY").prop('checked',true);
	                		 	} else {
	                		 		$("#idccontentalignment1M").prop('checked',true);
	                		 	}
	                		 	
	                		 	if (response.idccontentalignment2 == 'Not Yet') {
	                		 		$("#idccontentalignment2NY").prop('checked',true);
	                		 	} else {
	                		 		$("#idccontentalignment2M").prop('checked',true);
	                		 	}
	                		 	$("#idcnotes").val(response.idcnotes)
	                		 	
	                		 	
	                		 	//TARGETED INSTRUCTION
	                		 	if (response.tistandardalignment1 == 'Not Yet') {
	                		 		$("#tistandardalignment1NY").prop('checked',true);
	                		 	} else {
	                		 		$("#tistandardalignment1M").prop('checked',true);
	                		 	}
	                		 	
	                		 	if (response.idccontentalignment2 == 'Not Yet') {
	                		 		$("#tistandardalignment2NY").prop('checked',true);
	                		 	} else {
	                		 		$("#tistandardalignment2M").prop('checked',true);
	                		 	}
	                		 	
	                		 	if (response.tismallgroup1 == 'Not Yet') {
	                		 		$("#tismallgroup1NY").prop('checked',true);
	                		 	} else {
	                		 		$("#tismallgroup1M").prop('checked',true);
	                		 	}
	                		 	
	                		 	if (response.tismallgroup2 == 'Not Yet') {
	                		 		$("#tismallgroup2NY").prop('checked',true);
	                		 	} else {
	                		 		$("#tismallgroup2M").prop('checked',true);
	                		 	}
	                		 	
	                		 	if (response.tismallgroup3 == 'Not Yet') {
	                		 		$("#tismallgroup3NY").prop('checked',true);
	                		 	} else {
	                		 		$("#tismallgroup3M").prop('checked',true);
	                		 	}
	                		 	
	                		 	if (response.tiintentionalgrouping1 == 'Not Yet') {
	                		 		$("#tiintentionalgrouping1NY").prop('checked',true);
	                		 	} else {
	                		 		$("#tiintentionalgrouping1M").prop('checked',true);
	                		 	}
	                		 	
	                		 	if (response.tiintentionalgrouping2 == 'Not Yet') {
	                		 		$("#tiintentionalgrouping2NY").prop('checked',true);
	                		 	} else {
	                		 		$("#tiintentionalgrouping2M").prop('checked',true);
	                		 	}
	                		 	
	                		 	$("#tinotes").val(response.tinotes)
	                		 	
	                		 	
	                		 	//ENGAGEMENT
	                		 	if (response.engcollaboration == 'Not Yet') {
	                		 		$("#engcollaborationNY").prop('checked',true);
	                		 	} else {
	                		 		$("#engcollaborationM").prop('checked',true);
	                		 	}
	                		 	
	                		 	if (response.engchoice == 'Not Yet') {
	                		 		$("#engchoiceNY").prop('checked',true);
	                		 	} else {
	                		 		$("#engchoiceM").prop('checked',true);
	                		 	}
	                		 	
	                		 	if (response.engcreation == 'Not Yet') {
	                		 		$("#engcreationNY").prop('checked',true);
	                		 	} else {
	                		 		$("#engcreationM").prop('checked',true);
	                		 	}
	                		 	
	                		 	if (response.engcriticalthinking == 'Not Yet') {
	                		 		$("#engcriticalthinkingNY").prop('checked',true);
	                		 	} else {
	                		 		$("#engcriticalthinkingM").prop('checked',true);
	                		 	}
	                		 	
	                		 	if (response.engactiveparticipation == 'Not Yet') {
	                		 		$("#engactiveparticipationNY").prop('checked',true);
	                		 	} else {
	                		 		$("#engactiveparticipationM").prop('checked',true);
	                		 	}
	                		 	
	                		 	$("#engnotes").val(response.engnotes)
	                		 	
	                		 	
	                		 	//ENVIRONMENT
	                		 	if (response.envclassroommanagement == 'Not Yet') {
	                		 		$("#envclassroommanagementNY").prop('checked',true);
	                		 	} else {
	                		 		$("#envclassroommanagementM").prop('checked',true);
	                		 	}
	                		 	
	                		 	if (response.envphysicalenvironment == 'Not Yet') {
	                		 		$("#envphysicalenvironmentNY").prop('checked',true);
	                		 	} else {
	                		 		$("#envphysicalenvironmentM").prop('checked',true);
	                		 	}
	                		 	
	                		 	if (response.envtimemanagement1 == 'Not Yet') {
	                		 		$("#envtimemanagement1NY").prop('checked',true);
	                		 	} else {
	                		 		$("#envtimemanagement1M").prop('checked',true);
	                		 	}
	                		 	
	                		 	if (response.envtimemanagement2 == 'Not Yet') {
	                		 		$("#envtimemanagement2NY").prop('checked',true);
	                		 	} else {
	                		 		$("#envtimemanagement2M").prop('checked',true);
	                		 	}
	                		 	
	                		 	if (response.envdigitalcitizenship == 'Not Yet') {
	                		 		$("#envdigitalcitizenshipNY").prop('checked',true);
	                		 	} else {
	                		 		$("#envdigitalcitizenshipM").prop('checked',true);
	                		 	}
	                		 	
	                		 	$("#envnotes").val(response.envnotes)
	                		 	
	                		 	
	                		 	
	                		 	/*COMMENT THIS OUT UNTIL FIGURE OUT WHAT TO DO FOR LEVELUP AND HOKE SCHOOLS
	   	                		 $.ajax({
	   	         	                type: "GET",
	   	         	                url:"getLevelUpData",
	   	         	                data:{
	   	         	                	rubricItemName1:rubricValuesArray[0].name, rubricItemValue1:rubricValuesArray[0].value,
	   	         	                	rubricItemName2:rubricValuesArray[1].name, rubricItemValue2:rubricValuesArray[1].value,
	   	         	                	rubricItemName3:rubricValuesArray[2].name, rubricItemValue3:rubricValuesArray[2].value
	   	         	                },
	   	         	                dataType: "json",
	   	         	                success: function (response) {
	   	         	                	
	   	         	                	<!-- result = result[randomNumber] ;  -->
	   	         	                	
	   	         	                $.each(response, function(key, value) {
	   	         	                	var result= (value[1]).split(/\n/g);
	   	         	                	var randomNumber = Math.floor(Math.random()*result.length);
	   	         	                	
	   	         	                	document.getElementById(value[0]+'LevelUpData').style.visibility = "visible";
	   	         	                
	   	         	                	$('#'+value[0]+'LevelUpData').attr("data-content", result[randomNumber] );
	   	         	                });
	   	         	                }
	   	                		 });
	   	                		 */

	                		 document.getElementById("rubricnotes").value = response.rubricNotes;
	                		 //document.getElementById("levelup").value = response.levelUp;
	                		 document.getElementById("questions").value = response.questions;
	                		 
	           
	                }
                });
			}
		});
		
		function uncheckAll() {
			//INTEGRATED DIGITAL CONTENT
		 		$("#idccontentalignment1NY").prop('checked',false);
		 		$("#idccontentalignment1M").prop('checked',false);
		 		$("#idccontentalignment2NY").prop('checked',false);
		 		$("#idccontentalignment2M").prop('checked',false);
		 	
		 	//TARGETED INSTRUCTION
		 		$("#tistandardalignment1NY").prop('checked',false);
		 		$("#tistandardalignment1M").prop('checked',false);
		 		$("#tistandardalignment2NY").prop('checked',false);
		 		$("#tistandardalignment2M").prop('checked',false);
		 		$("#tismallgroup1NY").prop('checked',false);
		 		$("#tismallgroup1M").prop('checked',false);
		 		$("#tismallgroup2NY").prop('checked',false);
		 		$("#tismallgroup2M").prop('checked',false);
		 		$("#tismallgroup3NY").prop('checked',false);
		 		$("#tismallgroup3M").prop('checked',false);
		 		$("#tiintentionalgrouping1NY").prop('checked',false);
		 		$("#tiintentionalgrouping1M").prop('checked',false);
		 		$("#tiintentionalgrouping2NY").prop('checked',false);
		 		$("#tiintentionalgrouping2M").prop('checked',false);
		};
		
		function format12Hour(timeString) {
			 var date = new Date(timeString);
			 var hh = date.getHours();
			 var mm = date.getMinutes();
			 hh = hh < 10 ? '0'+hh : hh; 
			 mm = mm < 10 ? '0'+mm : mm;
			 var curr_time = hh+':'+mm;
			 return curr_time;
		};
		

		 	$(function(){
		    $('[rel="popover"]').popover({
		        container: 'body',
		        html: true,
		        content: function () {
		            var clone = $($(this).data('popover-content')).clone(true).removeClass('hide');
		            return clone;
		        }
		    }).click(function(e) {
		        e.preventDefault();
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
