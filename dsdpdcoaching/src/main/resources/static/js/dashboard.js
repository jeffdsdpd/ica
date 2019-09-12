$(document)
		.ready(
				function() {
					var school = 0;
					var selectedSchoolId = 0;
					var rubricDate = "";

					/*
					if ('${admin}' == 'yes') {
						document.getElementById("schoolIdGroup").style.display = "inline";
					} else {
						document.getElementById("schoolIdGroup").style.display = "none";
					}

					$('.dropdown-toggle').dropdown();

					if ('${schoolList.size()}' > 1) {
						$("#schoolContainer").show();
						schoolName = "All Schools";

					} else {
						schoolName = '${schoolList[0].name}';
					}

					document.getElementById("school").innerHTML = schoolName;
					
					*/
					
					$("#schoolId")
							.change(
									function() {
										selectedSchoolId = $(
												"#schoolId :selected").val();

										// sessionStorage.removeItem('phaseValues1');

										$
												.ajax({
													type : "POST",
													url : "getDashboardDataBySchool",
													data : {
														schoolId : selectedSchoolId
													},
													dataType : "json",
													success : function(response) {

														var rubricSum = response[0].phase1
																+ response[0].phase2
																+ response[0].phase3;

														if (rubricSum > 0) {

															// RE-Build the
															// chart
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
																						parseInt(response[0].phase1) ],
																				[
																						'Phase 2',
																						parseInt(response[0].phase2) ],
																				[
																						'Phase 3',
																						parseInt(response[0].phase3) ] ]);

																var options = {
																	title : 'Percentage of Teachers in each Phase',
																	titleTextStyle : {
																		color : "black",
																		fontSize : 20,
																		bold : true
																	},

																	slices : {
																		0 : {
																			color : '#5DE3FA', // gray
																			textStyle : {
																				color : 'black',
																				bold : true,
																				fontSize : 18
																			},
																		},

																		1 : {
																			color : '#e57106', // turquoise
																			textStyle : {
																				color : 'black',
																				bold : true,
																				fontSize : 18
																			},
																		},

																		2 : {
																			color : '#778899', // -
																								// orange
																			textStyle : {
																				color : 'black',
																				bold : true,
																				fontSize : 18
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
																			fontSize : 18
																		}
																	}

																};

																var chart = new google.visualization.PieChart(
																		document
																				.getElementById('pieContainer'));
																chart
																		.draw(
																				data,
																				options);
															}
															// end of building
															// the google pie
															// chart

														} else { // This is
																	// when all
																	// phase
																	// values
																	// come back
																	// as 0

															(document
																	.getElementById('pieContainer')).innerHTML = "<font size='+2'>NO Rubric DATA to Display</font>"
														}
													}
												});

										clearRubricFields();

										$
												.ajax({
													type : "GET",
													url : "GetRubricValuesForDashboardDisplay",
													data : {
														schoolId : selectedSchoolId
													},
													dataType : "json",
													success : function(response) {
														$
																.each(
																		response,
																		function(
																				i,
																				interactionObject) {
																			rubricDate = interactionObject.date;
																			document
																					.getElementById("rubricGraph").style.display = "inline";

																			if ((interactionObject.planning) != null) {
																				if ((interactionObject.planning) == ("Whole group timer")) {
																					planningPhaseOne += 1;
																				} else if ((interactionObject.planning)
																						.includes("implements checklist")) {
																					planningPhaseTwo += 1;
																				} else if ((interactionObject.planning)
																						.includes("differentiated")) {
																					planningPhaseThree += 1;
																				} else
																					planningNE += 1;
																			} else
																				planningNE += 1;

																			if ((interactionObject.assessmentAndData) != null) {
																				if ((interactionObject.assessmentAndData)
																						.includes("Collecting")) {
																					assessanddataPhaseOne += 1;
																				} else if ((interactionObject.assessmentAndData)
																						.includes("Using")) {
																					assessanddataPhaseTwo += 1;
																				} else if ((interactionObject.assessmentAndData)
																						.includes("advance")) {
																					assessanddataPhaseThree += 1;
																				} else
																					assessanddataNE += 1;
																			} else
																				assessanddataNE += 1;

																			if ((interactionObject.path) != null) {
																				if ((interactionObject.path)
																						.includes("Same")) {
																					pathPhaseOne += 1;
																				} else if ((interactionObject.path)
																						.includes("Differentiated")) {
																					pathPhaseTwo += 1;
																				} else if ((interactionObject.path)
																						.includes("Individual")) {
																					pathPhaseThree += 1;
																				} else
																					pathNE += 1;
																			} else
																				pathNE += 1;

																			if ((interactionObject.place) != null) {
																				if ((interactionObject.place)
																						.includes("Move")) {
																					placePhaseOne += 1;
																				} else if ((interactionObject.place)
																						.includes("Flexible")) {
																					placePhaseTwo += 1;
																				} else if ((interactionObject.place)
																						.includes("Pick")) {
																					placePhaseThree += 1;
																				} else
																					placeNE += 1;
																			} else
																				placeNE += 1;

																			if ((interactionObject.pace) != null) {
																				if ((interactionObject.pace)
																						.includes("timer")) {
																					pacePhaseOne += 1;
																				} else if ((interactionObject.pace)
																						.includes("move")) {
																					pacePhaseTwo += 1;
																				} else if ((interactionObject.pace)
																						.includes("mastery")) {
																					pacePhaseThree += 1;
																				} else
																					paceNE += 1;
																			} else
																				paceNE += 1;

																			if ((interactionObject.classroomManagement) != null) {
																				if ((interactionObject.classroomManagement)
																						.includes("Restating")) {
																					classmgmtPhaseOne += 1;
																				} else if ((interactionObject.classroomManagement)
																						.includes("Self")) {
																					classmgmtPhaseTwo += 1;
																				} else if ((interactionObject.classroomManagement)
																						.includes("Automatic")) {
																					classmgmtPhaseThree += 1;
																				} else
																					classmgmtNE += 1;
																			} else
																				classmgmtNE += 1;

																			if ((interactionObject.teacherRole) != null) {
																				if ((interactionObject.teacherRole)
																						.includes("facilitator")) {
																					teacherrolePhaseOne += 1;
																				} else if ((interactionObject.teacherRole)
																						.includes("distractions")) {
																					teacherrolePhaseTwo += 1;
																				} else if ((interactionObject.teacherRole)
																						.includes("99%")) {
																					teacherrolePhaseThree += 1;
																				} else
																					teacherroleNE += 1;
																			} else
																				teacherroleNE += 1;

																			if ((interactionObject.studentEngagement) != null) {
																				if ((interactionObject.studentEngagement)
																						.includes("Following")) {
																					studentengagePhaseOne += 1;
																				} else if ((interactionObject.studentEngagement)
																						.includes("Engaged")) {
																					studentengagePhaseTwo += 1;
																				} else if ((interactionObject.studentEngagement)
																						.includes("Deeply")) {
																					studentengagePhaseThree += 1;
																				} else
																					studentengageNE += 1;
																			} else
																				studentengageNE += 1;

																			if ((interactionObject.studentCollaboration) != null) {
																				if ((interactionObject.studentCollaboration)
																						.includes("Teacher")) {
																					studentcollabPhaseOne += 1;
																				} else if ((interactionObject.studentCollaboration)
																						.includes("Choice")) {
																					studentcollabPhaseTwo += 1;
																				} else if ((interactionObject.studentCollaboration)
																						.includes("PBL")) {
																					studentcollabPhaseThree += 1;
																				} else
																					studentcollabNE += 1;
																			} else
																				studentcollabNE += 1;

																			if ((interactionObject.technology) != null) {
																				if ((interactionObject.technology) != null
																						&& (interactionObject.technology)
																								.includes("Technology")) {
																					technologyPhaseOne += 1;
																				} else if ((interactionObject.technology)
																						.includes("Using")) {
																					technologyPhaseTwo += 1;
																				} else if ((interactionObject.technology)
																						.includes("Students")) {
																					technologyPhaseThree += 1;
																				} else
																					technologyNE += 1;
																			} else
																				technologyNE += 1;
																		});

														$(".planningPhaseOne")
																.html(
																		planningPhaseOne);
														$(".planningPhaseTwo")
																.html(
																		planningPhaseTwo);
														$(".planningPhaseThree")
																.html(
																		planningPhaseThree);
														$(".planningNE").html(
																planningNE);

														$(
																".assessanddataPhaseOne")
																.html(
																		assessanddataPhaseOne);
														$(
																".assessanddataPhaseTwo")
																.html(
																		assessanddataPhaseTwo);
														$(
																".assessanddataPhaseThree")
																.html(
																		assessanddataPhaseThree);
														$(".assessanddataNE")
																.html(
																		assessanddataNE);

														$(".pathPhaseOne")
																.html(
																		pathPhaseOne);
														$(".pathPhaseTwo")
																.html(
																		pathPhaseTwo);
														$(".pathPhaseThree")
																.html(
																		pathPhaseThree);
														$(".pathNE").html(
																pathNE);

														$(".placePhaseOne")
																.html(
																		placePhaseOne);
														$(".placePhaseTwo")
																.html(
																		placePhaseTwo);
														$(".placePhaseThree")
																.html(
																		placePhaseThree);
														$(".placeNE").html(
																placeNE);

														$(".pacePhaseOne")
																.html(
																		pacePhaseOne);
														$(".pacePhaseTwo")
																.html(
																		pacePhaseTwo);
														$(".pacePhaseThree")
																.html(
																		pacePhaseThree);
														$(".paceNE").html(
																paceNE);

														$(".classmgmtPhaseOne")
																.html(
																		classmgmtPhaseOne);
														$(".classmgmtPhaseTwo")
																.html(
																		classmgmtPhaseTwo);
														$(
																".classmgmtPhaseThree")
																.html(
																		classmgmtPhaseThree);
														$(".classmgmtNE").html(
																classmgmtNE);

														$(
																".teacherrolePhaseOne")
																.html(
																		teacherrolePhaseOne);
														$(
																".teacherrolePhaseTwo")
																.html(
																		teacherrolePhaseTwo);
														$(
																".teacherrolePhaseThree")
																.html(
																		teacherrolePhaseThree);
														$(".teacherroleNE")
																.html(
																		teacherroleNE);

														$(
																".studentengagePhaseOne")
																.html(
																		studentengagePhaseOne);
														$(
																".studentengagePhaseTwo")
																.html(
																		studentengagePhaseTwo);
														$(
																".studentengagePhaseThree")
																.html(
																		studentengagePhaseThree);
														$(".studentengageNE")
																.html(
																		studentengageNE);

														$(
																".studentcollabPhaseOne")
																.html(
																		studentcollabPhaseOne);
														$(
																".studentcollabPhaseTwo")
																.html(
																		studentcollabPhaseTwo);
														$(
																".studentcollabPhaseThree")
																.html(
																		studentcollabPhaseThree);
														$(".studentcollabNE")
																.html(
																		studentcollabNE);

														$(".technologyPhaseOne")
																.html(
																		technologyPhaseOne);
														$(".technologyPhaseTwo")
																.html(
																		technologyPhaseTwo);
														$(
																".technologyPhaseThree")
																.html(
																		technologyPhaseThree);
														$(".technologyNE")
																.html(
																		technologyNE);

														// load the Highcharts
														// 3d bar chart
														$("#highchart")
f																.highcharts(
																		{
																			chart : {
																				type : 'column',
																				options3d : {
																					enabled : true,
																					alpha : 15,
																					beta : 15,
																					viewDistance : 25,
																					depth : 40
																				}
																			},

																			legend : {
																				itemStyle : {
																					fontSize : '20px',
																					color : '#A0A0A0'
																				}
																			},

																			title : {
																				text : 'Number of Teachers in each Rubric Category',
																				style : {
																					fontSize : '20px',
																					fontWeight : 'bold'
																				}
																			},

																			subtitle : {
																				text : 'Based on most recent Observed Classroom taken on '
																						+ rubricDate,
																				style : {
																					fontSize : '16px'
																				}
																			},

																			xAxis : {
																				categories : [
																						'Planning',
																						'AssessmentData',
																						'Path',
																						'Place',
																						'Pace',
																						'ClassroomMgmt',
																						'TeacherRole',
																						'StudentEngmnt',
																						'StudentCollab',
																						'Technology' ],
																				labels : {
																					skew3d : true,
																					style : {
																						fontSize : '20px',
																						fontWeight : 'bold'
																					},
																					rotation : -45
																				}
																			},

																			yAxis : {
																				allowDecimals : false,
																				labels : {
																					style : {
																						fontSize : '14px',
																						bold : true
																					}
																				},
																				min : 0,
																				title : {
																					text : 'Number of Teachers',
																					style : {
																						fontSize : '20px',
																						fontWeight : 'bold'
																					},
																					skew3d : true
																				}
																			},

																			tooltip : {
																				headerFormat : '<b>{point.key}</b><br>',
																				pointFormat : '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
																			},

																			series : [
																					{
																						name : 'Phase1',
																						data : [
																								planningPhaseOne,
																								assessanddataPhaseOne,
																								pathPhaseOne,
																								placePhaseOne,
																								pacePhaseOne,
																								classmgmtPhaseOne,
																								teacherrolePhaseOne,
																								studentengagePhaseOne,
																								studentcollabPhaseOne,
																								technologyPhaseOne ],
																						color : '#5DE3FA'
																					},
																					{
																						name : 'Phase2',
																						data : [
																								planningPhaseTwo,
																								assessanddataPhaseTwo,
																								pathPhaseTwo,
																								placePhaseTwo,
																								pacePhaseTwo,
																								classmgmtPhaseTwo,
																								teacherrolePhaseTwo,
																								studentengagePhaseTwo,
																								studentcollabPhaseTwo,
																								technologyPhaseTwo ],
																						color : '#e57106'
																					},
																					{
																						name : 'Phase3',
																						data : [
																								planningPhaseThree,
																								assessanddataPhaseThree,
																								pathPhaseThree,
																								placePhaseThree,
																								pacePhaseThree,
																								classmgmtPhaseThree,
																								teacherrolePhaseThree,
																								studentengagePhaseThree,
																								studentcollabPhaseThree,
																								technologyPhaseThree ],
																						color : '#778899'
																					} ]
																		});
													}
												});

									}); // end of
										// $("#schoolId").change(function()

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

// start of building the google pie chart
google.charts.load("current", {
	packages : [ "corechart" ]
});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
	var data = google.visualization.arrayToDataTable([
			[ 'Task', 'Hours per Day' ],
			[ 'Phase 1', parseInt('${phaseValues[0].phase1}') ],
			[ 'Phase 2', parseInt('${phaseValues[0].phase2}') ],
			[ 'Phase 3', parseInt('${phaseValues[0].phase3}') ] ]);

	var options = {
		title : 'Percentage of Teachers in each Phase',
		titleTextStyle : {
			color : "black",
			fontSize : 20,
			bold : true
		},

		slices : {
			0 : {
				color : '#5DE3FA', // gray
				textStyle : {
					color : 'black',
					bold : true,
					fontSize : 18
				},
			},

			1 : {
				color : '#e57106', // copper
				textStyle : {
					color : 'black',
					bold : true,
					fontSize : 18
				},
			},

			2 : {
				color : '#778899', // - orange
				textStyle : {
					color : 'black',
					bold : true,
					fontSize : 18
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
				fontSize : 18
			}
		}

	};

	var chart = new google.visualization.PieChart(document
			.getElementById('pieContainer'));
	chart.draw(data, options);
}
// end of building the google pie chart

$(function() {
	$("#entrydate").datepicker();
});