jQuery(document).ready(function(){
fullSize();	
jQuery(".head-sre-inp").click(function(){
	jQuery(".head-sre-inp").addClass("open-input");
});

/*----------------remove class click anywhere on body------------*/
$(document).mouseup(function(e)
{
	var container = $(".head-sre-inp"); // class we have to remove from
	if (!container.is(e.target) // if the target of the click isn't the container...
			&& container.has(e.target).length === 0) // ... nor a descendant of the container
	{
		  $(".head-sre-inp").removeClass("open-input"); 
	}
});

/********* Sticky Header ************/	
jQuery(window).scroll(function(){
  var sticky = jQuery('body'),
	  scroll = jQuery(window).scrollTop();	
  if(scroll >= 200) sticky.addClass('sticky-header');
  else sticky.removeClass('sticky-header');	
});

/********* Full Height Js ************/
function fullSize() {
  var heights = window.innerHeight;
 jQuery(".fullHt").css('min-height', (heights + 0) + "px");
}

/********* Sliders ************/	
jQuery('#main-slide').owlCarousel({
	  loop:true,
	  items:1,
	  nav:true,
	  dots:false,
	  autoplay:true, 
	  margin:10,
	  autoplayTimeout:5000,
	  smartSpeed:1500,
	  navText: [
				 "<i class='fa fa-long-arrow-left'></i>",
				 "<i class='fa fa-long-arrow-right'></i>"
			   ]
			   
});
jQuery('.ou-mis-slide').owlCarousel({
	  loop:true,
	  items:1,
	  nav:true,
	  dots:false,
	  autoplay:false,
	  margin:10,
	  autoplayTimeout:5000,
	  smartSpeed:1500,
	  navText: [
				 "<i class='fa fa-long-arrow-left'></i>",
				 "<i class='fa fa-long-arrow-right'></i>"
			   ],
	 /*animateOut: 'slideOutUp',
	  animateIn: 'slideInUp',*/			   
			   
});
jQuery('.news-slider').owlCarousel({
	  loop:true,
	  items:1,
	  nav:false,
	  dots:true,
	  autoplay:false,
	  margin:10,
	  autoplayTimeout:5000,
	  smartSpeed:2500,
	  navText: [
				 "<i class='fa fa-long-arrow-left'></i>",
				 "<i class='fa fa-long-arrow-right'></i>"
			   ],
			   /*animateOut: 'slideOutUp',
	  animateIn: 'slideInDown',*/
	 			   
				 
			   
});

/********* Cust tab ************/	
$(function() {
  //Simple filter controls
  $('.simplefilter li').click(function() {
	  $('.simplefilter li').removeClass('active');
	  $(this).addClass('active');
  });
  //Multifilter controls
  $('.multifilter li').click(function() {
	  $(this).toggleClass('active');
  });
  //Shuffle control
  $('.shuffle-btn').click(function() {
	  $('.sort-btn').removeClass('active');
  });
  //Sort controls
  $('.sort-btn').click(function() {
	  $('.sort-btn').removeClass('active');
	  $(this).addClass('active');
  });
});

});
