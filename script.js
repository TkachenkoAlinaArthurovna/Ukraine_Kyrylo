const cities = document.querySelectorAll(".city");
const pins = document.querySelectorAll(".pin");

cities.forEach((city) => {
  city.addEventListener("click", () => {
    const id = city.id;
    const pin = document.querySelector(`[data-id=${id}]`);
    console.log(pin);
    pin.style.opacity = "1";
  });
});
let index = 1;

const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");

function show() {
  slide1.style.display = "none";
  slide2.style.display = "none";
  slide3.style.display = "none";

  document.getElementById("slide" + index).style.display = "flex";
}

show();

function next() {
  index = index + 1;
  if (index > 3) index = 1;
  show();
}

function prev() {
  index = index - 1;
  if (index < 1) index = 3;
  show();
}
// const logo = document.getElementById("logo");
// logo.style.opacity = "0";
// const logi = document.getElementById("logi");
// logi.style.color = "yellow";
// const loge = document.getElementById("loge");
// loge.style.color = "blue";

// const card1 = document.querySelector(".card1");
// card1.style.background = "blue";
// const card2 = document.querySelector(".card2");
// card2.style.background = "blue";
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
