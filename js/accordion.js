document.addEventListener("DOMContentLoaded", () => {
  // --- TABS FUNCTIONALITY ---
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");

      // 1. Remove active class from all buttons and contents
      tabButtons.forEach((b) => b.classList.remove("btn-active"));
      tabContents.forEach((c) => c.classList.remove("tab-active"));

      // 2. Add active class to current button and target content
      btn.classList.add("btn-active");
      document.getElementById(targetTab).classList.add("tab-active");
    });
  });

  // --- ACCORDION FUNCTIONALITY ---
  const accordionHeaders = document.querySelectorAll(".accordion__header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const parentItem = header.parentElement;

      // Toggle the active class on the clicked item
      const isActive = parentItem.classList.contains("accordion__item--active");

      // Optional: Close other accordion items within the same tab if one is opened
      const currentTab = parentItem.closest(".tab-content");
      currentTab.querySelectorAll(".accordion__item").forEach((item) => {
        item.classList.remove("accordion__item--active");
      });

      // If it wasn't active, open it
      if (!isActive) {
        parentItem.classList.add("accordion__item--active");
      }
    });
  });
});
