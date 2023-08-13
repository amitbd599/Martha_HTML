/***************************************************
==================== JS INDEX ======================
****************************************************


01. Hero Slider One
02. Team Slider One
03. service Slider One
04. Counter Js
05. Testimonial Slider One
06. Testimonial Slider two
07. magnificPopup video view
08. Sticky Header-1 Js
09. Sticky Header-2 Js
10. Sidebar Js
11. PreLoader Js
12. Mobile Menu Js
13. Body overlay Js
14. Wow Js
15. Sidebar Js
16. Data CSS Js

****************************************************/

(function ($) {
  "use strict";

  var windowOn = $(window);

  //! Dark Mode

  var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
  var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

  // Change the icons inside the button based on previous settings
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    themeToggleLightIcon.classList.remove("hidden");
  } else {
    themeToggleDarkIcon.classList.remove("hidden");
  }

  var themeToggleBtn = document.getElementById("theme-toggle");

  themeToggleBtn.addEventListener("click", function () {
    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle("hidden");
    themeToggleLightIcon.classList.toggle("hidden");

    // if set via local storage previously
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  });

  // Dark For Mobile
  var themeToggleDarkIconMobile = document.getElementById(
    "theme-toggle-dark-icon-mobile"
  );
  var themeToggleLightIconMobile = document.getElementById(
    "theme-toggle-light-icon-mobile"
  );

  // Change the icons inside the button based on previous settings
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    themeToggleLightIconMobile.classList.remove("hidden");
  } else {
    themeToggleDarkIconMobile.classList.remove("hidden");
  }

  var themeToggleBtn = document.getElementById("theme-toggle-mobile");

  themeToggleBtn.addEventListener("click", function () {
    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle("hidden");
    themeToggleLightIcon.classList.toggle("hidden");

    // if set via local storage previously
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  });

  //! 04. Counter Js
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  //! 10. Sidebar Js
  $(".sidebar-open").on("click", function () {
    $(".sidebar").addClass("left-0");
  });

  $(".sidebar-close").on("click", function () {
    $(".sidebar").removeClass("left-0");
  });

  //! 11. PreLoader Js
  windowOn.on("load", function () {
    $(".InitLoader").fadeOut(1000);
  });

  //! Type js

  $(".typeIntro").typer({
    strings: ["Hire Me!", "Need Help?", "Contact Now"],
    typeSpeed: 300,
  });

  //! 13. Body overlay Js
  $(".body-overlay").on("click", function () {
    $(".sidebar__area").removeClass("sidebar-opened");
    $(".body-overlay").removeClass("opened");
  });

  //! 14. Wow Js
  new WOW().init();

  // !barfiller
  $("#bar1").barfiller({ barColor: "#EEFF03" });
  $("#bar2").barfiller({ barColor: "#EEFF03" });
  $("#bar3").barfiller({ barColor: "#EEFF03" });
  $("#bar4").barfiller({ barColor: "#EEFF03" });
  $("#bar5").barfiller({ barColor: "#EEFF03" });
  $("#bar6").barfiller({ barColor: "#EEFF03" });

  //! swiper
  if (jQuery(".review").length > 0) {
    var review = new Swiper(".review", {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 6000,
      },
      pagination: {
        el: ".pagination",
        type: "fraction",
        // clickable: true,
      },
      navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
          // pagination: false,
          slidesPerGroup: 1,
        },
        576: {
          slidesPerView: 2,
          // pagination: false,
          slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 2,
        },
      },
    });
  }

  $("[data-background").each(function () {
    $(this).css(
      "background-image",
      "url( " + $(this).attr("data-background") + "  )"
    );
  });

  $("[data-width]").each(function () {
    $(this).css("width", $(this).attr("data-width"));
  });

  $("[data-bg-color]").each(function () {
    $(this).css("background-color", $(this).attr("data-bg-color"));
  });
})(jQuery);
