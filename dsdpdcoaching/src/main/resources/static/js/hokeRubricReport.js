	$(document).ready(function() {
		
		var coll = document.getElementsByClassName("hokeexpandable");
		var i;

		for (i = 0; i < coll.length; i++) {
		  coll[i].addEventListener("click", function() {
		    this.classList.toggle("hokeactive");
		    var content = this.nextElementSibling;
		    if (content.style.display === "block") {
		      content.style.display = "none";
		    } else {
		      content.style.display = "block";
		    }
		  });
		}
		
		//document.getElementById("classPhoto").src = "";
	 	$('#rubricnotes').addClass('input-disabled');
	 	$('#levelup').addClass('input-disabled');
	 	$('#questions').addClass('input-disabled');
		
		var selectedSchoolId = null;

		 $("emailbutton").click(function() {
				var selectedSchoolId = $("#schoolName :selected").text();
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
				var planning = $("#planning").text();
				var assessanddata = $("#assessanddata").text();
				var path = $("#path").text();
				var place = $("#place").text();
				var pace = $("#pace").text();
				var classmgmt = $("#classmgmt").text();
				var teacherrole = $("#teacherrole").text();
				var studentengage = $("#studentengage").text();
				var studentcollab = $("#studentcollab").text();
				var technology = $("#technology").text();
				var rubricnotes = document.getElementById("rubricnotes").innerText;
				var levelup = document.getElementById("levelupcheckboxes").innerText;
				var questions = document.getElementById("questions").value;
				
				var planningLevelData = $('#planningLevelUpData').attr("data-content");
				var assessLevelData = $('#assessanddataLevelUpData').attr("data-content");
				var pathLevelData = $('#pathLevelUpData').attr("data-content");
				var placeLevelData = $('#placeLevelUpData').attr("data-content");
				var paceLevelData = $('#paceLevelUpData').attr("data-content");
				var classmgmtLevelData = $('#classroommgmtLevelUpData').attr("data-content");
				var teachroleLevelData = $('#teacherroleLevelUpData').attr("data-content");
				var stengageLevelData = $('#studentengagementLevelUpData').attr("data-content");
				var stcollabLevelData = $('#studentcollabLevelUpData').attr("data-content");
				var technologyLevelData = $('#technologyLevelUpData').attr("data-content");
			
		            $.ajax({
		                type: 'GET',
		                url: 'sendRubricEmail',
		                data:{date:date, schoolId:selectedSchoolId, teacherId:selectedTeacherId, teacherEmail:teacherEmail,
		                	adminEmail:adminEmail, planning:planning, assessanddata:assessanddata, path:path, place:place, pace:pace, classmgmt:classmgmt, 
		                	teacherrole:teacherrole, studentengage:studentengage, studentcollab:studentcollab, technology:technology, rubricnotes:rubricnotes,levelup:levelup, questions:questions,
		                	planningLevelData:planningLevelData, assessLevelData:assessLevelData, pathLevelData:pathLevelData, placeLevelData:placeLevelData,
		                	paceLevelData:paceLevelData, classmgmtLevelData:classmgmtLevelData, teachroleLevelData:teachroleLevelData, stengageLevelData:stengageLevelData,
		                	stcollabLevelData:stcollabLevelData, technologyLevelData:technologyLevelData
		             },
		             	async: false,
		                success: function(data) {
		                	alert("Email has been sent!");
		                }
		            });
			 });

		$('[data-toggle="popover"]').popover();
 
		$("#schoolName").change(function(){
				$("#levelupcheckboxes").html("");
				document.getElementById("emailreport").style.display = "none";
				document.getElementById("teachercheckbox").style.display = "none";
				document.getElementById("admincheckbox").style.display = "none";
				document.getElementById("teacherlabel").style.display = "none";
				document.getElementById("adminlabel").style.display = "none";
				document.getElementById("button").style.display = "none";
				document.getElementById("nodatatodisplay").style.display = "none";
				
				planningLevel = 0;
				document.getElementById("planningLevelUpData").style.visibility = "hidden";
						
				assessanddataLevel = 0;
				document.getElementById("assessanddataLevelUpData").style.visibility = "hidden";
				
				pathLevel = 0;
				document.getElementById("pathLevelUpData").style.visibility = "hidden";
				
				placeLevel = 0;
				document.getElementById("placeLevelUpData").style.visibility = "hidden";
				
				paceLevel = 0;
				document.getElementById("paceLevelUpData").style.visibility = "hidden";
				
				classmgmtLevel = 0;
				document.getElementById("classroommgmtLevelUpData").style.visibility = "hidden";
				
				teacherroleLevel = 0;
				document.getElementById("teacherroleLevelUpData").style.visibility = "hidden";
				
				studentengageLevel = 0;
				document.getElementById("studentengagementLevelUpData").style.visibility = "hidden";
				
				studentcollabLevel = 0;
				document.getElementById("studentcollabLevelUpData").style.visibility = "hidden";
				
				technologyLevel = 0;
				document.getElementById("technologyLevelUpData").style.visibility = "hidden";
				
				$(".levelupclass").fadeOut("slow");
				
				$("#teacherlabel").text("");
	        		$("#adminlabel").text("");
				$("#teacherName").empty();
				$("#date").empty();
				$(".user").html("");
				$(".observed").html("");
				$(".timeTaken").html("");
				$("#rubricnotes").val("");
				$("#levelup").val("");
				$("#questions").val("");
				$(".planning").html("");
				$(".assessanddata").html("");
				$(".path").html("");
				$(".place").html("");
				$(".pace").html("");
				$(".classmgmt").html("");
				$(".teacherrole").html("");
				$(".studentengage").html("");
				$(".studentcollab").html("");
				$(".technology").html("");
				
				$(".container").fadeOut("slow");
				
			selectedSchoolId =  $("#schoolName :selected").val();
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
			var selectedSchoolId = $("#schoolName :selected").val();
			var selectedTeacherId = $("#teacherName :selected").val();
			
			$("#levelupcheckboxes").html("");

				planningLevel = 0;
				document.getElementById("planningLevelUpData").style.visibility = "hidden";
						
				assessanddataLevel = 0;
				document.getElementById("assessanddataLevelUpData").style.visibility = "hidden";
				
				pathLevel = 0;
				document.getElementById("pathLevelUpData").style.visibility = "hidden";
				
				placeLevel = 0;
				document.getElementById("placeLevelUpData").style.visibility = "hidden";
				
				paceLevel = 0;
				document.getElementById("paceLevelUpData").style.visibility = "hidden";
				
				classmgmtLevel = 0;
				document.getElementById("classroommgmtLevelUpData").style.visibility = "hidden";
				
				teacherroleLevel = 0;
				document.getElementById("teacherroleLevelUpData").style.visibility = "hidden";
				
				studentengageLevel = 0;
				document.getElementById("studentengagementLevelUpData").style.visibility = "hidden";
				
				studentcollabLevel = 0;
				document.getElementById("studentcollabLevelUpData").style.visibility = "hidden";
				
				technologyLevel = 0;
				document.getElementById("technologyLevelUpData").style.visibility = "hidden";
				
				$(".levelupclass").fadeOut("slow");
				
				$("#date").empty();
				$(".user").html("");
				$(".observed").html("");
				$(".timeTaken").html("");
				$("#rubricnotes").val("");
				$("#levelup").val("");
				$("#questions").val("");
				$(".planning").html("");
				$(".assessanddata").html("");
				$(".path").html("");
				$(".place").html("");
				$(".pace").html("");
				$(".classmgmt").html("");
				$(".teacherrole").html("");
				$(".studentengage").html("");
				$(".studentcollab").html("");
				$(".technology").html("");
				
	            $.ajax({
	                type: "GET",
	                url:"getRubricDatesAndId",
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
		                             $dropdownList.append($("<option></option>").attr("value", key.id).text((key.date)));	                    
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
			
			planningLevel = 0;
			document.getElementById("planningLevelUpData").style.visibility = "hidden";
					
			assessanddataLevel = 0;
			document.getElementById("assessanddataLevelUpData").style.visibility = "hidden";
			
			pathLevel = 0;
			document.getElementById("pathLevelUpData").style.visibility = "hidden";
			
			placeLevel = 0;
			document.getElementById("placeLevelUpData").style.visibility = "hidden";
			
			paceLevel = 0;
			document.getElementById("paceLevelUpData").style.visibility = "hidden";
			
			classmgmtLevel = 0;
			document.getElementById("classroommgmtLevelUpData").style.visibility = "hidden";
			
			teacherroleLevel = 0;
			document.getElementById("teacherroleLevelUpData").style.visibility = "hidden";
			
			studentengageLevel = 0;
			document.getElementById("studentengagementLevelUpData").style.visibility = "hidden";
			
			studentcollabLevel = 0;
			document.getElementById("studentcollabLevelUpData").style.visibility = "hidden";
			
			technologyLevel = 0;
			document.getElementById("technologyLevelUpData").style.visibility = "hidden";
			
			var selectedId = $("#date :selected").val();

			var low = '#FF9900';
			var med = '#6300A5';
			var high = '#0FAD00';
			
			$(".timeTaken").html("");
			$(".user").html("");
			$(".observed").html("");
			$(".timeTaken").html("");
			$("#rubricnotes").val("");
			$("#levelup").val("");
			$("#questions").val("");
			$(".planning").html("");
			$(".assessanddata").html("");
			$(".path").html("");
			$(".place").html("");
			$(".pace").html("");
			$(".classmgmt").html("");
			$(".teacherrole").html("");
			$(".studentengage").html("");
			$(".studentcollab").html("");
			$(".technology").html("");
			
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
	                url:"getRubricById",
	                data:{recordId: selectedId},
	                dataType: "json",
	                success: function (response) {
	                		 
	                		 $(".user").html(response.userId);
	                		 $(".observed").html(response.observed);
	                		 
	                		 if (!$.trim(response.timeObserved)) {
	                			 $(".timeTaken").html("Not Recorded");
	                		 } else {
	                			 $(".timeTaken").html(format12Hour(response.timeObserved));
	                			 }
	                		 
	                		
	                		 
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
	   	         	                	
	   	         	                	<!-- result = result[randomNumber] ;  -->
	   	         	                	
	   	         	                $.each(response, function(key, value) {
	   	         	                	var result= (value[1]).split(/\n/g);
	   	         	                	var randomNumber = Math.floor(Math.random()*result.length);
	   	         	                	
	   	         	                	document.getElementById(value[0]+'LevelUpData').style.visibility = "visible";
	   	         	                
	   	         	                	$('#'+value[0]+'LevelUpData').attr("data-content", result[randomNumber] );
	   	         	                });
	   	         	                }
	   	                		 });

	                		 document.getElementById("rubricnotes").value = response.rubricNotes;
	                		 //document.getElementById("levelup").value = response.levelUp;
	                		 document.getElementById("questions").value = response.questions;
	                		 
	           
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
