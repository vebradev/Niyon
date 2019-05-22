console.log("👋");

const menuBurger = document.querySelector(".menu-burger");
menuBurger.addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("open");
});
