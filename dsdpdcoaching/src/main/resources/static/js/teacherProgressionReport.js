$(document).ready(function() {
	var date;
	var datelatest;
	var checklists = 0;
	var digitalcontent = 0;
	var seating = 0;
	var timing = 0;
	var differentiation = 0;
	var studentgroups = 0;
	var data = 0;
	var reflection = 0;
	var studentlearning = 0;
	var checklistsLatest = 0;
	var digitalcontentLatest  = 0;
	var seatingLatest  = 0;
	var timingLatest  = 0;
	var differentiationLatest  = 0;
	var studentgroupsLatest  = 0;
	var dataLatest  = 0;
	var reflectionLatest  = 0;
	var studentlearningLatest  = 0;
	var technologylatest  = 0
	
	
	//SCHOOL field has changed
	$("#schoolId").change(function() {
		clearRubricValues();
		$("#container").fadeOut("slow");
		$("#nodatacontainer").fadeOut("slow");
		
		var selectedSchoolId =  $("#schoolId :selected").val();
		
		$.ajax({
            type: "GET",
            url:"getTeachersBySchool",
            data:{schoolId: selectedSchoolId},
            dataType: "json",
            success: function (response) {
            	var $dropdownList = $("#teacherName");
            	$dropdownList.empty();
            	$dropdownList.append($("<option></option>").attr("value", '').text('Please Select'));
            	 $.each(response, function(value, key) {
                     $dropdownList.append($("<option></option>").attr("value", key.id).text((key.name)));
                 });
                }
            });
	}); //end of the 'schoolId' change function
	
	$("#teacherName").change(function(){
		$(".result").html("");
		var selectedSchoolId = $("#schoolId :selected").val();
		var selectedTeacherId = $("#teacherName :selected").val();
		clearRubricValues();
		
            $.ajax({
                type: "GET",
                url:"getTeacherProgressionReportData",
                data:{schoolId: selectedSchoolId, teacherId: selectedTeacherId},
                dataType: "json",
                success: function (response) {
                		$("#nodatacontainer").fadeOut("slow");
                		$("#container").fadeIn("slow");

                	$.each(response, function(key, value) {
                		
                		if (key == "date") { date = value.toString(); }
                		
                		if (key == "dateLatest") { datelatest = value.toString(); }
                		
                		if (key == "checklists") { checklists = value; }
		
						if (key == "digitalcontent") { digitalcontent = value; }
                		
                		if (key == "seating") { seating = value; }
                		
                		if (key == "timing") { timing = value; }

                		if (key == "differentiation") { differentiation = value; }
				
						if (key == "studentgroups") { studentgroups = value; }
                		
                		if (key == "data") { data = value; }
                		
                		if (key == "reflection") { reflection = value; }

                		if (key == "studentlearning") { studentlearning = value; }

						if (key == "checklistsLatest") { checklistsLatest = value; }
						
						if (key == "digitalcontentLatest") { digitalcontentLatest = value; }
                		
                		if (key == "seatingLatest") { seatingLatest = value; }
                		
                		if (key == "timingLatest") { timingLatest = value; }

                		if (key == "differentiationLatest") { differentiationLatest = value; }
				
						if (key == "studentgroupsLatest") { studentgroupsLatest = value; }
                		
                		if (key == "dataLatest") { dataLatest = value; }
                		
                		if (key == "reflectionLatest") { reflectionLatest = value; }

                		if (key == "studentlearningLatest") { studentlearningLatest = value; }

						if (key == "technologylatest") { technologylatest = value; }
                		
                	});
                
              //load the Highcharts 3d bar chart
                	Highcharts.chart('container', {
        		    chart: {
        		        type: 'cylinder',
        		        options3d: {
        		            enabled: true,
        		            alpha: 15,
        		            beta: 15,
        		            viewDistance: 25,
        		            depth: 40
        		        }
        		    },
        		    legend: {
        	              itemStyle: {
        	                 fontSize:'16px',
        	                 color: '#A0A0A0'
        	              }
        		    },
                colors: [
                    '#5DE3FA',
                    '#e57106',
                    '#778899'
                ],
        		    title: {
        		        text: 'Teacher Rubric Report',
       		        	style: {
       		                fontSize: '20px',
       		                fontWeight: 'bold'
       		            }
        		    },
        		    subtitle: {
        		        text: 'School Year Progression',
        		        style: {
       		                fontSize: '16px'
       		            }
        		    },
        		    xAxis: {
        		        categories: ['Checklists', 'DigitalContent', 'Seating', 'Timing', 'Differentiation', 'Student Groups', 'Data', 'Reflection', 'Student Learning'],
        		        labels: {
        		            skew3d: true,
        		            style: {
        		                fontSize: '18px'
        		            },
        		            rotation: -45
        		        }
        		    },
        		    yAxis: {
        		        allowDecimals: false,
        		        labels: {
        		            style: {
        		                fontSize: '14px',
        		                bold: true
        		            }
        		        },
        		        min: 0,
        		        title: {
        		            text: 'Value',
        		            style: {
        		                fontSize: '18px',
        		                fontWeight: 'bold'
        		            },
        		            skew3d: true
        		        }
        		    },
        		    tooltip: {
        		        headerFormat: '<b>{point.key}</b><br>',
        		        pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
        		    },
        		    series: [{
        		        name: date,
        		        data: [checklists,digitalcontent,seating,timing,differentiation,studentgroups,data,reflection,studentlearning]
        		    }, {
        		    	name: datelatest,
         		    	data: [checklistsLatest,digitalcontentLatest,seatingLatest,timingLatest,differentiationLatest,studentgroupsLatest,dataLatest,reflectionLatest,studentlearningLatest]
        		    }, 
        		    
        		    ]
        		});
                
                },

                error: function(e){
            			clearRubricValues();
            			$("#container").html("");
            			$("#container").fadeOut("slow");
            	       	$("#nodatacontainer").fadeIn("slow");
                }//end of the 'error' function
                
                });
            
            });//end of the $("#teacherName").change(function()
	
});//end of the document ready function

function clearRubricValues() {
	 date = '';
	 datelatest = '';
	 checklists = 0;
	 digitalcontent = 0;
	 seating = 0;
	 timing = 0;
	 differentiation = 0;
	 studentgroups = 0;
	 data = 0;
	 reflection = 0;
	 studentlearning = 0;
	 checklistsLatest = 0;
	 digitalcontentLatest  = 0;
	 seatingLatest  = 0;
	 timingLatest  = 0;
	 differentiationLatest  = 0;
	 studentgroupsLatest  = 0;
	 dataLatest  = 0;
	 reflectionLatest  = 0;
	 studentlearningLatest  = 0;
	 technologylatest  = 0
};