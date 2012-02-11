/* Author:
	Adam Temple
*/
$(document).ready(function(){
	$("#thumb1").click(function(event){
		$("#gallery-window img").addClass('hidden');
		$("#gallery-window img").removeAttr('style').animate({opacity: 'toggle'}, 500 );
		$("#slide1").removeClass('hidden');
	});
	$("#thumb2").click(function(event){
		$("#gallery-window img").addClass('hidden');
		$("#gallery-window img").removeAttr('style').animate({opacity: 'toggle'}, 500 );
		$("#slide2").removeClass('hidden');
	});
	$("#thumb3").click(function(event){
		$("#gallery-window img").addClass('hidden');
		$("#gallery-window img").removeAttr('style').animate({opacity: 'toggle'}, 500 );
		$("#slide3").removeClass('hidden');
	});
});




