//ヘッダーの高さ分だけコンテンツを下げる
$(function () {
  var height = $("#header").height();
  $("body").css("margin-top", height);
});

// スクロール後、ヘッダー変化
$(function () {
  var $header = $("#header");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 160) {
      $header.addClass("is-scroll");
    } else {
      $header.removeClass("is-scroll");
    }
  });
});
