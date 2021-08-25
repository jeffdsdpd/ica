	$(document).ready(function() {
		var levelUpValuesToEmail = [];
		
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
		
	 	$('#rubricnotes').addClass('input-disabled');
	 	$('#levelup').addClass('input-disabled');
	 	$('#questions').addClass('input-disabled');
		
		var selectedSchoolId = null;

		 $("#emailbutton").click(function(e) {
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
				
				//Start setting the radio button selections
				//INTEGRATED DIGITAL CONTENT RADIO SELECTIONS FOR EMAILING
				if ( $("#idccontentalignment1NY").prop('checked') == true ) {
					var idccontentalignment1 = $("input[name='idccontentalignment1NY']:checked").parent().text();
				} else {
					var idccontentalignment1 = $("input[name='idccontentalignment1M']:checked").parent().text();
				}
				
				if ( $("#idccontentalignment2NY").prop('checked') == true ) {
					var idccontentalignment2 = $("input[name='idccontentalignment2NY']:checked").parent().text();
				} else {
					var idccontentalignment2 = $("input[name='idccontentalignment2M']:checked").parent().text();
				}
				
				
				//TARGETED INSTRUCTION RADIO SELECTIONS FOR EMAILING
				if ( $("#tistandardalignment1NY").prop('checked') == true ) {
					var tistandardalignment1 = $("input[name='tistandardalignment1NY']:checked").parent().text();
				} else {
					var tistandardalignment1 = $("input[name='tistandardalignment1M']:checked").parent().text();
				}
				
				if ( $("#tistandardalignment2NY").prop('checked') == true ) {
					var tistandardalignment2 = $("input[name='tistandardalignment2NY']:checked").parent().text();
				} else {
					var tistandardalignment2 = $("input[name='tistandardalignment2M']:checked").parent().text();
				}
				
				if ( $("#tismallgroup1NY").prop('checked') == true ) {
					var tismallgroup1 = $("input[name='tismallgroup1NY']:checked").parent().text();
				} else {
					var tismallgroup1 = $("input[name='tismallgroup1M']:checked").parent().text();
				}
				
				if ( $("#tismallgroup2NY").prop('checked') == true ) {
					var tismallgroup2 = $("input[name='tismallgroup2NY']:checked").parent().text();
				} else {
					var tismallgroup2 = $("input[name='tismallgroup2M']:checked").parent().text();
				}
				
				if ( $("#tismallgroup3NY").prop('checked') == true ) {
					var tismallgroup3 = $("input[name='tismallgroup3NY']:checked").parent().text();
				} else {
					var tismallgroup3 = $("input[name='tismallgroup3M']:checked").parent().text();
				}
				
				if ( $("#tiintentionalgrouping1NY").prop('checked') == true ) {
					var tiintentionalgrouping1 = $("input[name='tiintentionalgrouping1NY']:checked").parent().text();
				} else {
					var tiintentionalgrouping1 = $("input[name='tiintentionalgrouping1M']:checked").parent().text();
				}
				
				if ( $("#tiintentionalgrouping2NY").prop('checked') == true ) {
					var tiintentionalgrouping2 = $("input[name='tiintentionalgrouping2NY']:checked").parent().text();
				} else {
					var tiintentionalgrouping2 = $("input[name='tiintentionalgrouping2M']:checked").parent().text();
				}
				
				
				//ENGAGEMENT RADIO SELECTIONS FOR EMAILING
				if ( $("#engcollaborationNY").prop('checked') == true ) {
					var engcollaboration = $("input[name='engcollaborationNY']:checked").parent().text();
				} else {
					var engcollaboration = $("input[name='engcollaborationM']:checked").parent().text();
				}
				
				if ( $("#engchoiceNY").prop('checked') == true ) {
					var engchoice = $("input[name='engchoiceNY']:checked").parent().text();
				} else {
					var engchoice = $("input[name='engchoiceM']:checked").parent().text();
				}
				
				if ( $("#engcreationNY").prop('checked') == true ) {
					var engcreation = $("input[name='engcreationNY']:checked").parent().text();
				} else {
					var engcreation = $("input[name='engcreationM']:checked").parent().text();
				}
				
				if ( $("#engcriticalthinkingNY").prop('checked') == true ) {
					var engcriticalthinking = $("input[name='engcriticalthinkingNY']:checked").parent().text();
				} else {
					var engcriticalthinking = $("input[name='engcriticalthinkingM']:checked").parent().text();
				}
				
				if ( $("#engactiveparticipationNY").prop('checked') == true ) {
					var engactiveparticipation = $("input[name='engactiveparticipationNY']:checked").parent().text();
				} else {
					var engactiveparticipation = $("input[name='engactiveparticipationM']:checked").parent().text();
				}
				
				
				//ENVIRONMENT RADIO SELECTIONS FOR EMAILING
				if ( $("#envclassroommanagementNY").prop('checked') == true ) {
					var envclassroommanagement = $("input[name='envclassroommanagementNY']:checked").parent().text();
				} else {
					var envclassroommanagement = $("input[name='envclassroommanagementM']:checked").parent().text();
				}
				
				if ( $("#envphysicalenvironmentNY").prop('checked') == true ) {
					var envphysicalenvironment = $("input[name='envphysicalenvironmentNY']:checked").parent().text();
				} else {
					var envphysicalenvironment = $("input[name='envphysicalenvironmentM']:checked").parent().text();
				}
				
				if ( $("#envtimemanagement1NY").prop('checked') == true ) {
					var envtimemanagement1 = $("input[name='envtimemanagement1NY']:checked").parent().text();
				} else {
					var envtimemanagement1 = $("input[name='envtimemanagement1M']:checked").parent().text();
				}
				
				if ( $("#envtimemanagement2NY").prop('checked') == true ) {
					var envtimemanagement2 = $("input[name='envtimemanagement2NY']:checked").parent().text();
				} else {
					var envtimemanagement2 = $("input[name='envtimemanagement2M']:checked").parent().text();
				}
				
				if ( $("#envdigitalcitizenshipNY").prop('checked') == true ) {
					var envdigitalcitizenship = $("input[name='envdigitalcitizenshipNY']:checked").parent().text();
				} else {
					var envdigitalcitizenship = $("input[name='envdigitalcitizenshipM']:checked").parent().text();
				}
				
				
				//STUDENT REFLECTION RADIO SELECTIONS FOR EMAILING
				if ( $("#srarticulateNY").prop('checked') == true ) {
					var srarticulate = $("input[name='srarticulateNY']:checked").parent().text();
				} else {
					var srarticulate = $("input[name='srarticulateM']:checked").parent().text();
				}
				
				if ( $("#srteacherfeedbackNY").prop('checked') == true ) {
					var srteacherfeedback = $("input[name='srteacherfeedbackNY']:checked").parent().text();
				} else {
					var srteacherfeedback = $("input[name='srteacherfeedbackM']:checked").parent().text();
				}
				
				
				//DATA DRIVEN DECISIONS RADIO SELECTIONS FOR EMAILING
				if ( $("#ddduseofdataNY").prop('checked') == true ) {
					var ddduseofdata = $("input[name='ddduseofdataNY']:checked").parent().text();
				} else {
					var ddduseofdata = $("input[name='ddduseofdataM']:checked").parent().text();
				}
				
				var rubricnotes = $("#rubricnotes").val();
				var levelup = document.getElementById("hokelevelupcheckboxes").outerHTML;
				var questions = document.getElementById("questions").value;
				
				
				//GET THE LEVEL UP SELECTIONS FOR THE EMAIL
				//var idccontentalignment1NYLevelUpData = $('#idccontentalignment1NYLevelUpData').attr("data-content");
				//var idccontentalignment2NYLevelUpData = $('#idccontentalignment2NYLevelUpData').attr("data-content");
				
			
		            $.ajax({
		                type: 'GET',
		                url: 'sendHokeModelTeacherRubricEmail',
		                data:{date:date, schoolId:selectedSchoolId, teacherId:selectedTeacherId, teacherEmail:teacherEmail, adminEmail:adminEmail,
		                	
		                idccontentalignment1:idccontentalignment1, idccontentalignment2:idccontentalignment2,
		                tistandardalignment1:tistandardalignment1, tistandardalignment2:tistandardalignment2, tismallgroup1:tismallgroup1, tismallgroup2:tismallgroup2, tismallgroup3:tismallgroup3, tiintentionalgrouping1:tiintentionalgrouping1, tiintentionalgrouping2:tiintentionalgrouping2,
		                engcollaboration:engcollaboration, engchoice:engchoice, engcreation:engcreation, engcriticalthinking:engcriticalthinking, engactiveparticipation:engactiveparticipation,
		                envclassroommanagement:envclassroommanagement, envphysicalenvironment:envphysicalenvironment, envtimemanagement1:envtimemanagement1, envtimemanagement2:envtimemanagement2, envdigitalcitizenship:envdigitalcitizenship,
		                srarticulate:srarticulate, srteacherfeedback:srteacherfeedback, ddduseofdata:ddduseofdata,
		                	
		                	rubricnotes:rubricnotes,levelup:levelup, questions:questions, levelUpValuesToEmail:levelUpValuesToEmail
		                
		             },
		             	async: false,
		                success: function(data) {
		                	alert("Email has been sent!");
		                }
		            });
		            
			 });

		$('[data-toggle="popover"]').popover();
 
		$("#schoolId").change(function(){
				uncheckAll();
				levelUpValuesToEmail = [];
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
				
			selectedSchoolId =  $("#schoolId :selected").val();
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
			levelUpValuesToEmail = [];
			$("#levelupcheckboxes").html("");
			document.getElementById("nodatatodisplay").style.display = "none";
			var selectedSchoolId = $("#schoolId :selected").val();
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
	                url:"getHokeModelTeacherRubricDatesIdUserid",
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
		                             $dropdownList.append($("<option></option>").attr("value", key.id).text(key.date+" - "+key.userId));                    
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
			levelUpValuesToEmail = [];
			$("#hokelevelupcheckboxes").html("");
			
			
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
				 $(".emailelements").fadeOut("slow");
				 $(".container").fadeOut("slow");
				 $(".additionalRubricItems").fadeOut("slow");
			} else {
			$(".emailelements").fadeIn("slow");
			$(".container").fadeIn("slow");
			
			$(".levelupclass").fadeIn("slow");
	            $.ajax({
	                type: "GET",
	                url:"getHokeModelTeacherRubricById",
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
	                		 
	                		 
	                		 $("#hokelevelupcheckboxes").append( $("<label>").attr('id', 'levelupheader').text("Next Steps"));
	                		 $("#hokelevelupcheckboxes").append( $("<br />"));
	                		 $("#hokelevelupcheckboxes").append( $('<label style="font-size:11px; font-weight:bold; text-decoration:underline;">').attr('id', 'levelupheaderdate').text("Date Completed"));
	                		 $("#hokelevelupcheckboxes").append( $("<br />"));
	                		 
	                		 $("#hokelevelupcheckboxes").append( $("<div id='taskcontainer'>"))
	                				 
	                		 //loop through the levelup list and build the html
	                		 for (i = 0; i < response.levelupList.length; i++) {
	                		 		if (response.levelupList[i].completed == 'true') {
	                		 			//add the date the task was completed
	                		 			var date = new Date(response.levelupList[i].datecompleted);
	                		 			$("#taskcontainer").append( $('<div id=itemrow'+i+'>'))
	                		 			$('#itemrow'+i).append( $('<label style="margin-right:10px; font-size:16px;">').text(date.toLocaleDateString()+' '));
	                		 			$('#itemrow'+i).append( $("<input>")
	                   	   						.attr('type', 'checkbox')
	                   	   						.attr('id', 'checkbox')
	                   	   						.attr('name','checkbox')
	                   	   						.attr('checked','checked')
	                   	   						.val(response.id + ' ' + response.levelupList[i].levelupid));
	                		 			$('#itemrow'+i).append( $("<label>").text(response.levelupList[i].levelup));
	                		 			$('#itemrow'+i).append("<br/>");
	                		 	} else {
	                		 		$("#taskcontainer").append( $('<div id=itemrow'+i+'>'))
	                		 		$('#itemrow'+i).append( $('<label style="margin-right:10px; font-size:10px;">').text('Not Completed '));
	                		 		$('#itemrow'+i).append( $("<input>")
	               	   						.attr('type', 'checkbox')
	               	   						.attr('id', 'checkbox')
	               	   						.attr('name','checkbox')
	               	   						.val(response.id + ' ' + response.levelupList[i].levelupid) );
	                		 		$('#itemrow'+i).append( $("<label>").text(response.levelupList[i].levelup));
	                		 		$('#itemrow'+i).append("<br/>");
	                		 		}
	                		 		
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
	                		 	
	                		 	
	                		 	//STUDENT REFLECTION
	                		 	if (response.srarticulate == 'Not Yet') {
	                		 		$("#srarticulateNY").prop('checked',true);
	                		 	} else {
	                		 		$("#srarticulateM").prop('checked',true);
	                		 	}
	                		 	
	                		 	if (response.srtecherfeedback == 'Not Yet') {
	                		 		$("#srteacherfeedbackNY").prop('checked',true);
	                		 	} else {
	                		 		$("#srteacherfeedbackM").prop('checked',true);
	                		 	}
	                		 	
	                		 	$("#srnotes").val(response.srnotes)
	                		 	
	                		 	
	                		 	//DATA DRIVEN DECISIONS
	                		 	if (response.ddduseofdata == 'Not Yet') {
	                		 		$("#ddduseofdataNY").prop('checked',true);
	                		 	} else {
	                		 		$("#ddduseofdataM").prop('checked',true);
	                		 	}
	                		 	$("#dddnotes").val(response.dddnotes)
	                		 	
	                		 	

	                		 	//GET THE RADIO SELECTIONS THAT ARE NOT CHECKED TO GET LEVELUP DATA
						    var radioResults = 'Radio buttons: ';
	                		 	var notYetRubricItems = ''
						
	                		 	for (var i = 0; i < document.frm.elements.length; i++ ) {
						        if (document.frm.elements[i].type == 'radio') {
						            if (document.frm.elements[i].checked == true && document.frm.elements[i].getAttribute("id").endsWith("NY")) {
						                var input = document.frm.elements[i];
						                var id = input.getAttribute("id");
						                var selector = 'label[for=' + id + ']'
						                var label = document.querySelector(selector);
						                notYetRubricItems += id + '\n';
						                //notYetRubricItems += label.textContent + '\n';
						            }
						        }
	                		 	}
	                		 	
	                		 	
	                		 	//GET THE RANDOM LEVELUP DATA FROM THE DB
	   	                		 $.ajax({
   	         	                type: "GET",
   	         	                url:"getHokeLevelUpData",
   	         	                data:{notYetRubricItems:notYetRubricItems},
   	         	                dataType: "json",
   	         	                success: function (response) {
   	         	                	
   	         	                	// result = result[randomNumber] ;
   	         	                	
   	         	                $.each(response, function(key, value) {
   	         	                	var result= (value[1]).split(/\n/g);
   	         	                	var randomNumber = Math.floor(Math.random()*result.length);
   	         	                	
   	         	                	document.getElementById(value[0]+'LevelUpData').style.visibility = "visible";
   	         	                
   	         	                	$('#'+value[0]+'LevelUpData').attr("data-content", result[randomNumber] );
   	         	                levelUpValuesToEmail.push(result[randomNumber]);
   	         	                });
   	         	                }
	   	                		 });

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
		 		
		 	//ENGAGEMENT
		 		$("#engcollaborationNY").prop('checked',false);
		 		$("#engchoiceNY").prop('checked',false);
		 		$("#engcreationNY").prop('checked',false);
		 		$("#engcriticalthinkingNY").prop('checked',false);
		 		$("#engactiveparticipationNY").prop('checked',false);
		 		$("#engcollaborationM").prop('checked',false);
		 		$("#engchoiceM").prop('checked',false);
		 		$("#engcreationM").prop('checked',false);
		 		$("#engcriticalthinkingM").prop('checked',false);
		 		$("#engactiveparticipationM").prop('checked',false);
		 		
		 	//ENVIRONMENT
		 		$("#envclassroommanagementNY").prop('checked',false);
		 		$("#envphysicalenvironmentNY").prop('checked',false);
		 		$("#envtimemanagement1NY").prop('checked',false);
		 		$("#envtimemanagement2NY").prop('checked',false);
		 		$("#envdigitalcitizenshipNY").prop('checked',false);
		 		$("#envclassroommanagementM").prop('checked',false);
		 		$("#envphysicalenvironmentM").prop('checked',false);
		 		$("#envtimemanagement1M").prop('checked',false);
		 		$("#envtimemanagement2M").prop('checked',false);
		 		$("#envdigitalcitizenshipM").prop('checked',false);
		 	
		 	//STUDENT REFLECTION
		 		$("#srarticulateNY").prop('checked',false);
		 		$("#srteacherfeedbackNY").prop('checked',false);
		 		$("#srarticulateM").prop('checked',false);
		 		$("#srteacherfeedbackM").prop('checked',false);
		 		
		 	//DATA DRIVEN DECISIONS
		 		$("#ddduseofdataNY").prop('checked',false);
		 		$("#ddduseofdataM").prop('checked',false);
		 		
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
