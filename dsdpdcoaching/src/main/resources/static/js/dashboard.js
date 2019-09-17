$(document)
		.ready(
				function() {
					var school = 0;
					var selectedSchoolId = 0;
					var rubricDate = "";
					
					//Since this is external js file, have to go get user and school data for the dashboard page
					$.ajax({
						type : "GET",
						url : "getDashboardPhaseValuesForRequiredSchools",
						dataType : "json",
						success : function(response) {

							var rubricSum = response.phase1
									+ response.phase2
									+ response.phase3;

							if (rubricSum > 0) {

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
															parseInt(response.phase3) ] ]);

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
								// end of building the google pie chart

							} else { // This is when all phase values come back as 0
								(document
										.getElementById('pieContainer')).innerHTML = "<font size='+2'>NO Rubric DATA to Display</font>"
							}
						}
					});
					

					$("#schoolId").change(function() {
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
																+ response.phase3;

														if (rubricSum > 0) {

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
																						parseInt(response.phase3) ] ]);

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
															// end of building the google pie chart

														} else { // This is when all phase values come back as 0
															(document
																	.getElementById('pieContainer')).innerHTML = "<font size='+2'>NO Rubric DATA to Display</font>"
														}
													}
												});

									}); // end of $("#schoolId").change(function()

				});

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
			[ 'Phase 3', parseInt('${phaseValues.phase3}') ] ]);

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