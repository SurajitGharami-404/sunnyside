const ham = document.getElementById("ham")
const mob = document.getElementById("mob")

ham.addEventListener("click", () => {
     ham.classList.toggle("open--1")
     ham.classList.toggle("open--2")

     if (ham.classList.contains("open--1")) {
          mob.classList.remove("hide")
          mob.classList.add("fadein")
          mob.classList.remove("fadeout")
         
     }
     else if (!ham.classList.contains("open--1")) {
          setTimeout(() => {
               mob.classList.add("hide")
          }, 201);
          mob.classList.remove("fadein")
          mob.classList.add("fadeout")
     }

})



$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  })
