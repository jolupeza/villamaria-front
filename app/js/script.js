"use strict";

/*******************************************************
function verifyMedia () {
  if (window.matchMedia("(max-width: 991px)").matches) {

  } else {
    console.log('Mi viewport es mayor o igual a 992px');
  }
}
/*******************************************************/

;(function ($) {
  var $window = $(window);

  $(function () {
    $window.on('scroll', function () {
      checkScroll();
    });

    checkScroll();

    $('.ArrowTop').on('click', function (ev) {
      ev.preventDefault();

      $('html, body').animate({ scrollTop: 0 }, 800);
    });

    /*
    $('.element-animate').hover(
      function () {
        var $this = $(this),
            animation = $this.data('animation'),
            parent = $this.parent();
         parent.addClass('animated ' + animation);
      },
      function () {
        var $this = $(this),
            animation = $this.data('animation'),
            parent = $this.parent();
         parent.removeClass('animated ' + animation);
      }
    );
    */

    //$window.on('resize',  function () {
    //  verifyMedia();
    //});
  });

  var checkScroll = function checkScroll() {
    var arrow = $('.ArrowTop');

    if ($window.scrollTop() > 150) {
      arrow.fadeIn();
    } else {
      arrow.fadeOut();
    }
  };
})(jQuery);
'use strict';

function initMap() {
  if (!infoMaps.length) {
    return false;
  }

  var mapCoord = { lat: infoMaps[0].lat, lng: infoMaps[0].long },
      options = {
    zoom: 16,
    center: mapCoord,
    scrollwheel: false
  };

  infoMaps[0].map = new google.maps.Map(document.getElementById(infoMaps[0].id), options);

  infoMaps[0].marker = new google.maps.Marker({
    position: mapCoord,
    map: infoMaps[0].map,
    title: 'Colegio Villa María - Miraflores'
  });

  infoMaps[0].load = true;
}

;(function ($) {
  var $window = $(window);

  $(function () {
    $window.on('resize', function () {
      if (infoMaps.length) {

        infoMaps.forEach(function (info) {
          if (!$.isEmptyObject(info.map)) {
            google.maps.event.trigger(info.map, "resize");
            info.map.setCenter({ lat: info.lat, lng: info.long });
          }
        });
      }
    });
  });
})(jQuery);
"use strict";

;(function ($) {
  var $window = $(window),
      $body = $('body'),
      $header = $('.Header');

  $(function () {
    $window.on('scroll', function () {
      if ($body.hasClass('category') || $body.hasClass('single')) {
        return false;
      } else {
        headerScroll();
      }
    });

    checkScrollHeader();

    $('.Header__menuTop__caret').on('click', function (ev) {
      ev.preventDefault();

      var $this = $(this),
          submenu = $this.parent().next('.Header__menuTop__submenu');

      if ($this.hasClass('active')) {
        $this.removeClass('active icon-keyboard_arrow_up').addClass('icon-keyboard_arrow_down');
        submenu.removeClass('active');
      } else {
        $this.removeClass('icon-keyboard_arrow_down').addClass('active icon-keyboard_arrow_up');
        submenu.addClass('active');
      }
    });
  });

  var checkScrollHeader = function checkScrollHeader() {
    if ($body.hasClass('category') || $body.hasClass('single')) {
      activeHeaderScroll();return false;
    }

    headerScroll();
  };

  var headerScroll = function headerScroll() {
    var minScroll = 50;

    if ($window.scrollTop() > minScroll) {
      activeHeaderScroll();
    } else {
      removeHeaderScroll();
    }
  };

  var activeHeaderScroll = function activeHeaderScroll() {
    var headerLogo = $('.Header__logo'),
        logo = headerLogo.find('img'),
        logoImage = headerLogo.data('image'),
        logoImageHover = headerLogo.data('imagehover'),
        menu = $('#js-main-menu'),
        menuHover = $('#js-main-menu-scroll');

    $header.addClass('Header--scroll');
    logo.attr('src', logoImageHover);
    menu.addClass('hide');
    menuHover.removeClass('hide');
  };

  var removeHeaderScroll = function removeHeaderScroll() {
    var headerLogo = $('.Header__logo'),
        logo = headerLogo.find('img'),
        logoImage = headerLogo.data('image'),
        logoImageHover = headerLogo.data('imagehover'),
        menu = $('#js-main-menu'),
        menuHover = $('#js-main-menu-scroll');

    $header.removeClass('Header--scroll');
    logo.attr('src', logoImage);
    menu.removeClass('hide');
    menuHover.addClass('hide');
  };
})(jQuery);
"use strict";

;(function ($) {
  $(function () {
    $('[id^="propuesta-"]').on('show.bs.collapse', function (ev) {
      var buttons = $('.Btn-collapse'),
          typeButton = $(ev.target).attr('id').split('-')[1],
          button = '.Btn-collapse-' + typeButton;

      buttons.removeClass('active');
      $(button).addClass('active');
    });

    $('[data-namecollapse^="collapse-"]').on('show.bs.collapse', function (ev) {
      var $this = $(ev.target),
          buttons = $this.parent().prev('.Accordion__nav').find('.Accordion__list a'),
          button = '.Collapse--' + $this.attr('id');

      buttons.removeClass('active');
      $(button).addClass('active');
    });
  });
})(jQuery);
"use strict";

;(function ($) {
  var bxTestimonials = void 0,
      bxAchievements = void 0,
      bxInicial = void 0,
      bxPrimaria = void 0;

  $(function () {
    initBxSlider($('.testimonials-slider'), 2, bxTestimonials);

    initBxSlider($('.logros-slider'), 4, bxAchievements);

    initBxSlider($('.propuesta-slider'), 3, bxInicial);
  });

  var initBxSlider = function initBxSlider(bxSlider, bxSlides, wrapper) {
    var numSlides = bxSlider.find('.Sliders__item').length;

    if (numSlides < bxSlides + 1) {
      return;
    }

    var widthBxSlider = bxSlider.width() / 2 - 15,
        slides = window.matchMedia("(max-width: 767px)").matches ? 1 : bxSlides,
        marginSlide = window.matchMedia("(max-width: 767px)").matches ? 0 : 15;

    wrapper = bxSlider.bxSlider({
      auto: true,
      autoHover: true,
      pager: false,
      minSlides: slides,
      maxSlides: slides,
      moveSlides: 1,
      slideMargin: marginSlide,
      slideWidth: widthBxSlider,
      prevText: '<i class="icon-keyboard_arrow_left"></i>',
      nextText: '<i class="icon-keyboard_arrow_right"></i>'
    });
  };
})(jQuery);
//# sourceMappingURL=script.js.map
