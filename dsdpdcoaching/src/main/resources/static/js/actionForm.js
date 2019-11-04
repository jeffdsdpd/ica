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
		      
		      
		      
		      //NEW
		      var wrapper = $(".input_wrap>div");
		      var add_button = $(".add_field_button");

		      $(add_button).click(function (e) {
		          e.preventDefault();
		          $(wrapper).after('<div><input type="text" name="text[]" class="form-control"><a href="#" class="remove_field">Remove</a></div>'); //add input box
		      });

		      $(document).on("click",".remove_field",function(){
		          $(this).parent().remove();
		      });
		      //
		      
		      <!-- Copy Fields-These are the fields which we get through jquery and then add after the above input,-->
		        <div class="copy-fields hide">
		       	 	<div class=" input-group control-group">   	
						<div class="col-md-10">
							<input type="text" id="task[]" name="task[]" th:field="*{task}" size="60" placeholder="Item"></input>
						</div>
						<div class="input-group-btn" style="float:right; align:middle;">
			            		<button class="btn-xs remove" type="button">Remove  &nbsp;</button>
			            </div>
			        </div> 
		        </div>
		        
		        
		        
		        
		        
		        
		        
		        
		        
						

		});//end of document ready