 	// A $( document ).ready() block.
     $( document ).ready(function() {
    
    // menu burger button
        $(".hamburger-button").click(function(){
          
          $(this).toggleClass('active');  
          $('.menu').fadeToggle();
            
            
          });
    
         
          //Animate scroll plugin

          AOS.init({
            offset: 250, // offset (in px) from the original trigger point
            delay: 50, // values from 0 to 3000, with step 50ms
            duration: 400, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down

          });
    
            // Typing Animation
        /* var typed = new Typed('#typed', {
          stringsElement: '#typed-strings',
          typeSpeed: 10,
          startDelay: 500,
          backSpeed: 10,
          backDelay: 1000,
          smartBackspace: true,
          loop: true,
          loopCount: Infinity
        });*/

    
    lightGallery(document.getElementById('lightgallery'), {
      speed: 500,
      download: false
    });
    
    lightGallery(document.getElementById('lightgallery-2'), {
      speed: 500,
      download: false
    });

// Slick Slider 

    $('.testimonial-slider-container').slick({
      autoplay: true,        // Do we want it to autoplay? true or false
      autoplaySpeed: 4000,   // How long between each slide when autoplaying
      speed: 500,            // How fast is the transition 
      arrows: true,          // Do you want to show arrows to trigger each slide
      accessibility: true,   // Enables tabbing and arrow key navigation 
      dots: true,            // Enables the dots below to show how many slides
      fade: false,           // Changes the animate from slide to fade if true
      infinite: true,       // When true, means that it will scroll in a circle
      pauseOnHover: true,   // When true means the autoplay pauses when hovering
      pauseOnDotsHover: true // Pauses the autoplay when hovering over the dots
    });

  });