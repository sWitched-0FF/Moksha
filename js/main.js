$(document).ready(function(){
	//$('#seasoncalendar a').hover(function(){
	//	$('#'+this.id+'img').fadeIn();
	//	$('.backgroundLine div:not(#'+this.id+'img)').fadeOut('slow');
	//});

	var docWidth=$('body').width();
	$('#mycarousel').width(docWidth);
	$('#mycarousel li').width(docWidth);

	$('#mycarousel').jcarousel({
		scroll:1,
		auto:5,
		wrap: 'circular',
		initCallback: mycarousel_initCallback,
		buttonNextHTML: null,
		buttonPrevHTML: null
	});
});

function mycarousel_initCallback(carousel) {
	$('#seasoncalendar a').bind('hover', function() {
		var index = $(this).index();
		carousel.scroll($.jcarousel.intval(index));
	});
  };