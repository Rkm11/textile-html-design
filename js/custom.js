jQuery(document).ready(function(){

	$('[data-toggle="popover"]').popover({
        placement : 'top',
        trigger : 'hover'
	});
	
	$( function() {
		var spinner = $( "#spinner, #spinner1, .spinner input" ).spinner();
	 
		$( "#disable" ).on( "click", function() {
		  if ( spinner.spinner( "option", "disabled" ) ) {
			spinner.spinner( "enable" );
		  } else {
			spinner.spinner( "disable" ); 
		  }
		});
		
	  } );

	/********* Sticky Header ************/	
	jQuery(window).scroll(function(){
	var sticky = jQuery('body'),
		scroll = jQuery(window).scrollTop();	
	if(scroll >= 200) $(".head-bottom,.head-top,.top-strip").hide();
	else $(".head-bottom,.head-top,.top-strip").show();
	//if(scroll >= 200) sticky.addClass('sticky-header');
	//else sticky.removeClass('sticky-header');	
	});

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
		items:5,
		nav:true, 
		dots:false,
		autoplay:true,
		margin:10,
		slideTransition: 'linear',
		autoplaySpeed: 1000,
		smartSpeed: 1000,
		navText: [
					"<i class='fa fa-long-arrow-left'></i>",
					"<i class='fa fa-long-arrow-right'></i>"
				],
		/*animateOut: 'slideOutUp',
		animateIn: 'slideInUp',*/			   
				
	});
	/* jQuery('.owl-carousel').trigger('play.owl.autoplay',[1000]);

    function setSpeed(){
        jQuery('.owl-carousel').trigger('play.owl.autoplay',[1000]);
    }

    setTimeout(setSpeed, 1000);*/

	// jQuery('[data-toggle="popover"]').popover();
	// $(".custom-checkbox").click(function(){
    //     $(".stitching-size").slideToggle();
    // });
});

$(function() {
    $("#product-image-ul li").on("click", function(e) {
        $(this).addClass("flex-active-thumb").siblings().removeClass("flex-active-thumb");
    });

	 $("#product-image-ul img").click(function () {
          // Displays the source of the image clicked
		  $("#product-main-img").attr("src",$(this).attr("src"));
        });
})
