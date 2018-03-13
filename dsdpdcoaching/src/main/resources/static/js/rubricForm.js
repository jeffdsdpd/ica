$(document).ready(function(){
	$("#schoolId").change(function() {
		
		if ($("#schoolId :selected").text() == "Leawood Elementary") {
			$(".leawood").fadeIn("slow");
		} else {
			$(".leawood").fadeOut("slow");
		}
		
        $.ajax({
			type: "GET",
			url:"getTeachersBySchool",
			data:{schoolId: $("#schoolId :selected").val()},
			dataType: "json",
			success: function (response) {
				var $dropdownList = $("#teacherId");
				$dropdownList.empty();
				$.each(response, function(value, key) {
					$dropdownList.append($("<option></option>").attr("value", key.id).text((key.name)));
				});
            }
        });
	});

	$("#rubricForm").validate({
		rules: {
			schoolId: { required: true },
			teacherId: { required: true },
			entryDate: { required: true },
			timeObserved: { required: true },
			observed: { required: true },
			planning: {required: true},
			assessmentAndData: { required: true },
			path: { required: true },
			place: { required: true },
			pace: { required: true },
			classroomManagement: { required: true },
			teacherRole: { required: true },
			studentEngagement: { required: true },
			studentCollaboration: { required: true },
			technology: { required: true }
        },
        messages: {
        		schoolId: "School is required",
        		teacherId: "Teacher is required",
	       	entryDate: "Date is required",
	       	timeObserved: "Time is required",
	       	observed: "Data Entered is required",
	       	planning: "Planning is required",
	       	assessmentAndData: "Assessment & Data is required",
	       	path: "Path is required",
	       	place: "Place is required",
	       	pace: "Pace is required",
	       	classroomManagement: "Classroom Mgmt. is required",
	       	teacherRole: "Teacher Role is required",
	       	studentEngagement: "Student Engagement is required",
	       	studentCollaboration: "Student Collaboration is required",
	       	technology: "Technology is required"
        }
    });
});

$(function() {
	$("#entryDate").datepicker();
});

$(function() {
	$("#timeObserved").timepicker({
		controlType: 'select',
		oneLine: true,
		timeFormat: 'h:mm',
		stepMinute: 15,
		hourMin: 7,
		hourMax: 16
	}).val('7:00'); 
});

function textCounter(field, countfield, maxlimit) {
	if (field.value.length > maxlimit) {
		// if too long...trim it!
		field.value = field.value.substring(0, maxlimit);
	} else {
		countfield.value = maxlimit - field.value.length;
	}
}