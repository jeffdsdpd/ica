$(document)
		.ready(
				function() {
					
					clearRubricFields();
					var selectedSchoolId = 0;
					
					//date functions for displaying a calendar with start date < end date
					$(function () {
				            $("#startDate").datepicker({
				                onSelect: function (selected) {
									clearRubricFields();
									$("#container").fadeOut("slow");
					                var dt = new Date(selected);
					                $("#endDate").datepicker("option", "minDate", dt);
				               	}
				            });
				            $("#endDate").datepicker({
				                onSelect: function (selected) {
									clearRubricFields();
									$("#container").fadeOut("slow");
				                    var dt = new Date(selected);
				                    $("#startDate").datepicker("option", "maxDate", dt);
				                }
				            });
				        });
					
					
					var x = document.getElementById("schoolId");
				    //var txt = ("Cypress Andre," +  "Cypress Kirk");
					var txt = '';
				    var i;

					 for (i = 0; i < x.length; i++) {
						if (x.options[i].text != '' && x.options[i].text != 'Demo School' && x.options[i].text != 'Please Select') {
							if (i==1) {
								txt = x.options[i].text
							}
							txt = txt + ", " + x.options[i].text
							};
				    }

					
					
					//Since this is external js file, have to go get user and school data for the dashboard page
					$.ajax({
						type : "GET",
						url : "getDashboardPhaseValuesForRequiredSchools",
						dataType : "json",
						success : function(response) {

							var rubricSum = response.phase1
									+ response.phase2
									+ response.phase3
									+ response.notObserved;

							
								// RE-Build the google pie chart based on new selected school
								google.charts
										.load(
												"current",
												{
													packages : [ "corechart" ]
												});
								google.charts
										.setOnLoadCallback(drawChart);
								function drawChart() {
									var data = google.visualization
											.arrayToDataTable([
													[
															'Task',
															'Hours per Day' ],
													[
															'Phase 1',
															parseInt(response.phase1) ],
													[
															'Phase 2',
															parseInt(response.phase2) ],
													[
															'Phase 3',
															parseInt(response.phase3) ],
															
													[		'Not Observed',
															parseInt(response.notObserved) ],
															]);

									var options = {
										title : 'Percentage of Teachers in each Phase',
										sliceVisibilityThreshold:0,
										titleTextStyle : {
											color : "black",
											fontSize : 16,
											bold : true
										},

										slices : {
											0 : {
												color : '#5DE3FA', // gray
												textStyle : {
													color : 'black',
													bold : true,
													fontSize : 16
												},
											},

											1 : {
												color : '#e57106', // turquoise
												textStyle : {
													color : 'black',
													bold : true,
													fontSize : 16
												},
											},

											2 : {
												color : '#778899', // -
												// orange
												textStyle : {
													color : 'black',
													bold : true,
													fontSize : 16
												},
											},
											3 : {
												color : '#696969', 
												textStyle : {
													color : 'black',
													bold : true,
													fontSize : 16
												},
											}
										},

										is3D : true,

										chartArea : {
											left : 100,
											top : 50
										},

										legend : {
											position : 'labeled',
											textStyle : {
												color : 'black',
												fontSize : 16
											}
										}

									};
								
								}
								
								// Place values in the teacher count fields
								$("#nbrTeachers").val(rubricSum)
								$("#phase1Teachers").val(response.phase1)
								$("#phase2Teachers").val(response.phase2)
								$("#phase3Teachers").val(response.phase3)
								$("#notObserved").val(response.notObserved)
								
								
								// create the percentages for each phase to display
								$("#phaseonepercent").html(Math.floor((response.phase1/rubricSum) * 100)+"%")
								$("#phaseonepercent").css({ 'font-size': '50px' });
								
								$("#phasetwopercent").html(Math.floor((response.phase2/rubricSum) * 100)+"%")
								$("#phasetwopercent").css({ 'font-size': '50px' });
								
								$("#phasethreepercent").html(Math.floor((response.phase3/rubricSum) * 100)+"%")
								$("#phasethreepercent").css({ 'font-size': '50px' });
								
							
						}
					}),
					
					

					$("#schoolId").change(function() {
						clearRubricFields();
						selectedSchoolId = $("#schoolId :selected").val();
						$.ajax({
									type : "GET",
									url : "getDashboardPhaseValuesBySchool",
									data : {
										schoolId : selectedSchoolId
									},
									dataType : "json",
									success : function(response) {

										var rubricSum = response.phase1
												+ response.phase2
												+ response.phase3
												+ response.notObserved;

											// RE-Build the google pie chart based on new selected school
											google.charts
													.load(
															"current",
															{
																packages : [ "corechart" ]
															});
											google.charts
													.setOnLoadCallback(drawChart);
											function drawChart() {
												var data = google.visualization
														.arrayToDataTable([
																[
																		'Task',
																		'Hours per Day' ],
																[
																		'Phase 1',
																		parseInt(response.phase1) ],
																[
																		'Phase 2',
																		parseInt(response.phase2) ],
																[
																		'Phase 3',
																		parseInt(response.phase3) ],
																		
																[		'Not Observed',
																		parseInt(response.notObserved) ],
																		]);

												var options = {
													title : 'Percentage of Teachers in each Phase',
													sliceVisibilityThreshold:0,
													titleTextStyle : {
														color : "black",
														fontSize : 16,
														bold : true
													},

													slices : {
														0 : {
															color : '#5DE3FA', // gray
															textStyle : {
																color : 'black',
																bold : true,
																fontSize : 16
															},
														},

														1 : {
															color : '#e57106', // turquoise
															textStyle : {
																color : 'black',
																bold : true,
																fontSize : 16
															},
														},

														2 : {
															color : '#778899', // -
															// orange
															textStyle : {
																color : 'black',
																bold : true,
																fontSize : 16
															},
														},
														
														
														3 : {
															color : '#696969', 
															textStyle : {
																color : 'black',
																bold : true,
																fontSize : 16
															},
														}
													},

													is3D : true,

													chartArea : {
														left : 100,
														top : 50
													},

													legend : {
														position : 'labeled',
														textStyle : {
															color : 'black',
															fontSize : 16
														}
													}

												};

												/*
									var chart = new google.visualization.PieChart(
											document
													.getElementById('pieContainer'));
									chart
											.draw(
													data,
													options);
													*/
								// end of building the google pie chart
								
								}
								
											
											// Place values in the teacher count fields
											$("#nbrTeachers").val(rubricSum)
											$("#phase1Teachers").val(response.phase1)
											$("#phase2Teachers").val(response.phase2)
											$("#phase3Teachers").val(response.phase3)
											$("#notObserved").val(response.notObserved)
											
											
											// create the percentages for each phase to display
											$("#phaseonepercent").html(Math.floor((response.phase1/rubricSum) * 100)+"%")
											$("#phaseonepercent").css({ 'font-size': '50px' });
											
											$("#phasetwopercent").html(Math.floor((response.phase2/rubricSum) * 100)+"%")
											$("#phasetwopercent").css({ 'font-size': '50px' });
											
											$("#phasethreepercent").html(Math.floor((response.phase3/rubricSum) * 100)+"%")
											$("#phasethreepercent").css({ 'font-size': '50px' });
								
								
									}
								}); // end of ajax getDashboardPhaseValuesBySchool

									
					
					// This is the beginning of building the 3d Bar Graph
					$.ajax({
		                type: "GET",
		                url:"getRubricValuesBySchoolForDashboard",
		                data:{schoolId:selectedSchoolId},
		                dataType: "json",
		                success: function (response) {
		                	 $.each(response, function(i, interactionObject) {
		                		 

		                		 document.getElementById("rubricGraph").style.display = "inline";

		                		 if ((interactionObject.planning) != null) {
		                		 if ((interactionObject.planning) == ("Whole group timer")) {
		                			 planningPhaseOne += 1; }
		                		 	else if ((interactionObject.planning).includes("No whole group timer")) {
		                		 		planningPhaseTwo += 1; }
		                		 	else if ((interactionObject.planning).includes("differentiated")) {
		                		 		planningPhaseThree += 1; }
		                		 	else planningNE += 1;
		                		 } else planningNE += 1;
		                		  
		                		 if ((interactionObject.assessmentAndData) != null) {
		                		 if ((interactionObject.assessmentAndData).includes("Collecting")) {
		                			 assessanddataPhaseOne += 1; }
		                		 	else if ((interactionObject.assessmentAndData).includes("Using")) {
		                		 		assessanddataPhaseTwo += 1; }
		                		 	else if ((interactionObject.assessmentAndData).includes("advance")) {
		                		 		assessanddataPhaseThree += 1; }
		                		 	else assessanddataNE += 1;
		                		 } else assessanddataNE += 1;
		                		 
		                		 if ((interactionObject.path) != null) {
		                		 if ((interactionObject.path).includes("Same")) {
		                			 pathPhaseOne += 1; }
		                		 	else if ((interactionObject.path).includes("Differentiated")) {
		                		 		pathPhaseTwo += 1; }
		                		 	else if ((interactionObject.path).includes("Individual")) {
		                		 		pathPhaseThree += 1; }
		                		 	else pathNE += 1;
		                		 } else pathNE += 1;
		                		 
		                		 if ((interactionObject.place) != null) {
		                		 if ((interactionObject.place).includes("Move")) {
		                			 placePhaseOne += 1; }
		                		 	else if ((interactionObject.place).includes("Flexible")) {
		                		 		placePhaseTwo += 1; }
		                		 	else if ((interactionObject.place).includes("Pick")) {
		                		 		placePhaseThree += 1; }
		                		 	else placeNE += 1;
		                		 } else placeNE += 1;
		                		 
		                		 if ((interactionObject.pace) != null) {
		                		 if ((interactionObject.pace).includes("Whole")) {
		                			 pacePhaseOne += 1; }
		                		 	else if ((interactionObject.pace).includes("Students")) {
		                		 		pacePhaseTwo += 1; }
		                		 	else if ((interactionObject.pace).includes("mastery")) {
		                		 		pacePhaseThree += 1; }
		                		 	else paceNE += 1;
		                		 } else paceNE += 1;
		                		 
		                		 if ((interactionObject.classroommgmt) != null) {
		                		 if ((interactionObject.classroommgmt).includes("Restating")) {
		                			 classmgmtPhaseOne += 1; }
		                		 	else if ((interactionObject.classroommgmt).includes("Self")) {
		                		 		classmgmtPhaseTwo += 1; }
		                		 	else if ((interactionObject.classroommgmt).includes("Automatic")) {
		                		 		classmgmtPhaseThree += 1; }
		                		 	else classmgmtNE += 1;
		                		 } else classmgmtNE += 1;
		                		 
		                		 if ((interactionObject.teacherrole) != null) {
		                		 if ((interactionObject.teacherrole).includes("facilitator")) {
		                			 teacherrolePhaseOne += 1; }
		                		 	else if ((interactionObject.teacherrole).includes("distractions")) {
		                		 		teacherrolePhaseTwo += 1; }
		                		 	else if ((interactionObject.teacherrole).includes("99%")) {
		                		 		teacherrolePhaseThree += 1; }
		                		 	else teacherroleNE += 1;
		                		 } else teacherroleNE += 1;
		                		 
		                		 if ((interactionObject.studentegmt) != null) {
		                		 if ((interactionObject.studentegmt).includes("Following")) {
		                			 studentengagePhaseOne += 1; }
		                		 	else if ((interactionObject.studentegmt).includes("Engaged")) {
		                		 		studentengagePhaseTwo += 1; }
		                		 	else if ((interactionObject.studentegmt).includes("Deeply")) {
		                		 		studentengagePhaseThree += 1; }
		                		 	else studentengageNE += 1;
		                		 } else studentengageNE += 1;
		                		 
		                		 if ((interactionObject.studentcolab) != null) {
		                		 if ((interactionObject.studentcolab).includes("Teacher")) {
		                			 studentcollabPhaseOne += 1; }
		                		 	else if ((interactionObject.studentcolab).includes("Choice")) {
		                		 		studentcollabPhaseTwo += 1; }
		                		 	else if ((interactionObject.studentcolab).includes("PBL")) {
		                		 		studentcollabPhaseThree += 1; }
		                		 	else studentcollabNE += 1;
		                		 } else studentcollabNE += 1;

		                		if ((interactionObject.technology) != null) {
		                		 if ((interactionObject.technology) != null && (interactionObject.technology).includes("Technology")) {
		                			 technologyPhaseOne += 1; }
		                		 	else if ((interactionObject.technology).includes("Using")) {
		                		 		technologyPhaseTwo += 1; }
		                		 	else if ((interactionObject.technology).includes("target")) {
		                		 		technologyPhaseThree += 1; }
		                		 	else technologyNE += 1;
		                		} else technologyNE += 1;
		                     });
		                	 
		                	 $(".planningPhaseOne").html(planningPhaseOne);
		                	 $(".planningPhaseTwo").html(planningPhaseTwo);
		                	 $(".planningPhaseThree").html(planningPhaseThree);
		                	 $(".planningNE").html(planningNE);
		                	 
		                	 $(".assessanddataPhaseOne").html(assessanddataPhaseOne);
		                	 $(".assessanddataPhaseTwo").html(assessanddataPhaseTwo);
		                	 $(".assessanddataPhaseThree").html(assessanddataPhaseThree);
		                	 $(".assessanddataNE").html(assessanddataNE);
		                	 
		                	 $(".pathPhaseOne").html(pathPhaseOne);
		                	 $(".pathPhaseTwo").html(pathPhaseTwo);
		                	 $(".pathPhaseThree").html(pathPhaseThree);
		                	 $(".pathNE").html(pathNE);
		                	 
		                	 $(".placePhaseOne").html(placePhaseOne);
		                	 $(".placePhaseTwo").html(placePhaseTwo);
		                	 $(".placePhaseThree").html(placePhaseThree);
		                	 $(".placeNE").html(placeNE);
		                	 
		                	 $(".pacePhaseOne").html(pacePhaseOne);
		                	 $(".pacePhaseTwo").html(pacePhaseTwo);
		                	 $(".pacePhaseThree").html(pacePhaseThree);
		                	 $(".paceNE").html(paceNE);
		                	 
		                	 $(".classmgmtPhaseOne").html(classmgmtPhaseOne);
		                	 $(".classmgmtPhaseTwo").html(classmgmtPhaseTwo);
		                	 $(".classmgmtPhaseThree").html(classmgmtPhaseThree);
		                	 $(".classmgmtNE").html(classmgmtNE);
		                	 
		                	 $(".teacherrolePhaseOne").html(teacherrolePhaseOne);
		                	 $(".teacherrolePhaseTwo").html(teacherrolePhaseTwo);
		                	 $(".teacherrolePhaseThree").html(teacherrolePhaseThree);
		                	 $(".teacherroleNE").html(teacherroleNE);
		                	 
		                	 $(".studentengagePhaseOne").html(studentengagePhaseOne);
		                	 $(".studentengagePhaseTwo").html(studentengagePhaseTwo);
		                	 $(".studentengagePhaseThree").html(studentengagePhaseThree);
		                	 $(".studentengageNE").html(studentengageNE);
		                	 
		                	 $(".studentcollabPhaseOne").html(studentcollabPhaseOne);
		                	 $(".studentcollabPhaseTwo").html(studentcollabPhaseTwo);
		                	 $(".studentcollabPhaseThree").html(studentcollabPhaseThree);
		                	 $(".studentcollabNE").html(studentcollabNE);
		                	 
		                	 $(".technologyPhaseOne").html(technologyPhaseOne);
		                	 $(".technologyPhaseTwo").html(technologyPhaseTwo);
		                	 $(".technologyPhaseThree").html(technologyPhaseThree);
		                	 $(".technologyNE").html(technologyNE);

		                	 
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
		                		        categories: ['Planning', 'AssessmentData', 'Path', 'Place', 'Pace', 'ClassroomMgmt', 'TeacherRole', 'StudentEngmnt', 'StudentCollab', 'Technology'],
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
		                		        data: [planningPhaseOne, assessanddataPhaseOne, pathPhaseOne, placePhaseOne, pacePhaseOne, classmgmtPhaseOne, teacherrolePhaseOne, studentengagePhaseOne, studentcollabPhaseOne, technologyPhaseOne],
		                		    	color: '#5DE3FA'
		                		    }, {
		                		    	name: 'Phase2',
		                 		        data: [planningPhaseTwo, assessanddataPhaseTwo, pathPhaseTwo, placePhaseTwo, pacePhaseTwo, classmgmtPhaseTwo, teacherrolePhaseTwo, studentengagePhaseTwo, studentcollabPhaseTwo, technologyPhaseTwo],
		                 		        color: '#e57106'
		                		    }, {
		                		    	name: 'Phase3',
		                 		        data: [planningPhaseThree, assessanddataPhaseThree, pathPhaseThree, placePhaseThree, pacePhaseThree, classmgmtPhaseThree, teacherrolePhaseThree, studentengagePhaseThree, studentcollabPhaseThree, technologyPhaseThree],
		                 		        color: '#778899'
		                		    }]
		                		});
		                }}); // This is the end of building the 3d Bar Graph
					
					}); // end of $("#schoolId").change(function()
					
					
					
					
					$("button[name='button']").click(validateForm);
				
					
		//Display Report Button clicked
		function validateForm() {
				var school = $("#schoolId :selected").val();
				var sd =  $("#startDate").datepicker({ dateFormat: 'dd,MM,yyyy' }).val();
				var ed =  $("#endDate").datepicker({ dateFormat: 'dd,MM,yyyy' }).val();
				displayChart();
		};


					function displayChart() {
					// This is the beginning of building the 3d Bar Graph
					
					//Start and show the spinner since the ajax call has started to display the bar graph
					document.getElementById("loadingmessage").style.display = "inline";
					$.ajax({
		                type: "GET",
		                url:"getRubricValuesForAssignedSchoolsForDashboard",
		                data:{schools:txt},
		                dataType: "json",
		                success: function (response) {
					
							//Stop and hide the spinner since the ajax call is done
							document.getElementById("loadingmessage").style.display = "none";
		                	 $.each(response, function(i, interactionObject) {
		                		 

		                		 document.getElementById("rubricGraph").style.display = "inline";

		                		 if ((interactionObject.planning) != null) {
		                		 if ((interactionObject.planning) == ("Whole group timer")) {
		                			 planningPhaseOne += 1; }
		                		 	else if ((interactionObject.planning).includes("No whole group timer")) {
		                		 		planningPhaseTwo += 1; }
		                		 	else if ((interactionObject.planning).includes("differentiated")) {
		                		 		planningPhaseThree += 1; }
		                		 	else planningNE += 1;
		                		 } else planningNE += 1;
		                		  
		                		 if ((interactionObject.assessmentAndData) != null) {
		                		 if ((interactionObject.assessmentAndData).includes("Collecting")) {
		                			 assessanddataPhaseOne += 1; }
		                		 	else if ((interactionObject.assessmentAndData).includes("Using")) {
		                		 		assessanddataPhaseTwo += 1; }
		                		 	else if ((interactionObject.assessmentAndData).includes("advance")) {
		                		 		assessanddataPhaseThree += 1; }
		                		 	else assessanddataNE += 1;
		                		 } else assessanddataNE += 1;
		                		 
		                		 if ((interactionObject.path) != null) {
		                		 if ((interactionObject.path).includes("Same")) {
		                			 pathPhaseOne += 1; }
		                		 	else if ((interactionObject.path).includes("Differentiated")) {
		                		 		pathPhaseTwo += 1; }
		                		 	else if ((interactionObject.path).includes("Individual")) {
		                		 		pathPhaseThree += 1; }
		                		 	else pathNE += 1;
		                		 } else pathNE += 1;
		                		 
		                		 if ((interactionObject.place) != null) {
		                		 if ((interactionObject.place).includes("Move")) {
		                			 placePhaseOne += 1; }
		                		 	else if ((interactionObject.place).includes("Flexible")) {
		                		 		placePhaseTwo += 1; }
		                		 	else if ((interactionObject.place).includes("Pick")) {
		                		 		placePhaseThree += 1; }
		                		 	else placeNE += 1;
		                		 } else placeNE += 1;
		                		 
		                		 if ((interactionObject.pace) != null) {
		                		 if ((interactionObject.pace).includes("Whole")) {
		                			 pacePhaseOne += 1; }
		                		 	else if ((interactionObject.pace).includes("Students")) {
		                		 		pacePhaseTwo += 1; }
		                		 	else if ((interactionObject.pace).includes("mastery")) {
		                		 		pacePhaseThree += 1; }
		                		 	else paceNE += 1;
		                		 } else paceNE += 1;
		                		 
		                		 if ((interactionObject.classroommgmt) != null) {
		                		 if ((interactionObject.classroommgmt).includes("Restating")) {
		                			 classmgmtPhaseOne += 1; }
		                		 	else if ((interactionObject.classroommgmt).includes("Self")) {
		                		 		classmgmtPhaseTwo += 1; }
		                		 	else if ((interactionObject.classroommgmt).includes("Automatic")) {
		                		 		classmgmtPhaseThree += 1; }
		                		 	else classmgmtNE += 1;
		                		 } else classmgmtNE += 1;
		                		 
		                		 if ((interactionObject.teacherrole) != null) {
		                		 if ((interactionObject.teacherrole).includes("facilitator")) {
		                			 teacherrolePhaseOne += 1; }
		                		 	else if ((interactionObject.teacherrole).includes("distractions")) {
		                		 		teacherrolePhaseTwo += 1; }
		                		 	else if ((interactionObject.teacherrole).includes("99%")) {
		                		 		teacherrolePhaseThree += 1; }
		                		 	else teacherroleNE += 1;
		                		 } else teacherroleNE += 1;
		                		 
		                		 if ((interactionObject.studentegmt) != null) {
		                		 if ((interactionObject.studentegmt).includes("Following")) {
		                			 studentengagePhaseOne += 1; }
		                		 	else if ((interactionObject.studentegmt).includes("Engaged")) {
		                		 		studentengagePhaseTwo += 1; }
		                		 	else if ((interactionObject.studentegmt).includes("Deeply")) {
		                		 		studentengagePhaseThree += 1; }
		                		 	else studentengageNE += 1;
		                		 } else studentengageNE += 1;
		                		 
		                		 if ((interactionObject.studentcolab) != null) {
		                		 if ((interactionObject.studentcolab).includes("Teacher")) {
		                			 studentcollabPhaseOne += 1; }
		                		 	else if ((interactionObject.studentcolab).includes("Choice")) {
		                		 		studentcollabPhaseTwo += 1; }
		                		 	else if ((interactionObject.studentcolab).includes("PBL")) {
		                		 		studentcollabPhaseThree += 1; }
		                		 	else studentcollabNE += 1;
		                		 } else studentcollabNE += 1;

		                		if ((interactionObject.technology) != null) {
		                		 if ((interactionObject.technology) != null && (interactionObject.technology).includes("Technology")) {
		                			 technologyPhaseOne += 1; }
		                		 	else if ((interactionObject.technology).includes("Using")) {
		                		 		technologyPhaseTwo += 1; }
		                		 	else if ((interactionObject.technology).includes("target")) {
		                		 		technologyPhaseThree += 1; }
		                		 	else technologyNE += 1;
		                		} else technologyNE += 1;
		                     });
		                	 
		                	 $(".planningPhaseOne").html(planningPhaseOne);
		                	 $(".planningPhaseTwo").html(planningPhaseTwo);
		                	 $(".planningPhaseThree").html(planningPhaseThree);
		                	 $(".planningNE").html(planningNE);
		                	 
		                	 $(".assessanddataPhaseOne").html(assessanddataPhaseOne);
		                	 $(".assessanddataPhaseTwo").html(assessanddataPhaseTwo);
		                	 $(".assessanddataPhaseThree").html(assessanddataPhaseThree);
		                	 $(".assessanddataNE").html(assessanddataNE);
		                	 
		                	 $(".pathPhaseOne").html(pathPhaseOne);
		                	 $(".pathPhaseTwo").html(pathPhaseTwo);
		                	 $(".pathPhaseThree").html(pathPhaseThree);
		                	 $(".pathNE").html(pathNE);
		                	 
		                	 $(".placePhaseOne").html(placePhaseOne);
		                	 $(".placePhaseTwo").html(placePhaseTwo);
		                	 $(".placePhaseThree").html(placePhaseThree);
		                	 $(".placeNE").html(placeNE);
		                	 
		                	 $(".pacePhaseOne").html(pacePhaseOne);
		                	 $(".pacePhaseTwo").html(pacePhaseTwo);
		                	 $(".pacePhaseThree").html(pacePhaseThree);
		                	 $(".paceNE").html(paceNE);
		                	 
		                	 $(".classmgmtPhaseOne").html(classmgmtPhaseOne);
		                	 $(".classmgmtPhaseTwo").html(classmgmtPhaseTwo);
		                	 $(".classmgmtPhaseThree").html(classmgmtPhaseThree);
		                	 $(".classmgmtNE").html(classmgmtNE);
		                	 
		                	 $(".teacherrolePhaseOne").html(teacherrolePhaseOne);
		                	 $(".teacherrolePhaseTwo").html(teacherrolePhaseTwo);
		                	 $(".teacherrolePhaseThree").html(teacherrolePhaseThree);
		                	 $(".teacherroleNE").html(teacherroleNE);
		                	 
		                	 $(".studentengagePhaseOne").html(studentengagePhaseOne);
		                	 $(".studentengagePhaseTwo").html(studentengagePhaseTwo);
		                	 $(".studentengagePhaseThree").html(studentengagePhaseThree);
		                	 $(".studentengageNE").html(studentengageNE);
		                	 
		                	 $(".studentcollabPhaseOne").html(studentcollabPhaseOne);
		                	 $(".studentcollabPhaseTwo").html(studentcollabPhaseTwo);
		                	 $(".studentcollabPhaseThree").html(studentcollabPhaseThree);
		                	 $(".studentcollabNE").html(studentcollabNE);
		                	 
		                	 $(".technologyPhaseOne").html(technologyPhaseOne);
		                	 $(".technologyPhaseTwo").html(technologyPhaseTwo);
		                	 $(".technologyPhaseThree").html(technologyPhaseThree);
		                	 $(".technologyNE").html(technologyNE);

		                	 
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
		                		        categories: ['Planning', 'AssessmentData', 'Path', 'Place', 'Pace', 'ClassroomMgmt', 'TeacherRole', 'StudentEngmnt', 'StudentCollab', 'Technology'],
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
		                		        data: [planningPhaseOne, assessanddataPhaseOne, pathPhaseOne, placePhaseOne, pacePhaseOne, classmgmtPhaseOne, teacherrolePhaseOne, studentengagePhaseOne, studentcollabPhaseOne, technologyPhaseOne],
		                		    	color: '#5DE3FA'
		                		    }, {
		                		    	name: 'Phase2',
		                 		        data: [planningPhaseTwo, assessanddataPhaseTwo, pathPhaseTwo, placePhaseTwo, pacePhaseTwo, classmgmtPhaseTwo, teacherrolePhaseTwo, studentengagePhaseTwo, studentcollabPhaseTwo, technologyPhaseTwo],
		                 		        color: '#e57106'
		                		    }, {
		                		    	name: 'Phase3',
		                 		        data: [planningPhaseThree, assessanddataPhaseThree, pathPhaseThree, placePhaseThree, pacePhaseThree, classmgmtPhaseThree, teacherrolePhaseThree, studentengagePhaseThree, studentcollabPhaseThree, technologyPhaseThree],
		                 		        color: '#778899'
		                		    }]
		                		});
		                }})}; // This is the end of building the 3d Bar Graph


			
				
				}); // end of the Ready Function


// start of building the google pie chart
google.charts.load("current", {
	packages : [ "corechart" ]
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
	var data = google.visualization.arrayToDataTable([
			[ 'Task', 'Hours per Day' ],
			[ 'Phase 1', parseInt('${phaseValues.phase1}') ],
			[ 'Phase 2', parseInt('${phaseValues.phase2}') ],
			[ 'Phase 3', parseInt('${phaseValues.phase3}') ],
			[ 'Not Observed', parseInt('${phaseValues.notObserved}') ]
			]);

	var options = {
		title : 'Percentage of Teachers in each Phase',
		sliceVisibilityThreshold:0,
		titleTextStyle : {
			color : "black",
			fontSize : 15,
			bold : true
		},

		slices : {
			0 : {
				color : '#5DE3FA', // gray
				textStyle : {
					color : 'black',
					bold : true,
					fontSize : 15
				},
			},

			1 : {
				color : '#e57106', // copper
				textStyle : {
					color : 'black',
					bold : true,
					fontSize : 15
				},
			},

			2 : {
				color : '#778899', // - orange
				textStyle : {
					color : 'black',
					bold : true,
					fontSize : 15
				},
			},
			
			
			3 : {
				color : '#696969', 
				textStyle : {
					color : 'black',
					bold : true,
					fontSize : 10
				},
			}
		},

		is3D : true,

		chartArea : {
			left : 100,
			top : 50
		},

		legend : {
			position : 'labeled',
			textStyle : {
				color : 'black',
				fontSize : 16
			}
		}

	};

	/*
									var chart = new google.visualization.PieChart(
											document
													.getElementById('pieContainer'));
									chart
											.draw(
													data,
													options);
													*/
								// end of building the google pie chart
								}
								




$(function() {
	$("#entrydate").datepicker();
});

function clearRubricFields() {
	planningPhaseOne = 0;
	planningPhaseTwo = 0;
	planningPhaseThree = 0;
	planningNE = 0;
	assessanddataPhaseOne = 0;
	assessanddataPhaseTwo = 0;
	assessanddataPhaseThree = 0;
	assessanddataNE = 0;
	pathPhaseOne = 0;
	pathPhaseTwo = 0;
	pathPhaseThree = 0;
	pathNE = 0;
	placePhaseOne = 0;
	placePhaseTwo = 0;
	placePhaseThree = 0;
	placeNE = 0;
	pacePhaseOne = 0;
	pacePhaseTwo = 0;
	pacePhaseThree = 0;
	paceNE = 0;
	classmgmtPhaseOne = 0;
	classmgmtPhaseTwo = 0;
	classmgmtPhaseThree = 0;
	classmgmtNE = 0;
	teacherrolePhaseOne = 0;
	teacherrolePhaseTwo = 0;
	teacherrolePhaseThree = 0;
	teacherroleNE = 0;
	studentengagePhaseOne = 0;
	studentengagePhaseTwo = 0;
	studentengagePhaseThree = 0;
	studentengageNE = 0;
	studentcollabPhaseOne = 0;
	studentcollabPhaseTwo = 0;
	studentcollabPhaseThree = 0;
	studentcollabNE = 0;
	technologyPhaseOne = 0;
	technologyPhaseTwo = 0;
	technologyPhaseThree = 0;
	technologyNE = 0;
	
};