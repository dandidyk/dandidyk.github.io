$(function () {

	// Select all links with hashes
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
      };
})

$('html').one('mouseleave',function() {
  $('.popup').slideDown(500);
});

$('.close').on('click',function () {
  $('.popup').fadeOut(600);
})

$('.dependence__list').addClass("hidden").viewportChecker({
classToAdd: 'visible animated rotateInUpLeft',
offset: 100
});



$('.time__item').addClass("hidden").viewportChecker({
classToAdd: 'visible animated slideInLeft',
offset: 100
});

$('.danger__left__item').addClass("hidden").viewportChecker({
classToAdd: 'visible animated slideInLeft',
offset: 100
});


$('.reason__item:nth-child(odd)').addClass("hidden").viewportChecker({
classToAdd: 'visible animated slideInLeft',
offset: 100
});




$('.reason__item:nth-child(even)').addClass("hidden").viewportChecker({
classToAdd: 'visible animated slideInRight',
offset: 100
});


$('.useful__item:nth-child(odd)').addClass("hidden").viewportChecker({
classToAdd: 'visible animated fadeInLeftBig',
offset: 100
});


$('.useful__item:nth-child(even)').addClass("hidden").viewportChecker({
classToAdd: 'visible animated fadeInRightBig',
offset: 100
});

$('.danger__right__item').addClass("hidden").viewportChecker({
classToAdd: 'visible animated slideInRight',
offset: 100
});




$('.bad_things__education').addClass("hidden").viewportChecker({
classToAdd: 'visible animated slideInLeft',
offset: 100
});

$('.bad_things__annoing').addClass("hidden").viewportChecker({
classToAdd: 'visible animated slideInRight',
offset: 100
});


$('.about_karpachoff__item').addClass("hidden").viewportChecker({
classToAdd: 'visible animated flipInX',
offset: 100
});

});
