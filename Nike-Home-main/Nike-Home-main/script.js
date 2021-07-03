console.log("Hello");

const menuSub = document.querySelectorAll(".menu-sub");
const menuLinks = document.querySelectorAll(".menu-main__item__link");
const container = document.querySelector(".container");


menuLinks.forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    item.classList.add("active");
  });
});

menuLinks.forEach(function (item) {
  item.addEventListener("mouseleave", function () {
    item.classList.remove("active");
  });
});

menuSub.forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    const parent = item.closest(".menu-main__item");
    const child = parent.firstElementChild;
    child.classList.add("active");
  });
});

menuSub.forEach(function (item) {
  item.addEventListener("mouseleave", function () {
    const parent = item.closest(".menu-main__item");
    const child = parent.firstElementChild;
    child.classList.remove("active");
  });
});

const swiper = document.querySelector(".swiper");
const nav = document.querySelector(".nav");

nav.addEventListener("mouseenter", function () {
  swiper.style.zIndex = -1;
  swiper.style.transition = "all 0.1s";
  container.style.opacity = "0";
  container.style.zIndex = "8";
});

nav.addEventListener("mouseleave", function () {
  swiper.style.transition = "all 1s";
  swiper.style.zIndex = 12;
  container.style.opacity = "1";
  container.style.zIndex = "15";
});


//////////////////////////////////
// MINI MENU

const miniMenu = document.querySelector(".mini-menu");
const hiddenItems = document.querySelectorAll(".mini-menu__list__item--hidden");

miniMenu.addEventListener('mouseenter',function(){
  hiddenItems.forEach(function(item){
    item.style.opacity = "1";
  })
})

miniMenu.addEventListener('mouseleave',function(){
  hiddenItems.forEach(function(item){
    item.style.opacity = "0";
  })
})

////////////////////////////////////////////////
// CAROUSEL

const carouselLeftArrow = document.getElementById("carouselLeftArrow");
const carouselRightArrow = document.getElementById("carouselRightArrow");
const carouselProductsCard = document.querySelector(".products__card");
const carousel = document.querySelector(".carousel");

carouselRightArrow.addEventListener("click",function(){
  const cardWidth = carouselProductsCard.getBoundingClientRect().width;
  carousel.scrollLeft += (cardWidth + 20);
})

carouselLeftArrow.addEventListener("click",function(){
  const cardWidth = carouselProductsCard.getBoundingClientRect().width;
  carousel.scrollLeft -= (cardWidth + 20);
})

//////////////////////////////////////////
// SEARCH BAR

const searchBar = document.querySelector(".search__input");
const searchBox = document.querySelector(".search");
const overlay = document.querySelector(".overlay");

searchBar.addEventListener("focus",function(){
  overlay.style.display = "block";
  searchBox.style.transform = "translateX(-200px)"
  searchBox.style.width = "50%";
})

searchBar.addEventListener("focusout",function(){
  overlay.style.display = "none";
  searchBox.style.transform = "translateX(0)";
  searchBox.style.width = "25%";
})

overlay.addEventListener("click",function(){
  overlay.style.display = "none";
  searchBox.style.transform = "translateX(0)";
  searchBox.style.width = "25%";
})