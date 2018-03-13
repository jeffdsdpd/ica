$(document).ready(function(){

	$("#schoolId").change(function() {
		$("#teacherIds").multiselect('destroy');

        $.ajax({
			type: "GET",
			url:"getTeachersBySchool",
			data:{schoolId: $("#schoolId :selected").val()},
			dataType: "json",
			success: function (response) {
				var $dropdownList = $("#teacherIds");
				$dropdownList.empty();
				$.each(response, function(value, key) {
					$dropdownList.append($("<option></option>").attr("value", key.id).text((key.name)));
				});
	
				$dropdownList.multiselect({
					includeSelectAllOption: true
				});
            }
        });
	});

	$("#coachingForm").validate({
      	rules: {
	      	schoolId: { required: true },
			teacherIds: { required: true },
			entryDate: { required: true },
			startTime: { required: true },
			endTime: { required: true }
         },
         messages: {
	        	 schoolId: "School is required",
	        	 teacherIds: "Teacher(s) is required",
	        	 entryDate: "Date is required",
	        	 startTime: "Start time is required",
	        	 endTime: "End time is required"
         },
         highlight: function (element) {
             $(element).parent().addClass('error')
         }
     });
});

$(function() {
	$("#entryDate").datepicker();
});

$(function() {
	$("#startTime").timepicker({
		'minTime': '7:00am',
		'maxTime': '5:00pm',
		'step': 15
     });
});

$(function() {
	$("#endTime").timepicker({
		'minTime': '7:00am',
		'maxTime': '5:00pm',
		'step': 15
	});
});

function textCounter(field, countfield, maxlimit) {
	if (field.value.length > maxlimit) {
		// if too long...trim it!
		field.value = field.value.substring(0, maxlimit);
	} else {
		countfield.value = maxlimit - field.value.length;
	}
};