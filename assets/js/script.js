// アコーディオン　一つ開き・他閉じ
jQuery(function () {
  jQuery(".js-ttl").on("click", function () {
    jQuery(".js-ttl").not(this).removeClass("open");
    jQuery(".js-ttl").not(this).next().slideUp(200);
    jQuery(this).next().slideToggle(200);
    jQuery(this).toggleClass("open", 200);
  });
});

// ハンバーガーメニュー

// 家具
jQuery("#js-openbtn-left").click(function () {
  jQuery("#js-openbtn-left").toggleClass("is-active");
  jQuery("#js-g-nav").toggleClass("is-open");
  jQuery("#js-body, #js-hamLeft").toggleClass("is-active");
});
jQuery("#js-hamLeft a").click(function () {
  jQuery("#js-openbtn-left").toggleClass("is-active");
  jQuery("#js-g-nav").toggleClass("is-open");
  jQuery("#js-body, #js-hamLeft").toggleClass("is-active");
});
jQuery("#js-g-nav").click(function () {
  jQuery("#js-openbtn-left").toggleClass("is-active");
  jQuery("#js-g-nav").toggleClass("is-open");
  jQuery("#js-body, #js-hamLeft").toggleClass("is-active");
});
jQuery("#js-openbtn-left").click(function () {
  jQuery("#js-hamRight").removeClass("is-active");
});
// jQuery("#js-openbtn-right").click(function () {
//   jQuery("#js-openbtn-left").removeClass("is-active");
//   jQuery("#js-g-nav").removeClass("is-open");
//   jQuery("#js-body, #js-hamLeft").removeClass("is-active");
// });

// 家電
// jQuery("#js-openbtn-right").click(function () {
//   jQuery("#js-openbtn-right").toggleClass("is-active");
//   jQuery("#js-g-nav").toggleClass("is-open");
//   jQuery("#js-body, #js-hamRight").toggleClass("is-active");
// });
// jQuery("#js-hamRight a").click(function () {
//   jQuery("#js-openbtn-right").toggleClass("is-active");
//   jQuery("#js-g-nav").toggleClass("is-open");
//   jQuery("#js-body, #js-hamRight").toggleClass("is-active");
// });
// jQuery("#js-g-nav").click(function () {
//   jQuery("#js-openbtn-right").toggleClass("is-active");
//   jQuery("#js-g-nav").toggleClass("is-open");
//   jQuery("#js-body, #js-hamRight").toggleClass("is-active");
//   jQuery("#js-hamRight").toggleClass("is-active");
// });
// jQuery("#js-openbtn-right").click(function () {
//   jQuery("#js-hamLeft").removeClass("is-active");
// });
