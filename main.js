document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    const linkPath = link.getAttribute("href");

    // Normalize paths (important)
    if (
      currentPath === linkPath ||
      (currentPath === "/" && linkPath === "/index.html")
    ) {
      link.classList.add("active");
    }
  });
});
