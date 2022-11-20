$(document).ready(function () {
  // Toggle mobile sidebar
  $("#sidebar-toggle").on("click", function () {
    $("#sidebar-toggle").find("i").toggleClass("fa-bars fa-times");
    if ($(".mobile-sidebar").css("display").toLowerCase() == "block") {
      $(".mobile-sidebar").animate({ width: "0px" }, "slow");
      $(".page-container").css("filter", "none");
      setTimeout(() => {
        $("body").css("overflow-y", "auto");
        $(".mobile-sidebar").hide();
      }, 600);
    } else {
      $("body").css("overflow-y", "hidden");
      $(".page-container").css("filter", "brightness(0.5)");
      $(".mobile-sidebar").show().animate({ width: "300px" }, "slow");
    }
  });

  // Toggle search field
  $("#search-field-toggle").on("click", function () {
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
});
