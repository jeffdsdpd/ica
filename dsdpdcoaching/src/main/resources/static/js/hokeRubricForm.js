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
			
			//Integrated Digital Content Guiding Questions
			var $idcmodal = $('.idcmodal').modal({
			    show: false 
			});
			$('#idcguidingquestions').on('click', function() {
				$idcmodal.modal('show');
			});
			
			//Target Instruction Guiding Questions
			var $timodal = $('.timodal').modal({
			    show: false 
			});
			$('#tiguidingquestions').on('click', function() {
				$timodal.modal('show');
			});
			
			//Engagement Guiding Questions
			var $engmodal = $('.engmodal').modal({
			    show: false 
			});
			$('#engguidingquestions').on('click', function() {
				$engmodal.modal('show');
			});
			
			//Environment Guiding Questions
			var $envmodal = $('.envmodal').modal({
			    show: false 
			});
			$('#envguidingquestions').on('click', function() {
				$envmodal.modal('show');
			});
			
			//Student Reflection Guiding Questions
			var $srmodal = $('.srmodal').modal({
			    show: false 
			});
			$('#srguidingquestions').on('click', function() {
				$srmodal.modal('show');
			});
			
			//Data Driven Decisions Guiding Questions
			var $dddmodal = $('.dddmodal').modal({
			    show: false 
			});
			$('#dddguidingquestions').on('click', function() {
				$dddmodal.modal('show');
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
			
			$("#hokepreviewbutton").on("click", function(event) {
				var teacherId = $("#teacherId :selected").val();
				$.ajax({
					type : "GET",
					url : "getHokeLevelUpsByTeacher",
					data : {teacherId : teacherId},
					dataType : "json",
					success : function(response) {
						//var popup = window.open("");
						var popup = document.getElementById("myPopup");
						var popupbutton = document.getElementById("hokepreviewbutton");
						var levelupListHtml = "<ul>";
						
						if (response.length>0) {
						$.each(response, function(key, value) {
							levelupListHtml=levelupListHtml.concat('<li>' +value.levelup+ '</li>');
						});
						}else{
							levelupListHtml=('<li>NO DATA TO DISPLAY</li>');
						}
						
						//popup.document.write("<html><body><div class='popupwindow'><span class='popuptext' id='mypopup'"+ levelupListHtml +'</ul></span></div></body></html>');
						$("#myPopup").html(levelupListHtml);
						
						  popup.classList.toggle("show");
						  
						  if (popupbutton.value=="Show Existing Next Step Items") popupbutton.value = "Close Existing Next Step Items";
						    else popupbutton.value = "Show Existing Next Step Items";
						
						}});
					});
			/*
			$("#hokepreviewbutton").on("click", function(event) {
				$.ajax({
					type : "GET",
					url : "getHokeLevelUpsByTeacher",
					data : {teacherId : teacherId},
					dataType : "json",
					success : function(response) {
						//var popup = window.open("");
						var popup = document.getElementById("myPopup");
						var popupbutton = document.getElementById("hokepreviewbutton");
						var levelupListHtml = "<ul>";
						
						if (response.length>0) {
						$.each(response, function(key, value) {
							levelupListHtml=levelupListHtml.concat('<li>' +value.levelup+ '</li>');
						});
						}else{
							levelupListHtml=('<li>NO DATA TO DISPLAY</li>');
						}
						
						//popup.document.write("<html><body><div class='popupwindow'><span class='popuptext' id='mypopup'"+ levelupListHtml +'</ul></span></div></body></html>');
						$("#myPopup").html(levelupListHtml);
						
						  popup.classList.toggle("show");
						  
						  if (popupbutton.value=="Show Existing Next Step Items") popupbutton.value = "Close Existing Next Step Items";
						    else popupbutton.value = "Show Existing Next Step Items";
						
						}});
					});
					*/
			
			
		});

		