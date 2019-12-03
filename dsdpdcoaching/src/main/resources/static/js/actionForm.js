$(document).ready(function() {
	
	$(window).keydown(function(event){
	    if(event.keyCode == 13) {
	      event.preventDefault();
	      return false;
	    }
	  });
	
		var wrapper = $(".input_wrap>div");
		var add_button = $(".add-more");
		var counter = 1;

		$("#schoolId").change(function() {
			var str = $("#schoolId :selected").val();
		});

		//add another input text line for additional tasks
		$("#add-more").click(function(e) {
			e.preventDefault();

			var newAdd = '<div id=div-'+counter+'><input type="text" id="task[]" name="taskList['+counter+'].task"  size="60" placeholder="Task"></input><a href="#" class="remove_field">Remove</a></div>';
		
			var el = $('.input_wrap div:last');
		    $(el).after(newAdd);

		    counter++;
		});
		

		//remove the current value of the remove button which has been pressed
		$(document).on("click",".remove_field",function(){
		    $(this).parent().remove();
		});

	});// end of document ready