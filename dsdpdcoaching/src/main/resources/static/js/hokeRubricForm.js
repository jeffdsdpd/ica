$(document).ready(
		function() {
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
			
			var $modal = $('.modal').modal({
			    show: false 
			});
			$('#heidchokecolumn').on('click', function() {
			    $modal.modal('show');
			});
			
			
			$("#hokeform").validate({
				rules : {
					schoolId : {
						required : true
					},
					teacherId : {
						required : true
					},
					entryDate : {
						required : true
					},
					timeObserved : {
						required : true
					},
					observed : {
						required : true
					},
					idccontentalignment1 : {
						required : true
					},
					idccontentalignment2 : {
						required : true
					},
					tistandardalignment1 : {
						required : true
					},
					tistandardalignment2 : {
						required : true
					},
					tismallgroup1 : {
						required : true
					},
					tismallgroup2 : {
						required : true
					},
					tismallgroup3 : {
						required : true
					},
					tiintentionalgrouping1 : {
						required : true
					},
					tiintentionalgrouping2 : {
						required : true
					},
					engcollaboration : {
						required : true
					},
					engchoice : {
						required : true
					},
					engcreation : {
						required : true
					},
					engcriticalthinking : {
						required : true
					},
					engactiveparticipation : {
						required : true
					},
					envclassroommanagement : {
						required : true
					},
					envphysicalenvironment : {
						required : true
					},
					envtimemanagement1 : {
						required : true
					},
					envtimemanagement2 : {
						required : true
					},
					envdigitalcitizenship : {
						required : true
					},
					srarticulate : {
						required : true
					},
					srteacherfeedback : {
						required : true
					},
					ddduseofdata : {
						required : true
					}
				},
				messages : {
					schoolId : "School is required",
					teacherId : "Teacher(s) is required",
					entryDate : "Date is required",
					timeObserved : "Time is required",
					observed : "Data Entered is required",
					idccontentalignment1 : "Digital Content required",
					idccontentalignment2 : "Digital Content required",
					tistandardalignment1 : "Targeted Instruction required",
					tistandardalignment2 : "Targeted Instruction required",
					tismallgroup1 : "Targeted Instruction required",
					tismallgroup2 : "Targeted Instruction required",
					tismallgroup3 : "Targeted Instruction required",
					tiintentionalgrouping1 : "Targeted Instruction required",
					tiintentionalgrouping2 : "Targeted Instruction required",
					engcollaboration : "Engagement required",
					engchoice : "Engagement required",
					engcreation : "Engagement required",
					engcriticalthinking : "Engagement required",
					engactiveparticipation : "Engagement required",
					envclassroommanagement : "Environment required",
					envphysicalenvironment : "Environment required",
					envtimemanagement1 : "Environment required",
					envtimemanagement2 : "Environment required",
					envdigitalcitizenship : "Environment required",
					srarticulate : "Student Reflection required",
					srteacherfeedback : "Student Reflection required",
					ddduseofdata : "Data required"
				},
				highlight : function(element) {
					$(element).parent().addClass('error')
				},
			});
			
		});

		