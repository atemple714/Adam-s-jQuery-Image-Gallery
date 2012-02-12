/* Author:
	Adam Temple
	
	To-do list:
	* Hover state for thumbnails with tooltip style descriptions
	* Make the code work with divs instead of imgs so we can have different content types
	* Refactor: Make the code more modular like tabs.js in skeleton framework (one function use $(this))
	* Add drop down with customized ui widget that changes the "set" or "group" of the gallery
*/
$(document).ready(function(){
	$('#thumb1').click(function(event){
		/*select all imgs in the gallery window and hide them*/
		$('#gallery-window img').addClass('hidden');
		
		/*remove the current thumb class from all imgs since a new image has been loaded - add the
		 nonactive-thumb class to all us to align the thumbs*/
		$('#thumbnail-nav img').removeClass('current-thumb').addClass('nonactive-thumb');	
		
		/*animate the opacity on slide change */
		$('#slide1').removeAttr('style').animate({opacity: 'toggle'}, 700 ).removeClass('hidden').addClass('current');
		
		/*highlight the active thumbnail */
		$(this).addClass('current-thumb').removeClass('nonactive-thumb'); 
	});
	$('#thumb2').click(function(event){
		$('#gallery-window img').addClass('hidden');
		$('#thumbnail-nav img').removeClass('current-thumb').addClass('nonactive-thumb');	
		$('#slide2').removeAttr('style').animate({opacity: 'toggle'}, 700 ).removeClass('hidden').addClass('current');
		$(this).addClass('current-thumb').removeClass('nonactive-thumb'); 
	});
	$('#thumb3').click(function(event){
		$('#gallery-window img').addClass('hidden');
		$('#thumbnail-nav img').removeClass('current-thumb').addClass('nonactive-thumb');		
		$('#slide3').removeAttr('style').animate({opacity: 'toggle'}, 700 ).removeClass('hidden').addClass('current');
		$(this).addClass('current-thumb').removeClass('nonactive-thumb'); 
	});
});




