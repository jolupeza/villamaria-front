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
  let $window = $(window);

  $(function () {
    $window.on('scroll', () => {
      checkScroll();
    });

    checkScroll();

    $('.ArrowTop').on('click', (ev) => {
      ev.preventDefault();

      $('html, body').animate({scrollTop: 0}, 800);
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

  let checkScroll = () => {
    let arrow = $('.ArrowTop');

    if ( $window.scrollTop() > 150 ) {
      arrow.fadeIn();
    } else {
      arrow.fadeOut();
    }
  };
})(jQuery);

