$(document).ready(function() {
	
	//SCHOOL field has changed
	$("#schoolId").change(function() {
		clearRubricFields();
		$("#container").fadeOut("slow");
		$("#startDate").empty();
		$("#endDate").empty();
	});

	
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
	}); //end of the 'document' ready function


	//Display Report Button clicked
	function validateForm() {
		if($("#frm").valid()) {
			var school = $("#schoolId :selected").val();
			var sd =  $("#startDate").datepicker({ dateFormat: 'dd,MM,yyyy' }).val();
			var ed =  $("#endDate").datepicker({ dateFormat: 'dd,MM,yyyy' }).val();
			displayChart();
		};
	};
		

	
	//function called after validateForm is successful
	function displayChart() {
		nbrOfRecords = 0;
		clearRubricFields();
		selectedSchoolId =  $("#schoolId :selected").val();
		$("#container").fadeOut("slow");
		startDate =  $("#startDate").datepicker({ dateFormat: 'dd,MM,yyyy' }).val();
		endDate =  $("#endDate").datepicker({ dateFormat: 'dd,MM,yyyy' }).val();
		$("#container").fadeIn("slow");
	    $.ajax({
	        type: "GET",
	        url:"getHokeRubricValuesBySchoolDatesObserved",
	        data:{schoolId:selectedSchoolId, startDate:startDate, endDate:endDate},
	        dataType: "json",
	        success: function (response) {
				
            	$.each(response, function(index, interactionObject){
       
            		nbrOfRecords += 1;

					if ((interactionObject.checklists) != null) {
               		 if ((interactionObject.checklists) == (1)) {
               			 checklistsPhaseOne += 1; }
               		 	else if ((interactionObject.checklists) == (2)) {
               		 		checklistsPhaseTwo += 1; }
               		 	else if ((interactionObject.checklists) == (3)) {
               		 		checklistsPhaseThree += 1; }
               		 	else checklistsNE += 1;
               		 } else checklistsNE += 1;

					if ((interactionObject.seating) != null) {
               		 if ((interactionObject.seating) == (1)) {
               			 seatingPhaseOne += 1; }
               		 	else if ((interactionObject.seating) == (2)) {
               		 		seatingPhaseTwo += 1; }
               		 	else if ((interactionObject.seating) == (3)) {
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
               		 	else if ((interactionObject.reflection) == (2)) {
               		 		reflectionPhaseTwo += 1; }
               		 	else if ((interactionObject.reflection) == (3)) {
               		 		reflectionPhaseThree += 1; }
               		 	else reflectionNE += 1;
               		 } else reflectionNE += 1;

					if ((interactionObject.digitalContent) != null) {
               		 if ((interactionObject.digitalContent) == (1)) {
               			 digitalContentPhaseOne += 1; }
               		 	else if ((interactionObject.digitalContent) == (2)) {
               		 		digitalContentPhaseTwo += 1; }
               		 	else if ((interactionObject.digitalContent) == (3)) {
               		 		digitalContentPhaseThree += 1; }
               		 	else digitalContentNE += 1;
               		 } else digitalContentNE += 1;

					if ((interactionObject.studentGroups) != null) {
               		 if ((interactionObject.studentGroups) == (1)) {
               			 studentGroupsContentPhaseOne += 1; }
               		 	else if ((interactionObject.studentGroups) == (2)) {
               		 		studentGroupsPhaseTwo += 1; }
               		 	else if ((interactionObject.studentGroups) == (3)) {
               		 		studentGroupsPhaseThree += 1; }
               		 	else studentGroupsNE += 1;
               		 } else studentGroupsNE += 1;

					if ((interactionObject.studentLearning) != null) {
               		 if ((interactionObject.studentLearning) == (1)) {
               			 studentLearningPhaseOne += 1; }
               		 	else if ((interactionObject.studentLearning) == (2)) {
               		 		studentLearningPhaseTwo += 1; }
               		 	else if ((interactionObject.studentLearning) == (3)) {
               		 		studentLearningPhaseThree += 1; }
               		 	else studentLearningNE += 1;
               		 } else studentLearningNE += 1;


				}) //end of 'each' loop
				
					$(".checklistsPhaseOne").html(checklistsPhaseOne);
            	 	$(".checklistsPhaseTwo").html(checklistsPhaseTwo);
            	 	$(".checklistsPhaseThree").html(checklistsPhaseThree);
            	 	$(".checklistsNE").html(checklistsNE);

					$(".seatingPhaseOne").html(seatingPhaseOne);
            	 	$(".seatingPhaseTwo").html(seatingPhaseTwo);
            	 	$(".seatingPhaseThree").html(seatingPhaseThree);
            	 	$(".seatingNE").html(seatingNE);

					$(".timingPhaseOne").html(timingPhaseOne);
            	 	$(".timingPhaseTwo").html(timingPhaseTwo);
            	 	$(".timingPhaseThree").html(timingPhaseThree);
            	 	$(".timingNE").html(timingNE);

					$(".differentiationPhaseOne").html(differentiationPhaseOne);
            	 	$(".differentiationPhaseTwo").html(differentiationPhaseTwo);
            	 	$(".differentiationPhaseThree").html(differentiationPhaseThree);
            	 	$(".differentiationNE").html(differentiationNE);

					$(".dataPhaseOne").html(dataPhaseOne);
            	 	$(".dataPhaseTwo").html(dataPhaseTwo);
            	 	$(".dataPhaseThree").html(dataPhaseThree);
            	 	$(".dataNE").html(dataNE);

					$(".reflectionPhaseOne").html(reflectionPhaseOne);
            	 	$(".reflectionPhaseTwo").html(reflectionPhaseTwo);
            	 	$(".reflectionPhaseThree").html(reflectionPhaseThree);
            	 	$(".reflectionNE").html(reflectionNE);

					$(".digitalContentPhaseOne").html(digitalContentPhaseOne);
            	 	$(".digitalContentPhaseTwo").html(digitalContentPhaseTwo);
            	 	$(".digitalContentPhaseThree").html(digitalContentPhaseThree);
            	 	$(".digitalContentNE").html(digitalContentNE);

					$(".studentGroupsPhaseOne").html(studentGroupsPhaseOne);
            	 	$(".studentGroupsPhaseTwo").html(studentGroupsPhaseTwo);
            	 	$(".studentGroupsPhaseThree").html(studentGroupsPhaseThree);
            	 	$(".studentGroupsNE").html(studentGroupsNE);

					$(".studentLearningPhaseOne").html(studentLearningPhaseOne);
            	 	$(".studentLearningPhaseTwo").html(studentLearningPhaseTwo);
            	 	$(".studentLearningPhaseThree").html(studentLearningPhaseThree);
            	 	$(".studentLearningNE").html(studentLearningNE);
			
		
		// start loading the 3d cylinder highchart
            	 Highcharts.chart('container', {
            		    chart: {
            		        type: 'cylinder',
            		        options3d: {
            		            enabled: true,
            		            alpha: 15,
            		            beta: 15,
            		            depth: 50,
            		            viewDistance: 25
            		        }
            		    },
                    colors: [
                        '#5DE3FA',
                        '#e57106',
                        '#778899'
                    ],
            		    title: {
            		        text: 'Rubric Values From ' + startDate + ' To ' + endDate
            		    },
            		    subtitle: {
            		        text: nbrOfRecords + ' RUBRIC(S) Recorded'
            		    },
            		    xAxis: {
            		        categories: [
            		            'Checklists','4Cs','Seating','Timing','Differ.','Groups','Data Asmnt.','Goals','Paths'
            		        ],
            		        crosshair: true
            		    },
            		    series: [{
            		    		name: 'Phase 1',
            		        data: [checklistsPhaseOne, digitalContentPhaseOne, seatingPhaseOne, timingPhaseOne, differentiationPhaseOne, studentGroupsPhaseOne, dataPhaseOne, reflectionPhaseOne, studentLearningPhaseOne],
            		    }, {
            		    		name: 'Phase 2',
            		        data: [checklistsPhaseTwo, digitalContentPhaseTwo, seatingPhaseTwo, timingPhaseTwo, differentiationPhaseTwo, studentGroupsPhaseTwo, dataPhaseTwo, reflectionPhaseTwo, studentLearningPhaseTwo],
            		    }, {
            		    		name: 'Phase 3',
            		        data: [checklistsPhaseThree, digitalContentPhaseThree, seatingPhaseThree, timingPhaseThree, differentiationPhaseThree, studentGroupsPhaseThree, dataPhaseThree, reflectionPhaseThree, studentLearningPhaseThree],
            		    }]
            		});
				}
		})
	
	};
	
	
	function clearRubricFields() {
		checklistsPhaseOne = 0;
		checklistsPhaseTwo = 0;
		checklistsPhaseThree = 0;
		checklistsNE = 0;
		digitalContentPhaseOne = 0;
		digitalContentPhaseTwo = 0;
		digitalContentPhaseThree = 0;
		digitalContentNE = 0;
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
		studentGroupsPhaseOne = 0;
		studentGroupsPhaseTwo = 0;
		studentGroupsPhaseThree = 0;
		studentGroupsNE = 0;
		dataPhaseOne = 0;
		dataPhaseTwo = 0;
		dataPhaseThree = 0;
		dataNE = 0;
		reflectionPhaseOne = 0;
		reflectionPhaseTwo = 0;
		reflectionPhaseThree = 0;
		reflectionNE = 0;
		studentLearningPhaseOne = 0;
		studentLearningPhaseTwo = 0;
		studentLearningPhaseThree = 0;
		studentLearningNE = 0;
	};

