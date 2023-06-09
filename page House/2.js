const headerTopRow = document.querySelector(".header__top-row");
const navIcon = document.querySelector(".nav-icon");

function clickOpen() {
  navIcon.classList.toggle("open");
  headerTopRow.classList.toggle("header__top-row--mobile");
  document.body.classList.toggle("no-scroll");

}

navIcon.addEventListener("click", clickOpen);
