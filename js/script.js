/* Author:
	Adam Temple
	
	to-do list:
	* hover state for thumbnails with tooltip style descriptions
	* make the code work with divs instead of imgs so we can have different content types
	* make the code more modular like tabs.js in skeleton framework (one function use $(this))
	* add drop down with customized ui widget that changes the "set" or "group" of the gallery
	
	
*/
$(document).ready(function(){
	$('#thumb1').click(function(event){
		$('#gallery-window img').addClass('hidden');
		$('#thumbnail-nav img').removeClass('current-thumb');	
		$('#slide1').removeAttr('style').animate({opacity: 'toggle'}, 700 ).removeClass('hidden').addClass('current');
		$(this).addClass('current-thumb'); 
	});
	$('#thumb2').click(function(event){
		$('#gallery-window img').addClass('hidden');
		$('#thumbnail-nav img').removeClass('current-thumb');	
		$('#slide2').removeAttr('style').animate({opacity: 'toggle'}, 700 ).removeClass('hidden').addClass('current');
		$(this).addClass('current-thumb');
	});
	$('#thumb3').click(function(event){
		$('#gallery-window img').addClass('hidden');
		$('#thumbnail-nav img').removeClass('current-thumb');	
		$('#slide3').removeAttr('style').animate({opacity: 'toggle'}, 700 ).removeClass('hidden').addClass('current');
		$(this).addClass('current-thumb');
	});
});




