"use strict";

;(function ($) {
  let $window = $(window),
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

  let checkScrollHeader = () => {
    if ($body.hasClass('category') || $body.hasClass('single')) {
      activeHeaderScroll(); return false;
    }

    headerScroll();
  }

  let headerScroll = () => {
    let minScroll = 50;

    if ($window.scrollTop() > minScroll) {
      activeHeaderScroll();
    } else {
      removeHeaderScroll();
    }
  }

  let activeHeaderScroll = () => {
    let headerLogo = $('.Header__logo'),
      logo = headerLogo.find('img'),
      logoImage = headerLogo.data('image'),
      logoImageHover = headerLogo.data('imagehover'),
      menu = $('#js-main-menu'),
      menuHover = $('#js-main-menu-scroll');

    $header.addClass('Header--scroll');
    logo.attr('src', logoImageHover);
    menu.addClass('hide');
    menuHover.removeClass('hide');
  }

  let removeHeaderScroll = () => {
    let headerLogo = $('.Header__logo'),
      logo = headerLogo.find('img'),
      logoImage = headerLogo.data('image'),
      logoImageHover = headerLogo.data('imagehover'),
      menu = $('#js-main-menu'),
      menuHover = $('#js-main-menu-scroll');

    $header.removeClass('Header--scroll');
    logo.attr('src', logoImage);
    menu.removeClass('hide');
    menuHover.addClass('hide');
  }
})(jQuery);
