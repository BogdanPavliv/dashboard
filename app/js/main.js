// TOGGLE SIDEBAR

const menuBar = document.querySelector("#sidebar .bx.bx-menu");
const sidebar = document.getElementById("sidebar");

menuBar.addEventListener("click", function () {
  sidebar.classList.toggle("hide");
});

// CUSTOM ANIMATION

document.addEventListener("DOMContentLoaded", () => {
  // Get all the table elements that need to be animated
  const rows = document.querySelectorAll(".table-data tbody tr");
  const sidebar = document.querySelector("#sidebar");

  // Add animation for table rows
  rows.forEach((row, index) => {
    row.style.opacity = "0";
    row.style.transform = "translateY(20px)";
    setTimeout(() => {
      row.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      row.style.opacity = "1";
      row.style.transform = "translateY(0)";
    }, index * 100); // Spacing between animations
  });

  // Animation for the sidebar
  if (sidebar) {
    sidebar.style.opacity = "0";
    sidebar.style.transform = "translateX(-100px)";
    setTimeout(() => {
      sidebar.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      sidebar.style.opacity = "1";
      sidebar.style.transform = "translateX(0)";
    }, 500); // Delay before showing the sidebar
  }
});
