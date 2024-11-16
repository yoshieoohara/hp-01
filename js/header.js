// TOP過ぎたらヘッダー変化
 jQuery(function ($) {
    $(window).on("scroll", function () {
    mvHeight = $(".js-top").height();
    if ($(window).scrollTop() > mvHeight) {
        $(".js-header").addClass("is-scroll");
    } else {
        $(".js-header").removeClass("is-scroll");
    }
    });
});