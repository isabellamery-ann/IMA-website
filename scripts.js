 	// A $( document ).ready() block.
     $( document ).ready(function() {
    
    // menu burger button
        $(".hamburger-button").click(function(){
          
          $(this).toggleClass('active');  
          $('.menu').fadeToggle();
            
            
          });
    
          // Animate on scroll - activate
          AOS.init({
            duration: 500 //values from 0 to 3000, with step 50ms
          });
    });

    
    
    
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
    