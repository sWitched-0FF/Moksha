$(document).ready(function(){
	$('#seasoncalendar a').hover(function(){
		$('#'+this.id+'img').fadeIn();
		$('.backgroundLine div:not(#'+this.id+'img)').fadeOut('slow');
	});
});