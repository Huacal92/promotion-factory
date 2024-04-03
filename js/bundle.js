'use strict';

/* Menu Toggle  */
//Main navigation Active Class Add Remove
$(".navbar-toggler").on("click", function () {
  $("header").toggleClass("active");
});
$(document).on("ready", function () {
  if ($(window).width() > 992) {
    $("header").removeClass("active");
  }
  $(window).on("resize", function () {
    if ($(window).width() > 992) {
      $("header").removeClass("active");
    }
  });
});



/* Menu links Activos */
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
      link.addEventListener("click", function() {
        navLinks.forEach(link => {
          link.classList.remove("active");
        });
        this.classList.add("active");
      });
    });
});


/* Show & Hidden Barra Header */

let barTopHeader = document.getElementById('barHeader');
let lastScrollPosition = 0;

window.addEventListener('scroll', function(){
  let currentScrollPosition = window.scrollY;

  if (currentScrollPosition > lastScrollPosition) {
    barTopHeader.classList.add('hidden-menu');
  }else {
    barTopHeader.classList.remove('hidden-menu');
  }

  lastScrollPosition = currentScrollPosition;

});





/* Menus Color Transparente */

/* window.addEventListener('scroll', function () {
  let menu1 = document.getElementById('site-header');
  let menu2 = document.getElementById('site-header-static');
  let scrollPosition = window.scrollY;
  let windoWidth = window.innerWidth || document.documentElement.clientWidth;

  let menuHeight = menu1.clientHeight;

  if (windoWidth <= 1090) {
    menu2.classList.add('hidden-menu');
    menu1.classList.remove('hidden-menu');
  }else{
    if (scrollPosition >= menuHeight) {
      menu2.classList.add('hidden-menu');
      menu1.classList.remove('hidden-menu');
    }else{
      menu2.classList.remove('hidden-menu');
      menu1.classList.add('hidden-menu');
    }
  }
}); */

$(document).ready(function() {
    var $galleryContainer = $('.grid-proyectos').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });
    
    $('.button-group .button').on('click', function(){
        $('.button-group .button').removeClass('active');
        $(this).addClass('active');
    
        var value = $(this).attr('data-filter');
        $galleryContainer.isotope({
            filter: value
        });
    });
    
    
    var filterFns = {
        showLimitedElements: function() {
          var index = $(this).index();
          var limit = 12; // Mostrar solo los primeros 12 elementos
          return index < limit;
        }
      };
    
      $galleryContainer.isotope({ filter: filterFns.showLimitedElements });
    
      filterFns.showLimitedElements = function() {
        var index = $(this).index(); 
        var limit = 12; // Ajustar Mostrar solo los primeros 12 elementos
        return index < limit;
      };    
});

$(function() {
    $(".rslides").responsiveSlides({
      auto: false,
      speed: 500,
      timeout: 4000,
      prevText: '<i class="fa-solid fa-arrow-left-long"></i>',
      nextText: '<i class="fa-solid fa-arrow-right"></i>', 
      nav: true
    });
  });

/* Carousel Servicios Banner */
/* Banner Principal */
$(document).ready(function () {
    $('.owl-one').owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      dots: true,
      responsiveClass: true,
      autoplay: false,
      autoplayTimeout: 5000,
      autoplaySpeed: 2000,
      autoplayHoverPause: false,
      responsive: {
        0: {
          items: 1
        },
        480: {
          items: 1
        },
        667: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });
  
   /*  $('.carousel-products').owlCarousel({
      loop:true,
      margin:0,
      nav:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
        }
    }); */

    $('.owl-two').owlCarousel({
      loop: true,
      margin: 40,
      nav: false,
      dots: true,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplaySpeed: 1500,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        480: {
          items: 1
        },
        667: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
  });

/* Magnify Popup image normal*/
$(document).ready(function() {

	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});

	$('.image-popup-fit-width').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

});


/* Magnify Popup content */

$(document).ready(function() {
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
});

/* Magnify Popup Gallery Images */
$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
});
