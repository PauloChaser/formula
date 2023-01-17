import "./css/style.css";
import "swiper/css/bundle";

import "simplebar";
import "simplebar/dist/simplebar.css";
import "lightgallery/css/lightgallery-bundle.css";


document.addEventListener("DOMContentLoaded", function () {
  initSlideUp();

});

function initSlideUp() {
  const slideUpButton = document.querySelector(".js-slide-up");

  if (!slideUpButton) {
    return;
  }

  slideUpButton.addEventListener("click", function () {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });
}
