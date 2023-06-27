const headerTopRow = document.querySelector(".header__top-row");
const navIcon = document.querySelector(".nav-icon");
const headerNav = document.querySelector(".header__nav");
const headerNav1 = document.querySelector(".header__nav1");
const headerNav2 = document.querySelector(".header__nav2");
const headerNavBtn1 = document.querySelector(".header__nav-btn1");
const headerNavBtn2 = document.querySelector(".header__nav-btn2");
const headerNavBtn = document.querySelector(".header__nav-btn");

console.log(headerNav.className);

function clickOpen() {
  navIcon.classList.toggle("open");
  headerTopRow.classList.toggle("header__top-row--mobile");
  document.body.classList.toggle("no-scroll");

  headerNav.classList.toggle("header__nav");
  headerNav.classList.toggle("header__nav1");
  headerNavBtn.classList.toggle("header__nav-btn");
  headerNavBtn.classList.toggle("header__nav-btn2");
  headerNavBtn.classList.toggle("header__nav-btn1");
}

navIcon.addEventListener("click", clickOpen);

/Phone Mask/;

mask("[data-tel-input]");

const phoneInputs = document.querySelectorAll("[data-tel-input]");

phoneInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value == "+") input.value = "";
  });
  input.addEventListener("blur", () => {
    if (input.value == "+" || input.value.length < 7) input.value = "";
  });
});

/Map/;
ymaps.ready(init);
function init() {
  const map = new ymaps.Map("map", {
    center: [59.943543, 30.338928],

    zoom: 16.5,
  });

  const myPlacemark = new ymaps.Placemark(
    [59.943543, 30.338928],
    {
      balloonContent: `
      <div class="balloon">
        <div class="balloon__address">Наб. реки Фонтанки 10-15</div>
        <div class="balloon__contacts">
          <a href="tel:+78121234567">+8 (812) 123-45-67</a>
        </div>
      </div>
    `,
    },
    {
      iconLayout: "default#image",
      iconImageHref: "./img/location-pin.svg",
      iconImageSize: [40, 40],
      iconImageOffset: [-20, -40],
    }
  );

  map.controls.remove("geolocationControl");
  map.controls.remove("trafficControl");
  map.controls.remove("typeSelector");

  map.controls.remove("rulerControl");
  map.behaviors.disable(["scrollZoom"]);

  map.geoObjects.add(myPlacemark);
}
