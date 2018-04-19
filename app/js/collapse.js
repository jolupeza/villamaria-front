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

    $('[data-namecollapse^="collapse-"]').on('show.bs.collapse', (ev) => {
      let $this = $(ev.target),
          buttons = $this.parent().prev('.Accordion__nav').find('.Accordion__list a'),
          button = `.Collapse--${$this.attr('id')}`;

      buttons.removeClass('active');
      $(button).addClass('active');
    });
  });
})(jQuery);
