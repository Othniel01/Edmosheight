const hamburgerEl = document.querySelector(".hamburger");
const menuEl = document.querySelector(".menu");

hamburgerEl.addEventListener("click", () => {
  hamburgerEl.classList.toggle("is-active");
  menuEl.classList.toggle("alive");
});
