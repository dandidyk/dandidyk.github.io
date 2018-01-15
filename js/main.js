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

// dogovor

  $('.dogovor').on('click', function (e){ 
    $('.modal').slideDown();
    $('.shadow').fadeIn();
  });


  $('.close').on('click', function (e){ 
    $('.modal').slideUp();
    $('.shadow').fadeOut(600);
  });

  $(document).on('click', function (e){
    var div = $(".modal"); 
    if (!div.is(e.target) 
        && div.has(e.target).length === 0 &&  !$('.dogovor').is(e.target)) { 
      div.slideUp();
      $('.shadow').fadeOut(600);
    }
  });


$('.buy').on('click',function(e) {
  e.preventDefault();
  $('.popup').slideDown(500);
  $('.shadow_popup').fadeIn();
});

$('.close').on('click',function () {
  $('.modal').fadeOut(600);
  $('.popup').fadeOut(600);
  $('.shadow_popup').fadeOut();
})

jQuery(function($){
  $(document).mouseup(function (e){ 
    var div = $(".popup"); 
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) { 
      div.hide(); 
      $('.shadow_popup').fadeOut(100);
    }
  });
});

///

let form = document.querySelector('#form');
 
var validG;

  function input (e) {
    if(e.target.getAttribute('name') === 'name') {
      if (e.target.value.length < 3) {
        e.target.classList.add('error');
        e.target.classList.remove('right');
      } else {
        e.target.classList.add('right');
        e.target.classList.remove('error');
      }
    }
    if(e.target.getAttribute('name') === 'phone') {
      if (e.target.value.length < 9) {
        e.target.classList.add('error');
        e.target.classList.remove('right');
      } else {
        e.target.classList.add('right');
        e.target.classList.remove('error');
      }
    }
    if(e.target.getAttribute('name') === 'email') {
        if ( (e.target.value.indexOf('.') === -1)
            || (e.target.value.indexOf('@') === -1) ) {
          e.target.classList.add('error');
          e.target.classList.remove('right');
        } else {
          e.target.classList.add('right');
          e.target.classList.remove('error');
        }
    }
  }

  function submit (e) {
    var valid = 0;
    let children =  e.target.children; 
    for (let i = 0; i< children.length; i++) {
      if(children[i].getAttribute('name') === 'name') {
        if (children[i].value.length < 3) {
          children[i].classList.add('error');
          children[i].classList.remove('right');
            //valid = valid&&false;
            e.preventDefault();

          } else {
            children[i].classList.add('right');
            children[i].classList.remove('error');
            valid++;
          }
        }
        if(children[i].getAttribute('name') === 'phone') {
          if (children[i].value.length < 9) {
            children[i].classList.add('error');
            children[i].classList.remove('right');
              //valid = valid&&false;
              e.preventDefault();

            } else {
              children[i].classList.add('right');
              children[i].classList.remove('error');
              valid++;
            }
          }
          if(children[i].getAttribute('name') === 'email') {
            if ( (children[i].value.indexOf('.') === -1)
              || (children[i].value.indexOf('@') === -1) ) {
              children[i].classList.add('error');
            children[i].classList.remove('right');
                //valid = valid&&false;
                e.preventDefault();

              } else {
                children[i].classList.add('right');
                children[i].classList.remove('error');
                valid++;
              }
            }
          }
          validG = valid;
        }



  form.addEventListener('input', input);
  form.addEventListener('submit', submit); 

// ajax 


$("#form").on("submit", function (e) {
  e.preventDefault();
     var name = $(this).find('#name').val();
     var phone = $(this).find('#phone').val();
     var email = $(this).find('#email').val();
    
    var sendInfo = {
    action: "addLeadFromLanding",
    data : {
      name : name, 
      email : email,
      phone : phone,
      product_name : 'Трафик.КАК ВЫРАСТИТЬ СЧАСТЛИВОГО И ЗДОРОВОГО РЕБЁНКА ОТ 0 ДО 3 ЛЕТ'
    }
    };
  if(validG === 3) {
  
  $.ajax({
    type: "POST",
    url: "http://api.karpachoff.com/crm/amo/",
    data: sendInfo,
    success: function(data){
      if (data.indexOf("success") != -1) {
         window.location = 'http://karpachoff.com/uverennost/product/new/thank'
      } else {
          window.location = 'http://karpachoff.com/uverennost/product/new/error'
      }
    }
  });
  }

});

//ANIMATION

    $.fn.animated = function(inEffect, outEffect) {
        $(this).css("opacity", "0").addClass("animated").waypoint(function(dir) {
            if (dir === "down") {
                $(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
            } else {
                $(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
            };
        }, {
            offset: "100%"
        }).waypoint(function(dir) {
            if (dir === "down") {
                $(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
            } else {
                $(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
            };
        }, {
            offset: -$(window).height()
        });
    };



});
