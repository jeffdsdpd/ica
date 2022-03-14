$(document)
		.ready(
				function() {
					
					clearRubricFields();
					clearRubricCounts();
					var selectedSchoolId = 0;
					
					//date functions for displaying a calendar with start date < end date
					$(function () {
				            $("#startDate").datepicker({
				                onSelect: function (selected) {
									clearRubricFields();
									document.getElementById("rubricGraph").style.display = "none";
									$("#container").fadeOut("slow");
					                var dt = new Date(selected);
					                $("#endDate").datepicker("option", "minDate", dt);
				               	}
				            });
				            $("#endDate").datepicker({
				                onSelect: function (selected) {
									clearRubricFields();
									document.getElementById("rubricGraph").style.display = "none";
									$("#container").fadeOut("slow");
				                    var dt = new Date(selected);
				                    $("#startDate").datepicker("option", "maxDate", dt);
				                }
				            });
				        });
					
					
					//User has selected a single school from the Dropdown List
					$("#schoolId").change(function() {
						
						$("#phaseonerowcontainer").fadeOut(1000);
						$("#phasetworowcontainer").fadeOut(1000);
				
						clearRubricFields();
						clearRubricCounts();
						
						selectedSchoolId = $("#schoolId :selected").val();
						$.ajax({
							type : "GET",
							// url : "getDashboardPhaseValuesBySchool",
							url : "getDashboardRubricValuesBySchool",
							data : { schoolId : selectedSchoolId },
							dataType : "json",
							success : function(response) {

										rubricSum = response.length;
										
										 $.each(response, function(i, interactionObject) {
											if (interactionObject.phase = 1) {
												phaseOne = phaseOne + 1;
											} else {
												if (interactionObject.phase  = 2) {
													phaseTwo = phaseTwo + 1;
											} else {
												phaseThree = phaseThree + 1;
											}}});
										
								
									// Place values in the teacher count fields
									$("#nbrTeachers").val(rubricSum)
									$("#phase1Teachers").val(phaseOne)
									$("#phase2Teachers").val(phaseTwo)
									$("#phase3Teachers").val(phaseThree)
									
									
									// create the percentages for each phase to display
									if (phaseOne > 0) {
										$("#phaseonepercent").html(Math.floor((phaseOne/rubricSum) * 100)+"%")
										$("#phaseonepercent").css({ 'font-size': '30px' })}
										else {
											$("#phaseonepercent").html(0+"%");
											$("#phaseonepercent").css({ 'font-size': '30px' })
										};
									
									if (phaseTwo > 0) {
										$("#phasetwopercent").html(Math.floor((phaseTwo/rubricSum) * 100)+"%")
										$("#phasetwopercent").css({ 'font-size': '30px' })}
										else {
											$("#phasetwopercent").html(0+"%");
											$("#phasetwopercent").css({ 'font-size': '30px' })
										}
									if (phaseThree > 0) {
										$("#phasethreepercent").html(Math.floor((phaseThree/rubricSum) * 100)+"%")
										$("#phasethreepercent").css({ 'font-size': '30px' })}
										else {
											$("#phasethreepercent").html(0+"%");
											$("#phasethreepercent").css({ 'font-size': '30px' })
										}
									
									}
								}); // end of ajax getDashboardPhaseValuesBySchool
								
								$("#phaseonerowcontainer").fadeIn();
								$("#phasetworowcontainer").fadeIn();
								
					

					}); // end of $("#schoolId").change(function()
		
					
		//Display Report Button clicked			
		$("button[name='button']").click(validateForm);
		
		
		//School changed for Bar Graph - clear the graph
		$("#schoolIdGraph").change(function() {
			document.getElementById("rubricGraph").style.display = "none";
			$("#container").fadeOut("slow");
		});
				
			
		function validateForm() {
				schoolIdForGraph = $("#schoolIdGraph :selected").val();
				var sd =  $("#startDate").datepicker({ dateFormat: 'dd,MM,yyyy' }).val();
				var ed =  $("#endDate").datepicker({ dateFormat: 'dd,MM,yyyy' }).val();
				clearRubricFields();
				clearRubricCounts();
				
				document.getElementById("rubricGraph").style.display = "none";
				$("#container").fadeOut("slow");
				displayChart();
		};


					function displayChart() {
					// This is the beginning of building the 3d Bar Graph
					
					//Start and show the spinner since the ajax call has started to display the bar graph
					document.getElementById("loadingmessage").style.display = "inline";
					
					$.ajax({
		                type: "GET",
		                url:"getRubricValuesForAssignedSchoolsForDashboard",
		                data:{schoolId:schoolIdForGraph},
		                dataType: "json",
		                success: function (response) {
					
							//Stop and hide the spinner since the ajax call is done
							document.getElementById("loadingmessage").style.display = "none";
							document.getElementById("rubricGraph").style.display = "inline";
							$("#container").fadeIn("slow");
							
		                	 $.each(response, function(i, interactionObject) {

		                		 if ((interactionObject.checklists) != null) {
		                		 if ((interactionObject.checklists) == (1)) {
		                			 checklistsPhaseOne += 1; }
		                		 	else  if ((interactionObject.checklists) == (2)) {
		                		 		checklistsPhaseTwo += 1; }
		                		 	else if ((interactionObject.checklists) == (3)) {
		                		 		checklistsPhaseThree += 1; }
		                		 	else checklistsNE += 1;
		                		 } else checklistsNE += 1;
		                		  
		                		 if ((interactionObject.seating) != null) {
		                		 if ((interactionObject.seating) == (1)) {
		                			 seatingPhaseOne += 1; }
		                		 	else  if ((interactionObject.seating) == (2)) {
		                		 		seatingPhaseTwo += 1; }
		                		 	else  if ((interactionObject.seating) == (3)) {
		                		 		seatingPhaseThree += 1; }
		                		 	else seatingNE += 1;
		                		 } else seatingNE += 1;
		                		 
		                		 if ((interactionObject.timing) != null) {
		                		 if ((interactionObject.timing) == (1)) {
		                			 timingPhaseOne += 1; }
		                		 	else if ((interactionObject.timing) == (2)) {
		                		 		timingPhaseTwo += 1; }
		                		 	else if ((interactionObject.timing) == (3)) {
		                		 		timingPhaseThree += 1; }
		                		 	else timingNE += 1;
		                		 } else timingNE += 1;
		                		 
		                		 if ((interactionObject.differentiation) != null) {
		                		 if ((interactionObject.differentiation) == (1)) {
		                			 differentiationPhaseOne += 1; }
		                		 	else if ((interactionObject.differentiation) == (2)) {
		                		 		differentiationPhaseTwo += 1; }
		                		 	else if ((interactionObject.differentiation) == (3)) {
		                		 		differentiationPhaseThree += 1; }
		                		 	else differentiationNE += 1;
		                		 } else differentiationNE += 1;
		                		 
		                		 if ((interactionObject.data) != null) {
		                		 if ((interactionObject.data) == (1)) {
		                			 dataPhaseOne += 1; }
		                		 	else if ((interactionObject.data) == (2)) {
		                		 		dataPhaseTwo += 1; }
		                		 	else if ((interactionObject.data) == (3)) {
		                		 		dataPhaseThree += 1; }
		                		 	else dataNE += 1;
		                		 } else dataNE += 1;
		                		 
		                		 if ((interactionObject.reflection) != null) {
		                		 if ((interactionObject.reflection) == (1)) {
		                			 reflectionPhaseOne += 1; }
		                		 	else  if ((interactionObject.reflection) == (2)) {
		                		 		reflectionPhaseTwo += 1; }
		                		 	else  if ((interactionObject.reflection) == (3)) {
		                		 		reflectionPhaseThree += 1; }
		                		 	else reflectionNE += 1;
		                		 } else reflectionNE += 1;
		                		 
		                		 if ((interactionObject.digitalContent) != null) {
		                		 if ((interactionObject.digitalContent) == (1)) {
		                			 digitalcontentPhaseOne += 1; }
		                		 	else  if ((interactionObject.digitalContent) == (2)) {
		                		 		digitalcontentPhaseTwo += 1; }
		                		 	else  if ((interactionObject.digitalContent) == (3)) {
		                		 		digitalcontentPhaseThree += 1; }
		                		 	else digitalcontentNE += 1;
		                		 } else digitalcontentNE += 1;
		                		 
		                		 if ((interactionObject.studentGroups) != null) {
		                		 if ((interactionObject.studentGroups) ==  (1)) {
		                			 studentgroupsPhaseOne += 1; }
		                		 	else if ((interactionObject.studentGroups) == (2)) {
		                		 		studentgroupsPhaseTwo += 1; }
		                		 	else if ((interactionObject.studentGroups) == (3)) {
		                		 		studentgroupsPhaseThree += 1; }
		                		 	else studentgroupsNE += 1;
		                		 } else studentgroupsNE += 1;
		                		 
		                		 if ((interactionObject.studentLearning) != null) {
		                		 if ((interactionObject.studentLearning) == (1)) {
		                			 studentlearningPhaseOne += 1; }
		                		 	else if ((interactionObject.studentLearning) == (2)) {
		                		 		studentlearningPhaseTwo += 1; }
		                		 	else if ((interactionObject.studentLearning) == (3)) {
		                		 		studentlearningPhaseThree += 1; }
		                		 	else studentcollabNE += 1;
		                		 } else studentcollabNE += 1;
		                     });
		                	 
/*
		                	 $(".planningPhaseOne").html(checklistsPhaseOne);
		                	 $(".planningPhaseTwo").html(checklistsPhaseTwo);
		                	 $(".planningPhaseThree").html(checklistsPhaseThree);
		                	 $(".planningNE").html(checklistsNE);
		                	 
		                	 $(".assessanddataPhaseOne").html(seatingPhaseOne);
		                	 $(".assessanddataPhaseTwo").html(seatingPhaseTwo);
		                	 $(".assessanddataPhaseThree").html(seatingPhaseThree);
		                	 $(".assessanddataNE").html(seatingNE);
		                	 
		                	 $(".pathPhaseOne").html(timingPhaseOne);
		                	 $(".pathPhaseTwo").html(timingPhaseTwo);
		                	 $(".pathPhaseThree").html(timingPhaseThree);
		                	 $(".pathNE").html(timingNE);
		                	 
		                	 $(".placePhaseOne").html(differentiationPhaseOne);
		                	 $(".placePhaseTwo").html(differentiationPhaseTwo);
		                	 $(".placePhaseThree").html(differentiationPhaseThree);
		                	 $(".placeNE").html(differentiationNE);
		                	 
		                	 $(".pacePhaseOne").html(dataPhaseOne);
		                	 $(".pacePhaseTwo").html(dataPhaseTwo);
		                	 $(".pacePhaseThree").html(dataPhaseThree);
		                	 $(".paceNE").html(paceNE);
		                	 
		                	 $(".classmgmtPhaseOne").html(reflectionPhaseOne);
		                	 $(".classmgmtPhaseTwo").html(reflectionPhaseTwo);
		                	 $(".classmgmtPhaseThree").html(reflectionPhaseThree);
		                	 $(".classmgmtNE").html(reflectionNE);
		                	 
		                	 $(".teacherrolePhaseOne").html(digitalcontentPhaseOne);
		                	 $(".teacherrolePhaseTwo").html(digitalcontentPhaseTwo);
		                	 $(".teacherrolePhaseThree").html(digitalcontentPhaseThree);
		                	 $(".teacherroleNE").html(digitalcontentNE);
		                	 
		                	 $(".studentengagePhaseOne").html(studentgroupsPhaseOne);
		                	 $(".studentengagePhaseTwo").html(studentgroupsPhaseTwo);
		                	 $(".studentengagePhaseThree").html(studentgroupsPhaseThree);
		                	 $(".studentengageNE").html(studentgroupsNE);
		                	 
		                	 $(".studentcollabPhaseOne").html(studentlearningPhaseOne);
		                	 $(".studentcollabPhaseTwo").html(studentlearningPhaseTwo);
		                	 $(".studentcollabPhaseThree").html(studentlearningPhaseThree);
		                	 $(".studentcollabNE").html(studentlearningNE);
*/
		                	 
		                		//load the Highcharts 3d bar chart
		                	 Highcharts.chart('container', {
		                		    chart: {
		                		        type: 'column',
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
		                	                 fontSize:'20px',
		                	                 color: '#A0A0A0'
		                	              }
		                		    },

		                		    title: {
		                		        text: 'RUBRIC Values for each Category',
		               		        	style: {
		               		                fontSize: '20px',
		               		                fontWeight: 'bold'
		               		            }
		                		    },
		                		    
		                		    subtitle: {
		                		        text: 'Based on most recent Observed Classroom per Teacher - Excluding NOT OBSERVED',
		                		        style: {
		               		                fontSize: '16px'
		               		            }
		                		    },

		                		    xAxis: {
		                		        categories: ['Checklists', 'Seating', 'Timing', 'Differentiation', 'Data', 'Reflection', 'DigitalContent', 'StudentGroups', 'StudentLearning'],
		                		        labels: {
		                		            skew3d: true,
		                		            style: {
		                		                fontSize: '20px',
		                		                fontWeight: 'bold'
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
		                		            text: 'RUBRIC Value',
		                		            style: {
		                		                fontSize: '20px',
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
		                		        name: 'Phase1',
		                		        data: [checklistsPhaseOne, seatingPhaseOne, timingPhaseOne, differentiationPhaseOne, dataPhaseOne, reflectionPhaseOne, digitalcontentPhaseOne, studentgroupsPhaseOne, studentlearningPhaseOne],
		                		    	color: '#5DE3FA'
		                		    }, {
		                		    	name: 'Phase2',
		                 		        data: [checklistsPhaseTwo, seatingPhaseTwo, timingPhaseTwo, differentiationPhaseTwo, dataPhaseTwo, reflectionPhaseTwo, digitalcontentPhaseTwo, studentgroupsPhaseTwo, studentlearningPhaseTwo],
		                 		        color: '#e57106'
		                		    }, {
		                		    	name: 'Phase3',
		                 		        data: [checklistsPhaseThree, seatingPhaseThree, timingPhaseThree, differentiationPhaseThree, dataPhaseThree, reflectionPhaseThree, digitalcontentPhaseThree, studentgroupsPhaseThree, studentlearningPhaseThree],
		                 		        color: '#778899'
		                		    }]
		                		});
		                }})}; // This is the end of building the 3d Bar Graph


				
				}); // end of the Ready Function


$(function() {
	$("#entrydate").datepicker();
});

function clearRubricFields() {
	checklistsPhaseOne = 0;
	checklistsPhaseTwo = 0;
	checklistsPhaseThree = 0;
	checklistsNE = 0;
	seatingPhaseOne = 0;
	seatingPhaseTwo = 0;
	seatingPhaseThree = 0;
	seatingNE = 0;
	timingPhaseOne = 0;
	timingPhaseTwo = 0;
	timingPhaseThree = 0;
	timingNE = 0;
	differentiationPhaseOne = 0;
	differentiationPhaseTwo = 0;
	differentiationPhaseThree = 0;
	differentiationNE = 0;
	dataPhaseOne = 0;
	dataPhaseTwo = 0;
	dataPhaseThree = 0;
	dataNE = 0;
	reflectionPhaseOne = 0;
	reflectionPhaseTwo = 0;
	reflectionPhaseThree = 0;
	reflectionNE = 0;
	digitalcontentPhaseOne = 0;
	digitalcontentPhaseTwo = 0;
	digitalcontentPhaseThree = 0;
	digitalcontentNE = 0;
	studentgroupsPhaseOne = 0;
	studentgroupsPhaseTwo = 0;
	studentgroupsPhaseThree = 0;
	studentgroupsNE = 0;
	studentlearningPhaseOne = 0;
	studentlearningPhaseTwo = 0;
	studentlearningPhaseThree = 0;
	studentlearningNE = 0;
};

function clearRubricCounts() {
	phaseOne = 0;
	phaseTwo = 0;
	phaseThree = 0;
};