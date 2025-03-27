(function($){
	$(document).ready(function() {	

     
     //slider1
	jQuery(document).ready(function() {
	 $(".slider1").owlCarousel({
	 	"items" : 1,
	 	"margin" : 20,
	 	"autoplay": false,	 	
	 	"autoplayTimeout" : 3000,
	 	"loop" : true,
	 	"nav" : false,
	 	"dop" : true,
	 	"responsive" : {
	 		0 : {
	 			"items" : 1
	 		},
	 		576 : {
	 			"items" : 1
	 		},
	 		767 : {
	 			"items" : 2
	 		},
	 		991 : {
	 		 	"items" : 3
	 		}


	 	}
	 });

		var owl = $('.slider1');
		owl.owlCarousel();
		// Go to the next item
		$('.customNextBtn').click(function() {
		    owl.trigger('next.owl.carousel');
		})
		// Go to the previous item
		$('.customPrevBtn').click(function() {
		    // With optional speed parameter
		    // Parameters has to be in square bracket '[]'
		    owl.trigger('prev.owl.carousel', [300]);
		})


	});




	    //mobile nav menu
    jQuery(".menu-icon").click(function() {
    	jQuery(".Close-icon").show();
    });

    jQuery(".menu-icon").click(function() {
    	jQuery(".menu-icon").hide();
    });


     jQuery(".Close-icon").click(function() {
    	jQuery(".menu-icon").show();
    });

    jQuery(".Close-icon").click(function() {
    	jQuery(".Close-icon").hide();
    });



    jQuery(".menu-part img").click(function() {
    	jQuery(".header-btns").slideToggle();
    });









		

				

		
	});
})(jQuery);