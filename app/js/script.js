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
  $(function () {});
})(jQuery);
"use strict";

;(function ($) {
  var $window = $(window);

  $(function () {
    $window.on('scroll', function () {});

    $('.js-sidebar').on('click', function (ev) {
      ev.preventDefault();

      checkSidebar();
    });

    //$window.on('resize',  function () {
    //  verifyMedia();
    //});
  });

  var checkSidebar = function checkSidebar() {
    var sidebar = $('.Sidebar');

    if (sidebar.hasClass('active')) {
      sidebar.removeClass('active');
    } else {
      sidebar.addClass('active');
    }
  };
})(jQuery);
'use strict';

function initMap() {
  if (!infoMaps.length) {
    return false;
  }

  var mapCoord = { lat: infoMaps[0].lat, lng: infoMaps[0].long },
      options = {
    zoom: 16,
    center: mapCoord,
    scrollwheel: false
  };

  infoMaps[0].map = new google.maps.Map(document.getElementById(infoMaps[0].id), options);

  infoMaps[0].marker = new google.maps.Marker({
    position: mapCoord,
    map: infoMaps[0].map,
    title: 'Colegio Villa María - Miraflores'
  });

  infoMaps[0].load = true;
}

;(function ($) {
  var $window = $(window);

  $(function () {
    $window.on('resize', function () {
      if (infoMaps.length) {

        infoMaps.forEach(function (info) {
          if (!$.isEmptyObject(info.map)) {
            google.maps.event.trigger(info.map, "resize");
            info.map.setCenter({ lat: info.lat, lng: info.long });
          }
        });
      }
    });
  });
})(jQuery);
"use strict";

;(function ($) {
  var $window = $(window),
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

  var checkScrollHeader = function checkScrollHeader() {
    if ($body.hasClass('category') || $body.hasClass('single')) {
      activeHeaderScroll();return false;
    }

    headerScroll();
  };

  var headerScroll = function headerScroll() {
    var minScroll = 50;

    if ($window.scrollTop() > minScroll) {
      activeHeaderScroll();
    } else {
      removeHeaderScroll();
    }
  };

  var activeHeaderScroll = function activeHeaderScroll() {
    var headerLogo = $('.Header__logo'),
        logo = headerLogo.find('img'),
        logoImage = headerLogo.data('image'),
        logoImageHover = headerLogo.data('imagehover'),
        menu = $('#js-main-menu'),
        menuHover = $('#js-main-menu-scroll');

    $header.addClass('Header--scroll');
    logo.attr('src', logoImageHover);
    menu.addClass('hide');
    menuHover.removeClass('hide');
  };

  var removeHeaderScroll = function removeHeaderScroll() {
    var headerLogo = $('.Header__logo'),
        logo = headerLogo.find('img'),
        logoImage = headerLogo.data('image'),
        logoImageHover = headerLogo.data('imagehover'),
        menu = $('#js-main-menu'),
        menuHover = $('#js-main-menu-scroll');

    $header.removeClass('Header--scroll');
    logo.attr('src', logoImage);
    menu.removeClass('hide');
    menuHover.addClass('hide');
  };
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
"use strict";

;(function ($) {
  var $window = $(window),
      bxTestimonials = {
    wrapper: $('.testimonials-slider'),
    bx: null,
    margin: 15,
    media: {
      xl: 2,
      lg: 2,
      md: 1,
      xs: 1
    }
  },
      bxAchievements = {
    wrapper: $('.logros-slider'),
    bx: null,
    margin: 15,
    media: {
      xl: 4,
      lg: 3,
      md: 2,
      xs: 1
    }
  },
      bxPartners = {
    wrapper: $('.aliados-slider'),
    bx: null,
    margin: 15,
    media: {
      xl: 3,
      lg: 3,
      md: 2,
      xs: 1
    }
  },
      bxInicial = {
    wrapper: $('.inicial-slider'),
    bx: null,
    margin: 15,
    media: {
      xl: 3,
      lg: 3,
      md: 2,
      xs: 1
    }
  },
      bxPrimaria = {
    wrapper: $('.primaria-slider'),
    bx: null,
    margin: 15,
    media: {
      xl: 3,
      lg: 3,
      md: 2,
      xs: 1
    }
  },
      bxAcademico = {
    wrapper: $('.academicos-slider'),
    bx: null,
    margin: 15,
    media: {
      xl: 5,
      lg: 5,
      md: 3,
      xs: 1
    }
  },
      bxAlumnas = {
    wrapper: $('.a-las-alumnas-slider'),
    bx: null,
    margin: 15,
    media: {
      xl: 5,
      lg: 5,
      md: 3,
      xs: 1
    }
  },
      bxExtra = {
    wrapper: $('.extracurriculares-slider'),
    bx: null,
    margin: 15,
    media: {
      xl: 5,
      lg: 5,
      md: 3,
      xs: 1
    }
  };

  $(function () {
    if (checkBxSlider(bxTestimonials)) {
      bxTestimonials.bx = bxTestimonials.wrapper.bxSlider(initBxSlider(bxTestimonials));
    }

    if (checkBxSlider(bxAchievements)) {
      bxAchievements.bx = bxAchievements.wrapper.bxSlider(initBxSlider(bxAchievements));
    }

    if (checkBxSlider(bxPartners)) {
      bxPartners.bx = bxPartners.wrapper.bxSlider(initBxSlider(bxPartners));
    }

    if (checkBxSlider(bxInicial)) {
      bxInicial.bx = bxInicial.wrapper.bxSlider(initBxSlider(bxInicial));
    }

    if (checkBxSlider(bxPrimaria)) {
      bxPrimaria.bx = bxPrimaria.wrapper.bxSlider(initBxSlider(bxPrimaria));
    }

    if (checkBxSlider(bxAcademico)) {
      bxAcademico.bx = bxAcademico.wrapper.bxSlider(initBxSlider(bxAcademico));
    }

    if (checkBxSlider(bxAlumnas)) {
      bxAlumnas.bx = bxAlumnas.wrapper.bxSlider(initBxSlider(bxAlumnas));
    }

    if (checkBxSlider(bxExtra)) {
      bxExtra.bx = bxExtra.wrapper.bxSlider(initBxSlider(bxExtra));
    }

    $('#accordion-propuesta').on('shown.bs.collapse', function () {
      if (bxInicial.bx === null) {
        if (checkBxSlider(bxInicial)) {
          bxInicial.bx = bxInicial.wrapper.bxSlider(initBxSlider(bxInicial, true));
        } else {
          if (bxInicial.bx !== null) {
            bxInicial.bx.destroySlider();
            bxInicial.bx = null;
          }
        }
      } else {
        if (checkBxSlider(bxInicial)) {
          bxInicial.bx.reloadSlider(initBxSlider(bxInicial, true));
        } else {
          bxInicial.bx.destroySlider();
          bxInicial.bx = null;
        }
      }

      if (bxPrimaria.bx === null) {
        if (checkBxSlider(bxPrimaria)) {
          bxPrimaria.bx = bxPrimaria.wrapper.bxSlider(initBxSlider(bxPrimaria, true));
        } else {
          if (bxPrimaria.bx !== null) {
            bxPrimaria.bx.destroySlider();
            bxPrimaria.bx = null;
          }
        }
      } else {
        if (checkBxSlider(bxPrimaria)) {
          bxPrimaria.bx.reloadSlider(initBxSlider(bxPrimaria, true));
        } else {
          bxPrimaria.bx.destroySlider();
          bxPrimaria.bx = null;
        }
      }
    });

    $('#tabsServices').on('shown.bs.tab', function () {
      if (bxAcademico.bx === null) {
        if (checkBxSlider(bxAcademico)) {
          bxAcademico.bx = bxAcademico.wrapper.bxSlider(initBxSlider(bxAcademico, true));
        } else {
          if (bxAcademico.bx !== null) {
            bxAcademico.bx.destroySlider();
            bxAcademico.bx = null;
          }
        }
      } else {
        if (checkBxSlider(bxAcademico)) {
          bxAcademico.bx.reloadSlider(initBxSlider(bxAcademico, true));
        } else {
          bxAcademico.bx.destroySlider();
          bxAcademico.bx = null;
        }
      }

      if (bxAlumnas.bx === null) {
        if (checkBxSlider(bxAlumnas)) {
          bxAlumnas.bx = bxAlumnas.wrapper.bxSlider(initBxSlider(bxAlumnas, true));
        } else {
          if (bxAlumnas.bx !== null) {
            bxAlumnas.bx.destroySlider();
            bxAlumnas.bx = null;
          }
        }
      } else {
        if (checkBxSlider(bxAlumnas)) {
          bxAlumnas.bx.reloadSlider(initBxSlider(bxAlumnas, true));
        } else {
          bxAlumnas.bx.destroySlider();
          bxAlumnas.bx = null;
        }
      }

      if (bxExtra.bx === null) {
        if (checkBxSlider(bxExtra)) {
          bxExtra.bx = bxExtra.wrapper.bxSlider(initBxSlider(bxExtra, true));
        } else {
          if (bxExtra.bx !== null) {
            bxExtra.bx.destroySlider();
            bxExtra.bx = null;
          }
        }
      } else {
        if (checkBxSlider(bxExtra)) {
          bxExtra.bx.reloadSlider(initBxSlider(bxExtra, true));
        } else {
          bxExtra.bx.destroySlider();
          bxExtra.bx = null;
        }
      }
    });

    $window.on('resize', function () {
      if (bxTestimonials.bx === null) {
        if (checkBxSlider(bxTestimonials)) {
          bxTestimonials.bx = bxTestimonials.wrapper.bxSlider(initBxSlider(bxTestimonials, true));
        } else {
          if (bxTestimonials.bx !== null) {
            bxTestimonials.bx.destroySlider();
            bxTestimonials.bx = null;
          }
        }
      } else {
        if (checkBxSlider(bxTestimonials)) {
          bxTestimonials.bx.reloadSlider(initBxSlider(bxTestimonials, true));
        } else {
          bxTestimonials.bx.destroySlider();
          bxTestimonials.bx = null;
        }
      }

      if (bxAchievements.bx === null) {
        if (checkBxSlider(bxAchievements)) {
          bxAchievements.bx = bxAchievements.wrapper.bxSlider(initBxSlider(bxAchievements, true));
        } else {
          if (bxAchievements.bx !== null) {
            bxAchievements.bx.destroySlider();
            bxAchievements.bx = null;
          }
        }
      } else {
        if (checkBxSlider(bxAchievements)) {
          bxAchievements.bx.reloadSlider(initBxSlider(bxAchievements, true));
        } else {
          bxAchievements.bx.destroySlider();
          bxAchievements.bx = null;
        }
      }

      if (bxPartners.bx === null) {
        if (checkBxSlider(bxPartners)) {
          bxPartners.bx = bxPartners.wrapper.bxSlider(initBxSlider(bxPartners, true));
        } else {
          if (bxPartners.bx !== null) {
            bxPartners.bx.destroySlider();
            bxPartners.bx = null;
          }
        }
      } else {
        if (checkBxSlider(bxPartners)) {
          bxPartners.bx.reloadSlider(initBxSlider(bxPartners, true));
        } else {
          bxPartners.bx.destroySlider();
          bxPartners.bx = null;
        }
      }

      if (bxInicial.bx === null) {
        if (checkBxSlider(bxInicial)) {
          bxInicial.bx = bxInicial.wrapper.bxSlider(initBxSlider(bxInicial, true));
        } else {
          if (bxInicial.bx !== null) {
            bxInicial.bx.destroySlider();
            bxInicial.bx = null;
          }
        }
      } else {
        if (checkBxSlider(bxInicial)) {
          bxInicial.bx.reloadSlider(initBxSlider(bxInicial, true));
        } else {
          bxInicial.bx.destroySlider();
          bxInicial.bx = null;
        }
      }

      if (bxPrimaria.bx === null) {
        if (checkBxSlider(bxPrimaria)) {
          bxPrimaria.bx = bxPrimaria.wrapper.bxSlider(initBxSlider(bxPrimaria, true));
        } else {
          if (bxPrimaria.bx !== null) {
            bxPrimaria.bx.destroySlider();
            bxPrimaria.bx = null;
          }
        }
      } else {
        if (checkBxSlider(bxPrimaria)) {
          bxPrimaria.bx.reloadSlider(initBxSlider(bxPrimaria, true));
        } else {
          bxPrimaria.bx.destroySlider();
          bxPrimaria.bx = null;
        }
      }

      if (bxAcademico.bx === null) {
        if (checkBxSlider(bxAcademico)) {
          bxAcademico.bx = bxAcademico.wrapper.bxSlider(initBxSlider(bxAcademico, true));
        } else {
          if (bxAcademico.bx !== null) {
            bxAcademico.bx.destroySlider();
            bxAcademico.bx = null;
          }
        }
      } else {
        if (checkBxSlider(bxAcademico)) {
          bxAcademico.bx.reloadSlider(initBxSlider(bxAcademico, true));
        } else {
          bxAcademico.bx.destroySlider();
          bxAcademico.bx = null;
        }
      }

      if (bxAlumnas.bx === null) {
        if (checkBxSlider(bxAlumnas)) {
          bxAlumnas.bx = bxAlumnas.wrapper.bxSlider(initBxSlider(bxAlumnas, true));
        } else {
          if (bxAlumnas.bx !== null) {
            bxAlumnas.bx.destroySlider();
            bxAlumnas.bx = null;
          }
        }
      } else {
        if (checkBxSlider(bxAlumnas)) {
          bxAlumnas.bx.reloadSlider(initBxSlider(bxAlumnas, true));
        } else {
          bxAlumnas.bx.destroySlider();
          bxAlumnas.bx = null;
        }
      }

      if (bxExtra.bx === null) {
        if (checkBxSlider(bxExtra)) {
          bxExtra.bx = bxExtra.wrapper.bxSlider(initBxSlider(bxExtra, true));
        } else {
          if (bxExtra.bx !== null) {
            bxExtra.bx.destroySlider();
            bxExtra.bx = null;
          }
        }
      } else {
        if (checkBxSlider(bxExtra)) {
          bxExtra.bx.reloadSlider(initBxSlider(bxExtra, true));
        } else {
          bxExtra.bx.destroySlider();
          bxExtra.bx = null;
        }
      }
    });
  });

  var checkBxSlider = function checkBxSlider(obj) {
    var numSlides = obj.wrapper.data('total');

    if (window.matchMedia("(max-width: 767px)").matches) {
      return numSlides > obj.media.xs;
    }

    if (window.matchMedia("(max-width: 991px)").matches) {
      return numSlides > obj.media.md;
    }

    if (window.matchMedia("(max-width: 1199px)").matches) {
      return numSlides > obj.media.lg;
    }

    return numSlides > obj.media.xl;
  };

  var initBxSlider = function initBxSlider(obj) {
    var reload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var widthParent = obj.wrapper.parent().width();

    var config = {
      auto: true,
      autoHover: true,
      pager: true,
      minSlides: 1,
      maxSlides: 1,
      moveSlides: 1,
      slideMargin: 0,
      slideWidth: 0,
      controls: false,
      prevText: '<i class="icon-keyboard_arrow_left"></i>',
      nextText: '<i class="icon-keyboard_arrow_right"></i>'
    };

    if (window.matchMedia("(max-width: 767px)").matches) {
      return config;
    }

    if (window.matchMedia("(max-width: 991px)").matches) {
      config.minSlides = obj.media.md;
      config.maxSlides = obj.media.md;

      if (obj.media.md > 1) {
        config.slideMargin = obj.margin;
        config.slideWidth = widthParent / obj.media.md - config.slideMargin;
      }

      return config;
    }

    if (window.matchMedia("(max-width: 1199px)").matches) {
      config.minSlides = obj.media.lg;
      config.maxSlides = obj.media.lg;

      if (obj.media.lg > 1) {
        config.slideMargin = obj.margin;
        config.slideWidth = widthParent / obj.media.md - config.slideMargin;
      }

      return config;
    }

    widthParent = reload ? obj.wrapper.parent().width() : obj.wrapper.parent().width() - 96;

    config.minSlides = obj.media.xl;
    config.maxSlides = obj.media.xl;

    if (obj.media.xl > 1) {
      config.controls = true;
      config.slideMargin = obj.margin;
      config.pager = false;
      config.slideWidth = widthParent / obj.media.xl - config.slideMargin;
    }

    return config;
  };
})(jQuery);
//# sourceMappingURL=script.js.map
