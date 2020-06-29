$(document).ready(
		function() {
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
			
			var $modal = $('.modal').modal({
			    show: false 
			});
			$('#heidchokecolumn').on('click', function() {
			    $modal.modal('show');
			});
			
		});

		