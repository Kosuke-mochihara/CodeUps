"use strict";

jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  var topBtn = $('.pagetop');
  topBtn.hide(); // ボタンの表示設定

  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  }); // ドロワー

  $('.js-hamburger').on('click', function () {
    if ($('.js-hamburger').hasClass('open')) {
      $('.js-drawer-menu').fadeOut();
      $('.js-overlay').fadeOut();
      $(this).removeClass('open');
    } else {
      $('.js-drawer-menu').fadeIn();
      $('.js-overlay').fadeIn();
      $(this).addClass('open');
    }
  }); // ボタンをクリックしたらスクロールして上に戻る

  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  }); // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    var time = 400;
    var header = $('header').innerHeight();
    var target = $(this.hash);
    if (!target.length) return;
    var targetY = target.offset().top - header;
    $('html,body').animate({
      scrollTop: targetY
    }, time, 'swing');
    return false;
  });
}); // フローティング

jQuery(window).on("scroll", function ($) {
  if (jQuery(this).scrollTop() > 100) {
    jQuery('.floating').show();
  } else {
    jQuery('.floating').hide();
  }
});
jQuery('.floating').click(function () {
  jQuery('body,html').animate({
    scrollTop: 0
  }, 500);
  return false;
});
var swipeOption = {
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  speed: 2000,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
}; //メイン

var slider = new Swiper('.gallery-slider', {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  loopedSlides: 6,
  //スライドの枚数と同じ値を指定
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
}); //サムネイル

var thumbs = new Swiper('.gallery-thumbs', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  slideToClickedSlide: true
}); //4系～
//メインとサムネイルを紐づける

slider.controller.control = thumbs;
thumbs.controller.control = slider;
new Swiper('.swiper-container--introduction', swipeOption);