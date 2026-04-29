document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const header = document.querySelector(".main-header");
  const body = document.body;
  const dropdownTrigger = document.querySelector(".main-nav__item--dropdown");
  const allNavLinks = document.querySelectorAll(
    ".main-nav__link, .dropdown-link",
  );

  // Function to toggle menu
  const toggleMenu = () => {
    const isOpen = header.classList.toggle("nav-open");

    // Toggle the scroll lock class on the body
    body.classList.toggle("menu-is-open", isOpen);

    // Icon Switcher (Bars to X)
    const icon = menuToggle.querySelector("i");
    if (isOpen) {
      icon.classList.replace("fa-bars", "fa-times");
    } else {
      icon.classList.replace("fa-times", "fa-bars");
    }
  };

  menuToggle.addEventListener("click", toggleMenu);

  // Close menu and RE-ENABLE scroll when a link is clicked
  allNavLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      // Only close if it's not the dropdown trigger (or if it is a direct link)
      if (!link.parentElement.classList.contains("main-nav__item--dropdown")) {
        header.classList.remove("nav-open");
        body.classList.remove("menu-is-open");
        menuToggle.querySelector("i").classList.replace("fa-times", "fa-bars");
      }
    });
  });

  // Mobile Dropdown Logic
  dropdownTrigger.addEventListener("click", function (e) {
    if (window.innerWidth <= 1028) {
      this.classList.toggle("active");
      const chevron = this.querySelector(".fa-chevron-down");
      if (chevron) {
        chevron.style.transform = this.classList.contains("active")
          ? "rotate(180deg)"
          : "rotate(0)";
      }
    }
  });
});
