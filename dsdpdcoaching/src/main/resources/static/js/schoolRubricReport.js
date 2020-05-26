$(document).ready(function() {
	var selectedSchoolId = null;
	var selectedDate = null;

	//SCHOOL field has changed
	$("#schoolName").change(function() {
		clearRubricFields();
		$("#container").fadeOut("slow");
		$("#date").empty();
		
		selectedSchoolId =  $("#schoolName :selected").val();
		$.ajax({
            type: "GET",
            url:"getRubricDatesBySchool",
            data:{schoolId: selectedSchoolId},
            dataType: "json",
            success: function (response) {
            	var $dateDropdownList = $("#date");
            	$dateDropdownList.empty();
            	
            	$dateDropdownList.append($("<option></option>").attr("value", '').text('Please Select'));
            	 $.each(response, function(value, key) {
                     $dateDropdownList.append($("<option></option>").attr("value", key).text((key)));
                 });		
                } //end of the 'success' function
            }); //end of the ajax function
	}); //end of the 'schoolName' change function
	
	//DATE field has changed
	$("#date").change(function(){
		clearRubricFields();
		$("#container").fadeOut("slow");
		selectedSchoolId =  $("#schoolName :selected").val();
		selectedDate =   $("#date :selected").val();	
		$("#container").fadeIn("slow");
				
		$.ajax({
            type: "GET",
            url:"getRubricValuesBySchoolDateObserved",
            data:{schoolId:selectedSchoolId, date:selectedDate},
            dataType: "json",
            success: function (response) {
            	var nbrOfRecords = 0;
            	
            	$.each(response, function(value, interactionObject) {
            		nbrOfRecords += 1 ;

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
            		        text: 'Rubric Values For ' + $("#date :selected").val()
            		    },
            		    subtitle: {
            		        text: nbrOfRecords + ' RUBRIC(S) entered on ' + $("#date :selected").val()
            		    },
            		    xAxis: {
            		        categories: [
            		            'Planning','A&Data','Path','Place','Pace','Class Mgmt.','T.Role','S.Engmt.','S.Collab','Tech'
            		        ],
            		        crosshair: true
            		    },
            		    series: [{
            		    		name: 'Phase 1',
            		        data: [planningPhaseOne, assessanddataPhaseOne, pathPhaseOne, placePhaseOne, pacePhaseOne, classmgmtPhaseOne, teacherrolePhaseOne, studentengagePhaseOne, studentcollabPhaseOne, technologyPhaseOne],
            		    }, {
            		    		name: 'Phase 2',
            		        data: [planningPhaseTwo, assessanddataPhaseTwo, pathPhaseTwo, placePhaseTwo, pacePhaseTwo, classmgmtPhaseTwo, teacherrolePhaseTwo, studentengagePhaseTwo, studentcollabPhaseTwo, technologyPhaseTwo],
            		    }, {
            		    		name: 'Phase 3',
            		        data: [planningPhaseThree, assessanddataPhaseThree, pathPhaseThree, placePhaseThree, pacePhaseThree, classmgmtPhaseThree, teacherrolePhaseThree, studentengagePhaseThree, studentcollabPhaseThree, technologyPhaseThree],
            		    }]
            		});
            } //end of success for 'dataentered' field changed ajax function
        }); //end of the ajax function
	}); //end of the 'date change' change function
	
}); //end of the 'document' ready function
		
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