"use strict";!function(e){var o=e(window);e(function(){o.on("scroll",function(){a()}),a(),e(".ArrowTop").on("click",function(a){a.preventDefault(),e("html, body").animate({scrollTop:0},800)})});var a=function(){var a=e(".ArrowTop");150<o.scrollTop()?a.fadeIn():a.fadeOut()}}(jQuery),function(l){var c=l(window);function a(){var a=l(".Header"),e=l(".Header__logo"),o=e.find("img"),r=e.data("image"),s=e.data("imagehover"),n=l("#js-main-menu"),t=l("#js-main-menu-scroll");50<c.scrollTop()?(a.addClass("Header--scroll"),o.attr("src",s),n.addClass("hide"),t.removeClass("hide")):(a.removeClass("Header--scroll"),o.attr("src",r),n.removeClass("hide"),t.addClass("hide"))}l(function(){c.on("scroll",function(){a()}),a(),l(".Header__menuTop__caret").on("click",function(a){a.preventDefault();var e=l(this),o=e.parent().next(".Header__menuTop__submenu");e.hasClass("active")?(e.removeClass("active icon-keyboard_arrow_up").addClass("icon-keyboard_arrow_down"),o.removeClass("active")):(e.removeClass("icon-keyboard_arrow_down").addClass("active icon-keyboard_arrow_up"),o.addClass("active"))})})}(jQuery),function(s){s(function(){s('[id^="propuesta-"]').on("show.bs.collapse",function(a){var e=s(".Btn-collapse"),o=".Btn-collapse-"+s(a.target).attr("id").split("-")[1];e.removeClass("active"),s(o).addClass("active")}),s('[data-namecollapse^="collapse-"]').on("show.bs.collapse",function(a){var e=s(a.target),o=e.parent().prev(".Accordion__nav").find(".Accordion__list a"),r=".Collapse--"+e.attr("id");o.removeClass("active"),s(r).addClass("active")})})}(jQuery);