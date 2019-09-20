$(document).ready(function() {
	var selectedSchoolId = null;
	var selectedDate = null;
	var selectedDataEntered = null;

	//SCHOOL field has changed
	$("#schoolName").change(function() {
		clearRubricFields();
		$(".container").fadeOut("slow");
		$("#date").empty();
		$("#dataentered").empty();
		$("#dataentered").append($("<option></option>").attr("value", '').text('Please Select'));
		
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
		$(".container").fadeOut("slow");
		selectedSchoolId =  $("#schoolName :selected").val();
		selectedDate =   $("#date :selected").val();
				
        $.ajax({
            type: "GET",
            url:"getRubricObservedValuesBySchoolAndDate",
            data:{schoolId: selectedSchoolId, date: selectedDate},
            dataType: "json",
            success: function (response) {
            	var $dropdownList = $("#dataentered");
            	$dropdownList.empty();
            	$dropdownList.append($("<option></option>").attr("value", '').text('Please Select'));
            	 $.each(response, function(value, key) {
                     $dropdownList.append($("<option></option>").attr("value", key).text((key)));
                 });			
                } //end of the 'success' function
            }); //end of the ajax function
        }); //end of the 'date' change function
	
	//DATEENTERED field has changed
	$("#dataentered").change(function(){
		clearRubricFields();
		$(".container").fadeOut("slow");
		selectedSchoolId =  $("#schoolName :selected").val();
		selectedDate =   $("#date :selected").val();
		selectedDataEntered = $("#dataentered :selected").text();
		
		$(".container").fadeIn("slow");
				
		$.ajax({
            type: "GET",
            url:"getRubricValuesBySchoolDateObserved",
            data:{schoolId:selectedSchoolId, date:selectedDate, observed:selectedDataEntered},
            dataType: "json",
            success: function (response) {	               
            	 $.each(response, function(i, interactionObject) {

            		 if ((interactionObject.planning) != null) {
            		 if ((interactionObject.planning) == ("Whole group timer")) {
            			 planningPhaseOne += 1; }
            		 	else if ((interactionObject.planning).includes("implements checklist")) {
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
            		 if ((interactionObject.pace).includes("timer")) {
            			 pacePhaseOne += 1; }
            		 	else if ((interactionObject.pace).includes("move")) {
            		 		pacePhaseTwo += 1; }
            		 	else if ((interactionObject.pace).includes("mastery")) {
            		 		pacePhaseThree += 1; }
            		 	else paceNE += 1;
            		 } else paceNE += 1;
            		 
            		 if ((interactionObject.classroomManagement) != null) {
            		 if ((interactionObject.classroomManagement).includes("Restating")) {
            			 classmgmtPhaseOne += 1; }
            		 	else if ((interactionObject.classroomManagement).includes("Self")) {
            		 		classmgmtPhaseTwo += 1; }
            		 	else if ((interactionObject.classroomManagement).includes("Automatic")) {
            		 		classmgmtPhaseThree += 1; }
            		 	else classmgmtNE += 1;
            		 } else classmgmtNE += 1;
            		 
            		 if ((interactionObject.teacherRole) != null) {
            		 if ((interactionObject.teacherRole).includes("facilitator")) {
            			 teacherrolePhaseOne += 1; }
            		 	else if ((interactionObject.teacherRole).includes("distractions")) {
            		 		teacherrolePhaseTwo += 1; }
            		 	else if ((interactionObject.teacherRole).includes("99%")) {
            		 		teacherrolePhaseThree += 1; }
            		 	else teacherroleNE += 1;
            		 } else teacherroleNE += 1;
            		 
            		 if ((interactionObject.studentEngagement) != null) {
            		 if ((interactionObject.studentEngagement).includes("Following")) {
            			 studentengagePhaseOne += 1; }
            		 	else if ((interactionObject.studentEngagement).includes("Engaged")) {
            		 		studentengagePhaseTwo += 1; }
            		 	else if ((interactionObject.studentEngagement).includes("Deeply")) {
            		 		studentengagePhaseThree += 1; }
            		 	else studentengageNE += 1;
            		 } else studentengageNE += 1;
            		 
            		 if ((interactionObject.studentCollaboration) != null) {
            		 if ((interactionObject.studentCollaboration).includes("Teacher")) {
            			 studentcollabPhaseOne += 1; }
            		 	else if ((interactionObject.studentCollaboration).includes("Choice")) {
            		 		studentcollabPhaseTwo += 1; }
            		 	else if ((interactionObject.studentCollaboration).includes("PBL")) {
            		 		studentcollabPhaseThree += 1; }
            		 	else studentcollabNE += 1;
            		 } else studentcollabNE += 1;

            		if ((interactionObject.technology) != null) {
            		 if ((interactionObject.technology) != null && (interactionObject.technology).includes("Technology")) {
            			 technologyPhaseOne += 1; }
            		 	else if ((interactionObject.technology).includes("Using")) {
            		 		technologyPhaseTwo += 1; }
            		 	else if ((interactionObject.technology).includes("Students")) {
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
            	 
            	 

         		//load the Google Visualization API and the chart
         	    google.charts.load('current', {packages: ['corechart', 'bar']});
         		google.charts.setOnLoadCallback(createChart);

         	    //callback function
         	    function createChart() {

         	        //create data table object
         	        var dataTable = new google.visualization.DataTable();

         	        //define columns
         	        dataTable.addColumn('string','Phases');
         			dataTable.addColumn('number', 'Phase1');
         			dataTable.addColumn('number', 'Phase2');
         			dataTable.addColumn('number', 'Phase3');
         			dataTable.addColumn('number', 'Not Observed');

         	        //define rows of data
         	        dataTable.addRows([
         	                           ['Planning', planningPhaseOne,planningPhaseTwo,planningPhaseThree,planningNE],
         	                           ['A&Data', assessanddataPhaseOne,assessanddataPhaseTwo,assessanddataPhaseThree,assessanddataNE],  
         	                           ['Path', pathPhaseOne,pathPhaseTwo,pathPhaseThree,pathNE], 
         	                           ['Place', placePhaseOne,placePhaseTwo,placePhaseThree,placeNE], 
         	                           ['Pace', pacePhaseOne,pacePhaseTwo,pacePhaseThree,paceNE],
         	                           ['Class Mgmt.', classmgmtPhaseOne,classmgmtPhaseTwo,classmgmtPhaseThree,classmgmtNE], 
         	                           ['T.Role', teacherrolePhaseOne,teacherrolePhaseTwo,teacherrolePhaseThree,teacherroleNE],  
         	                           ['St. Engmt.', studentengagePhaseOne,studentengagePhaseTwo,studentengagePhaseThree,studentengageNE], 
         	                           ['St. Collab.', studentcollabPhaseOne,studentcollabPhaseTwo,studentcollabPhaseThree,studentcollabNE], 
         	                           ['Technology', technologyPhaseOne,technologyPhaseTwo,technologyPhaseThree,technologyNE]
         	                           

         	        ]);
         	        
         	        //define options for visualization
         	        var options = {
         	        		legend: { position: 'right' },
         	                width: 850, height: 350,
         	                colors: ['#FF9900', '#6300A5', '#0FAD00', "black"],
         	                chartArea:{left:35,top:10}
         	            };

         	        //instantiate our chart object and draw
         	        var chart = new google.visualization.ColumnChart (document.getElementById('chart'));
         	        chart.draw(dataTable, options);
         	    }
            	 
            	 ------------------------------------------------------------------------------------------------------------
SHOULD NOT NEED BELOW THIS LINE
            		//load the Google Visualization API and the chart
            	    google.charts.load('current', {packages: ['corechart', 'bar']});
            		google.charts.setOnLoadCallback(createChart);

            	    //callback function
            	    function createChart() {

            	        //create data table object
            	        var dataTable = new google.visualization.DataTable();

            	        //define columns
            	        dataTable.addColumn('string','Phases');
            			dataTable.addColumn('number', 'Phase1');
            			dataTable.addColumn('number', 'Phase2');
            			dataTable.addColumn('number', 'Phase3');
            			dataTable.addColumn('number', 'Not Observed');

            	        //define rows of data
            	        dataTable.addRows([
            	                           ['Planning', planningPhaseOne,planningPhaseTwo,planningPhaseThree,planningNE],
            	                           ['A&Data', assessanddataPhaseOne,assessanddataPhaseTwo,assessanddataPhaseThree,assessanddataNE],  
            	                           ['Path', pathPhaseOne,pathPhaseTwo,pathPhaseThree,pathNE], 
            	                           ['Place', placePhaseOne,placePhaseTwo,placePhaseThree,placeNE], 
            	                           ['Pace', pacePhaseOne,pacePhaseTwo,pacePhaseThree,paceNE],
            	                           ['Class Mgmt.', classmgmtPhaseOne,classmgmtPhaseTwo,classmgmtPhaseThree,classmgmtNE], 
            	                           ['T.Role', teacherrolePhaseOne,teacherrolePhaseTwo,teacherrolePhaseThree,teacherroleNE],  
            	                           ['St. Engmt.', studentengagePhaseOne,studentengagePhaseTwo,studentengagePhaseThree,studentengageNE], 
            	                           ['St. Collab.', studentcollabPhaseOne,studentcollabPhaseTwo,studentcollabPhaseThree,studentcollabNE], 
            	                           ['Technology', technologyPhaseOne,technologyPhaseTwo,technologyPhaseThree,technologyNE]
            	                           

            	        ]);
            	        
            	        //define options for visualization
            	        var options = {
            	        		legend: { position: 'right' },
            	                width: 850, height: 350,
            	                colors: ['#FF9900', '#6300A5', '#0FAD00', "black"],
            	                chartArea:{left:35,top:10}
            	            };

            	        //instantiate our chart object and draw
            	        var chart = new google.visualization.ColumnChart (document.getElementById('chart'));
            	        chart.draw(dataTable, options);
            	    }
            	    
            	    -------------------------------------------------------------------------------------
             
            } //end of success for 'dataentered' field changed ajax function
        }); //end of the ajax function
	}); //end of the 'dataentered' change function
	
	
	
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