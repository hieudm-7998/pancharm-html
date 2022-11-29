$(document).ready(function () {
  $("#lightSlider").lightSlider({
    gallery: true,
    item: 1,
    auto: true,
    loop: true,
    thumbItem: 6,
    controls: false,
    adaptiveHeight: true,
    slideMargin: 0,
    currentPagerPosition: "left",
    // onSliderLoad: function (el) {
    //   el.lightGallery({
    //     selector: "#imageGallery .lslide",
    //   });
    // },
  });
});
