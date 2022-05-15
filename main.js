const phoneNum = document.querySelector(".phoneNum");
const revealNum = document.querySelector(".revealNum");
const clearForm = document.querySelector(".clear-form");
phoneNum.addEventListener("click", (e) => {
  console.log(e.target);
  revealNum.style.opacity = "1";
});

// <!-- Initialize Swiper -->

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 80,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    980: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiperCarousel", {
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 800,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

window.addEventListener("click", (e) => {
  e.target.className === "phoneNum" ? null : (revealNum.style.opacity = "0");
}); //hide phone number if click anywhere else
clearForm.addEventListener("click", () => {
  document.querySelectorAll("[data-form_input]").forEach((_input) => {
    _input.value = "";
  });
}); //clear button to clear all form inputs
