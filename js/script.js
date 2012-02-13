/* Author:
	Adam Temple
	
	To-do list:
	* Description per slide that is loaded with click event
	* Make the code work with divs instead of imgs so we can have different content types
	* Refactor: Make the code more modular like tabs.js in skeleton framework (one function use $(this))
*/
$(document).ready(function(){
/* ----------------------THUMBNAIL&GALLERY CODE------------------------ */
	/*we use the .live function to select whats in the dom instead of the document since the
	 * gallerys are loaded via ajax .load
	 */
	$('#thumb1').live("click", function(event){
		/*select all imgs in the gallery window and hide them*/
		$('.gallery-window img').addClass('hidden');
		/*remove the current thumb class from all imgs since a new image has been loaded - add the
		 nonactive-thumb class to all us to align the thumbs*/
		$('.thumbnail-nav img').removeClass('current-thumb').addClass('nonactive-thumb');	
		
		/*animate the opacity on slide change */
		$('#slide1').removeAttr('style').animate({opacity: 'toggle'}, 700 ).removeClass('hidden').addClass('current');
		
		/*highlight the active thumbnail */
		$(this).addClass('current-thumb').removeClass('nonactive-thumb'); 
	});
	$('#thumb2').live("click", function(event){
		$('.gallery-window img').addClass('hidden');
		$('.thumbnail-nav img').removeClass('current-thumb').addClass('nonactive-thumb');	
		$('#slide2').removeAttr('style').animate({opacity: 'toggle'}, 700 ).removeClass('hidden').addClass('current');
		$(this).addClass('current-thumb').removeClass('nonactive-thumb'); 
	});
	$('#thumb3').live("click", function(event){
		$('.gallery-window img').addClass('hidden');
		$('.thumbnail-nav img').removeClass('current-thumb').addClass('nonactive-thumb');		
		$('#slide3').removeAttr('style').animate({opacity: 'toggle'}, 700 ).removeClass('hidden').addClass('current');
		$(this).addClass('current-thumb').removeClass('nonactive-thumb'); 
	});
	
/* ------------------------DROPDOWN MENU CODE--------------------------*/

	$('.sb-dropdown li[data-value="gallery1"] a').live("click", function(event){
		$('#gallery').load('gallery-ajax/gallery1.html');
	});
	$('.sb-dropdown li[data-value="gallery2"] a').live("click", function(event){
		$('#gallery').load('gallery-ajax/gallery2.html');
	});
	$('.sb-dropdown li[data-value="gallery3"] a').live("click", function(event){
		$('#gallery').load('gallery-ajax/gallery2.html');
	});

});




