function sorting(){
	$('.class-warning').removeClass('class-off');
	$('.class-warning').addClass('class-on');
	$('.class-timelineHead01').removeClass('class-active');
	$('.class-dashboard').removeClass('class-off');
	$('.class-dashboard').addClass('class-on');
	$('.class-timelineHead02').removeClass('class-active');

}

$(function() {
    $('.class-timelineHead01').on('click', function() {
        $(this).toggleClass('class-active ""');
		$('.class-warning').toggleClass('class-off class-on');
    });
});

$(function() {
    $('.class-timelineHead02').on('click', function() {
        $(this).toggleClass('class-active ""');
		$('.class-dashboard').toggleClass('class-on class-off');
    });
});
