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
