const header = document.querySelector(".header");
const humburgerMenu = document.querySelector(".humberger-menu");

humburgerMenu.addEventListener("click", (e) => {
  header.classList.toggle("nav-open");
});
