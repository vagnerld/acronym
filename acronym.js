

	function acronym(){
		for (var k = 1, tam1 = $(".acronym").length; k <= tam1; k++) {
			var content_ini = $(".acronym:nth-child("+k+")").html();
			$(".acronym:nth-child("+k+")").attr('id', 'acronym'+k);
			var content_end = "";
			var pals = content_ini.split(" ");
			for (var i = 0, tam = pals.length; i<tam; i++) {
				content_end += "<span class='pal'>"+pals[i]+"</span>";
			};
			$(".acronym:nth-child("+k+")").html(content_end);
		}
	}

	$(document).ready(function(){
		acronym();
		$('.acronym').hover(
			function () {
				$("#"+this.id+" .pal").toggleClass("palHover"); 
			}
		);
	});