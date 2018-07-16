"use strict";

;(function ($) {
  $(function () {
    if (window.location.hash) {
      let idAdmision = window.location.hash,
          objAdmision = $(window.location.hash),
          hashValue = window.location.hash.replace('#', ''),
          typeAdmision = hashValue.split('-')[1];

      if (objAdmision.length) {
        $('#tabsAdmision a[href="#'+typeAdmision+'"]').tab('show');

        setTimeout(() => {
          $('html, body').stop().animate({
            scrollTop: $(idAdmision).offset().top
          }, 800);
        }, 500)
      }
    }
  });
})(jQuery);
