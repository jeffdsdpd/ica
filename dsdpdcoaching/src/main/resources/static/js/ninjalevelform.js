$(document).ready(
		function() {
			var wrapper = $(".input_wrap>div");
			var add_button = $(".add-more");
			var counter = 1;
			var teacherId;

			$("#schoolId").change(
					function() {
						var str = $("#schoolId :selected").val();
						document.getElementById("nextsteppreview").style.display = "none";
						//document.getElementById("teacherlabel").style.display = "none";
						//document.getElementById("teachercheckbox").style.display = "none";
						$("#myPopup").html("");
						$("#myPopup").hide(100);
						
						$.ajax({
							type : "GET",
							url : "getTeachersBySchool",
							data : {
								schoolId : str
							},
							dataType : "json",
							success : function(response) {
								var $dropdownList = $("#teacherId");
								$dropdownList.empty();
								$dropdownList.append($("<option></option>").text(("Please Select")));
								$.each(response, function(value, key) {
									$dropdownList.append($("<option></option>").attr("value", key.id).text((key.name)));
								});
							}
						});
					});
			
			$("#teacherId").change(function() {
						teacherId = $("#teacherId :selected").val();
						document.getElementById("nextsteppreview").style.display = "inline";
						//document.getElementById("teachercheckbox").style.display = "inline";
						//document.getElementById("teacherlabel").style.display = "inline";
						$("#myPopup").html("");
						$("#myPopup").hide(100);
						var selectedTeacherId = $("#teacherId :selected").val();
						
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
				                			document.getElementById("teachercheckbox").value=value[0];
				                		}
				                })
				            }
				        });
						*/
					});
			
			
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
					schoolId : { required : true },
					teacherId : { required : true },
					entryDate : { required : true },
					timeObserved : { required : true },
					observed : { required : true },
					idccontentalignment1 : { required : true },
					idccontentalignment2 : { required : true },
					tistandardalignment1 : { required : true },
					tistandardalignment2 : { required : true },
					tismallgroup1 : { required : true },
					tismallgroup2 : { required : true },
					tismallgroup3 : { required : true },
					tiintentionalgrouping1 : { required : true },
					tiintentionalgrouping2 : { required : true },
					engcollaboration : { required : true },
					engchoice : { required : true },
					engcreation : { required : true },
					engcriticalthinking : { required : true },
					engactiveparticipation : { required : true },
					envclassroommanagement : { required : true },
					envphysicalenvironment : { required : true },
					envtimemanagement1 : { required : true },
					envtimemanagement2 : { required : true },
					envdigitalcitizenship : { required : true },
					srarticulate : { required : true },
					srteacherfeedback : { required : true },
					ddduseofdata : { required : true }
				},
				messages : {
					schoolId : "Required",
					teacherId : "Required",
					entryDate : "Required",
					timeObserved : "Required",
					observed : "Required",
					idccontentalignment1 : "Required",
					idccontentalignment2 : "Required",
					tistandardalignment1 : "Required",
					tistandardalignment2 : "Required",
					tismallgroup1 : "Required",
					tismallgroup2 : "Required",
					tismallgroup3 : "Required",
					tiintentionalgrouping1 : "Required",
					tiintentionalgrouping2 : "Required",
					engcollaboration : "Required",
					engchoice : "Required",
					engcreation : "Required",
					engcriticalthinking : "Required",
					engactiveparticipation : "Required",
					envclassroommanagement : "Required",
					envphysicalenvironment : "Required",
					envtimemanagement1 : "Required",
					envtimemanagement2 : "Required",
					envdigitalcitizenship : "Required",
					srarticulate : "Required",
					srteacherfeedback : "Required",
					ddduseofdata : "Required"
				},
			});
			
			//add another input text line for additional tasks
			$("#add-more").click(function(e) {
				e.preventDefault();
				var newAdd = '<div id=div-'+counter+'><input size="75" type="levelup" id="levelup[]" name="levelupList['+counter+'].levelup" placeholder="Next Step Item"></input><a href="#" class="remove_field">Remove</a></div>';
				var el = $('.input_wrap div:last');
			    $(el).after(newAdd);

			    counter++;
			});

			//remove the current value of the remove button which has been pressed
			$(document).on("click",".remove_field",function(){
			    $(this).parent().remove();
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
			
		});

$(function() {
	$("#entryDate").datepicker({maxDate: new Date});
  });

$(function() {
	$("#timeObserved").timepicker({
		'minTime' : '7:00am',
		'maxTime' : '5:00pm',
		'step' : 15
	});
});

		