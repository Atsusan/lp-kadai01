// アコーディオン　一つ開き・他閉じ
jQuery(function () {
  jQuery(".js-ttl").on("click", function () {
    jQuery(".js-ttl").not(this).removeClass("open");
    jQuery(".js-ttl").not(this).next().slideUp(200);
    jQuery(this).next().slideToggle(200);
    jQuery(this).toggleClass("open", 200);
  });
});

// 左側のメニューボタンがクリックされたときの処理
jQuery("#js-openbtn-left").click(function () {
  toggleClassesLeft();
  resetClassesRight();
});

// 左側のメニュー内のリンクがクリックされたときの処理
jQuery("#js-hamLeft-inner a").click(function () {
  resetClasses();
});

// メニュー部分がクリックされたときの処理
jQuery("#js-g-nav").click(function () {
  resetClasses();
});

// 右側のメニューボタンがクリックされたときの処理
jQuery("#js-openbtn-right").click(function () {
  toggleClassesRight();
  resetClassesLeft();
});

function toggleClassesLeft() {
  jQuery("#js-openbtn-left").toggleClass("is-active");
  jQuery("#js-g-nav").toggleClass("is-open");
  jQuery("#js-body").toggleClass("is-active");
  jQuery("#js-body, #js-ham-left").removeClass("js-noneLeft");
  jQuery("#js-ham-right").addClass("js-noneRight");
}

function toggleClassesRight() {
  jQuery("#js-openbtn-right").toggleClass("is-active");
  jQuery("#js-g-nav").toggleClass("is-open");
  jQuery("#js-body").toggleClass("is-active");
  jQuery("#js-body, #js-ham-right").removeClass("js-noneRight");
  jQuery("#js-ham-left").addClass("js-noneLeft");
}

function resetClasses() {
  jQuery("#js-openbtn-left, #js-openbtn-right").removeClass("is-active");
  jQuery("#js-g-nav").removeClass("is-open");
  jQuery("#js-body, #js-ham-left, #js-ham-right").removeClass("is-active");
}

function resetClassesLeft() {
  jQuery("#js-openbtn-left").removeClass("is-active");
  jQuery("#js-body, #js-ham-left").removeClass("is-active");
}

function resetClassesRight() {
  jQuery("#js-openbtn-right").removeClass("is-active");
  jQuery("#js-body, #js-ham-right").removeClass("is-active");
}
