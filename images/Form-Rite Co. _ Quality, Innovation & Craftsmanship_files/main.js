document.addEventListener("DOMContentLoaded", function () {
  // --- Image Carousel ---
  var imageCarouselEl = document.querySelector("#image-carousel");
  if (imageCarouselEl) {
    new Splide(imageCarouselEl, {
      type: "loop",
      perPage: 4,
      perMove: 1,
      gap: "1.2rem",
      autoplay: true,
      interval: 5000,
      pauseOnHover: true,
      arrows: false,
      pagination: false,
      breakpoints: {
        1024: { perPage: 3 },
        768: { perPage: 2 },
        480: { perPage: 1 },
      },
    }).mount();
  }

  // --- Testimonial Slider ---
  var testimonialSliderEl = document.querySelector("#testimonial-slider");
  if (testimonialSliderEl) {
    new Splide(testimonialSliderEl, {
      type: "loop",
      rewind: true,
      arrows: true,
      pagination: true,
      autoplay: true,
      interval: 6000,
      pauseOnHover: true,
      speed: 1000,
      breakpoints: {
        480: { arrows: false },
      },
    }).mount();
  }
});
