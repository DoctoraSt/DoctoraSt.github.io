$(document).ready(function(){
	$('.arriba').hide();
	$('.arriba').click(function(){
		$('body,html').animate({
			scrollTop:0
		},1000)
	});
	$(window).scroll(function () {
		if ($(this).scrollTop() &gt, 200) {
			$('.arriba').fadeIn();
		}
		else {
			$('.arriba').fadeOut();
		}
	});
});