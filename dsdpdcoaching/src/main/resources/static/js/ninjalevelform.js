$(document).ready(
		function() {
			$("#schoolId").change(
					function() {
						var str = $("#schoolId :selected").val();
						$("#myPopup").html("");
						$("#myPopup").hide(100);
						
						$.ajax({
							type : "GET",
							url : "getTeachersBySchool",
							data : {
								schoolId : str
							},
							dataType : "json",
							success : function(response) {
								var $dropdownList = $("#teacherId");
								$dropdownList.empty();
								$dropdownList.append($("<option></option>").text(("Please Select")));
								$.each(response, function(value, key) {
									$dropdownList.append($("<option></option>").attr("value", key.id).text((key.name)));
								});
							}
						});
					});
			
			$("#teacherId").change(function() {
						teacherId = $("#teacherId :selected").val();
						$("#myPopup").html("");
						$("#myPopup").hide(100);
						var selectedTeacherId = $("#teacherId :selected").val();
						
						/*
						$.ajax({
							type: "GET",
							url:"getEmailAddress",
							data:{teacherId: selectedTeacherId},
							dataType: "json",
							success: function (response) {
								    
				                $.each(response, function(key, value) {
				                		if (value[0] != null) {
				                			$("#teacherlabel").text(value[0]);
				                			document.getElementById("teachercheckbox").value=value[0];
				                		}
				                })
				            }
				        });
						*/
					});
			
			
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
			
			//Start checking if the radio buttons are clicked for the belt levels
			//SMALL GROUP STUDIO
			$('input[type=radio]').change(function() {
				if($('#smallgroupwhiteyes').is(':checked')) {
					$('#smallgroupyellowrow').fadeIn(1000);
					}
				if($('#smallgroupwhiteno').is(':checked')) {
					$("input[type=radio][name=smallgroupyellow]").prop('checked', false);
					$('#smallgroupyellowrow').fadeOut(1000);
					$("input[type=radio][name=smallgrouporange]").prop('checked', false);
					$('#smallgrouporangerow').fadeOut(1000);
					$("input[type=radio][name=smallgroupgreen]").prop('checked', false);
					$('#smallgroupgreenrow').fadeOut(1000);
					$("input[type=radio][name=smallgroupblue]").prop('checked', false);
					$('#smallgroupbluerow').fadeOut(1000);
					$("input[type=radio][name=smallgrouppurple]").prop('checked', false);
					$('#smallgrouppurplerow').fadeOut(1000);
					}
				if($('#smallgroupyellowyes').is(':checked')) {
					$('#smallgrouporangerow').fadeIn(1000);
					}
				if($('#smallgroupyellowno').is(':checked')) {
					$("input[type=radio][name=smallgrouporange]").prop('checked', false);
					$('#smallgrouporangerow').fadeOut(1000);
					$("input[type=radio][name=smallgroupgreen]").prop('checked', false);
					$('#smallgroupgreenrow').fadeOut(1000);
					$("input[type=radio][name=smallgroupblue]").prop('checked', false);
					$('#smallgroupbluerow').fadeOut(1000);
					$("input[type=radio][name=smallgrouppurple]").prop('checked', false);
					$('#smallgrouppurplerow').fadeOut(1000);
					}
				if($('#smallgrouporangeyes').is(':checked')) {
					$('#smallgroupgreenrow').fadeIn(1000);
					}
				if($('#smallgrouporangeno').is(':checked')) {
					$("input[type=radio][name=smallgroupgreen]").prop('checked', false);
					$('#smallgroupgreenrow').fadeOut(1000);
					$("input[type=radio][name=smallgroupblue]").prop('checked', false);
					$('#smallgroupbluerow').fadeOut(1000);
					$("input[type=radio][name=smallgrouppurple]").prop('checked', false);
					$('#smallgrouppurplerow').fadeOut(1000);
					}
				if($('#smallgroupgreenyes').is(':checked')) {
					$('#smallgroupbluerow').fadeIn(1000);
					}
				if($('#smallgroupgreenno').is(':checked')) {
					$("input[type=radio][name=smallgroupblue]").prop('checked', false);
					$('#smallgroupbluerow').fadeOut(1000);
					$("input[type=radio][name=smallgrouppurple]").prop('checked', false);
					$('#smallgrouppurplerow').fadeOut(1000);
					}
				if($('#smallgroupblueyes').is(':checked')) {
					$('#smallgrouppurplerow').fadeIn(1000);
					}
				if($('#smallgroupblueno').is(':checked')) {
					$("input[type=radio][name=smallgrouppurple]").prop('checked', false);
					$('#smallgrouppurplerow').fadeOut(1000);
					}
					 
				
				//INDEPENDENT STUDIO
				if($('#independentstudiowhiteyes').is(':checked')) {
					$('#independentstudioyellowrow').fadeIn(1000);
					}
				if($('#independentstudiowhiteno').is(':checked')) {
					$("input[type=radio][name=independentstudioyellow]").prop('checked', false);
					$('#independentstudioyellowrow').fadeOut(1000);
					$("input[type=radio][name=independentstudioorange]").prop('checked', false);
					$('#independentstudioorangerow').fadeOut(1000);
					$("input[type=radio][name=independentstudiogreen]").prop('checked', false);
					$('#independentstudiogreenrow').fadeOut(1000);
					$("input[type=radio][name=independentstudioblue]").prop('checked', false);
					$('#independentstudiobluerow').fadeOut(1000);
					$("input[type=radio][name=independentstudiopurple]").prop('checked', false);
					$('#independentstudiopurplerow').fadeOut(1000);
					}
				if($('#independentstudioyellowyes').is(':checked')) {
					$('#independentstudioorangerow').fadeIn(1000);
					}
				if($('#independentstudioyellowno').is(':checked')) {
					$("input[type=radio][name=independentstudioorange]").prop('checked', false);
					$('#independentstudioorangerow').fadeOut(1000);
					$("input[type=radio][name=independentstudiogreen]").prop('checked', false);
					$('#independentstudiogreenrow').fadeOut(1000);
					$("input[type=radio][name=independentstudioblue]").prop('checked', false);
					$('#independentstudiobluerow').fadeOut(1000);
					$("input[type=radio][name=independentstudiopurple]").prop('checked', false);
					$('#independentstudiopurplerow').fadeOut(1000);
					}
				if($('#independentstudioorangeyes').is(':checked')) {
					$('#independentstudiogreenrow').fadeIn(1000);
					}
				if($('#independentstudioorangeno').is(':checked')) {
					$("input[type=radio][name=independentstudiogreen]").prop('checked', false);
					$('#independentstudiogreenrow').fadeOut(1000);
					$("input[type=radio][name=independentstudioblue]").prop('checked', false);
					$('#independentstudiobluerow').fadeOut(1000);
					$("input[type=radio][name=independentstudiopurple]").prop('checked', false);
					$('#independentstudiopurplerow').fadeOut(1000);
					}
				if($('#independentstudiogreenyes').is(':checked')) {
					$('#independentstudiobluerow').fadeIn(1000);
					}
				if($('#independentstudiogreenno').is(':checked')) {
					$("input[type=radio][name=independentstudioblue]").prop('checked', false);
					$('#independentstudiobluerow').fadeOut(1000);
					$("input[type=radio][name=independentstudiopurple]").prop('checked', false);
					$('#independentstudiopurplerow').fadeOut(1000);
					}
				if($('#independentstudioblueyes').is(':checked')) {
					$('#independentstudiopurplerow').fadeIn(1000);
					}
				if($('#independentstudioblueno').is(':checked')) {
					$("input[type=radio][name=independentstudiopurple]").prop('checked', false);
					$('#independentstudiopurplerow').fadeOut(1000);
					}
					
					
				//DIGITAL CONTENT
				if($('#digitalcontentwhiteyes').is(':checked')) {
					$('#digitalcontentyellowrow').fadeIn(1000);
					}
				if($('#digitalcontentwhiteno').is(':checked')) {
					$("input[type=radio][name=digitalcontentyellow]").prop('checked', false);
					$('#digitalcontentyellowrow').fadeOut(1000);
					$("input[type=radio][name=digitalcontentorange]").prop('checked', false);
					$('#digitalcontentorangerow').fadeOut(1000);
					$("input[type=radio][name=digitalcontentgreen]").prop('checked', false);
					$('#digitalcontentgreenrow').fadeOut(1000);
					$("input[type=radio][name=digitalcontentblue]").prop('checked', false);
					$('#digitalcontentbluerow').fadeOut(1000);
					$("input[type=radio][name=digitalcontentpurple]").prop('checked', false);
					$('#digitalcontentpurplerow').fadeOut(1000);
					}
				if($('#digitalcontentyellowyes').is(':checked')) {
					$('#digitalcontentorangerow').fadeIn(1000);
					}
				if($('#digitalcontentyellowno').is(':checked')) {
					$("input[type=radio][name=digitalcontentorange]").prop('checked', false);
					$('#digitalcontentorangerow').fadeOut(1000);
					$("input[type=radio][name=digitalcontentgreen]").prop('checked', false);
					$('#digitalcontentgreenrow').fadeOut(1000);
					$("input[type=radio][name=digitalcontentblue]").prop('checked', false);
					$('#digitalcontentbluerow').fadeOut(1000);
					$("input[type=radio][name=digitalcontentpurple]").prop('checked', false);
					$('#digitalcontentpurplerow').fadeOut(1000);
					}
				if($('#digitalcontentorangeyes').is(':checked')) {
					$('#digitalcontentgreenrow').fadeIn(1000);
					}
				if($('#digitalcontentorangeno').is(':checked')) {
					$("input[type=radio][name=digitalcontentgreen]").prop('checked', false);
					$('#digitalcontentgreenrow').fadeOut(1000);
					$("input[type=radio][name=digitalcontentblue]").prop('checked', false);
					$('#digitalcontentbluerow').fadeOut(1000);
					$("input[type=radio][name=digitalcontentpurple]").prop('checked', false);
					$('#digitalcontentpurplerow').fadeOut(1000);
					}
				if($('#digitalcontentgreenyes').is(':checked')) {
					$('#digitalcontentbluerow').fadeIn(1000);
					}
				if($('#digitalcontentgreenno').is(':checked')) {
					$("input[type=radio][name=digitalcontentblue]").prop('checked', false);
					$('#digitalcontentbluerow').fadeOut(1000);
					$("input[type=radio][name=digitalcontentpurple]").prop('checked', false);
					$('#digitalcontentpurplerow').fadeOut(1000);
					}
				if($('#digitalcontentblueyes').is(':checked')) {
					$('#digitalcontentpurplerow').fadeIn(1000);
					}
				if($('#digitalcontentblueno').is(':checked')) {
					$("input[type=radio][name=digitalcontentpurple]").prop('checked', false);
					$('#digitalcontentpurplerow').fadeOut(1000);
					}
					
					
				//FUTURE READY
				if($('#futurereadywhiteyes').is(':checked')) {
					$('#futurereadyyellowrow').fadeIn(1000);
					}
				if($('#futurereadywhiteno').is(':checked')) {
					$("input[type=radio][name=futurereadyyellow]").prop('checked', false);
					$('#futurereadyyellowrow').fadeOut(1000);
					$("input[type=radio][name=futurereadyorange]").prop('checked', false);
					$('#futurereadyorangerow').fadeOut(1000);
					$("input[type=radio][name=futurereadygreen]").prop('checked', false);
					$('#futurereadygreenrow').fadeOut(1000);
					$("input[type=radio][name=futurereadyblue]").prop('checked', false);
					$('#futurereadybluerow').fadeOut(1000);
					$("input[type=radio][name=futurereadypurple]").prop('checked', false);
					$('#futurereadypurplerow').fadeOut(1000);
					}
				if($('#futurereadyyellowyes').is(':checked')) {
					$('#futurereadyorangerow').fadeIn(1000);
					}
				if($('#futurereadyyellowno').is(':checked')) {
					$("input[type=radio][name=futurereadyorange]").prop('checked', false);
					$('#futurereadyorangerow').fadeOut(1000);
					$("input[type=radio][name=futurereadygreen]").prop('checked', false);
					$('#futurereadygreenrow').fadeOut(1000);
					$("input[type=radio][name=futurereadyblue]").prop('checked', false);
					$('#futurereadybluerow').fadeOut(1000);
					$("input[type=radio][name=futurereadypurple]").prop('checked', false);
					$('#futurereadypurplerow').fadeOut(1000);
					}
				if($('#futurereadyorangeyes').is(':checked')) {
					$('#futurereadygreenrow').fadeIn(1000);
					}
				if($('#futurereadyorangeno').is(':checked')) {
					$("input[type=radio][name=futurereadygreen]").prop('checked', false);
					$('#futurereadygreenrow').fadeOut(1000);
					$("input[type=radio][name=futurereadyblue]").prop('checked', false);
					$('#futurereadybluerow').fadeOut(1000);
					$("input[type=radio][name=futurereadypurple]").prop('checked', false);
					$('#futurereadypurplerow').fadeOut(1000);
					}
				if($('#futurereadygreenyes').is(':checked')) {
					$('#futurereadybluerow').fadeIn(1000);
					}
				if($('#futurereadygreenno').is(':checked')) {
					$("input[type=radio][name=futurereadyblue]").prop('checked', false);
					$('#futurereadybluerow').fadeOut(1000);
					$("input[type=radio][name=futurereadypurple]").prop('checked', false);
					$('#futurereadypurplerow').fadeOut(1000);
					}
				if($('#futurereadyblueyes').is(':checked')) {
					$('#futurereadypurplerow').fadeIn(1000);
					}
				if($('#futurereadyblueno').is(':checked')) {
					$("input[type=radio][name=futurereadypurple]").prop('checked', false);
					$('#futurereadypurplerow').fadeOut(1000);
					}
					
				//PLACE
				if($('#placewhiteyes').is(':checked')) {
					$('#placeyellowrow').fadeIn(1000);
					}
				if($('#placewhiteno').is(':checked')) {
					$("input[type=radio][name=placeyellow]").prop('checked', false);
					$('#placeyellowrow').fadeOut(1000);
					$("input[type=radio][name=placeorange]").prop('checked', false);
					$('#placeorangerow').fadeOut(1000);
					$("input[type=radio][name=placegreen]").prop('checked', false);
					$('#placegreenrow').fadeOut(1000);
					$("input[type=radio][name=placeblue]").prop('checked', false);
					$('#placebluerow').fadeOut(1000);
					$("input[type=radio][name=placepurple]").prop('checked', false);
					$('#placepurplerow').fadeOut(1000);
					}
				if($('#placeyellowyes').is(':checked')) {
					$('#placeorangerow').fadeIn(1000);
					}
				if($('#placeyellowno').is(':checked')) {
					$("input[type=radio][name=placeorange]").prop('checked', false);
					$('#placeorangerow').fadeOut(1000);
					$("input[type=radio][name=placegreen]").prop('checked', false);
					$('#placegreenrow').fadeOut(1000);
					$("input[type=radio][name=placeblue]").prop('checked', false);
					$('#placebluerow').fadeOut(1000);
					$("input[type=radio][name=placepurple]").prop('checked', false);
					$('#placepurplerow').fadeOut(1000);
					}
				if($('#placeorangeyes').is(':checked')) {
					$('#placegreenrow').fadeIn(1000);
					}
				if($('#placeorangeno').is(':checked')) {
					$("input[type=radio][name=placegreen]").prop('checked', false);
					$('#placegreenrow').fadeOut(1000);
					$("input[type=radio][name=placeblue]").prop('checked', false);
					$('#placebluerow').fadeOut(1000);
					$("input[type=radio][name=placepurple]").prop('checked', false);
					$('#placepurplerow').fadeOut(1000);
					}
				if($('#placegreenyes').is(':checked')) {
					$('#placebluerow').fadeIn(1000);
					}
				if($('#placegreenno').is(':checked')) {
					$("input[type=radio][name=placeblue]").prop('checked', false);
					$('#placebluerow').fadeOut(1000);
					$("input[type=radio][name=placepurple]").prop('checked', false);
					$('#placepurplerow').fadeOut(1000);
					}
				if($('#placeblueyes').is(':checked')) {
					$('#placepurplerow').fadeIn(1000);
					}
				if($('#placeblueno').is(':checked')) {
					$("input[type=radio][name=placepurple]").prop('checked', false);
					$('#placepurplerow').fadeOut(1000);
					}
					
				//PATH
				if($('#pathwhiteyes').is(':checked')) {
					$('#pathyellowrow').fadeIn(1000);
					}
				if($('#pathwhiteno').is(':checked')) {
					$("input[type=radio][name=pathyellow]").prop('checked', false);
					$('#pathyellowrow').fadeOut(1000);
					$("input[type=radio][name=pathorange]").prop('checked', false);
					$('#pathorangerow').fadeOut(1000);
					$("input[type=radio][name=pathgreen]").prop('checked', false);
					$('#pathgreenrow').fadeOut(1000);
					$("input[type=radio][name=pathblue]").prop('checked', false);
					$('#pathbluerow').fadeOut(1000);
					$("input[type=radio][name=pathpurple]").prop('checked', false);
					$('#pathpurplerow').fadeOut(1000);
					}
				if($('#pathyellowyes').is(':checked')) {
					$('#pathorangerow').fadeIn(1000);
					}
				if($('#pathyellowno').is(':checked')) {
					$("input[type=radio][name=pathorange]").prop('checked', false);
					$('#pathorangerow').fadeOut(1000);
					$("input[type=radio][name=pathgreen]").prop('checked', false);
					$('#pathgreenrow').fadeOut(1000);
					$("input[type=radio][name=pathblue]").prop('checked', false);
					$('#pathbluerow').fadeOut(1000);
					$("input[type=radio][name=pathpurple]").prop('checked', false);
					$('#pathpurplerow').fadeOut(1000);
					}
				if($('#pathorangeyes').is(':checked')) {
					$('#pathgreenrow').fadeIn(1000);
					}
				if($('#pathorangeno').is(':checked')) {
					$("input[type=radio][name=pathgreen]").prop('checked', false);
					$('#pathgreenrow').fadeOut(1000);
					$("input[type=radio][name=pathblue]").prop('checked', false);
					$('#pathbluerow').fadeOut(1000);
					$("input[type=radio][name=pathpurple]").prop('checked', false);
					$('#pathpurplerow').fadeOut(1000);
					}
				if($('#pathgreenyes').is(':checked')) {
					$('#pathbluerow').fadeIn(1000);
					}
				if($('#pathgreenno').is(':checked')) {
					$("input[type=radio][name=pathblue]").prop('checked', false);
					$('#pathbluerow').fadeOut(1000);
					$("input[type=radio][name=pathpurple]").prop('checked', false);
					$('#pathpurplerow').fadeOut(1000);
					}
				if($('#pathblueyes').is(':checked')) {
					$('#pathpurplerow').fadeIn(1000);
					}
				if($('#pathblueno').is(':checked')) {
					$("input[type=radio][name=pathpurple]").prop('checked', false);
					$('#pathpurplerow').fadeOut(1000);
					}
					
				//PACE
				if($('#pacewhiteyes').is(':checked')) {
					$('#paceyellowrow').fadeIn(1000);
					}
				if($('#pacewhiteno').is(':checked')) {
					$("input[type=radio][name=paceyellow]").prop('checked', false);
					$('#paceyellowrow').fadeOut(1000);
					$("input[type=radio][name=paceorange]").prop('checked', false);
					$('#paceorangerow').fadeOut(1000);
					$("input[type=radio][name=pacegreen]").prop('checked', false);
					$('#pacegreenrow').fadeOut(1000);
					$("input[type=radio][name=paceblue]").prop('checked', false);
					$('#pacebluerow').fadeOut(1000);
					$("input[type=radio][name=pacepurple]").prop('checked', false);
					$('#pacepurplerow').fadeOut(1000);
					}
				if($('#paceyellowyes').is(':checked')) {
					$('#paceorangerow').fadeIn(1000);
					}
				if($('#paceyellowno').is(':checked')) {
					$('#paceyellowrow').fadeOut(1000);
					$("input[type=radio][name=paceorange]").prop('checked', false);
					$('#paceorangerow').fadeOut(1000);
					$("input[type=radio][name=pacegreen]").prop('checked', false);
					$('#pacegreenrow').fadeOut(1000);
					$("input[type=radio][name=paceblue]").prop('checked', false);
					$('#pacebluerow').fadeOut(1000);
					$("input[type=radio][name=pacepurple]").prop('checked', false);
					$('#pacepurplerow').fadeOut(1000);
					}
				if($('#paceorangeyes').is(':checked')) {
					$('#pacegreenrow').fadeIn(1000);
					}
				if($('#paceorangeno').is(':checked')) {
					$("input[type=radio][name=pacegreen]").prop('checked', false);
					$('#pacegreenrow').fadeOut(1000);
					$("input[type=radio][name=paceblue]").prop('checked', false);
					$('#pacebluerow').fadeOut(1000);
					$("input[type=radio][name=pacepurple]").prop('checked', false);
					$('#pacepurplerow').fadeOut(1000);
					}
				if($('#pacegreenyes').is(':checked')) {
					$('#pacebluerow').fadeIn(1000);
					}
				if($('#pacegreenno').is(':checked')) {
					$("input[type=radio][name=paceblue]").prop('checked', false);
					$('#pacebluerow').fadeOut(1000);
					$("input[type=radio][name=pacepurple]").prop('checked', false);
					$('#pacepurplerow').fadeOut(1000);
					}
				if($('#paceblueyes').is(':checked')) {
					$('#pacepurplerow').fadeIn(1000);
					}
				if($('#paceblueno').is(':checked')) {
					$("input[type=radio][name=pacepurple]").prop('checked', false);
					$('#pacepurplerow').fadeOut(1000);
					}
					
				//DATA
				if($('#datawhiteyes').is(':checked')) {
					$('#datayellowrow').fadeIn(1000);
					}
				if($('#datawhiteno').is(':checked')) {
					$("input[type=radio][name=datayellow]").prop('checked', false);
					$('#datayellowrow').fadeOut(1000);
					$("input[type=radio][name=dataorange]").prop('checked', false);
					$('#dataorangerow').fadeOut(1000);
					$("input[type=radio][name=datagreen]").prop('checked', false);
					$('#datagreenrow').fadeOut(1000);
					$("input[type=radio][name=datablue]").prop('checked', false);
					$('#databluerow').fadeOut(1000);
					$("input[type=radio][name=datapurple]").prop('checked', false);
					$('#datapurplerow').fadeOut(1000);
					}
				if($('#datayellowyes').is(':checked')) {
					$('#dataorangerow').fadeIn(1000);
					}
				if($('#datayellowno').is(':checked')) {
					$('#datayellowrow').fadeOut(1000);
					$("input[type=radio][name=dataorange]").prop('checked', false);
					$('#dataorangerow').fadeOut(1000);
					$("input[type=radio][name=datagreen]").prop('checked', false);
					$('#datagreenrow').fadeOut(1000);
					$("input[type=radio][name=datablue]").prop('checked', false);
					$('#databluerow').fadeOut(1000);
					$("input[type=radio][name=datapurple]").prop('checked', false);
					$('#datapurplerow').fadeOut(1000);
					}
				if($('#dataorangeyes').is(':checked')) {
					$('#datagreenrow').fadeIn(1000);
					}
				if($('#dataorangeno').is(':checked')) {
					$("input[type=radio][name=datagreen]").prop('checked', false);
					$('#datagreenrow').fadeOut(1000);
					$("input[type=radio][name=datablue]").prop('checked', false);
					$('#databluerow').fadeOut(1000);
					$("input[type=radio][name=datapurple]").prop('checked', false);
					$('#datapurplerow').fadeOut(1000);
					}
				if($('#datagreenyes').is(':checked')) {
					$('#databluerow').fadeIn(1000);
					}
				if($('#datagreenno').is(':checked')) {
					$("input[type=radio][name=datablue]").prop('checked', false);
					$('#databluerow').fadeOut(1000);
					$("input[type=radio][name=datapurple]").prop('checked', false);
					$('#datapurplerow').fadeOut(1000);
					}
				if($('#datablueyes').is(':checked')) {
					$('#datapurplerow').fadeIn(1000);
					}
				if($('#datablueno').is(':checked')) {
					$("input[type=radio][name=datapurple]").prop('checked', false);
					$('#datapurplerow').fadeOut(1000);
					}
					
				//DIRECTIONS
				if($('#directionswhiteyes').is(':checked')) {
					$('#directionsyellowrow').fadeIn(1000);
					}
				if($('#directionswhiteno').is(':checked')) {
					$("input[type=radio][name=directionsyellow]").prop('checked', false);
					$('#directionsyellowrow').fadeOut(1000);
					$("input[type=radio][name=directionsorange]").prop('checked', false);
					$('#directionsorangerow').fadeOut(1000);
					$("input[type=radio][name=directionsgreen]").prop('checked', false);
					$('#directionsgreenrow').fadeOut(1000);
					$("input[type=radio][name=directionsblue]").prop('checked', false);
					$('#directionsbluerow').fadeOut(1000);
					$("input[type=radio][name=directionspurple]").prop('checked', false);
					$('#directionspurplerow').fadeOut(1000);
					$("input[type=radio][name=directionsbrown]").prop('checked', false);
					$('#directionsbrownrow').fadeOut(1000);
					$("input[type=radio][name=directionsred]").prop('checked', false);
					$('#directionsredrow').fadeOut(1000);
					}
				if($('#directionsyellowyes').is(':checked')) {
					$('#directionsorangerow').fadeIn(1000);
					}
				if($('#directionsyellowno').is(':checked')) {
					$('#directionsyellowrow').fadeOut(1000);
					$("input[type=radio][name=directionsorange]").prop('checked', false);
					$('#directionsorangerow').fadeOut(1000);
					$("input[type=radio][name=directionsgreen]").prop('checked', false);
					$('#directionsgreenrow').fadeOut(1000);
					$("input[type=radio][name=directionsblue]").prop('checked', false);
					$('#directionsbluerow').fadeOut(1000);
					$("input[type=radio][name=directionspurple]").prop('checked', false);
					$('#directionspurplerow').fadeOut(1000);
					$("input[type=radio][name=directionsbrown]").prop('checked', false);
					$('#directionsbrownrow').fadeOut(1000);
					$("input[type=radio][name=directionsred]").prop('checked', false);
					$('#directionsredrow').fadeOut(1000);
					}
				if($('#directionsorangeyes').is(':checked')) {
					$('#directionsgreenrow').fadeIn(1000);
					}
				if($('#directionsorangeno').is(':checked')) {
					$("input[type=radio][name=directionsgreen]").prop('checked', false);
					$('#directionsgreenrow').fadeOut(1000);
					$("input[type=radio][name=directionsblue]").prop('checked', false);
					$('#directionsbluerow').fadeOut(1000);
					$("input[type=radio][name=directionspurple]").prop('checked', false);
					$('#directionspurplerow').fadeOut(1000);
					$("input[type=radio][name=directionsbrown]").prop('checked', false);
					$('#directionsbrownrow').fadeOut(1000);
					$("input[type=radio][name=directionsred]").prop('checked', false);
					$('#directionsredrow').fadeOut(1000);
					}
				if($('#directionsegreenyes').is(':checked')) {
					$('#directionsbluerow').fadeIn(1000);
					}
				if($('#directionsgreenno').is(':checked')) {
					$("input[type=radio][name=directionsblue]").prop('checked', false);
					$('#directionsbluerow').fadeOut(1000);
					$("input[type=radio][name=directionspurple]").prop('checked', false);
					$('#directionspurplerow').fadeOut(1000);
					$("input[type=radio][name=directionsbrown]").prop('checked', false);
					$('#directionsbrownrow').fadeOut(1000);
					$("input[type=radio][name=directionsred]").prop('checked', false);
					$('#directionsredrow').fadeOut(1000);
					}
				if($('#directionsblueyes').is(':checked')) {
					$('#directionspurplerow').fadeIn(1000);
					}
				if($('#directionsblueno').is(':checked')) {
					$("input[type=radio][name=directionspurple]").prop('checked', false);
					$('#directionspurplerow').fadeOut(1000);
					$("input[type=radio][name=directionsbrown]").prop('checked', false);
					$('#directionsbrownrow').fadeOut(1000);
					$("input[type=radio][name=directionsred]").prop('checked', false);
					$('#directionsredrow').fadeOut(1000);
					}
				if($('#directionspurpleyes').is(':checked')) {
					$('#directionsbrownrow').fadeIn(1000);
					}
				if($('#directionspurpleno').is(':checked')) {
					$("input[type=radio][name=directionsbrown]").prop('checked', false);
					$('#directionsbrownrow').fadeOut(1000);
					$("input[type=radio][name=directionsred]").prop('checked', false);
					$('#directionsredrow').fadeOut(1000);
					}
				if($('#directionsbrownyes').is(':checked')) {
					$('#directionsredrow').fadeIn(1000);
					}
				if($('#directionsbrownno').is(':checked')) {
					$("input[type=radio][name=directionsred]").prop('checked', false);
					$('#directionsredrow').fadeOut(1000);
					}
					
				//STUDENT CHOICE
				if($('#studentchoicewhiteyes').is(':checked')) {
					$('#studentchoiceyellowrow').fadeIn(1000);
					}
				if($('#studentchoicewhiteno').is(':checked')) {
					$("input[type=radio][name=studentchoiceyellow]").prop('checked', false);
					$('#studentchoiceyellowrow').fadeOut(1000);
					$("input[type=radio][name=studentchoiceorange]").prop('checked', false);
					$('#studentchoiceorangerow').fadeOut(1000);
					$("input[type=radio][name=studentchoicegreen]").prop('checked', false);
					$('#studentchoicegreenrow').fadeOut(1000);
					$("input[type=radio][name=studentchoiceblue]").prop('checked', false);
					$('#studentchoicebluerow').fadeOut(1000);
					$("input[type=radio][name=studentchoicepurple]").prop('checked', false);
					$('#studentchoicepurplerow').fadeOut(1000);
					}
				if($('#studentchoiceyellowyes').is(':checked')) {
					$('#studentchoiceorangerow').fadeIn(1000);
					}
				if($('#studentchoiceyellowno').is(':checked')) {
					$('#studentchoiceyellowrow').fadeOut(1000);
					$("input[type=radio][name=studentchoiceorange]").prop('checked', false);
					$('#studentchoiceorangerow').fadeOut(1000);
					$("input[type=radio][name=studentchoicegreen]").prop('checked', false);
					$('#studentchoicegreenrow').fadeOut(1000);
					$("input[type=radio][name=studentchoiceblue]").prop('checked', false);
					$('#studentchoicebluerow').fadeOut(1000);
					$("input[type=radio][name=studentchoicepurple]").prop('checked', false);
					$('#studentchoicepurplerow').fadeOut(1000);
					}
				if($('#studentchoiceorangeyes').is(':checked')) {
					$('#studentchoicegreenrow').fadeIn(1000);
					}
				if($('#studentchoiceorangeno').is(':checked')) {
					$("input[type=radio][name=studentchoicegreen]").prop('checked', false);
					$('#studentchoicegreenrow').fadeOut(1000);
					$("input[type=radio][name=studentchoiceblue]").prop('checked', false);
					$('#studentchoicebluerow').fadeOut(1000);
					$("input[type=radio][name=studentchoicepurple]").prop('checked', false);
					$('#studentchoicepurplerow').fadeOut(1000);
					}
				if($('#studentchoicegreenyes').is(':checked')) {
					$('#studentchoicebluerow').fadeIn(1000);
					}
				if($('#studentchoicegreenno').is(':checked')) {
					$("input[type=radio][name=studentchoiceblue]").prop('checked', false);
					$('#studentchoicebluerow').fadeOut(1000);
					$("input[type=radio][name=studentchoicepurple]").prop('checked', false);
					$('#studentchoicepurplerow').fadeOut(1000);
					}
				if($('#studentchoiceblueyes').is(':checked')) {
					$('#studentchoicepurplerow').fadeIn(1000);
					}
				if($('#studentchoiceblueno').is(':checked')) {
					$("input[type=radio][name=studentchoicepurple]").prop('checked', false);
					$('#studentchoicepurplerow').fadeOut(1000);
					}
					
				//ORGANIZATION
				if($('#organizationwhiteyes').is(':checked')) {
					$('#organizationyellowrow').fadeIn(1000);
					}
				if($('#organizationwhiteno').is(':checked')) {
					$("input[type=radio][name=organizationyellow]").prop('checked', false);
					$('#organizationyellowrow').fadeOut(1000);
					$("input[type=radio][name=organizationorange]").prop('checked', false);
					$('#organizationorangerow').fadeOut(1000);
					$("input[type=radio][name=organizationgreen]").prop('checked', false);
					$('#organizationgreenrow').fadeOut(1000);
					$("input[type=radio][name=organizationblue]").prop('checked', false);
					$('#organizationbluerow').fadeOut(1000);
					$("input[type=radio][name=organizationpurple]").prop('checked', false);
					$('#organizationpurplerow').fadeOut(1000);
					$("input[type=radio][name=organizationbrown]").prop('checked', false);
					$('#organizationbrownrow').fadeOut(1000);
					}
				if($('#organizationyellowyes').is(':checked')) {
					$('#organizationorangerow').fadeIn(1000);
					}
				if($('#organizationyellowno').is(':checked')) {
					$('#organizationyellowrow').fadeOut(1000);
					$("input[type=radio][name=organizationorange]").prop('checked', false);
					$('#organizationorangerow').fadeOut(1000);
					$("input[type=radio][name=organizationgreen]").prop('checked', false);
					$('#organizationgreenrow').fadeOut(1000);
					$("input[type=radio][name=organizationblue]").prop('checked', false);
					$('#organizationbluerow').fadeOut(1000);
					$("input[type=radio][name=organizationpurple]").prop('checked', false);
					$('#organizationpurplerow').fadeOut(1000);
					$("input[type=radio][name=organizationbrown]").prop('checked', false);
					$('#organizationbrownrow').fadeOut(1000);
					}
				if($('#organizationorangeyes').is(':checked')) {
					$('#organizationgreenrow').fadeIn(1000);
					}
				if($('#organizationorangeno').is(':checked')) {
					$("input[type=radio][name=organizationgreen]").prop('checked', false);
					$('#organizationgreenrow').fadeOut(1000);
					$("input[type=radio][name=organizationblue]").prop('checked', false);
					$('#organizationbluerow').fadeOut(1000);
					$("input[type=radio][name=organizationpurple]").prop('checked', false);
					$('#organizationpurplerow').fadeOut(1000);
					$("input[type=radio][name=organizationbrown]").prop('checked', false);
					$('#organizationbrownrow').fadeOut(1000);
					}
				if($('#organizationgreenyes').is(':checked')) {
					$('#organizationbluerow').fadeIn(1000);
					}
				if($('#organizationgreenno').is(':checked')) {
					$("input[type=radio][name=organizationblue]").prop('checked', false);
					$('#organizationbluerow').fadeOut(1000);
					$("input[type=radio][name=organizationpurple]").prop('checked', false);
					$('#organizationpurplerow').fadeOut(1000);
					$("input[type=radio][name=organizationbrown]").prop('checked', false);
					$('#organizationbrownrow').fadeOut(1000);
					}
				if($('#organizationblueyes').is(':checked')) {
					$('#organizationpurplerow').fadeIn(1000);
					}
				if($('#organizationblueno').is(':checked')) {
					$("input[type=radio][name=organizationpurple]").prop('checked', false);
					$('#organizationpurplerow').fadeOut(1000);
					$("input[type=radio][name=organizationbrown]").prop('checked', false);
					$('#organizationbrownrow').fadeOut(1000);
					}
				if($('#organizationpurpleyes').is(':checked')) {
					$('#organizationbrownrow').fadeIn(1000);
					}
				if($('#organizationpurpleno').is(':checked')) {
					$("input[type=radio][name=organizationbrown]").prop('checked', false);
					$('#organizationbrownrow').fadeOut(1000);
					}
					
				//CHECKLIST
				if($('#checklistwhiteyes').is(':checked')) {
					$('#checklistyellowrow').fadeIn(1000);
					}
				if($('#checklistwhiteno').is(':checked')) {
					$("input[type=radio][name=checklistyellow]").prop('checked', false);
					$('#checklistyellowrow').fadeOut(1000);
					$("input[type=radio][name=checklistorange]").prop('checked', false);
					$('#checklistorangerow').fadeOut(1000);
					$("input[type=radio][name=checklistgreen]").prop('checked', false);
					$('#checklistgreenrow').fadeOut(1000);
					$("input[type=radio][name=checklistblue]").prop('checked', false);
					$('#checklistbluerow').fadeOut(1000);
					$("input[type=radio][name=checklistpurple]").prop('checked', false);
					$('#checklistpurplerow').fadeOut(1000);
					}
				if($('#checklistyellowyes').is(':checked')) {
					$('#checklistorangerow').fadeIn(1000);
					}
				if($('#checklistyellowno').is(':checked')) {
					$('#checklistyellowrow').fadeOut(1000);
					$("input[type=radio][name=checklistorange]").prop('checked', false);
					$('#checklistorangerow').fadeOut(1000);
					$("input[type=radio][name=checklistgreen]").prop('checked', false);
					$('#checklistgreenrow').fadeOut(1000);
					$("input[type=radio][name=checklistblue]").prop('checked', false);
					$('#checklistbluerow').fadeOut(1000);
					$("input[type=radio][name=checklistpurple]").prop('checked', false);
					$('#checklistpurplerow').fadeOut(1000);
					}
				if($('#checklistorangeyes').is(':checked')) {
					$('#checklistgreenrow').fadeIn(1000);
					}
				if($('#checklistorangeno').is(':checked')) {
					$("input[type=radio][name=checklistgreen]").prop('checked', false);
					$('#checklistgreenrow').fadeOut(1000);
					$("input[type=radio][name=checklistblue]").prop('checked', false);
					$('#checklistbluerow').fadeOut(1000);
					$("input[type=radio][name=checklistpurple]").prop('checked', false);
					$('#checklistpurplerow').fadeOut(1000);
					}
				if($('#checklistgreenyes').is(':checked')) {
					$('#checklistbluerow').fadeIn(1000);
					}
				if($('#checklistgreenno').is(':checked')) {
					$("input[type=radio][name=checklistblue]").prop('checked', false);
					$('#checklistbluerow').fadeOut(1000);
					$("input[type=radio][name=checklistpurple]").prop('checked', false);
					$('#checklistpurplerow').fadeOut(1000);
					}
				if($('#checklistblueyes').is(':checked')) {
					$('#checklistpurplerow').fadeIn(1000);
					}
				if($('#checklistblueno').is(':checked')) {
					$("input[type=radio][name=checklistpurple]").prop('checked', false);
					$('#checklistpurplerow').fadeOut(1000);
					}
					
				})
			
			
			
			$("#hokeform").validate({
				rules : {
					schoolId : { required : true },
					teacherId : { required : true },
					entryDate : { required : true },
					timeObserved : { required : true },
					observed : { required : true },
					smallgroup : { required : true }
				},
				messages : {
					schoolId : "Required",
					teacherId : "Required",
					entryDate : "Required",
					timeObserved : "Required",
					observed : "Required",
					smallgroup : "Required"
				},
			});
			
		});

$(function() {
	$("#entryDate").datepicker({maxDate: new Date});
  });



		