

	function acronym(){
		for (var k = 1, tam1 = $(".acronym").length; k <= tam1; k++) {

			var content_ini = $(".acronym:nth-child("+k+")").html();
			var content_end = "";
			var pals = content_ini.split(" ");
			for (var i = 0, tam = pals.length; i<tam; i++) {
				content_end += "<span id='acronym"+k+"' class='pal'>"+pals[i]+"</span>";
			};

			$(".acronym:nth-child("+k+")").html(content_end);
		}
	}



	$(document).ready(function(){
		acronym();
		$('.acronym').hover(
			function () {
				$(".pal").toggleClass("palHover"); 
			}
		);
	});