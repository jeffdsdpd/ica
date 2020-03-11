$(document).ready(
		function() {
			var wrapper = $(".input_wrap>div");
			var add_button = $(".add-more");
			var counter = 1;
			var teacherId;

			$("#schoolId").change(
					function() {
						var str = $("#schoolId :selected").val();
						document.getElementById("levelupreview").style.display = "none";
						document.getElementById("teacherlabel").style.display = "none";
						document.getElementById("teachercheckbox").style.display = "none";
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
						document.getElementById("levelupreview").style.display = "inline";
						document.getElementById("teachercheckbox").style.display = "inline";
						document.getElementById("teacherlabel").style.display = "inline";
						$("#myPopup").html("");
						$("#myPopup").hide(100);
						var selectedTeacherId = $("#teacherId :selected").val();
						
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
					});
			

			$("#frm").validate({
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
					planning : {
						required : true
					},
					assessmentAndData : {
						required : true
					},
					path : {
						required : true
					},
					place : {
						required : true
					},
					pace : {
						required : true
					},
					classroommgmt : {
						required : true
					},
					teacherrole : {
						required : true
					},
					studentegmt : {
						required : true
					},
					studentcolab : {
						required : true
					},
					technology : {
						required : true
					}
				},
				messages : {
					schoolId : "School is required",
					teacherId : "Teacher(s) is required",
					entryDate : "Date is required",
					timeObserved : "Time is required",
					observed : "Data Entered is required",
					planning : "Planning is required",
					assessmentAndData : "Assessment And Data is required",
					path : "Path is required",
					place : "Place is required",
					pace : "Pace is required",
					classroommgmt : "Classroom Mgmt. is required",
					teacherrole : "Teacher Role is required",
					studentegmt : "Student Engagement is required",
					studentcolab : "Student Collaboration is required",
					technology : "Technology is required"
				},
				highlight : function(element) {
					$(element).parent().addClass('error')
				},
			});
			
			//add another input text line for additional tasks
			$("#add-more").click(function(e) {
				e.preventDefault();
				var newAdd = '<div id=div-'+counter+'><input size="75" type="levelup" id="levelup[]" name="levelupList['+counter+'].levelup" placeholder="LevelUp Item"></input><a href="#" class="remove_field">Remove</a></div>';
				var el = $('.input_wrap div:last');
			    $(el).after(newAdd);

			    counter++;
			});

			//remove the current value of the remove button which has been pressed
			$(document).on("click",".remove_field",function(){
			    $(this).parent().remove();
			});
			
			
			$("#previewbutton").on("click", function(event) {
				$.ajax({
					type : "GET",
					url : "getLevelUpsByTeacher",
					data : {teacherId : teacherId},
					dataType : "json",
					success : function(response) {
						//var popup = window.open("");
						var popup = document.getElementById("myPopup");
						var popupbutton = document.getElementById("previewbutton");
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
						  
						  if (popupbutton.value=="Show Existing LevelUp Items") popupbutton.value = "Close Existing LevelUp Items";
						    else popupbutton.value = "Show Existing LevelUp Items";
						
						}});
					});
			
		});//end of document ready function

$(function() {
    $("#entryDate").datepicker();
  });

$(function() {
	$("#timeObserved").timepicker({
		'minTime' : '7:00am',
		'maxTime' : '5:00pm',
		'step' : 15
	});
});
