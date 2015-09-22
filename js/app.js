// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();
$('#workNav').click(function(){
	$('html, body').animate({
        scrollTop: $("#workDiv").offset().top
    }, 2000);
})