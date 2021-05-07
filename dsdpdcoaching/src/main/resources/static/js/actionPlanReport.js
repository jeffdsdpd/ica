$(document).ready(function(){
	$("#schoolId").change(function(){
		$("#checkboxes").html("");
		document.getElementById("nodatatodisplay").style.display = "none";
		$("#grade").prop('selectedIndex',0);
		$("#subject").prop('selectedIndex',0);
		$("#gradeheading h2").html("");
        $("#gradeheading h3").html("");
	});
	
	
	$("#grade").change(function(){
		$("#subject").prop('selectedIndex',0);
		$("#gradeheading h2").html("");
        $("#gradeheading h3").html("");
		$("#checkboxes").html("");
		document.getElementById("nodatatodisplay").style.display = "none";
	});
	
	
	$("#subject").change(function(){
		$("#checkboxes").html("");
		document.getElementById("nodatatodisplay").style.display = "none";
		$("#gradeheading h2").html("");
        $("#gradeheading h3").html("");
		var selectedSchoolId =  $("#schoolId :selected").val();
		var selectedGrade =  $("#grade :selected").val();
		var selectedSubject =  $("#subject :selected").val();
		$.ajax({
            type: "GET",
            url:"getActionPlanBySchoolGradeSubject",
            data:{schoolId:selectedSchoolId, grade:selectedGrade, subject:selectedSubject},
            dataType: "json",
            success: function (response) {
            	
            	if(response.length==0){
            		document.getElementById("nodatatodisplay").style.display = "inline";
            	 }
            	
            	   var actionid = 0;
	          
	           response.forEach(e => {
	        	   
       	   		if (actionid == e.id) {  //check if ids match then we have to list out the multiple tasks under one heading
       	   			if (e.taskList[0].completed == 'true') {   //check if the task has completed=true and check the check box
       	   				
       	   				$("#checkboxes").append( $("<input>")
       	   						.attr('type', 'checkbox')
       	   						.attr('id', 'checkbox')
       	   						.attr('name','checkbox')
       	   						.attr('checked','checked')
       	   						.val(e.id + ' ' + e.taskList[0].taskid) );
       	   				
       	   			} else {   //task is not completed but the ids do match
       	   				
       	   				$("#checkboxes").append( $("<input>")
       	   						.attr('type', 'checkbox')
       	   						.attr('id', 'checkbox')
       	   						.attr('name','checkbox')
       	   						.val(e.id + ' ' + e.taskList[0].taskid) );
       	   			}
	        	   		$("#checkboxes").append( $("<label>").text(e.taskList[0].task));
	        	   		$("#checkboxes").append("<br/>");
	        	   		
       	   		}else{   //Here is a new record so we have to create a new line, div, and heading
       	   			
       	   			actionid = e.id;
       	   			$("#checkboxes").append("<br/>");
       	   			$("#checkboxes").append( $("<div id="+actionid+">"));
       	   			$("#checkboxes").append( $("<div id="+"actionplanheader"+">").text('Recorded '+e.entrydate+' for '+e.grade+' by '+e.userName+' for '+e.subject+' assigned to '+e.owner));
       	   			if (e.taskList[0].completed == 'true') {   //check if the task has completed=true and check the check box
       	   				
       	   				$("#checkboxes").append( $("<input>")
       	   						.attr('type', 'checkbox')
       	   						.attr('id', 'checkbox')
       	   						.attr('checked','checked')
       	   						.attr('name','checkbox')
       	   						.val(e.id + ' ' + e.taskList[0].taskid) );
       	   				
       	   			} else {   //task is not completed so do not check the check box
       	   				
       	   				$("#checkboxes").append( $("<input>")
       	   						.attr('type', 'checkbox')
       	   						.attr('id', 'checkbox')
       	   						.attr('name','checkbox')
       	   						.val(e.id + ' ' + e.taskList[0].taskid) );
       	   			}
	        	   		$("#checkboxes").append( $("<label>").text(e.taskList[0].task));
	        	   		$("#checkboxes").append( $("</div>"));
	        	   		$("#checkboxes").append("<br/>");
       	   		}
          });
       },
            	error: function(e){
            		document.getElementById("nodatatodisplay").style.display = "inline";
	         }//end of the 'error' function
		});
	})
 	
});// end of document ready function

function loopForm(form) {
    var checkedArray = new Array();
    var uncheckedArray = new Array();
    
    for (var i = 0; i < form.elements.length; i++ ) {
        if (form.elements[i].type == 'checkbox') {
            if (form.elements[i].checked == true) {
                checkedArray.push(form.elements[i].value);
           
            } else {
            		uncheckedArray.push(form.elements[i].value);
            		
            }
        }
    }
    document.getElementById("checkedValues").value=checkedArray;
    document.getElementById("unCheckedValues").value=uncheckedArray;
};