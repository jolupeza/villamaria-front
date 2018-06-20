"use strict";

;(function ($) {
  let bxTestimonials, bxAchievements, bxInicial, bxPrimaria;

  $(function () {
    initBxSlider($('.testimonials-slider'), 2, bxTestimonials);

    initBxSlider($('.logros-slider'), 4, bxAchievements);

    initBxSlider($('.propuesta-slider'), 3, bxInicial);
  });

  let initBxSlider = (bxSlider, bxSlides, wrapper) => {
    let numSlides = bxSlider.find('.Sliders__item').length;

    if (numSlides < bxSlides + 1) {
      return;
    }

    let widthBxSlider = (bxSlider.width() / 2) - 15,
        slides = window.matchMedia("(max-width: 767px)").matches ? 1 : bxSlides,
        marginSlide = window.matchMedia("(max-width: 767px)").matches ? 0 : 15

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
      nextText: '<i class="icon-keyboard_arrow_right"></i>',
    });
  }
})(jQuery);
