$(document).ready(function() {
	var date;
    var datemiddle;
	var datelatest;
	var planning = 0;
	var assessanddata = 0;
	var path = 0;
	var place = 0;
	var pace = 0;
	var classmgmt = 0;
	var teacherrole = 0;
	var studentengage = 0;
	var studentcollab = 0;
	var technology = 0;
	var planningmiddle = 0;
	var assessanddatamiddle = 0;
	var pathmiddle = 0;
	var placemiddle = 0;
	var pacemiddle = 0;
	var classmgmtmiddle = 0;
	var teacherrolemiddle = 0;
	var studentengagemiddle = 0;
	var studentcollabmiddle = 0;
	var technologymiddle = 0;
	var planninglatest = 0;
	var assessanddatalatest  = 0;
	var pathlatest  = 0;
	var placelatest  = 0;
	var pacelatest  = 0;
	var classmgmtlatest  = 0;
	var teacherrolelatest  = 0;
	var studentengagelatest  = 0;
	var studentcollablatest  = 0;
	var technologylatest  = 0;
	
	
	//SCHOOL field has changed
	$("#schoolName").change(function() {
		//$("#container").fadeOut("slow");
		var selectedSchoolId =  $("#schoolName :selected").val();
		
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
	}); //end of the 'schoolName' change function
	
	$("#teacherName").change(function(){
		

		$(".result").html("");
		var selectedSchoolId = $("#schoolName :selected").val();
		var selectedTeacherId = $("#teacherName :selected").val();
		clearRubricValues();
		
            $.ajax({
                type: "GET",
                url:"getTeacherProgressionReportData",
                data:{schoolId: selectedSchoolId, teacherId: selectedTeacherId},
                dataType: "json",
                success: function (response) {
               // 	$(".container").fadeIn("slow");
                	$.each(response, function(key, value) {
                		
                		if (key == "date") {
                			date = value.toString();
                			}
                		if (key == "dateMiddle") {
                			datemiddle = value.toString();
                			}
                		if (key == "dateLatest") {
                			datelatest = value.toString();
                			}
                		
                		 if (key == "planning") {
                			 if (value.toString().indexOf("Rotation") >-1) {
                				 planning = 1;
                			 } else if (value.toString().indexOf("implements checklist") >-1) {
                				 planning = 2;
                			 } else  if (value.toString().indexOf("differentiated") >-1) {
                				 planning = 3;
                			 }
                		 }
                		 if (key == "planningMiddle") {
                			 if (value.toString().indexOf("Rotation") >-1) {
                				 planningmiddle = 1;
                			 } else if (value.toString().indexOf("implements checklist") >-1) {
                				 planningmiddle = 2;
                			 } else  if (value.toString().indexOf("differentiated") >-1) {
                				 planningmiddle = 3;
                			 }
                		 }
                		 if (key == "planningLatest") {
                			 if (value.toString().indexOf("Rotation") >-1) {
                				 planninglatest = 1;
                			 } else if (value.toString().indexOf("implements checklist") >-1) {
                				 planninglatest = 2;
                			 } else  if (value.toString().indexOf("differentiated") >-1) {
                				 planninglatest = 3;
                			 }
                		 }
                		
                		 if (key == "assessmentAndData") {
                			 if (value.toString().indexOf("Collecting") >-1) {
                				 assessanddata = 1;
                			 } else if (value.toString().indexOf("Using") >-1) {
                				 assessanddata = 2;
                			 } else if(value.toString().indexOf("advance") >-1) {
                		 		 assessanddata = 3;
                			 }
                		 }
                		 if (key == "assessmentAndDataMiddle") {
                			 if (value.toString().indexOf("Collecting") >-1) {
                				 assessanddatamiddle = 1;
                			 } else if (value.toString().indexOf("Using") >-1) {
                				 assessanddatamiddle = 2;
                			 } else if(value.toString().indexOf("advance") >-1) {
                		 		 assessanddatamiddle = 3;
                			 }
                		 }
                		 if (key == "assessmentAndDataLatest") {
                			 if (value.toString().indexOf("Collecting") >-1) {
                				 assessanddatalatest = 1;
                			 } else if (value.toString().indexOf("Using") >-1) {
                				 assessanddatalatest = 2;
                			 } else if(value.toString().indexOf("advance") >-1) {
                				 assessanddatalatest = 3;
                			 }
                		 }
                		 
                		 if (key == "path") {
                			 if (value.toString().indexOf("Same") >-1) {
                				 path = 1;
                			 } else if (value.toString().indexOf("Differentiated") >-1) {
                				 path = 2;
                			 } else if(value.toString().indexOf("Individual") >-1) {
                		 		 path = 3;
                			 }
                		 }
                		 if (key == "pathMiddle") {
                			 if (value.toString().indexOf("Same") >-1) {
                				 pathmiddle = 1;
                			 } else if (value.toString().indexOf("Differentiated") >-1) {
                				 pathmiddle = 2;
                			 } else if(value.toString().indexOf("Individual") >-1) {
                		 		 pathmiddle = 3;
                			 }
                		 }
                		 if (key == "pathLatest") {
                			 if (value.toString().indexOf("Same") >-1) {
                				 pathlatest = 1;
                			 } else if (value.toString().indexOf("Differentiated") >-1) {
                				 pathlatest = 2;
                			 } else if(value.toString().indexOf("Individual") >-1) {
                				 pathlatest = 3;
                			 }
                		 }
                		 
                		 if (key == "place") {
                			 if (value.toString().indexOf("Move") >-1) {
                				 place = 1;
                			 } else if (value.toString().indexOf("Flexible") >-1) {
                				 place = 2;
                			 } else if(value.toString().indexOf("Pick") >-1) {
                				 place = 3;
                			 }
                		 }
                		 if (key == "placeMiddle") {
                			 if (value.toString().indexOf("Move") >-1) {
                				 placemiddle = 1;
                			 } else if (value.toString().indexOf("Flexible") >-1) {
                				 placemiddle = 2;
                			 } else if(value.toString().indexOf("Pick") >-1) {
                				 placemiddle = 3;
                			 }
                		 }
                		 if (key == "placeLatest") {
                			 if (value.toString().indexOf("Move") >-1) {
                				 placelatest = 1;
                			 } else if (value.toString().indexOf("Flexible") >-1) {
                				 placelatest = 2;
                			 } else if(value.toString().indexOf("Pick") >-1) {
                				 placelatest = 3;
                			 }
                		 }
                		 
                		 if (key == "pace") {
                			 if (value.toString().indexOf("timer") >-1) {
                				 pace = 1;
                			 } else if (value.toString().indexOf("move") >-1) {
                				 pace = 2;
                			 } else if(value.toString().indexOf("mastery") >-1) {
                				 pace = 3;
                			 }
                		 }
                		 if (key == "paceMiddle") {
                			 if (value.toString().indexOf("timer") >-1) {
                				 pacemiddle = 1;
                			 } else if (value.toString().indexOf("move") >-1) {
                				 pacemiddle = 2;
                			 } else if(value.toString().indexOf("mastery") >-1) {
                				 pacemiddle = 3;
                			 }
                		 }
                		 if (key == "paceLatest") {
                			 if (value.toString().indexOf("timer") >-1) {
                				 pacelatest = 1;
                			 } else if (value.toString().indexOf("move") >-1) {
                				 pacelatest = 2;
                			 } else if(value.toString().indexOf("mastery") >-1) {
                				 pacelatest = 3;
                			 }
                		 }
                		 
                		 if (key == "classroomManagement") {
                			 if (value.toString().indexOf("Restating") >-1) {
                				 classmgmt = 1;
                			 } else if (value.toString().indexOf("Self") >-1) {
                				 classmgmt = 2;
                			 } else if(value.toString().indexOf("Automatic") >-1) {
                				 classmgmt = 3;
                			 }
                		 }
                		 if (key == "classroomManagementMiddle") {
                			 if (value.toString().indexOf("Restating") >-1) {
                				 classmgmtmiddle = 1;
                			 } else if (value.toString().indexOf("Self") >-1) {
                				 classmgmtmiddle = 2;
                			 } else if(value.toString().indexOf("Automatic") >-1) {
                				 classmgmtmiddle = 3;
                			 }
                		 }
                		 if (key == "classroomManagementLatest") {
                			 if (value.toString().indexOf("Restating") >-1) {
                				 classmgmtlatest = 1;
                			 } else if (value.toString().indexOf("Self") >-1) {
                				 classmgmtlatest = 2;
                			 } else if(value.toString().indexOf("Automatic") >-1) {
                				 classmgmtlatest = 3;
                			 }
                		 }
                		 
                		 if (key == "teacherRole") {
                			 if (value.toString().indexOf("facilitator") >-1) {
                				 teacherrole = 1;
                			 } else if (value.toString().indexOf("distractions") >-1) {
                				 teacherrole = 2;
                			 } else if(value.toString().indexOf("99%") >-1) {
                				 teacherrole = 3;
                			 }
                		 }
                		 if (key == "teacherRoleMiddle") {
                			 if (value.toString().indexOf("facilitator") >-1) {
                				 teacherrolemiddle = 1;
                			 } else if (value.toString().indexOf("distractions") >-1) {
                				 teacherrolemiddle = 2;
                			 } else if(value.toString().indexOf("99%") >-1) {
                				 teacherrolemiddle = 3;
                			 }
                		 }
                		 if (key == "teacherRoleLatest") {
                			 if (value.toString().indexOf("facilitator") >-1) {
                				 teacherrolelatest = 1;
                			 } else if (value.toString().indexOf("distractions") >-1) {
                				 teacherrolelatest = 2;
                			 } else if(value.toString().indexOf("99%") >-1) {
                				 teacherrolelatest = 3;
                			 }
                		 }
                		 
                		 if (key == "studentEngagement") {
                			 if (value.toString().indexOf("Following") >-1) {
                				 studentengage = 1;
                			 } else if (value.toString().indexOf("Engaged") >-1) {
                				 studentengage = 2;
                			 } else if(value.toString().indexOf("Deeply") >-1) {
                				 studentengage = 3;
                			 }
                		 }
                		 if (key == "studentEngagementMiddle") {
                			 if (value.toString().indexOf("Following") >-1) {
                				 studentengagemiddle = 1;
                			 } else if (value.toString().indexOf("Engaged") >-1) {
                				 studentengagemiddle = 2;
                			 } else if(value.toString().indexOf("Deeply") >-1) {
                				 studentengagemiddle = 3;
                			 }
                		 }
                		 if (key == "studentEngagementLatest") {
                			 if (value.toString().indexOf("Following") >-1) {
                				 studentengagelatest = 1;
                			 } else if (value.toString().indexOf("Engaged") >-1) {
                				 studentengagelatest = 2;
                			 } else if(value.toString().indexOf("Deeply") >-1) {
                				 studentengagelatest = 3;
                			 }
                		 }
                		 
                		 if (key == "studentCollaboration") {
                			 if (value.toString().indexOf("Teacher") >-1) {
                				 studentcollab = 1;
                			 } else if (value.toString().indexOf("Choice") >-1) {
                				 studentcollab = 2;
                			 } else if(value.toString().indexOf("PBL") >-1) {
                				 studentcollab = 3;
                			 }
                		 }
                		 if (key == "studentCollaborationMiddle") {
                			 if (value.toString().indexOf("Teacher") >-1) {
                				 studentcollabmiddle = 1;
                			 } else if (value.toString().indexOf("Choice") >-1) {
                				 studentcollabmiddle = 2;
                			 } else if(value.toString().indexOf("PBL") >-1) {
                				 studentcollabmiddle = 3;
                			 }
                		 }
                		 if (key == "studentCollaborationLatest") {
                			 if (value.toString().indexOf("Teacher") >-1) {
                				 studentcollablatest = 1;
                			 } else if (value.toString().indexOf("Choice") >-1) {
                				 studentcollablatest = 2;
                			 } else if(value.toString().indexOf("PBL") >-1) {
                				 studentcollablatest = 3;
                			 }
                		 }
                		 
                		 if (key == "technology") {
                			 if (value.toString().indexOf("Technology") >-1) {
                				 technology = 1;
                			 } else if (value.toString().indexOf("Using") >-1) {
                				 technology = 2;
                			 } else if(value.toString().indexOf("Students") >-1) {
                		 		 technology = 3;
                			 }
                		 }
                		 if (key == "technologyMiddle") {
                			 if (value.toString().indexOf("Technology") >-1) {
                				 technologymiddle = 1;
                			 } else if (value.toString().indexOf("Using") >-1) {
                				 technologymiddle = 2;
                			 } else if(value.toString().indexOf("Students") >-1) {
                		 		 technologymiddle = 3;
                			 }
                		 }
                		 if (key == "technologyLatest") {
                			 if (value.toString().indexOf("Technology") >-1) {
                				 technologylatest = 1;
                			 } else if (value.toString().indexOf("Using") >-1) {
                				 technologylatest = 2;
                			 } else if(value.toString().indexOf("Students") >-1) {
                				 technologylatest = 3;
                			 }
                		 }
                		 
                		 if (date == "") {
                			 date = 'NO DATA'
                		 }
                		 if (datemiddle == "") {
                			 datemiddle = 'NO DATA'
                		 }
                		 if (datelatest == "") {
                			 datelatest = 'NO DATA'
                		 }
                	
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
        		        categories: ['Planning', 'AssessmentData', 'Path', 'Place', 'Pace', 'ClassroomMgmt', 'TeacherRole', 'StudentEngmnt', 'StudentCollab', 'Technology'],
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
        		        data: [planning, assessanddata, path, place, pace, classmgmt, teacherrole, studentengage, studentcollab, technology],
        		    	color: '#5DE3FA'
        		    }, {
        		    	name: datemiddle,
         		        data: [planningmiddle, assessanddatamiddle, pathmiddle, placemiddle, pacemiddle, classmgmtmiddle, teacherrolemiddle, studentengagemiddle, studentcollabmiddle, technologymiddle],
         		        color: '#e57106'
        		    }, {
        		    	name: datelatest,
         		        data: [planninglatest, assessanddatalatest, pathlatest, placelatest, pacelatest, classmgmtlatest, teacherrolelatest, studentengagelatest, studentcollablatest, technologylatest],
         		        color: '#778899'
        		    }, 
        		    
        		    ]
        		});
                
                }//end of the 'success' function
                
                });
            
            });//end of the $("#teacherName").change(function()
	
	
});//end of the document ready function

function clearRubricValues() {
	 date = '';
	 datemiddle = '';
	 datelatest = '';
	 planning = 0;
	 assessanddata = 0;
	 path = 0;
	 place = 0;
	 pace = 0;
	 classmgmt = 0;
	 teacherrole = 0;
	 studentengage = 0;
	 studentcollab = 0;
	 technology = 0;
	 planningmiddle = 0;
	 assessanddatamiddle = 0;
	 pathmiddle = 0;
	 placemiddle = 0;
	 pacemiddle = 0;
	 classmgmtmiddle = 0;
	 teacherrolemiddle = 0;
	 studentengagemiddle = 0;
	 studentcollabmiddle = 0;
	 technologymiddle = 0;
	 planninglatest = 0;
	 assessanddatalatest  = 0;
	 pathlatest  = 0;
	 placelatest  = 0;
	 pacelatest  = 0;
	 classmgmtlatest  = 0;
	 teacherrolelatest  = 0;
	 studentengagelatest  = 0;
	 studentcollablatest  = 0;
	 technologylatest  = 0;
};