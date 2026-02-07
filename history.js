const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
menu.addEventListener("click", () => {
  menu.style.display = "none";
  nav.style.opacity = "1";
  nav.style.visibility = "visible";
  close.style.display = "block";
  document.body.style.overflow = "hidden";
});
const close = document.getElementById("close");
close.addEventListener("click", () => {
  close.style.display = "none";
  menu.style.display = "block";
  nav.style.opacity = "0";
  nav.style.visibility = "hidden";
  document.body.style.overflow = "auto";
});
