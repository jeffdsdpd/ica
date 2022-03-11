$(document).ready(
		function() {
			var wrapper = $(".input_wrap>div");
			var teacherId;

			$("#schoolId").change(
					function() {
						var str = $("#schoolId :selected").val();
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
					schoolId : { required : true },
					teacherId : { required : true },
					entryDate : { required : true },
					observed : { required : true },
					checklists : { required : true },
					digitalcontent : { required : true },
					seating : { required : true },
					timing : { required : true },
					differentiation : { required : true },
					studentgroups : { required : true },
					data : { required : true },
					reflection : { required : true },
					studentlearning : { required : true }
				},
				messages : {
					schoolId : "Required",
					teacherId : "Required",
					entryDate : "Required",
					observed : "Required",
					checklists : "Required",
					digitalcontent : "Required",
					seating : "Required",
					timing : "Required",
					differentiation : "Required",
					studentgroups : "Required",
					data : "Required",
					reflection : "Required",
					studentlearning : "Required"
				},
			});
			
			
		});//end of document ready function

$(function() {
    $("#entryDate").datepicker({maxDate: new Date});
  });

