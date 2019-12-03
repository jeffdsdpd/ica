$(document).ready(
		function() {

			$("#schoolId").change(
					function() {
						$("#teacheraddpanel").fadeOut("slow");
						$("#teacherdeletepanel").fadeOut("slow");
						$("#addremove").val("");
						var str = $("#schoolId :selected").val();

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
								$.each(response, function(value, key) {
									$dropdownList.append($("<option></option>")
											.attr("value", key.id).text((key.name)));
								});
							}
						});
					});
			
			$("#addremove").change(function(){
				var addremovevalue = document.getElementById("addremove").value;
				document.getElementById("addremovefield").value = "";
			
				if ($("#addremove :selected").text() == "Please Select") {
					$("#teacheraddpanel").fadeOut("slow");
					$("#teacherdeletepanel").fadeOut("slow");
				} else if (addremovevalue == "AddTeacher") {
					document.getElementById("addremovefield").value = "add";
					$("#teacherdeletepanel").fadeOut("fast");
					$("#teacheraddpanel").delay(500).fadeIn("slow");
				} else if (addremovevalue == "RemoveTeacher") {
					document.getElementById("addremovefield").value = "remove";
					$("#teacheraddpanel").fadeOut("fast");
					$("#teacherdeletepanel").delay(500).fadeIn("slow");
				}
			});
			
			
			//first get the contents of the div with name class copy-fields and add it to after "after-add-more" div class.
		      $(".add-more").click(function(){ 
		          var html = $(".copy-fields").html();
		          $(".after-add-more").after(html);
		      });
			//here it will remove the current value of the remove button which has been pressed
		      $("body").on("click",".remove",function(){ 
		          $(this).parents(".control-group").remove();
		      });
			
		});