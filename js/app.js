$(document).ready(function () {
  // Go to top button handle
  $(window).scroll(function () {
    if ($(window).scrollTop()) {
      $(".go-to-top-btn").fadeIn();
    } else {
      $(".go-to-top-btn").fadeOut();
    }
  });

  $(".go-to-top-btn").click(function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return false;
  });

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

  // Handle nav dropdown always show on hover
  $(".dropdown").hover(function () {
    $(".dropdown-toggle", this).trigger("click");
  });

  // Handle mobile sidebar icon change on click
  $("#sidebar-collapse").on("click", function () {
    $("#collapsed-chevron").toggleClass("fa-plus fa-minus");
  });

  // Handle show tooltip on navbar icon
  $("body").tooltip({ selector: "[data-toggle=tooltip]" });

  // Handle feather icon
  feather.replace();

  $(".addToFavorite").on("click", function () {
    Notify("???? th??m v??o y??u th??ch !", null, null, "success");
  });

  $(".addToCart").on("click", function () {
    Notify("???? th??m v??o gi??? h??ng !", null, null, "success");
  });

  // Gallery slide
  $(".gallery-slide").slick({
    infinite: true,
    slidesToShow: 4,
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
    ],
  });

  // Product quantity handle
  $(".add").click(function () {
    if ($(this).prev().val() < 10) {
      $(this)
        .prev()
        .val(+$(this).prev().val() + 1);
    }
  });
  $(".sub").click(function () {
    if ($(this).next().val() > 1) {
      if ($(this).next().val() > 1)
        $(this)
          .next()
          .val(+$(this).next().val() - 1);
    }
  });

  // Product detail similar product handle
  $(".similar-product").slick({
    infinite: true,
    slidesToShow: 4,
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
    ],
  });

  // Cart quantity handle
  var input = $(".cart-quantity-input"),
    minValue = parseInt(input.attr("min")),
    maxValue = parseInt(input.attr("max"));

  $(".cart-quantity-plus").on("click", function () {
    var inputValue = input.val();
    if (inputValue < maxValue) {
      input.val(parseInt(inputValue) + 1);
    }
  });

  $(".cart-quantity-minus").on("click", function () {
    var inputValue = input.val();
    if (inputValue > minValue) {
      input.val(parseInt(inputValue) - 1);
    }
  });
});
