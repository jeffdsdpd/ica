$(document).ready(function() {
			
			$("#schoolId").change(
					function() {
						var str = $("#schoolId :selected").val();
					});
			
			//first get the contents of the div with name class copy-fields and add it to after "after-add-more" div class.
		      $("#add-more").click(function(){ 
		          var html = $(".copy-fields").html();
		          $(".after-add-more").after(html);
		      });
			//here it will remove the current value of the remove button which has been pressed
		      $("body").on("click",".remove",function(){ 
		          $(this).parents(".control-group").remove();
		      });
						

		});//end of document ready