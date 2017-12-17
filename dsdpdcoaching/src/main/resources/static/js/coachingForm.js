$(document).ready(function(){

	$("#schoolId").change(function() {
		var str =  $("#schoolId :selected").val();
		$("#teacherId").multiselect('destroy');

        $.ajax({
			type: "GET",
			url:"GetTeacherBySchool",
			data:{schoolId: str},
			dataType: "json",
			success: function (response) {
				var $dropdownList = $("#teacherId");
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

	var validator = $("#frm").validate({
      	rules: {
	      	schoolId: { required: true },
			teacherId: { required: true },
			entrydate: { required: true },
			starttime: { required: true },
			endtime: { required: true }
         },
         messages: {
        	 schoolId: "School is required",
        	 teacherId: "Teacher(s) is required",
        	 entrydate: "Date is required",
        	 starttime: "Start time is required",
        	 endtime: "End time is required"
	         },
         highlight: function (element) {
             $(element).parent().addClass('error')
         },
     });
});

$(function() {
	$("#entrydate").datepicker();
});

$(function() {
	$("#timestart").timepicker({
		'minTime': '7:00am',
		'maxTime': '5:00pm',
		'step': 15
     });
});

$(function() {
	$("#timeend").timepicker({
		'minTime': '7:00am',
		'maxTime': '5:00pm',
		'step': 15
	});
});

function textCounter(field, countfield, maxlimit) {
	if (field.value.length > maxlimit) // if too long...trim it!
		field.value = field.value.substring(0, maxlimit);
	else
		countfield.value = maxlimit - field.value.length;
};