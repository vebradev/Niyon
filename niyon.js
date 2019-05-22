console.log("👋");

const menuBurger = document.querySelector(".menu-burger");
menuBurger.addEventListener("click", () => {
  menuBurger.classList.toggle("open");
  document.querySelector(".menu").classList.toggle("open");
  document.querySelector("nav").style.background = "#150047";
});
