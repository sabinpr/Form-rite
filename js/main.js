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

  const zoomImages = document.querySelectorAll(".project-card__image");
  if (zoomImages) {
    window.addEventListener("scroll", () => {
      zoomImages.forEach((img) => {
        const rect = img.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if the image is within the user's view
        if (rect.top < windowHeight && rect.bottom > 0) {
          // Calculate a percentage (0 to 1) based on where the image is in the viewport
          // 0 = just entered the bottom, 1 = just leaving the top
          const distance = windowHeight - rect.top;
          const totalDistance = windowHeight + rect.height;
          const percentage = distance / totalDistance;

          // Scale from 1.0 to 1.2 based on that percentage
          const scale = 1 + percentage * 0.2;

          img.style.transform = `scale(${scale})`;
        }
      });
    });
  }
});
