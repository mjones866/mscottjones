$(document).ready(function () {


  // Creates HTML5 Elements and Adds Support For IE8  //
  document.createElement('header');
  document.createElement('footer');
  document.createElement('section');
  document.createElement('article');
  document.createElement('aside');
  document.createElement('nav');



  // FADES IN PAGE //
 $('.hidden').fadeIn(900).removeClass('hidden');




  // FLUID BOX INITIALIZER //
  $(function () {
    $('a').fluidbox();
  });


  // MOBILE NAVIGATION //
  $(function () {
    $('#burger-button').click(function (e) {
      $('nav').slideToggle(250);
      e.stopPropagation();
    });
  });


  $(window).resize(function () {
    if ($(window).width() < 768) {
      $("nav").slideUp();
      $("header").removeClass('sticky-expand, sticky');
    } else {
      $("nav").slideDown();
      $("header").addClass("sticky");
    }
  }).resize(); // trigger resize event initially



  $('nav').click(function (e) {
    e.stopPropagation();
  });

  if ($(window).width() < 768) {
    $('body').click(function () {
      $("nav").slideUp();
    });
    $('nav').on('click', function () {
      $(this).slideUp();
    });
  }
  // MOBILE NAVIGATION //






  // HIDE NAVIGATION ON SCROLL DOWN //
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('header').outerHeight();

  $(window).scroll(function (event) {
    didScroll = true;
  });

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
      var st = $(this).scrollTop();

      // Make sure they scroll more than delta
      if (Math.abs(lastScrollTop - st) <= delta)
        return;

      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop && st > navbarHeight && $(window).width() < 768) {
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
        $("nav").slideUp();
      } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
          $('header').removeClass('nav-up').addClass('nav-down');

        }
      }

      lastScrollTop = st;
    }
    // HIDE NAVIGATION ON SCROLL DOWN //




  // ---------------Sticky Nav at Top of Page on Desktop-----------------------------------


  var stickyNavTop = $('header').position().top; // Gets position of "header"
  var stickyNav = function () { // defines function "stickyNav"

    var scrollTop = $(window).scrollTop(); // defines the top at which to add the below class
    var windowWidth = $(window).width(); // Define window width variable

    if (scrollTop > stickyNavTop && windowWidth > 768) {
      $('header').addClass('sticky'); // adds the class of ".sticky" to "header"
    } else {
      $('header').removeClass('sticky'); // removes class of "sticky" from "header"
    }


  };

  stickyNav();

  $(window).scroll(function () {
    stickyNav();
  });



  $('header').hover(function () { // Expands header on hover
    $(this).toggleClass('sticky-expand');
  });


  // Slide to section Nav

  $("#home-nav").click(function () {
    $('html, body').animate({
      scrollTop: $("#home").offset().top
    }, 800);
  });

  $("#about-nav").click(function () {
    $('html, body').animate({
      scrollTop: $("#about").offset().top - 30
    }, 800);
  });

  $("#what-i-do-nav").click(function () {
    $('html, body').animate({
      scrollTop: $("#what-i-do").offset().top + 50
    }, 800);
  });

  $("#portfolio-nav").click(function () {
    if ($(window).width() > 550) {
      $('html, body').animate({
        scrollTop: $("#portfolio").offset().top - 120
      }, 800);
    } else if ($(window).width() < 550) {
      $('html, body').animate({
        scrollTop: $("#portfolio").offset().top - 30
      }, 800);
    }
  });

  $("#why-nav").click(function () {
    $('html, body').animate({
      scrollTop: $("#why").offset().top + 60
    }, 800);
  });

  $("#contact-nav").click(function () {
    $('html, body').animate({
      scrollTop: $("#contact").offset().top + 50
    }, 800);
  });

  // Slide to section Nav






  // --------------- Sticky Nav at Top of Page on Desktop ----------------------------


  // --------------- Portfolio Tabs ----------------------------

  jQuery('.tab-links a, .tab-links-sticky a').on('click', function (e) {
    var currentAttrValue = jQuery(this).attr('href');

    // Show/Hide Tabs
    jQuery('.tabs ' + currentAttrValue).fadeIn(800).siblings().hide();

    // Change/remove current tab to active
    jQuery(this).parent('li').addClass('active').siblings().removeClass('active');

    e.preventDefault();
  });

  // --------------- Portfolio Tabs ----------------------------


  // --------------- Back to top button ----------------------------

  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    //grab the "back to top" link
    $back_to_top = $('.cd-top');

  //hide or show the "back to top" link
  $(window).scroll(function () {
    ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
    if ($(this).scrollTop() > offset_opacity) {
      $back_to_top.addClass('cd-fade-out');
    }
  });

  //smooth scroll to top
  $back_to_top.on('click', function (event) {
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0,
    }, scroll_top_duration);
  });


  // --------------- Back to top button ----------------------------



});
