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
"use strict";

;(function ($) {
  var $window = $(window);

  $(function () {
    $window.on('scroll', function () {
      checkScrollHeader();
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

  function checkScrollHeader() {
    var minScroll = 50,
        header = $('.Header'),
        headerLogo = $('.Header__logo'),
        logo = headerLogo.find('img'),
        logoImage = headerLogo.data('image'),
        logoImageHover = headerLogo.data('imagehover'),
        menu = $('#js-main-menu'),
        menuHover = $('#js-main-menu-scroll');

    if ($window.scrollTop() > minScroll) {
      header.addClass('Header--scroll');
      logo.attr('src', logoImageHover);
      menu.addClass('hide');
      menuHover.removeClass('hide');
    } else {
      header.removeClass('Header--scroll');
      logo.attr('src', logoImage);
      menu.removeClass('hide');
      menuHover.addClass('hide');
    }
  }
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
//# sourceMappingURL=script.js.map
