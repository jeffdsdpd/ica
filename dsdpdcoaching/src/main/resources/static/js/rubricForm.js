$(document).ready(
		function() {

			$("#schoolId").change(
					function() {
						var str = $("#schoolId :selected").val();
						$("#teacherIds").multiselect('destroy');

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
											.attr("value", key.id).text(
													(key.name)));
								});

								$dropdownList.multiselect({
									includeSelectAllOption : true
								});
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
		});

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
