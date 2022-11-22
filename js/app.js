$(document).ready(function () {
  // Toggle mobile sidebar
  $("#sidebar-toggle").on("click", function () {
    $("#sidebar-toggle").find("i").toggleClass("fa-bars fa-times");
    if ($(".mobile-sidebar").css("display").toLowerCase() == "flex") {
      $(".mobile-sidebar").animate({ width: "0px" }, "slow");
      $(".page-container").css("filter", "none");
      setTimeout(() => {
        $("body").css("overflow-y", "auto");
        $(".mobile-sidebar").hide();
      }, 600);
    } else {
      $("body").css("overflow-y", "hidden");
      $(".page-container").css("filter", "brightness(0.5)");
      $(".mobile-sidebar")
        .css("display", "flex")
        .animate({ width: "300px" }, "slow");
    }
  });

  // Toggle search field
  $(".search-field-toggle").on("click", function () {
    if ($(".search-field").css("display").toLowerCase() == "block") {
      $(".search-field").animate({ height: "0px" }, "slow");
      setTimeout(() => {
        $(".search-field").hide();
      }, 500);
    } else {
      $(".search-field").show().animate({ height: "50px" }, "slow");
    }
  });

  // Banner slide
  $(".banner-slide").slick({
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    dots: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(".dropdown").hover(function () {
    $(".dropdown-toggle", this).trigger("click");
  });

  $("#sidebar-collapse").on("click", function () {
    $("#collapsed-chevron").toggleClass("fa-plus fa-minus");
  });

  $("body").tooltip({ selector: "[data-toggle=tooltip]" });

  feather.replace();
});
