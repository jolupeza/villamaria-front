"use strict";

;(function ($) {
  let bxTestimonials;

  $(function () {
    initBxSlider($('.testimonials-slider'), 2);

    initBxSlider($('.logros-slider'), 4);
  });

  function initBxSlider(bxSlider, bxSlides) {
    let numSlides = bxSlider.find('.Sliders__item').length;

    if (numSlides < bxSlides + 1) {
      return;
    }

    let widthBxSlider = (bxSlider.width() / 2) - 15,
        slides = window.matchMedia("(max-width: 767px)").matches ? 1 : bxSlides,
        marginSlide = window.matchMedia("(max-width: 767px)").matches ? 0 : 15

    bxTestimonials = bxSlider.bxSlider({
      auto: true,
      autoHover: true,
      pager: false,
      minSlides: slides,
      maxSlides: slides,
      moveSlides: 1,
      slideMargin: marginSlide,
      slideWidth: widthBxSlider,
      prevText: '<i class="icon-keyboard_arrow_left"></i>',
      nextText: '<i class="icon-keyboard_arrow_right"></i>',
    });
  }
})(jQuery);
