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
                    					'<th class="col-lg-1" style="display:none; color:white; font-size:16px;">DBID</th>' +
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
	                		key.userid + '</td><td style="display:none; vertical-align:top; font-size:12px">' +
	                		key.id + '</td>' ;
	                		
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
	
	$(".table").on('click', 'tr', function() {
		var teacher = $(this).find('td').eq(0).text();
		var interaction = $(this).find('td').eq(4).text();
		var id = $(this).find('td:last').text();
		
		$.ajax({
            type: "GET",
            url:"getInteractionDataByTypeAndId",
            data:{interaction: interaction, id: id},
            dataType: "text", 
            success: function (response) {

	            	if ( !response.length == 0 ) {
	            		
	            		//reset the fields before populating
	        			$('.modalnotes1text').html("");
	        			$('.modalnotes2text').html("");
	        			$('.modalnotes3text').html("");
	        			$('.modalnotes4').html("");
	        			$('.modalnotes4text').html("");
	            		
	            		//check if we are displaying Rubric Notes or Coaching Notes
	            		if (response.substring(0,6) == "Rubric") {
		            		var rubricNotes = response.substring(response.indexOf(':') + 1, response.lastIndexOf("Rubric Questions:"));
		            		var rubricQuestions = response.substring(response.lastIndexOf("Rubric Questions:") + 17, response.lastIndexOf("LevelUp List:"));
		            		var rubricLevelUp = response.substring(response.lastIndexOf("LevelUp List:") + 13);
		            		var modalnotes3text = rubricLevelUp.toString().replace(/\], RubricLevelUp \[levelup=/g, "<br />");
		            		modalnotes3text = modalnotes3text.replace(/\[RubricLevelUp \[levelup=/g, "");
		            		modalnotes3text = modalnotes3text.replace(/\]]/g, "");
		            	
		        			//var $timodal = $('.timodal').modal({
		        			//    show: false 
		        			//});
		        			
		            		$('.timodal').modal('show');
		        			$('.modalnotes1').html("<b>Rubric Notes:</b>");
		        			$('.modalnotes1text').html(rubricNotes);
		        			
		        			$('.modalnotes2').html("<b>Rubric Questions:</b>");
		        			$('.modalnotes2text').html(rubricQuestions);
		        			
		        			$('.modalnotes3').html("<b>LevelUp List:</b>");
		        			$('.modalnotes3text').html(modalnotes3text);
	            		} else {
	            			var coachingNotes = response.substring(response.indexOf(':') + 1, response.lastIndexOf("Coaching Strategies:"));
		            		var coachingStrategies = response.substring(response.lastIndexOf("Coaching Strategies:") + 20, response.lastIndexOf("Coaching Next Steps:"));
		            		var coachingNextSteps = response.substring(response.lastIndexOf("Coaching Next Steps:") + 20, response.lastIndexOf("Coaching Tools:"));
		            		var coachingTools = response.substring(response.lastIndexOf("Coaching Tools:") + 15);
		            		
		            		$('.timodal').modal('show');
		        			$('.modalnotes1').html("<b>Coaching Notes:</b>");
		        			$('.modalnotes1text').html(coachingNotes);
		        			
		        			$('.modalnotes2').html("<b>Coaching Strategies:</b>");
		        			$('.modalnotes2text').html(coachingStrategies);
		        			
		        			$('.modalnotes3').html("<b>Coaching Next Steps:</b>");
		        			$('.modalnotes3text').html(coachingNextSteps);
		        			
		        			$('.modalnotes4').html("<b>Coaching Tools:</b>");
		        			$('.modalnotes4text').html(coachingTools);
	            		}
	        			
	        			
	            	}
            }
		});
	});
});