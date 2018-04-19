"use strict";

;(function ($) {
  let $window = $(window);

  $(function () {
    $window.on('scroll', function () {
      checkScrollHeader();
    });

    checkScrollHeader();

    $('.Header__menuTop__caret').on('click', function (ev) {
      ev.preventDefault();

      let $this = $(this),
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

  function checkScrollHeader () {
    let minScroll = 50,
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
