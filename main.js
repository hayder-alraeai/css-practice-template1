const menu = document.querySelector(".links");
const body = document.querySelector("body");
const menuList = document.querySelector(".links ul");

menu.addEventListener("click", () => {
  menuList.classList.toggle("active");
});
