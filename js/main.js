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

  // --- Thumbnail Product Gallery ---
  var thumbnailCarouselEl = document.querySelector("#thumbnail-carousel");
  if (thumbnailCarouselEl) {
    var splide = new Splide(thumbnailCarouselEl, {
      perPage: 4, // This ensures exactly 4 images are shown
      perMove: 1,
      isNavigation: true, // Clickable
      gap: "1rem", // Space between images
      pagination: false,
      arrows: false,
      rewind: true,
      breakpoints: {
        768: {
          perPage: 4, // Keep 4 on tablets
          gap: "1rem",
        },
        480: {
          perPage: 3, // Show 3 on very small phones so they don't get too tiny
        },
      },
    });

    splide.mount();

    const mainImage = document.getElementById("main-product-image");
    if (mainImage) {
      splide.on("active", function (slide) {
        const imgInsideSlide = slide.slide.querySelector("img");
        if (imgInsideSlide) {
          mainImage.src = imgInsideSlide.src;
        }
      });
    }
  }

  // --- Zoom on Scroll Logic ---
  const zoomImages = document.querySelectorAll(".project-card__image");
  if (zoomImages.length > 0) {
    window.addEventListener("scroll", () => {
      zoomImages.forEach((img) => {
        const rect = img.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
          const distance = windowHeight - rect.top;
          const totalDistance = windowHeight + rect.height;
          const percentage = distance / totalDistance;
          const scale = 1 + percentage * 0.2;
          img.style.transform = `scale(${scale})`;
        }
      });
    });
  }
});

function goToIndex() {
  window.location.href = "index.html";
}
