$(document).ready(function() {
		var wrapper = $(".input_wrap>div");
		var add_button = $(".add-more");
		var counter = 1;

		$("#schoolId").change(function() {
			var str = $("#schoolId :selected").val();
		});

		//add another input text line for additional tasks
		$("#add-more").click(function(e) {
			e.preventDefault();
			var count = 1;

			var newAdd = '<div id=div-'+counter+'><input type="text" id="task[]" name="taskList['+count+'].task"  size="60" placeholder="Task"></input><a href="#" class="remove_field">Remove</a></div>';
		
			var el = $('.input_wrap div:last');
		    $(el).after(newAdd);
		    
		    count++;
		    counter++;
		});
		

		//remove the current value of the remove button which has been pressed
		$(document).on("click",".remove_field",function(){
		    $(this).parent().remove();
		});

	});// end of document ready
