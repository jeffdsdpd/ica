$(document)
		.ready(
				function() {
					
					clearRubricFields();
					clearRubricCounts();
					var selectedSchoolId = 0;
					popup = document.getElementById("popup");
					
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
						
						$("#phaseonecontainer").fadeOut();
						$("#phasetwocontainer").fadeOut();
						$("#phasethreecontainer").fadeOut();
						$("#phaseone").fadeOut();
						$("#phasetwo").fadeOut();
						$("#phasethree").fadeOut();
				
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
								
								$("#phaseonecontainer").fadeIn(1500);
								$("#phasetwocontainer").fadeIn(1500);
								$("#phasethreecontainer").fadeIn(1500);
								$("#phaseone").fadeIn(1500);
								$("#phasetwo").fadeIn(1500);
								$("#phasethree").fadeIn(1500);
								
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
				sd =  $("#startDate").datepicker({ dateFormat: 'dd,MM,yyyy' }).val();
				ed =  $("#endDate").datepicker({ dateFormat: 'dd,MM,yyyy' }).val();
				clearRubricFields();
				clearRubricCounts();
				
				document.getElementById("rubricGraph").style.display = "none";
				$("#container").fadeOut("slow");
				displayChart();
		};


					function displayChart() {
					//This is the beginning of building the 3d Bar Graph
					
					//Start and show the spinner since the ajax call has started to display the bar graph
					document.getElementById("loadingmessage").style.display = "inline";
					
				
					
					//Create the array to hold the number of teachers for each category to display when clicking on the graph
					ChecklistsPhase1 = [];
					ChecklistsPhase2 = [];
					ChecklistsPhase3 = [];
					SeatingPhase1 = [];
					SeatingPhase2 = [];
					SeatingPhase3 = [];
					TimingPhase1 = [];
					TimingPhase2 = [];
					TimingPhase3 = [];
					DifferentiationPhase1 = [];
					DifferentiationPhase2 = [];
					DifferentiationPhase3 = [];
					DataPhase1 = [];
					DataPhase2 = [];
					DataPhase3 = [];
					ReflectionPhase1 = [];
					ReflectionPhase2 = [];
					ReflectionPhase3 = [];
					DigitalContentPhase1 = [];
					DigitalContentPhase2 = [];
					DigitalContentPhase3 = [];
					StudentGroupsPhase1 = [];
					StudentGroupsPhase2 = [];
					StudentGroupsPhase3 = [];
					StudentLearningPhase1 = [];
					StudentLearningPhase2 = [];
					StudentLearningPhase3 = [];
					
					$.ajax({
		                type: "GET",
		                url:"getRubricValuesForAssignedSchoolsForDashboard",
		                data:{schoolId:schoolIdForGraph, startDate:sd, endDate:ed},
		                dataType: "json",
		                success: function (response) {
					
							//Stop and hide the spinner since the ajax call is done
							document.getElementById("loadingmessage").style.display = "none";
							document.getElementById("rubricGraph").style.display = "inline";
							$("#container").fadeIn("slow");
							
		                	 $.each(response, function(i, interactionObject) {
			
		                		 if ((interactionObject.checklists) != null) {
		                		 if ((interactionObject.checklists) == (1)) {
									 ChecklistsPhase1.push(interactionObject.teacherId);
		                			 checklistsPhaseOne += 1; }
		                		 	else  if ((interactionObject.checklists) == (2)) {
											ChecklistsPhase2.push(interactionObject.teacherId);
			                		 		checklistsPhaseTwo += 1; }
		                		 	else if ((interactionObject.checklists) == (3)) {
												ChecklistsPhase3.push(interactionObject.teacherId);
				                		 		checklistsPhaseThree += 1; }
		                		 	else checklistsNE += 1;
		                		 } else checklistsNE += 1;
		                		  
		                		 if ((interactionObject.seating) != null) {
		                		 if ((interactionObject.seating) == (1)) {
									SeatingPhase1.push(interactionObject.teacherId);
		                			seatingPhaseOne += 1; }
		                		 	else  if ((interactionObject.seating) == (2)) {
										SeatingPhase2.push(interactionObject.teacherId);
		                		 		seatingPhaseTwo += 1; }
		                		 	else  if ((interactionObject.seating) == (3)) {
										SeatingPhase3.push(interactionObject.teacherId);
		                		 		seatingPhaseThree += 1; }
		                		 	else seatingNE += 1;
		                		 } else seatingNE += 1;
		                		 
		                		 if ((interactionObject.timing) != null) {
		                		 if ((interactionObject.timing) == (1)) {
									 TimingPhase1.push(interactionObject.teacherId);
		                			 timingPhaseOne += 1; }
		                		 	else if ((interactionObject.timing) == (2)) {
										TimingPhase2.push(interactionObject.teacherId);
		                		 		timingPhaseTwo += 1; }
		                		 	else if ((interactionObject.timing) == (3)) {
										TimingPhase3.push(interactionObject.teacherId);
		                		 		timingPhaseThree += 1; }
		                		 	else timingNE += 1;
		                		 } else timingNE += 1;
		                		 
		                		 if ((interactionObject.differentiation) != null) {
		                		 if ((interactionObject.differentiation) == (1)) {
									 DifferentiationPhase1.push(interactionObject.teacherId);
		                			 differentiationPhaseOne += 1; }
		                		 	else if ((interactionObject.differentiation) == (2)) {
										DifferentiationPhase2.push(interactionObject.teacherId);
		                		 		differentiationPhaseTwo += 1; }
		                		 	else if ((interactionObject.differentiation) == (3)) {
										DifferentiationPhase3.push(interactionObject.teacherId);
		                		 		differentiationPhaseThree += 1; }
		                		 	else differentiationNE += 1;
		                		 } else differentiationNE += 1;
		                		 
		                		 if ((interactionObject.data) != null) {
		                		 if ((interactionObject.data) == (1)) {
									DataPhase1.push(interactionObject.teacherId);
		                			dataPhaseOne += 1; }
		                		 	else if ((interactionObject.data) == (2)) {
										DataPhase2.push(interactionObject.teacherId);
		                		 		dataPhaseTwo += 1; }
		                		 	else if ((interactionObject.data) == (3)) {
										DataPhase3.push(interactionObject.teacherId);
		                		 		dataPhaseThree += 1; }
		                		 	else dataNE += 1;
		                		 } else dataNE += 1;
		                		 
		                		 if ((interactionObject.reflection) != null) {
		                		 if ((interactionObject.reflection) == (1)) {
									ReflectionPhase1.push(interactionObject.teacherId);
		                			reflectionPhaseOne += 1; }
		                		 	else  if ((interactionObject.reflection) == (2)) {
										ReflectionPhase2.push(interactionObject.teacherId);
		                		 		reflectionPhaseTwo += 1; }
		                		 	else  if ((interactionObject.reflection) == (3)) {
										ReflectionPhase3.push(interactionObject.teacherId);
		                		 		reflectionPhaseThree += 1; }
		                		 	else reflectionNE += 1;
		                		 } else reflectionNE += 1;
		                		 
		                		 if ((interactionObject.digitalContent) != null) {
		                		 if ((interactionObject.digitalContent) == (1)) {
									DigitalContentPhase1.push(interactionObject.teacherId);
		                			digitalcontentPhaseOne += 1; }
		                		 	else  if ((interactionObject.digitalContent) == (2)) {
										DigitalContentPhase2.push(interactionObject.teacherId);
		                		 		digitalcontentPhaseTwo += 1; }
		                		 	else  if ((interactionObject.digitalContent) == (3)) {
										DigitalContentPhase3.push(interactionObject.teacherId);
		                		 		digitalcontentPhaseThree += 1; }
		                		 	else digitalcontentNE += 1;
		                		 } else digitalcontentNE += 1;
		                		 
		                		 if ((interactionObject.studentGroups) != null) {
		                		 if ((interactionObject.studentGroups) ==  (1)) {
									StudentGroupsPhase1.push(interactionObject.teacherId);
		                			studentgroupsPhaseOne += 1; }
		                		 	else if ((interactionObject.studentGroups) == (2)) {
										StudentGroupsPhase2.push(interactionObject.teacherId);
		                		 		studentgroupsPhaseTwo += 1; }
		                		 	else if ((interactionObject.studentGroups) == (3)) {
										StudentGroupsPhase3.push(interactionObject.teacherId);
		                		 		studentgroupsPhaseThree += 1; }
		                		 	else studentgroupsNE += 1;
		                		 } else studentgroupsNE += 1;
		                		 
		                		 if ((interactionObject.studentLearning) != null) {
		                		 if ((interactionObject.studentLearning) == (1)) {
									StudentLearningPhase1.push(interactionObject.teacherId);
		                			studentlearningPhaseOne += 1; }
		                		 	else if ((interactionObject.studentLearning) == (2)) {
										StudentLearningPhase2.push(interactionObject.teacherId);
		                		 		studentlearningPhaseTwo += 1; }
		                		 	else if ((interactionObject.studentLearning) == (3)) {
										StudentLearningPhase3.push(interactionObject.teacherId);
		                		 		studentlearningPhaseThree += 1; }
		                		 	else studentlearningNE += 1;
		                		 } else studentlearningNE += 1;
		                     });
		                	 

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

								plotOptions: {
								        series: {
								            cursor: 'pointer',
								            point: {
								                events: {
								                    click: function (event) {
									
														//Gather the proper data to send to the ajax query
														category = this.category;
														count = this.y;
														phasename = this.series.name;
														teacherIdsToSearch = window[category + phasename];
														
														//First clear out the teacherlist and close the popup
														$("#teachers").text("");
														popup.classList.remove("open-popup");
														
														
														$.ajax({
															type : "GET",
															traditional: true,
															url : "getTeacherNameById",
															data : { teacherIds : teacherIdsToSearch},
															dataType : "text",
															success : function(response) {
																
																// parse JSON string
																const data = JSON.parse(response)
																
																for (var i=0; i<data.length; i++) {
																	
																	var ptag = document.createElement("p");
																	var text = document.createTextNode(data[i]);
																	ptag.appendChild(text);
																	var divelement = document.getElementById("teachers");
																	divelement.appendChild(ptag);
   
																
																}
																
																popup.classList.add("open-popup");
								                        	
								                    		}
								                		});
								            		}
								        		}
											}
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

function closePopup() {
	document.getElementById("popup").classList.remove("open-popup");
}