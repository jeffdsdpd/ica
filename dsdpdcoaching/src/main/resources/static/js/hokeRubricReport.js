	$(document).ready(function() {
		
	 	$('#rubricnotes').addClass('input-disabled');
	 	$('#levelup').addClass('input-disabled');
		
		var selectedSchoolId = null;

		 $("button").click(function(e) {
			 e.preventDefault();
				var selectedSchoolId = $("#schoolId :selected").text();
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
				var checklists = $("#checklists").text();
				var digitalContent = $("#digitalContent").text();
				var seating = $("#seating").text();
				var timing = $("#timing").text();
				var differentiation = $("#differentiation").text();
				var studentGroups = $("#studentGroups").text();
				var data = $("#data").text();
				var reflection = $("#reflection").text();
				var studentLearning = $("#studentLearning").text();
				var rubricnotes = $("#rubricNotes").val();
				
				
				//var planningLevelData = $('#planningLevelUpData').attr("data-content");
				//var assessLevelData = $('#assessanddataLevelUpData').attr("data-content");
				//var pathLevelData = $('#pathLevelUpData').attr("data-content");
				//var placeLevelData = $('#placeLevelUpData').attr("data-content");
				//var paceLevelData = $('#paceLevelUpData').attr("data-content");
				//var classmgmtLevelData = $('#classroommgmtLevelUpData').attr("data-content");
				//var teachroleLevelData = $('#teacherroleLevelUpData').attr("data-content");
				//var stengageLevelData = $('#studentengagementLevelUpData').attr("data-content");
				//var stcollabLevelData = $('#studentcollabLevelUpData').attr("data-content");
				//var technologyLevelData = $('#technologyLevelUpData').attr("data-content");
			
		            $.ajax({
		                type: 'GET',
		                url: 'sendHokeRubricEmail',
		                data:{date:date, schoolId:selectedSchoolId, teacherId:selectedTeacherId, teacherEmail:teacherEmail,
		                	adminEmail:adminEmail, checklists:checklists, digitalContent:digitalContent, seating:seating, 
							timing:timing, differentiation:differentiation, studentGroups:studentGroups, data:data, reflection:reflection, 
							studentLearning:studentLearning, rubricnotes:rubricnotes, rubricTotal:rubricTotal
		             },
		             	async: false,
		                success: function(data) {
		                	alert("Email has been sent!");
		                }
		            });
			 });

		$('[data-toggle="popover"]').popover();
 
		$("#schoolId").change(function(){
				rubricTotal = 0;
				$("#levelupcheckboxes").html("");
				document.getElementById("emailreport").style.display = "none";
				document.getElementById("teachercheckbox").style.display = "none";
				document.getElementById("admincheckbox").style.display = "none";
				document.getElementById("teacherlabel").style.display = "none";
				document.getElementById("adminlabel").style.display = "none";
				document.getElementById("button").style.display = "none";
				document.getElementById("nodatatodisplay").style.display = "none";
				
				/*
				checklistLevel = 0;
				document.getElementById("checklistLevelUpData").style.visibility = "hidden";
						
				digitalContentLevel = 0;
				document.getElementById("digitalContentLevelUpData").style.visibility = "hidden";
				
				seatingLevel = 0;
				document.getElementById("seatingLevelUpData").style.visibility = "hidden";
				
				timingLevel = 0;
				document.getElementById("timingLevelUpData").style.visibility = "hidden";
				
				differentiationLevel = 0;
				document.getElementById("differentiationLevelUpData").style.visibility = "hidden";
				
				studentGroupsLevel = 0;
				document.getElementById("studentGroupsLevelUpData").style.visibility = "hidden";
				
				dataLevel = 0;
				document.getElementById("dataLevelUpData").style.visibility = "hidden";
				
				reflectionLevel = 0;
				document.getElementById("reflectionLevelUpData").style.visibility = "hidden";
				
				studentLearningLevel = 0;
				document.getElementById("studentLearningLevelUpData").style.visibility = "hidden";
				*/
				
				$(".levelupclass").fadeOut("slow");
				
				$("#teacherlabel").text("");
	        	$("#adminlabel").text("");
				$("#teacherName").empty();
				$("#date").empty();
				$("#phase").text("");
				$("#totalPoints").text("");
				$("#user").text("");
				$("#observed").text("");
				$(".timeTaken").html("");
				$("#rubricnotes").val("");
				$("#levelup").val("");
				$("#checklists").text("");
				$("#digitalContent").text("");
				$("#seating").text("");
				$("#timing").text("");
				$("#differentiation").text("");
				$("#studentGroups").text("");
				$("#data").text("");
				$("#reflection").text("");
				$("#studentLearning").text("");
				
				$(".container").fadeOut("slow");
				
			selectedSchoolId =  $("#schoolId :selected").val();
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
			$("#levelupcheckboxes").html("");
			document.getElementById("nodatatodisplay").style.display = "none";
			var selectedSchoolId = $("#schoolId :selected").val();
			var selectedTeacherId = $("#teacherName :selected").val();
			
			$("#levelupcheckboxes").html("");
				rubricTotal = 0;

				/*
				checklistLevel = 0;
				document.getElementById("checklistLevelUpData").style.visibility = "hidden";
						
				digitalContentLevel = 0;
				document.getElementById("digitalContentLevelUpData").style.visibility = "hidden";
				
				seatingLevel = 0;
				document.getElementById("seatingLevelUpData").style.visibility = "hidden";
				
				timingLevel = 0;
				document.getElementById("timingLevelUpData").style.visibility = "hidden";
				
				differentiationLevel = 0;
				document.getElementById("differentiationLevelUpData").style.visibility = "hidden";
				
				studentGroupsLevel = 0;
				document.getElementById("studentGroupsLevelUpData").style.visibility = "hidden";
				
				dataLevel = 0;
				document.getElementById("dataLevelUpData").style.visibility = "hidden";
				
				reflectionLevel = 0;
				document.getElementById("reflectionLevelUpData").style.visibility = "hidden";
				
				studentLearningLevel = 0;
				document.getElementById("studentLearningLevelUpData").style.visibility = "hidden";
				*/
				
				$(".levelupclass").fadeOut("slow");
				
				$("#date").empty();
				$("#phase").text("");
				$("#totalPoints").text("");
				$("#user").text("");
				$("#observed").text("");
				$(".timeTaken").html("");
				$("#rubricnotes").val("");
				$("#levelup").val("");
				$("#checklists").text("");
				$("#digitalContent").text("");
				$("#seating").text("");
				$("#timing").text("");
				$("#differentiation").text("");
				$("#studentGroups").text("");
				$("#data").text("");
				$("#reflection").text("");
				$("#studentLearning").text("");
				
	            $.ajax({
	                type: "GET",
	                url:"getHokeRubricDatesIDUserid",
	                data:{schoolId: selectedSchoolId, teacherId: selectedTeacherId},
	                dataType: "json",
	                success: function (response) {
	                	
	                	if(response.length==0){
	                		document.getElementById("nodatatodisplay").style.display = "inline";
	                	 }
	                
	                		 var $dropdownList = $("#date");
		                    	$dropdownList.empty();
		                    	$dropdownList.append($("<option></option>").attr("value", '').text('Please Select'));
		                    	$.each(response, function(value, key) {
		                             $dropdownList.append($("<option></option>").attr("value", key.id).text(key.date+" - "+key.userId));	                    
	                     });
	                    }
	                });

			var selectedTeacherId = $("#teacherName :selected").val();
			$("button").prop("disabled",false);
			$.ajax({
				type: "GET",
				url:"getEmailAddress",
				data:{teacherId: selectedTeacherId},
				dataType: "json",
				success: function (response) {
					    
	                $.each(response, function(key, value) {
	                		if (value[0] != null) {
	                			$("#teacherlabel").text(value[0]);
	                		} else {
	                			document.getElementById("teachercheckbox").style.display = "none";
	                		}
	                		
	                		if (value[1] != null) {
	                			$("#adminlabel").text(value[1]);
	                			
	                		} else {
	                			document.getElementById("admincheckbox").style.display = "none";
	                		}
	                		
	                })
	            }
	        });
		});
		
		
		
		$("#date").change(function() {
			$("#levelupcheckboxes").html("");
			
			if ( $("#teacherlabel").text() != "" ) {
    				document.getElementById("teacherlabel").style.display = "inline";
    				document.getElementById("button").style.display = "inline";
    				document.getElementById("emailreport").style.display = "inline";
    				document.getElementById("teachercheckbox").style.display = "inline";
			}
			
			if ( $("#adminlabel").text() != "" ) {
				document.getElementById("adminlabel").style.display = "inline";
    				document.getElementById("button").style.display = "inline";
    				document.getElementById("emailreport").style.display = "inline";
    				document.getElementById("admincheckbox").style.display = "inline";
			}
			
			rubricTotal = 0;
			
			/*
				checklistLevel = 0;
				document.getElementById("checklistLevelUpData").style.visibility = "hidden";
						
				digitalContentLevel = 0;
				document.getElementById("digitalContentLevelUpData").style.visibility = "hidden";
				
				seatingLevel = 0;
				document.getElementById("seatingLevelUpData").style.visibility = "hidden";
				
				timingLevel = 0;
				document.getElementById("timingLevelUpData").style.visibility = "hidden";
				
				differentiationLevel = 0;
				document.getElementById("differentiationLevelUpData").style.visibility = "hidden";
				
				studentGroupsLevel = 0;
				document.getElementById("studentGroupsLevelUpData").style.visibility = "hidden";
				
				dataLevel = 0;
				document.getElementById("dataLevelUpData").style.visibility = "hidden";
				
				reflectionLevel = 0;
				document.getElementById("reflectionLevelUpData").style.visibility = "hidden";
				
				studentLearningLevel = 0;
				document.getElementById("studentLearningLevelUpData").style.visibility = "hidden";
				*/
			
			var selectedId = $("#date :selected").val();

			var low = '#FF9900';
			var med = '#6300A5';
			var high = '#0FAD00';
			
			$(".timeTaken").html("");
			$("#phase").text("");
			$("#totalPoints").text("");
			$("#user").text("");
			$("#observed").text("");
			$(".timeTaken").html("");
			$("#rubricnotes").val("");
			$("#levelup").val("");
			$("#checklists").text("");
			$("#digitalContent").text("");
			$("#seating").text("");
			$("#timing").text("");
			$("#differentiation").text("");
			$("#studentGroups").text("");
			$("#data").text("");
			$("#reflection").text("");
			$("#studentLearning").text("");
			
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
	                url:"getHokeRubricById",
	                data:{recordId: selectedId},
	                dataType: "json",
	                success: function (response) {
	                		 
	                		 $("#user").html(response.userId);
	                		 $("#observed").html(response.observed);
	                		 
	                		 if (!$.trim(response.timeObserved)) {
	                			 $(".timeTaken").html("Not Recorded");
	                		 } else {
	                			 $(".timeTaken").html(format12Hour(response.timeObserved));
	                			 }
							
							//Checklist
	                		 if ((response.checklists) == (1)) {
	                			 	rubricTotal += 1;
	                			 	checklistLevel = 1;
	                			 	$("#checklists").css("color",low);
									$("#checklists").text("Defined activities/products and progression"); }
	                		 	else if ((response.checklists) == (2)) {
	                		 		rubricTotal += 2;
	                		 		checklistLevel = 2;
	                		 		$("#checklists").css("color",med); 
									$("#checklists").text("Student choice in activities/products OR progression"); }
	                		 	else if ((response.checklists) == (3)) {
	                		 		rubricTotal += 3;
	                		 		checklistLevel = 3;
	                		 		$("#checklists").css("color",high); 
									$("#checklists").text("Student choice in activities/products AND progression"); }
	                		 	else {
	                		 		checklistLevel= 0;
	                		 		$("#checklists").removeAttr('style');
	                		 	}

							//digitalContent
	                		 if ((response.digitalContent) == (1)) {
	                			 	rubricTotal += 1;
	                			 	digitalContentLevel = 1;
	                			 	$("#digitalContent").css("color",low);
									$("#digitalContent").text("Station Rotation"); }
	                		 	else if ((response.digitalContent) == (2)) {
	                		 		rubricTotal += 2;
	                		 		digitalContentLevel = 2;
	                		 		$("#digitalContent").css("color",med); 
									$("#digitalContent").text("Individual Rotation (more teacher driven)"); }
	                		 	else if ((response.digitalContent) == (3)) {
	                		 		rubricTotal += 3;
	                		 		digitalContentLevel = 3;
	                		 		$("#digitalContent").css("color",high); 
									$("#digitalContent").text("Individual Rotation (student driven progression)"); }
	                		 	else {
	                		 		digitalContentLevel= 0;
	                		 		$("#digitalContent").removeAttr('style');
	                		 	}

							//seating
	                		 if ((response.seating) == (1)) {
	                			 	rubricTotal += 1;
	                			 	seatingLevel = 1;
	                			 	$("#seating").css("color",low);
									$("#seating").text("Fixed Seating: prescribed by the teacher"); }
	                		 	else if ((response.seating) == (2)) {
	                		 		rubricTotal += 2;
	                		 		seatingLevel = 2;
	                		 		$("#seating").css("color",med); 
									$("#seating").text("Flexible Seating Periods"); }
	                		 	else if ((response.seating) == (3)) {
	                		 		rubricTotal += 3;
	                		 		seatingLevel = 3;
	                		 		$("#seating").css("color",high); 
									$("#seating").text("Flexible Seating"); }
	                		 	else {
	                		 		seatingLevel= 0;
	                		 		$("#seating").removeAttr('style');
	                		 	}

							//timing
	                		 if ((response.timing) == (1)) {
	                			 	rubricTotal += 1;
	                			 	timingLevel = 1;
	                			 	$("#timing").css("color",low);
									$("#timing").text("Whole Group Timer"); }
	                		 	else if ((response.timing) == (2)) {
	                		 		rubricTotal += 2;
	                		 		timingLevel = 2;
	                		 		$("#timing").css("color",med); 
									$("#timing").text("Fluid Timing Periods"); }
	                		 	else if ((response.timing) == (3)) {
	                		 		rubricTotal += 3;
	                		 		timingLevel = 3;
	                		 		$("#timing").css("color",high); 
									$("#timing").text("Fluid Timing"); }
	                		 	else {
	                		 		timingLevel= 0;
	                		 		$("#timing").removeAttr('style');
	                		 	}

							//differentiation
	                		 if ((response.differentiation) == (1)) {
	                			 	rubricTotal += 1;
	                			 	differentiationLevel = 1;
	                			 	$("#differentiation").css("color",low);
									$("#differentiation").text("Occurs at the teacher-led station/small group, at a minimum"); }
	                		 	else if ((response.differentiation) == (2)) {
	                		 		rubricTotal += 2;
	                		 		differentiationLevel = 2;
	                		 		$("#differentiation").css("color",med); 
									$("#differentiation").text("Occurs at the teacher-led station/small group time, and at least one other"); }
	                		 	else if ((response.differentiation) == (3)) {
	                		 		rubricTotal += 3;
	                		 		differentiationLevel = 3;
	                		 		$("#differentiation").css("color",high); 
									$("#differentiation").text("Occurs at the teacher-led station/small group time, and at least one other"); }
	                		 	else {
	                		 		differentiationLevel= 0;
	                		 		$("#differentiation").removeAttr('style');
	                		 	}

							//studentGroups
	                		 if ((response.studentGroups) == (1)) {
	                			 	rubricTotal += 1;
	                			 	studentGroupsLevel = 1;
	                			 	$("#studentGroups").css("color",low);
									$("#studentGroups").text("Fixed Student Groups; determined by the teacher"); }
	                		 	else if ((response.studentGroups) == (2)) {
	                		 		rubricTotal += 2;
	                		 		studentGroupsLevel = 2;
	                		 		$("#studentGroups").css("color",med); 
									$("#studentGroups").text("Fluid Student Groups"); }
	                		 	else if ((response.studentGroups) == (3)) {
	                		 		rubricTotal += 3;
	                		 		studentGroupsLevel = 3;
	                		 		$("#studentGroups").css("color",high); 
									$("#studentGroups").text("Fluid Student Groups: changing with often relevant learning target data (not BM)"); }
	                		 	else {
	                		 		studentGroupsLevel= 0;
	                		 		$("#studentGroups").removeAttr('style');
	                		 	}

							//data
	                		 if ((response.data) == (1)) {
	                			 	rubricTotal += 1;
	                			 	dataLevel = 1;
	                			 	$("#data").css("color",low);
									$("#data").text("Collected from Benchmarks"); }
	                		 	else if ((response.data) == (2)) {
	                		 		rubricTotal += 2;
	                		 		dataLevel = 2;
	                		 		$("#data").css("color",med); 
									$("#data").text("Collected from Multiple Sources"); }
	                		 	else if ((response.data) == (3)) {
	                		 		rubricTotal += 3;
	                		 		dataLevel = 3;
	                		 		$("#data").css("color",high); 
									$("#data").text("Collected from Multiple Sources, including student profile data"); }
	                		 	else {
	                		 		dataLevel= 0;
	                		 		$("#data").removeAttr('style');
	                		 	}

							//reflection
	                		 if ((response.reflection) == (1)) {
	                			 	rubricTotal += 1;
	                			 	reflectionLevel = 1;
	                			 	$("#reflection").css("color",low);
									$("#reflection").text("Collected from Benchmarks"); }
	                		 	else if ((response.reflection) == (2)) {
	                		 		rubricTotal += 2;
	                		 		reflectionLevel = 2;
	                		 		$("#reflection").css("color",med); 
									$("#reflection").text("Collected from Multiple Sources"); }
	                		 	else if ((response.reflection) == (3)) {
	                		 		rubricTotal += 3;
	                		 		reflectionLevel = 3;
	                		 		$("#reflection").css("color",high); 
									$("#reflection").text("Collected from Multiple Sources, including student profile data"); }
	                		 	else {
	                		 		reflectionLevel= 0;
	                		 		$("#reflection").removeAttr('style');
	                		 	}

							//studentLearning
	                		 if ((response.studentLearning) == (1)) {
	                			 	rubricTotal += 1;
	                			 	studentLearningLevel = 1;
	                			 	$("#studentLearning").css("color",low);
									$("#studentLearning").text("Collected from Benchmarks"); }
	                		 	else if ((response.studentLearning) == (2)) {
	                		 		rubricTotal += 2;
	                		 		studentLearningLevel = 2;
	                		 		$("#studentLearning").css("color",med); 
									$("#studentLearning").text("Collected from Multiple Sources"); }
	                		 	else if ((response.studentLearning) == (3)) {
	                		 		rubricTotal += 3;
	                		 		studentLearningLevel = 3;
	                		 		$("#studentLearning").css("color",high); 
									$("#studentLearning").text("Collected from Multiple Sources, including student profile data"); }
	                		 	else {
	                		 		studentLearningLevel= 0;
	                		 		$("#data").removeAttr('style');
	                		 	}
							
								$("#phase").text(response.phase);
								
								$("#totalpoints").text(rubricTotal);
							
							
							//rubricNotes
							document.getElementById("rubricNotes").value = response.rubricNotes;
	                	           		 
	                		 
	                		 /*
	                		 $("#levelupcheckboxes").append( $("<label>").attr('id', 'levelupheader').text("Next Steps"));
	                		 $("#levelupcheckboxes").append( $("<br />"));
	                		 $("#levelupcheckboxes").append( $("<br />"));
	                				 
	                		 //loop through the levelup list and build the html
	                		 for (i = 0; i < response.levelupList.length; i++) {
	                		 		if (response.levelupList[i].completed == 'true') {
	                		 			$("#levelupcheckboxes").append( $("<input>")
	                   	   						.attr('type', 'checkbox')
	                   	   						.attr('id', 'checkbox')
	                   	   						.attr('name','checkbox')
	                   	   						.attr('checked','checked')
	                   	   						.val(response.id + ' ' + response.levelupList[i].levelupid));
	                		 	} else {
	                		 		$("#levelupcheckboxes").append( $("<input>")
	               	   						.attr('type', 'checkbox')
	               	   						.attr('id', 'checkbox')
	               	   						.attr('name','checkbox')
	               	   						.val(response.id + ' ' + response.levelupList[i].levelupid) );
	                		 		}
	                		 		$("#levelupcheckboxes").append( $("<label>").text(response.levelupList[i].levelup));
	        	        	   			$("#levelupcheckboxes").append("<br/>");
	                		 	};
	                			 

	                		 
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
	   	         	                url:"getLevelUpData",
	   	         	                data:{
	   	         	                	rubricItemName1:rubricValuesArray[0].name, rubricItemValue1:rubricValuesArray[0].value,
	   	         	                	rubricItemName2:rubricValuesArray[1].name, rubricItemValue2:rubricValuesArray[1].value,
	   	         	                	rubricItemName3:rubricValuesArray[2].name, rubricItemValue3:rubricValuesArray[2].value
	   	         	                },
	   	         	                dataType: "json",
	   	         	                success: function (response) {
	   	         	                	
	   	         	                	//<!-- result = result[randomNumber] ;  -->
	   	         	                	
	   	         	                $.each(response, function(key, value) {
	   	         	                	var result= (value[1]).split(/\n/g);
	   	         	                	var randomNumber = Math.floor(Math.random()*result.length);
	   	         	                	
	   	         	                	document.getElementById(value[0]+'LevelUpData').style.visibility = "visible";
	   	         	                
	   	         	                	$('#'+value[0]+'LevelUpData').attr("data-content", result[randomNumber] );
	   	         	                });
	   	         	                }
	   	                		 });

	                		 
	                		 //document.getElementById("levelup").value = response.levelUp;
	                		 document.getElementById("questions").value = response.questions;
	                		 
	                
							*/
	               
	                }
                });
			}
		});
		
		function format12Hour(timeString) {
			 var date = new Date(timeString);
			 var hh = date.getHours();
			 var mm = date.getMinutes();
			 hh = hh < 10 ? '0'+hh : hh; 
			 mm = mm < 10 ? '0'+mm : mm;
			 var curr_time = hh+':'+mm;
			 return curr_time;
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
	
	});// end of document ready function

	function loopForm(form) {
	    var checkedArray = new Array();
	    var uncheckedArray = new Array();
	    
	    for (var i = 0; i < form.elements.length; i++ ) {
	        if (form.elements[i].type == 'checkbox') {
	        		if (form.elements[i].name != 'teachercheckbox' && form.elements[i].name != 'admincheckbox' ) {
		            if (form.elements[i].checked == true) {
		                checkedArray.push(form.elements[i].value);
		           
		            } else {
		            		uncheckedArray.push(form.elements[i].value);
		            		
		            }
	        		}
	        }
	    }
	    document.getElementById("checkedValues").value=checkedArray;
	    document.getElementById("unCheckedValues").value=uncheckedArray;
	};
