"use strict";

;(function ($) {
  let $window = $(window);

  $(function () {
    $window.on('scroll', () => {
    });

    $('.js-sidebar').on('click', (ev) => {
      ev.preventDefault();

      checkSidebar();
    });

    //$window.on('resize',  function () {
    //  verifyMedia();
    //});
  });

  let checkSidebar = () => {
    let sidebar = $('.Sidebar');

    if (sidebar.hasClass('active')) {
      sidebar.removeClass('active');
    } else {
      sidebar.addClass('active');
    }
  };
})(jQuery);

