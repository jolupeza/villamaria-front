"use strict";

;(function ($) {
  $(function () {
    $('[id^="propuesta-"]').on('show.bs.collapse', (ev) => {
      let buttons = $('.Btn-collapse'),
          typeButton = $(ev.target).attr('id').split('-')[1],
          button = `.Btn-collapse-${typeButton}`;

      buttons.removeClass('active');
      $(button).addClass('active');
    });
  });
})(jQuery);
