// アコーディオン　一つ開き・他閉じ
jQuery(function () {
  jQuery(".js-ttl").on("click", function () {
    jQuery(".js-ttl").not(this).removeClass("open");
    jQuery(".js-ttl").not(this).next().slideUp(200);
    jQuery(this).next().slideToggle(200);
    jQuery(this).toggleClass("open", 200);
  });
});

// ビッグメニュー


// メディアクエリのブレークポイント
const breakPoint = 768;

// メガメニュー関連の要素
const megaMenuButtons = document.querySelectorAll(".js-button-megaMenu");
const megaMenuBgs = document.querySelectorAll(".js-megaMenu-bg");
const megaMenus = document.querySelectorAll(".js-megaMenu");

// クラス名
const openClass = "is-open";

// タッチデバイスの判定
const isTouchDevice = () => {
    return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches
    );
};

// モバイルデバイスの判定
const isMobileDevice = () => {
    return window.matchMedia(`(max-width: ${breakPoint}px)`).matches;
};

// メガメニューの開閉を制御するイベントハンドラ
const menuToggleAction = (e) => {
    if (!isTouchDevice() && !isMobileDevice()) {
        return;
    }

    const button = e.currentTarget;
    const currentMegaMenu = button.closest(".js-megaMenu");
    const isOpened = currentMegaMenu.classList.contains(openClass);

    megaMenus.forEach((megaMenu) => {
        if (megaMenu !== currentMegaMenu) {
            megaMenu.classList.remove(openClass);
        }
    });

    currentMegaMenu.classList.toggle(openClass, !isOpened);
};

// 各メガメニューボタンにクリックイベントを設定
megaMenuButtons.forEach((button) => {
    button.addEventListener("click", menuToggleAction);
});

// メガメニューの背景にクリックイベントを設定し、背景がクリックされた際にメガメニューを閉じる
megaMenuBgs.forEach((bg) => {
    bg.addEventListener("click", () => {
        megaMenus.forEach((megaMenu) => {
            megaMenu.classList.remove(openClass);
        });
    });
});

// メディアクエリの状態が変わった時の処理
const matchMedia = window.matchMedia(`(min-width: ${breakPoint}px)`);
const handleMediaChange = (e) => {
    if (e.matches) {
        megaMenus.forEach((megaMenu) => {
            megaMenu.classList.remove(openClass);
        });
    }
};

matchMedia.addListener(handleMediaChange);
handleMediaChange(matchMedia);

// // header nav
// // 左側のメニューボタンがクリックされたときの処理
// jQuery("#js-openbtn-left").click(function () {
//   if (jQuery("#js-openbtn-left").hasClass("is-active")) {
//     resetClasses();
//     resetClassesLeft();
//   } else {
//     resetClasses();
//     toggleClassesLeft();
//     resetClassesRight();
//   }
// });

// // 右側のメニューボタンがクリックされたときの処理
// jQuery("#js-openbtn-right").click(function () {
//   if (jQuery("#js-openbtn-right").hasClass("is-active")) {
//     resetClasses();
//     resetClassesRight();
//   } else {
//     resetClasses();
//     toggleClassesRight();
//     resetClassesLeft();
//   }
// });

// // 左側のメニュー内のリンクがクリックされたときの処理
// jQuery("#js-hamLeft-inner a").click(function () {
//   resetClasses();
// });

// // メニュー部分がクリックされたときの処理
// jQuery("#js-g-nav").click(function () {
//   resetClasses();
// });

// function toggleClassesLeft() {
//   jQuery("#js-openbtn-left").toggleClass("is-active");
//   jQuery("#js-g-nav").toggleClass("is-open");
//   jQuery("#js-body").toggleClass("is-active");
//   jQuery("#js-body, #js-ham-left").removeClass("js-noneLeft");
//   jQuery("#js-ham-right").addClass("js-noneRight");
// }

// function toggleClassesRight() {
//   jQuery("#js-openbtn-right").toggleClass("is-active");
//   jQuery("#js-g-nav").toggleClass("is-open");
//   jQuery("#js-body").toggleClass("is-active");
//   jQuery("#js-body, #js-ham-right").removeClass("js-noneRight");
//   jQuery("#js-ham-left").addClass("js-noneLeft");
// }

// function resetClasses() {
//   jQuery("#js-openbtn-left, #js-openbtn-right").removeClass("is-active");
//   jQuery("#js-g-nav").removeClass("is-open");
//   jQuery("#js-body, #js-ham-left, #js-ham-right").removeClass("is-active");
// }

// function resetClassesLeft() {
//   jQuery("#js-openbtn-left").removeClass("is-active");
//   jQuery("#js-body, #js-ham-left").removeClass("is-active");
// }

// function resetClassesRight() {
//   jQuery("#js-openbtn-right").removeClass("is-active");
//   jQuery("#js-body, #js-ham-right").removeClass("is-active");
// }
