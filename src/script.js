const headerNav = document.querySelector("#headerNav");
const openMenu = document.querySelector("#openMenu");
const closeMenu = document.querySelector("#closeMenu");

openMenu.addEventListener("click", () => {
  headerNav.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  headerNav.classList.remove("active");
});
