$(document).ready(function(){
	$('#mycarousel').cycle({
		fx: 'fade', //чтоб было справа-налево смена, поменять на scrollRight
		speed:  1000,
		timeout: 5000,
		delay: 0
	});
	
	/* Если нужен переход на слайд при ховере на календарь раскоментить
	$('#seasoncalendar a').bind('hover', function() {
		var index = $(this).index();
		var indexSlide = $('#'+$(this).attr('id')+'img').index();
		$('#mycarousel').cycle(indexSlide);
	});
	*/

	$('a[href=#popupForm]').click(function(e){
		e.stopPropagation();
		$('#roomhidinput').val($(this).data('room'));
		$('#datehidinput').val($(this).closest('.miniBookingForm').find('input[name=startdate]').val());
		$.fancybox({'titleShow':false,'content':$('#popupForm').html()});
	});
	
	$('.datePick').datepicker();
	$('.datepick').click(function(){
		$(this).find('.datePick').datepicker('show');
	});
});