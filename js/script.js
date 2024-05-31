// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika dessert menu di klik
document.querySelector("#dessert-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan nav
const dessert = document.querySelector("#dessert-menu");

document.addEventListener("click", function (e) {
  if (!dessert.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
