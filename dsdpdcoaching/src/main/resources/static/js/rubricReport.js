
	$(document).ready(function() {
		
		var selectedSchoolId = null;

		 $("button").click(function() {
				var selectedSchoolId = $("#schoolName :selected").text();
				var selectedTeacherId = $("#teacherName :selected").text();
				var teacherEmail = null;
				var adminEmail = null;
				
				if ( $("#teachercheckbox").is(':checked')) {
					teacherEmail = $("#teacherlabel").text();
				} else teacherEmail = "not selected";
				
				if ( $("#admincheckbox").is(':checked')) {
					adminEmail = $("#adminlabel").text();
				} else adminEmail = "not selected";
				
				var date = $("#date :selected").text();
				var planning = $("#planning").text();
				var assessanddata = $("#assessanddata").text();
				var path = $("#path").text();
				var place = $("#place").text();
				var pace = $("#pace").text();
				var classmgmt = $("#classmgmt").text();
				var teacherrole = $("#teacherrole").text();
				var studentengage = $("#studentengage").text();
				var studentcollab = $("#studentcollab").text();
				var technology = $("#technology").text();
				var rubricnotes = document.getElementById("rubricnotes").value;
				var levelup = document.getElementById("levelup").value;
				var questions = document.getElementById("questions").value;
				
				var planningLevelData = $('#planningLevelUpData').attr("data-content");
				var assessLevelData = $('#assessanddataLevelUpData').attr("data-content");
				var pathLevelData = $('#pathLevelUpData').attr("data-content");
				var placeLevelData = $('#placeLevelUpData').attr("data-content");
				var paceLevelData = $('#paceLevelUpData').attr("data-content");
				var classmgmtLevelData = $('#classroommgmtLevelUpData').attr("data-content");
				var teachroleLevelData = $('#teacherroleLevelUpData').attr("data-content");
				var stengageLevelData = $('#studentengagementLevelUpData').attr("data-content");
				var stcollabLevelData = $('#studentcollabLevelUpData').attr("data-content");
				var technologyLevelData = $('#technologyLevelUpData').attr("data-content");
			
	
		            $.ajax({
		                type: 'POST',
		                url: 'SendRubricEmail',
		                data:{date:date, schoolId:selectedSchoolId, teacherId:selectedTeacherId, teacherEmail:teacherEmail,
		                	adminEmail:adminEmail, planning:planning, assessanddata:assessanddata, path:path, place:place, pace:pace, classmgmt:classmgmt, 
		                	teacherrole:teacherrole, studentengage:studentengage, studentcollab:studentcollab, technology:technology, rubricnotes:rubricnotes,levelup:levelup, questions:questions,
		                	planningLevelData:planningLevelData, assessLevelData:assessLevelData, pathLevelData:pathLevelData, placeLevelData:placeLevelData,
		                	paceLevelData:paceLevelData, classmgmtLevelData:classmgmtLevelData, teachroleLevelData:teachroleLevelData, stengageLevelData:stengageLevelData,
		                	stcollabLevelData:stcollabLevelData, technologyLevelData:technologyLevelData, rubricTotal:rubricTotal
		             },
		                success: function(data) {
		                	alert("Email has been sent!");
		                }
		            });
			 });

		$('[data-toggle="popover"]').popover();   
 
		$("#schoolName").change(function(){
				rubricTotal = 0;
				
				planningLevel = 0;
				document.getElementById("planningLevelUpData").style.visibility = "hidden";
						
				assessanddataLevel = 0;
				document.getElementById("assessanddataLevelUpData").style.visibility = "hidden";
				
				pathLevel = 0;
				document.getElementById("pathLevelUpData").style.visibility = "hidden";
				
				placeLevel = 0;
				document.getElementById("placeLevelUpData").style.visibility = "hidden";
				
				paceLevel = 0;
				document.getElementById("paceLevelUpData").style.visibility = "hidden";
				
				classmgmtLevel = 0;
				document.getElementById("classroommgmtLevelUpData").style.visibility = "hidden";
				
				teacherroleLevel = 0;
				document.getElementById("teacherroleLevelUpData").style.visibility = "hidden";
				
				studentengageLevel = 0;
				document.getElementById("studentengagementLevelUpData").style.visibility = "hidden";
				
				studentcollabLevel = 0;
				document.getElementById("studentcollabLevelUpData").style.visibility = "hidden";
				
				technologyLevel = 0;
				document.getElementById("technologyLevelUpData").style.visibility = "hidden";
				
				$(".levelupclass").fadeOut("slow");
				
				$("#teacherlabel").text("");
	        		$("#adminlabel").text("");
				$("#teacherName").empty();
				$("#date").empty();
				$(".rubricTotal").html("");
				$(".user").html("");
				$(".observed").html("");
				$(".timeTaken").html("");
				$("#rubricnotes").val("");
				$("#levelup").val("");
				$("#questions").val("");
				$(".planning").html("");
				$(".assessanddata").html("");
				$(".path").html("");
				$(".place").html("");
				$(".pace").html("");
				$(".classmgmt").html("");
				$(".teacherrole").html("");
				$(".studentengage").html("");
				$(".studentcollab").html("");
				$(".technology").html("");
				
				$(".container").fadeOut("slow");
				
			selectedSchoolId =  $("#schoolName :selected").val();
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
                });
		
		$("#teacherName").change(function(){
			var selectedSchoolId = $("#schoolName :selected").val();
			var selectedTeacherId = $("#teacherName :selected").val();
				rubricTotal = 0;

				planningLevel = 0;
				document.getElementById("planningLevelUpData").style.visibility = "hidden";
						
				assessanddataLevel = 0;
				document.getElementById("assessanddataLevelUpData").style.visibility = "hidden";
				
				pathLevel = 0;
				document.getElementById("pathLevelUpData").style.visibility = "hidden";
				
				placeLevel = 0;
				document.getElementById("placeLevelUpData").style.visibility = "hidden";
				
				paceLevel = 0;
				document.getElementById("paceLevelUpData").style.visibility = "hidden";
				
				classmgmtLevel = 0;
				document.getElementById("classroommgmtLevelUpData").style.visibility = "hidden";
				
				teacherroleLevel = 0;
				document.getElementById("teacherroleLevelUpData").style.visibility = "hidden";
				
				studentengageLevel = 0;
				document.getElementById("studentengagementLevelUpData").style.visibility = "hidden";
				
				studentcollabLevel = 0;
				document.getElementById("studentcollabLevelUpData").style.visibility = "hidden";
				
				technologyLevel = 0;
				document.getElementById("technologyLevelUpData").style.visibility = "hidden";
				
				$(".levelupclass").fadeOut("slow");
				
				$("#date").empty();
				$(".rubricTotal").html("");
				$(".user").html("");
				$(".observed").html("");
				$(".timeTaken").html("");
				$("#rubricnotes").val("");
				$("#levelup").val("");
				$("#questions").val("");
				$(".planning").html("");
				$(".assessanddata").html("");
				$(".path").html("");
				$(".place").html("");
				$(".pace").html("");
				$(".classmgmt").html("");
				$(".teacherrole").html("");
				$(".studentengage").html("");
				$(".studentcollab").html("");
				$(".technology").html("");
				
	            $.ajax({
	                type: "GET",
	                url:"getRubricDatesAndId",
	                data:{schoolId: selectedSchoolId, teacherId: selectedTeacherId},
	                dataType: "json",
	                success: function (response) {	          
	                		 var $dropdownList = $("#date");
		                    	$dropdownList.empty();
		                    	$dropdownList.append($("<option></option>").attr("value", '').text('Please Select'));
		                    	$.each(response, function(value, key) {
		                             $dropdownList.append($("<option></option>").attr("value", key.id).text((key.date)));	                    
	                     });
	                    }
	                });
	            });
		
		$("#teacherName").change(function() {
			var selectedTeacherId = $("#teacherName :selected").val();
			$("button").prop("disabled",false);
			document.getElementById("teachercheckbox").style.display = "inline";
			document.getElementById("admincheckbox").style.display = "inline";
			$.ajax({
				type: "GET",
				url:"getEmailAddress",
				data:{teacherId: selectedTeacherId},
				dataType: "json",
				success: function (response) {
					    
	                $.each(response, function(key, value) {
	                		$("#teacherlabel").text(value[0]);
	                		$("#adminlabel").text(value[1]);
	                })
	      
	                	if ( $("#teacherlabel").text() == "" && 
			        			$("#adminlabel").text() == "") {
	                		document.getElementById("teachercheckbox").style.display = "none";
	                		document.getElementById("admincheckbox").style.display = "none";
	                		$("button").prop("disabled",true);
	                	}
	            }
	        });
		});
		
		
		
		$("#date").change(function() {
			rubricTotal = 0;
			
			planningLevel = 0;
			document.getElementById("planningLevelUpData").style.visibility = "hidden";
					
			assessanddataLevel = 0;
			document.getElementById("assessanddataLevelUpData").style.visibility = "hidden";
			
			pathLevel = 0;
			document.getElementById("pathLevelUpData").style.visibility = "hidden";
			
			placeLevel = 0;
			document.getElementById("placeLevelUpData").style.visibility = "hidden";
			
			paceLevel = 0;
			document.getElementById("paceLevelUpData").style.visibility = "hidden";
			
			classmgmtLevel = 0;
			document.getElementById("classroommgmtLevelUpData").style.visibility = "hidden";
			
			teacherroleLevel = 0;
			document.getElementById("teacherroleLevelUpData").style.visibility = "hidden";
			
			studentengageLevel = 0;
			document.getElementById("studentengagementLevelUpData").style.visibility = "hidden";
			
			studentcollabLevel = 0;
			document.getElementById("studentcollabLevelUpData").style.visibility = "hidden";
			
			technologyLevel = 0;
			document.getElementById("technologyLevelUpData").style.visibility = "hidden";
			
			var selectedId = $("#date :selected").val();
			console.log("selectedId = "+selectedId);
			var low = '#FF9900';
			var med = '#6300A5';
			var high = '#0FAD00';
			
			$(".timeTaken").html("");
			$(".rubricTotal").html("");
			$(".user").html("");
			$(".observed").html("");
			$(".timeTaken").html("");
			$("#rubricnotes").val("");
			$("#levelup").val("");
			$("#questions").val("");
			$(".planning").html("");
			$(".assessanddata").html("");
			$(".path").html("");
			$(".place").html("");
			$(".pace").html("");
			$(".classmgmt").html("");
			$(".teacherrole").html("");
			$(".studentengage").html("");
			$(".studentcollab").html("");
			$(".technology").html("");
			
			if (selectedId == 0){
				 $(".button").fadeOut("slow");
				 $(".container").fadeOut("slow");
				 $(".additionalRubricItems").fadeOut("slow");
			} else {
			$(".button").fadeIn("slow");
			$(".container").fadeIn("slow");
			
			$(".levelupclass").fadeIn("slow");
	            $.ajax({
	                type: "GET",
	                url:"getRubricById",
	                data:{recordId: selectedId},
	                dataType: "json",
	                success: function (response) {
	                		 
	                		 $(".user").html(response.userId);
	                		 $(".observed").html(response.observed);
	                		 
	                		 if (!$.trim(response.timeObserved)) {
	                			 $(".timeTaken").html("Not Recorded");
	                		 } else {
	                			 $(".timeTaken").html(format12Hour(response.timeObserved));
	                			 }
	                		 
	                		 console.log("planning = "+response.planning);
	                		 
	                		 $(".planning").html(response.planning);
	                		 if ((response.planning) == ("Whole group timer")) {
	                			 	rubricTotal += 1;
	                			 	planningLevel = 1;
	                			 	$(".planning").css("color",low); }
	                		 	else  if ((response.planning).includes("implements checklist")) {
	                		 		rubricTotal += 2;
	                		 		planningLevel = 2;
	                		 		$(".planning").css("color",med); }
	                		 	else if ((response.planning).includes("differentiated")) {
	                		 		rubricTotal += 3;
	                		 		planningLevel = 3;
	                		 		$(".planning").css("color",high); }
	                		 	else {
	                		 		planningLevel = 0;
	                		 		$(".planning").removeAttr('style');
	                		 	}
	                	           		 
	                		 
	                		 $(".assessanddata").html(response.assessmentAndData);
	                		 if ((response.assessmentAndData).includes("Collecting")) {
	                			 rubricTotal += 1;
	                			 assessanddataLevel = 1;
	                			 $(".assessanddata").css("color",low); }
	                		 	else  if ((response.assessmentAndData).includes("Using")) {
	                		 		rubricTotal += 2;
	                		 		assessanddataLevel = 2;
	                		 		$(".assessanddata").css("color",med); }
	                		 	else if ((response.assessmentAndData).includes("advance")) {
	                		 		rubricTotal += 3;
	                		 		assessanddataLevel = 3;
	                		 		$(".assessanddata").css("color",high); } 
	                		 	else {
	                		 		assessanddataLevel = 0;
	                		 		$(".assessanddata").removeAttr('style');
	                		 	}
	                		 
	                		 $(".path").html(response.path);
	                		 if ((response.path).includes("Same")) {
	                			 rubricTotal += 1;
	                			 pathLevel = 1;
	                			 $(".path").css("color",low); }
	                		 	else  if ((response.path).includes("Differentiated")) {
	                		 		rubricTotal += 2;
	                		 		pathLevel = 2;
	                		 		$(".path").css("color",med); }
	                		 	else if ((response.path).includes("Individual")) {
	                		 		rubricTotal += 3;
	                		 		pathLevel = 3;
	                		 		$(".path").css("color",high); }
	                		 	else {
	                		 		pathLevel = 0;
	                		 		$(".path").removeAttr('style');
	                		 	}

	                		 $(".place").html(response.place);
	                		 if ((response.place).includes("Move")) {
	                			 rubricTotal += 1;
	                			 placeLevel = 1;
	                			 $(".place").css("color",low); }
	                		 	else  if ((response.place).includes("Flexible")) {
	                		 		rubricTotal += 2;
	                		 		placeLevel = 2;
	                		 		$(".place").css("color",med); }
	                		 	else if ((response.place).includes("Pick")) {
	                		 		rubricTotal += 3;
	                		 		placeLevel = 3;
	                		 		$(".place").css("color",high); }
	                		 	else {
	                		 		placeLevel = 0;
	                		 		$(".place").removeAttr('style');
	                		 	}
	                		    		 
	                		 $(".pace").html(response.pace);
	                		 if ((response.pace).includes("timer")) {
	                			 rubricTotal += 1;
	                			 paceLevel = 1;
	                			 $(".pace").css("color",low); }
	                		 	else  if ((response.pace).includes("move")) {
	                		 		rubricTotal += 2;
	                		 		paceLevel = 2;
	                		 		$(".pace").css("color",med); }
	                		 	else if ((response.pace).includes("mastery")) {
	                		 		rubricTotal += 3;
	                		 		paceLevel = 3;
	                		 		$(".pace").css("color",high); }
	                		 	else {
	                		 		paceLevel = 0;
	                		 		$(".pace").removeAttr('style');
	                		 	}
	                		 
	                		 $(".classmgmt").html(response.classroommgmt);
	                		 if ((response.classroommgmt).includes("Restating")) {
	                			 rubricTotal += 1;
	                			 classmgmtLevel = 1;
	                			 $(".classmgmt").css("color",low); }
	                		 	else  if ((response.classroommgmt).includes("Self")) {
	                		 		rubricTotal += 2;
	                		 		classmgmtLevel = 2;
	                		 		$(".classmgmt").css("color",med); }
	                		 	else if ((response.classroommgmt).includes("Automatic")) {
	                		 		rubricTotal += 3;
	                		 		classmgmtLevel = 3;
	                		 		$(".classmgmt").css("color",high); }
	                		 	else {
	                		 		classmgmtLevel = 0;
	                		 		$(".classmgmt").removeAttr('style');
	                		 	}
	                		 
	                		 $(".teacherrole").html(response.teacherrole);
	                		 if ((response.teacherrole).includes("facilitator")) {
	                			 rubricTotal += 1;
	                			 teacherroleLevel = 1;
	                			 $(".teacherrole").css("color",low); }
	                		 	else  if ((response.teacherrole).includes("distractions")) {
	                		 		rubricTotal += 2;
	                		 		teacherroleLevel = 2;
	                		 		$(".teacherrole").css("color",med); }
	                		 	else if ((response.teacherrole).includes("99%")) {
	                		 		rubricTotal += 3;
	                		 		teacherroleLevel = 3;
	                		 		$(".teacherrole").css("color",high); }
	                		 	else {
	                		 		teacherroleLevel = 0;
	                		 		$(".teacherrole").removeAttr('style');
	                		 	}
	                		 
	                		 $(".studentengage").html(response.studentegmt);
	                		 if ((response.studentegmt).includes("Following")) {
	                			 rubricTotal += 1;
	                			 studentengageLevel = 1;
	                			 $(".studentengage").css("color",low); }
	                		 	else  if ((response.studentegmt).includes("Engaged")) {
	                		 		rubricTotal += 2;
	                		 		studentengageLevel = 2;
	                		 		$(".studentengage").css("color",med); }
	                		 	else if ((response.studentegmt).includes("Deeply")) {
	                		 		rubricTotal += 3;
	                		 		studentengageLevel = 3;
	                		 		$(".studentengage").css("color",high); }
	                		 	else {
	                		 		studentengageLevel = 0;
	                		 		$(".studentengage").removeAttr('style');
	                		 	}

	                		 $(".studentcollab").html(response.studentcolab);
	                		 if ((response.studentcolab).includes("Teacher")) {
	                			 rubricTotal += 1;
	                			 studentcollabLevel = 1;
	                			 $(".studentcollab").css("color",low); }
	                		 	else  if ((response.studentcolab).includes("Choice")) {
	                		 		rubricTotal += 2;
	                		 		studentcollabLevel = 2;
	                		 		$(".studentcollab").css("color",med); }
	                		 	else if ((response.studentcolab).includes("PBL")) {
	                		 		rubricTotal += 3;
	                		 		studentcollabLevel = 3;
	                		 		$(".studentcollab").css("color",high); }
	                		 	else {
	                		 		studentcollabLevel = 0;
	                		 		$(".studentcollab").removeAttr('style');
	                		 	}

	                		 $(".technology").html(response.technology);
	                		 if ((response.technology).includes("Technology")) {
	                			 rubricTotal += 1;
	                			 technologyLevel = 1;
	                			 $(".technology").css("color",low); }
	                		 	else  if ((response.technology).includes("Using")) {
	                		 		rubricTotal += 2;
	                		 		technologyLevel = 2;
	                		 		$(".technology").css("color",med); }
	                		 	else if ((response.technology).includes("Students")) {
	                		 		rubricTotal += 3;
	                		 		technologyLevel = 3;
	                		 		$(".technology").css("color",high); }
	                		 	else {
	                		 		technologyLevel = 0;
	                		 		$(".technology").removeAttr('style');
	                		 	}
	                		 
	                		 var rubricValuesArray = [	{name: 'planning', value: planningLevel},
                		                            	   	{name: 'assessanddata', value: assessanddataLevel},
                		                            	   	{name: 'path', value: pathLevel},
                		                            	   	{name: 'place', value: placeLevel},
                		                            	   	{name: 'pace', value: paceLevel},
                		                            	   	{name: 'classroommgmt', value: classmgmtLevel},
                		                            	   	{name: 'teacherrole', value: teacherroleLevel},
                		                            	   	{name: 'studentengagement', value: studentengageLevel},
                		                            	   	{name: 'studentcollab', value: studentcollabLevel},
                		                            	   	{name: 'technology', value: technologyLevel} ];
	                
                		 
	                		 rubricValuesArray.sort(compare);
	                		 
	                		 function compare(a,b) {
	                			  if (a.value < b.value)
	                				    return -1;
	                				  if (a.value > b.value)
	                				    return 1;
	                				  return 0;
	                				};
	                				
	   	                		 $.ajax({
	   	         	                type: "GET",
	   	         	                url:"getLevelUpById",
	   	         	                data:{
	   	         	                	rubricItemName1:rubricValuesArray[0].name, rubricItemValue1:rubricValuesArray[0].value,
	   	         	                	rubricItemName2:rubricValuesArray[1].name, rubricItemValue2:rubricValuesArray[1].value,
	   	         	                	rubricItemName3:rubricValuesArray[2].name, rubricItemValue3:rubricValuesArray[2].value
	   	         	                },
	   	         	                dataType: "json",
	   	         	                success: function (response) {
	   	         	                	
	   	         	                	<!-- result = result[randomNumber] ;  -->          	
	   	         	                	
	   	         	                $.each(response, function(key, value) {
	   	         	                	var result= (value[1]).split(/\n/g);
	   	         	                	var randomNumber = Math.floor(Math.random()*result.length);
	   	         	                	
	   	         	                	document.getElementById(value[0]+'LevelUpData').style.visibility = "visible";
	   	         	                
	   	         	                	$('#'+value[0]+'LevelUpData').attr("data-content", result[randomNumber] );
	   	         	                });
	   	         	                }
	   	                		 });

	                		 document.getElementById("rubricnotes").value = response.rubricNotes;
	                		 document.getElementById("levelup").value = response.levelup;
	                		 document.getElementById("questions").value = response.questions;
	                		 
	                	 $(".rubricTotal").html(rubricTotal);
	                	 
	                	 $("#teacherName").change(function() {
	             			var selectedTeacherId = $("#teacherName :selected").val();
	             			$("button").prop("disabled",false);
	             			document.getElementById("teachercheckbox").style.display = "inline";
	             			document.getElementById("admincheckbox").style.display = "inline";
	             			 $.ajax({
	             	                type: "GET",
	             	                url:"getEmailAddress",
	             	                data:{teacherId: selectedTeacherId},
	             	                dataType: "json",
	             	                success: function (response) {
	             	                    	$.each(response, function(key, value) {
	             	                    		if (key == 0) {
	             	                    			$("#teacherlabel").text(value);
	             	                    		} else if (key == 1) {
	             	                    			$("#userlabel").text(value);
	             	                    		} else $("#adminlabel").text(value);
	             	                     });
	             	                    	if ( $("#teacherlabel").text() == "Teacher Email Unavailable" && 
	             	                    			$("#adminlabel").text() == "Admin Email Unavailable") {
	             	                    		document.getElementById("teachercheckbox").style.display = "none";
	             	                    		document.getElementById("admincheckbox").style.display = "none";
	             	                    		$("button").prop("disabled",true);
	             	                    	}
	                                 	
	             	                    }
	             	                });
	             		});
	                	 
	                	
		google.charts.load('current', {'packages':['gauge']});
	      google.charts.setOnLoadCallback(drawChart);
	      function drawChart() {
	        var data = google.visualization.arrayToDataTable([
	          ['Label', 'Value'],
	          ['Rubric Score', rubricTotal],
	        ]);

	        var options = {
	          max: 30,
	          width: 400, height: 120,
	          redFrom: 0, redTo: 5,
	          yellowFrom:6, yellowTo: 19,
	          greenFrom:20, greenTo: 30,
	          majorTicks: 10,
	          minorTicks: 2
	        };

	        var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

	        chart.draw(data, options);
	        }
	                }
                });
			}
		});
		
		function format12Hour(timeString) {
			var H = +timeString.substr(0, 2);
			var h = H % 12 || 12;
			var ampm = H < 12 ? "AM" : "PM";
			timeString = h + timeString.substr(2, 3) + ampm;
			return timeString;
		};
		

		 	$(function(){
		    $('[rel="popover"]').popover({
		        container: 'body',
		        html: true,
		        content: function () {
		            var clone = $($(this).data('popover-content')).clone(true).removeClass('hide');
		            return clone;
		        }
		    }).click(function(e) {
		        e.preventDefault();
		    });
		});

		
	});