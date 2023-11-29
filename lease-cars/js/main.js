const tabBtnItem = document.querySelectorAll(".tabs__btn-item");
const tabContent = document.querySelectorAll(".tabs__content-item");

tabBtnItem.forEach((el) => {
  el.addEventListener("click", open);
  console.log(el.classList);
});

function open(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;

  tabBtnItem.forEach((item) => {
    item.classList.remove("tabs__btn-item--active");
  });
  tabTarget.classList.add("tabs__btn-item--active");

  tabContent.forEach((item) => {
    item.classList.remove("tabs__content-item--active");
  });

  document
    .querySelector(`#${button}`)
    .classList.add("tabs__content-item--active");

  evt.classList = "tabs__btn-item";
  if (evt.classList.contains("tabs__btn-item--acrive")) {
    evt.classList.remove("tabs__btn-item--acrive");
  } else {
    evt.classList.add("tabs__btn-item--acrive");
  }
  evt.classList.toggle("tabs__btn-item--acrive");
}

const menuBtn = document.querySelector(".menu__btn");
const menu = document.querySelector(".menu__list");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("menu__list--active");
});

const swiper = new Swiper(".swiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});

// menuBtn.addEventListener("click", onClick)
