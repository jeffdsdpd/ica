$(document).ready(function(){
	var headerTr$ = "";
	var trHTML = "";

	$("#schoolId").change(function() {
		$("#nodatacontainer").fadeOut("slow");
		
		var str =  $("#schoolId :selected").val();
			headerTr$ = "";
			trHTML = "";
			$(".table").empty();
		
            $.ajax({
                type: "GET",
                url:"getInteractionTeacherListBySchool",
                data:{schoolId: str},
                dataType: "json",
                success: function (response) {
                	headerTr$ = $('<thead style="background-color:#328CC8;">' +
                   					'<tr>' +
                    					'<th class="col-lg-2" style="color:white; font-size:16px;">Teacher</th>' +
                    					'<th class="col-lg-1" style="color:white; font-size:16px;">Points</th>' +
                    					'<th class="col-lg-1" style="color:white; font-size:16px;">Phase</th>' +
                    					'<th class="col-lg-1" style="color:white; font-size:16px;">Date</th>' +
                    					'<th class="col-lg-1" style="color:white; font-size:16px;">Data</th>' +
                    					'<th class="col-lg-1" style="color:white; font-size:16px;">Coach</th>' +
                   					'</tr>' +
                  				'</thead><tbody>');

                	$(".table").append(headerTr$);
                	
                	if ( !response.length == 0 ) {
                
	                	//Start building the table
	                	$.each(response, function(value, key) {
	                		var phase = null;
	                		if (key.rubricscore <= 10) {
	                			phase = 1;
	                		} else if (key.rubricscore > 10 && key.rubricscore <= 20) {
	                			phase = 2;
	                		} else if (key.rubricscore > 20 && key.rubricscore <= 40) {
	                			phase = 3;
	                		}
	                		trHTML += "<tr><td style='vertical-align:top; font-size:12px'>" +
	                		key.name + '</td><td style="vertical-align:top; font-size:12px">' +
	                		key.rubricscore + '</td><td style="vertical-align:top; font-size:12px">' +
	                		phase + '</td><td style="vertical-align:top; font-size:12px">' +
	                		key.date + '</td><td style="vertical-align:top; font-size:12px">' +
	                		key.interactionMethod + '</td><td style="vertical-align:top; font-size:12px">' +
	                		key.userid + '</td>' ;
	                		
	                     });
                    
	                     $(".table").append(trHTML);
	                     $(".table").append("</tbody>");
	                     
	                     $(".table").tablesorter();
                	} else {
                		$("#nodatacontainer").fadeIn("slow");
                	}
                }
          
                });
            });
  
});