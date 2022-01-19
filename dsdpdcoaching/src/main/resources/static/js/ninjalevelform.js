$(document).ready(
		function() {
			$("#schoolId").change(
					function() {
						var str = $("#schoolId :selected").val();
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
			
			
			
			$("#hokeform").validate({
				rules : {
					schoolId : { required : true },
					teacherId : { required : true },
					entryDate : { required : true },
					timeObserved : { required : true },
					observed : { required : true },
					smallgroup : { required : true }
				},
				messages : {
					schoolId : "Required",
					teacherId : "Required",
					entryDate : "Required",
					timeObserved : "Required",
					observed : "Required",
					smallgroup : "Required"
				},
			});
			
		});

$(function() {
	$("#entryDate").datepicker({maxDate: new Date});
  });

		