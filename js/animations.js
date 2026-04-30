document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.1, // Trigger when 10% is visible
    rootMargin: "0px 0px -50px 0px", // Trigger slightly before it hits the bottom
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        // Stop observing once animated
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // 1. Find all parent containers where children should come "one by one"
  const containers = document.querySelectorAll(
    ".about-grid, .project-list, .products-grid, .product-grid, .accordion, .inspiration-main-images-wrapper",
  );

  containers.forEach((container) => {
    // Find all reveal-items inside this specific container
    const items = container.querySelectorAll(".reveal-item");
    items.forEach((item, index) => {
      // Add a 0.2s delay multiplied by the item's position (0s, 0.2s, 0.4s, etc.)
      item.style.setProperty("--delay", `${index * 0.2}s`);
      observer.observe(item);
    });
  });

  // 2. Also observe any reveal-items that AREN'T in a grid (single items)
  document.querySelectorAll(".reveal-item").forEach((item) => {
    if (!item.style.getPropertyValue("--delay")) {
      observer.observe(item);
    }
  });
});
