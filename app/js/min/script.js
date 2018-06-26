"use strict";function initMap(){if(!infoMaps.length)return!1;var e={lat:infoMaps[0].lat,lng:infoMaps[0].long},l={zoom:16,center:e,scrollwheel:!1};infoMaps[0].map=new google.maps.Map(document.getElementById(infoMaps[0].id),l),infoMaps[0].marker=new google.maps.Marker({position:e,map:infoMaps[0].map,title:"Colegio Villa María - Miraflores"}),infoMaps[0].load=!0}!function(l){var r=l(window);l(function(){r.on("scroll",function(){e()}),e(),l(".ArrowTop").on("click",function(e){e.preventDefault(),l("html, body").animate({scrollTop:0},800)})});var e=function(){var e=l(".ArrowTop");150<r.scrollTop()?e.fadeIn():e.fadeOut()}}(jQuery),jQuery(function(){}),function(l){var e=l(window);l(function(){e.on("scroll",function(){}),l(".js-sidebar").on("click",function(e){e.preventDefault(),r()})});var r=function(){var e=l(".Sidebar");e.hasClass("active")?e.removeClass("active"):e.addClass("active")}}(jQuery),function(l){var e=l(window);l(function(){e.on("resize",function(){infoMaps.length&&infoMaps.forEach(function(e){l.isEmptyObject(e.map)||(google.maps.event.trigger(e.map,"resize"),e.map.setCenter({lat:e.lat,lng:e.long}))})})})}(jQuery),function(d){var e=d(window),l=d("body"),n=d(".Header");d(function(){e.on("scroll",function(){if(l.hasClass("category")||l.hasClass("single"))return!1;a()}),r(),d(".Header__menuTop__caret").on("click",function(e){e.preventDefault();var l=d(this),r=l.parent().next(".Header__menuTop__submenu");l.hasClass("active")?(l.removeClass("active icon-keyboard_arrow_up").addClass("icon-keyboard_arrow_down"),r.removeClass("active")):(l.removeClass("icon-keyboard_arrow_down").addClass("active icon-keyboard_arrow_up"),r.addClass("active"))})});var r=function(){if(l.hasClass("category")||l.hasClass("single"))return i(),!1;a()},a=function(){50<e.scrollTop()?i():o()},i=function(){var e=d(".Header__logo"),l=e.find("img"),r=(e.data("image"),e.data("imagehover")),a=d("#js-main-menu"),i=d("#js-main-menu-scroll");n.addClass("Header--scroll"),l.attr("src",r),a.addClass("hide"),i.removeClass("hide")},o=function(){var e=d(".Header__logo"),l=e.find("img"),r=e.data("image"),a=(e.data("imagehover"),d("#js-main-menu")),i=d("#js-main-menu-scroll");n.removeClass("Header--scroll"),l.attr("src",r),a.removeClass("hide"),i.addClass("hide")}}(jQuery),function(i){i(function(){i('[id^="propuesta-"]').on("show.bs.collapse",function(e){var l=i(".Btn-collapse"),r=".Btn-collapse-"+i(e.target).attr("id").split("-")[1];l.removeClass("active"),i(r).addClass("active")}),i('[data-namecollapse^="collapse-"]').on("show.bs.collapse",function(e){var l=i(e.target),r=l.parent().prev(".Accordion__nav").find(".Accordion__list a"),a=".Collapse--"+l.attr("id");r.removeClass("active"),i(a).addClass("active")})})}(jQuery),function(e){var l=e(window),r={wrapper:e(".testimonials-slider"),bx:null,margin:15,media:{xl:2,lg:2,md:1,xs:1}},a={wrapper:e(".logros-slider"),bx:null,margin:15,media:{xl:4,lg:3,md:2,xs:1}},i={wrapper:e(".aliados-slider"),bx:null,margin:15,media:{xl:3,lg:3,md:2,xs:1}},d={wrapper:e(".inicial-slider"),bx:null,margin:15,media:{xl:3,lg:3,md:2,xs:1}},n={wrapper:e(".primaria-slider"),bx:null,margin:15,media:{xl:3,lg:3,md:2,xs:1}},o={wrapper:e(".academico-slider"),bx:null,margin:15,media:{xl:5,lg:5,md:3,xs:1}},s={wrapper:e(".a-las-alumnas-slider"),bx:null,margin:15,media:{xl:5,lg:5,md:3,xs:1}},t={wrapper:e(".extracurriculares-slider"),bx:null,margin:15,media:{xl:5,lg:5,md:3,xs:1}};e(function(){x(r)&&(r.bx=r.wrapper.bxSlider(b(r))),x(a)&&(a.bx=a.wrapper.bxSlider(b(a))),x(i)&&(i.bx=i.wrapper.bxSlider(b(i))),x(d)&&(d.bx=d.wrapper.bxSlider(b(d))),x(n)&&(n.bx=n.wrapper.bxSlider(b(n))),x(o)&&(o.bx=o.wrapper.bxSlider(b(o))),x(s)&&(s.bx=s.wrapper.bxSlider(b(s))),x(t)&&(t.bx=t.wrapper.bxSlider(b(t))),e("#accordion-propuesta").on("shown.bs.collapse",function(){null===d.bx?x(d)?d.bx=d.wrapper.bxSlider(b(d,!0)):null!==d.bx&&(d.bx.destroySlider(),d.bx=null):x(d)?d.bx.reloadSlider(b(d,!0)):(d.bx.destroySlider(),d.bx=null),null===n.bx?x(n)?n.bx=n.wrapper.bxSlider(b(n,!0)):null!==n.bx&&(n.bx.destroySlider(),n.bx=null):x(n)?n.bx.reloadSlider(b(n,!0)):(n.bx.destroySlider(),n.bx=null)}),e("#tabsServices").on("shown.bs.tab",function(){null===o.bx?x(o)?o.bx=o.wrapper.bxSlider(b(o,!0)):null!==o.bx&&(o.bx.destroySlider(),o.bx=null):x(o)?o.bx.reloadSlider(b(o,!0)):(o.bx.destroySlider(),o.bx=null),null===s.bx?x(s)?s.bx=s.wrapper.bxSlider(b(s,!0)):null!==s.bx&&(s.bx.destroySlider(),s.bx=null):x(s)?s.bx.reloadSlider(b(s,!0)):(s.bx.destroySlider(),s.bx=null),null===t.bx?x(t)?t.bx=t.wrapper.bxSlider(b(t,!0)):null!==t.bx&&(t.bx.destroySlider(),t.bx=null):x(t)?t.bx.reloadSlider(b(t,!0)):(t.bx.destroySlider(),t.bx=null)}),l.on("resize",function(){null===r.bx?x(r)?r.bx=r.wrapper.bxSlider(b(r,!0)):null!==r.bx&&(r.bx.destroySlider(),r.bx=null):x(r)?r.bx.reloadSlider(b(r,!0)):(r.bx.destroySlider(),r.bx=null),null===a.bx?x(a)?a.bx=a.wrapper.bxSlider(b(a,!0)):null!==a.bx&&(a.bx.destroySlider(),a.bx=null):x(a)?a.bx.reloadSlider(b(a,!0)):(a.bx.destroySlider(),a.bx=null),null===i.bx?x(i)?i.bx=i.wrapper.bxSlider(b(i,!0)):null!==i.bx&&(i.bx.destroySlider(),i.bx=null):x(i)?i.bx.reloadSlider(b(i,!0)):(i.bx.destroySlider(),i.bx=null),null===d.bx?x(d)?d.bx=d.wrapper.bxSlider(b(d,!0)):null!==d.bx&&(d.bx.destroySlider(),d.bx=null):x(d)?d.bx.reloadSlider(b(d,!0)):(d.bx.destroySlider(),d.bx=null),null===n.bx?x(n)?n.bx=n.wrapper.bxSlider(b(n,!0)):null!==n.bx&&(n.bx.destroySlider(),n.bx=null):x(n)?n.bx.reloadSlider(b(n,!0)):(n.bx.destroySlider(),n.bx=null),null===o.bx?x(o)?o.bx=o.wrapper.bxSlider(b(o,!0)):null!==o.bx&&(o.bx.destroySlider(),o.bx=null):x(o)?o.bx.reloadSlider(b(o,!0)):(o.bx.destroySlider(),o.bx=null),null===s.bx?x(s)?s.bx=s.wrapper.bxSlider(b(s,!0)):null!==s.bx&&(s.bx.destroySlider(),s.bx=null):x(s)?s.bx.reloadSlider(b(s,!0)):(s.bx.destroySlider(),s.bx=null),null===t.bx?x(t)?t.bx=t.wrapper.bxSlider(b(t,!0)):null!==t.bx&&(t.bx.destroySlider(),t.bx=null):x(t)?t.bx.reloadSlider(b(t,!0)):(t.bx.destroySlider(),t.bx=null)})});var x=function(e){var l=e.wrapper.data("total");return window.matchMedia("(max-width: 767px)").matches?l>e.media.xs:window.matchMedia("(max-width: 991px)").matches?l>e.media.md:window.matchMedia("(max-width: 1199px)").matches?l>e.media.lg:l>e.media.xl},b=function(e){var l=1<arguments.length&&void 0!==arguments[1]&&arguments[1],r=e.wrapper.parent().width(),a={auto:!0,autoHover:!0,pager:!0,minSlides:1,maxSlides:1,moveSlides:1,slideMargin:0,slideWidth:0,controls:!1,prevText:'<i class="icon-keyboard_arrow_left"></i>',nextText:'<i class="icon-keyboard_arrow_right"></i>'};return window.matchMedia("(max-width: 767px)").matches||(window.matchMedia("(max-width: 991px)").matches?(a.minSlides=e.media.md,a.maxSlides=e.media.md,1<e.media.md&&(a.slideMargin=e.margin,a.slideWidth=r/e.media.md-a.slideMargin)):window.matchMedia("(max-width: 1199px)").matches?(a.minSlides=e.media.lg,a.maxSlides=e.media.lg,1<e.media.lg&&(a.slideMargin=e.margin,a.slideWidth=r/e.media.md-a.slideMargin)):(r=l?e.wrapper.parent().width():e.wrapper.parent().width()-96,a.minSlides=e.media.xl,a.maxSlides=e.media.xl,1<e.media.xl&&(a.controls=!0,a.slideMargin=e.margin,a.pager=!1,a.slideWidth=r/e.media.xl-a.slideMargin))),a}}(jQuery);