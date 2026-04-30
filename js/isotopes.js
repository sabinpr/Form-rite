$(document).ready(function () {
  $(".section-split").each(function () {
    var $section = $(this);
    var $grid = $section.find(".products-grid");
    var $filterMenu = $section.find(".product-list");

    if ($grid.length > 0) {
      // Initialize Isotope
      var iso = $grid.isotope({
        itemSelector: ".product-card",
        layoutMode: "masonry", // Masonry handles gaps more reliably
        percentPosition: true,
        masonry: {
          // This must match the gap in your CSS calc (2.3rem)
          // Since JS doesn't read 'rem' easily, we use a function to get the exact px value
          gutter:
            parseFloat(getComputedStyle(document.documentElement).fontSize) *
            2.3,
        },
      });

      $grid.imagesLoaded().progress(function () {
        iso.isotope("layout");
      });

      $filterMenu.on("click", "a", function (e) {
        e.preventDefault();
        var filterValue = $(this).attr("data-filter");
        iso.isotope({ filter: filterValue });
        $filterMenu.find("a").removeClass("active");
        $(this).addClass("active");
      });
    }
  });
});
