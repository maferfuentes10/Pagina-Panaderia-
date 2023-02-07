$(document).ready(function(){

	$(window).scroll(function(){
		var windowWidth = $(window).width();

		if(windowWidth > 800) {
			var scroll = $(window).scrollTop();

			$('header .textos').css({
				'transform': 'translate(0px, ' + scroll / 2 + ' %)'
			});

		}
	});

});