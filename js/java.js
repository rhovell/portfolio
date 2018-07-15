// menu button jscript
manageMenus();
// call to manageMenus on load
function manageMenus(){
  let w = window.innerWidth;
  // if screen width less than 900, display burger menu, add event listener to show drop down menu
  if(w < 900){
    let menu = document.querySelector("#burgerMenu");
      let menuList = document.querySelector("#dropDownMenu");
      menuList.style.display = "none";
      menu.style.display = "block";
      menu.addEventListener("click", showMenu);

  // show menu on burger icon click and add event listener to close menu on burger menu image
function showMenu(){
  // console.log("show menu called");
  menu.style.display = "block";
  menuList.classList.add("open");
  menuList.style.display = "block";
    if(menuList.classList.contains("open")){
      menu.removeEventListener("click", showMenu);
      menu.addEventListener("click", hideMenu);
    }
  }
  // hide menu on icon click
function hideMenu(){
  menuList.style.display = "none";
  menuList.classList.remove("open");
  menu.addEventListener("click", showMenu);
}
  // hide menu on link select
  let menuLink = document.querySelector(".nav-list");
  menuLink.addEventListener("click", hideMenu);
}

// if screen is more than 900px then stop running hidemenu and display inline
if(w > 900){
  // remove hidemenu event listener
  let menuLink = document.querySelector(".nav-list");
  menuLink.removeEventListener("click", hideMenu);
  let menu = document.querySelector("#burgerMenu");
  let menuList = document.querySelector("#dropDownMenu");
  menuList.style.display = "inline";
  menu.style.display = "none";
}
};
// event listener to manage menu javascript in case of resize
window.addEventListener("resize", manageMenus);

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};
// Get the navbar
var navbar = document.getElementById("navBar");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;
var body = document.body;
var scrollUp = document.getElementById("scrollUp");
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if(window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    // console.log("sticky");
}
   else {
    navbar.classList.remove("sticky");
    // console.log("sticky remove");
    scrollUp.style.display = "none";
  }
// }
// When the user clicks on the button, scroll to the top of the document
if (document.body.scrollTop >= 800 || document.documentElement.scrollTop >= 800){
  // console.log("myfunction");
  scrollUp.style.display = "block";
  scrollUp.addEventListener("click", topFunction);
}
function topFunction() {
  // console.log("top functio");
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    navbar.classList.remove("sticky");
}
}
let graphicsSec = document.getElementsByClassName('graphics-section');
// graphicsPortfolio Script
// javascript for graphics portfolio scroller
slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("portfolio-image");
  var dots = document.getElementsByClassName("dot");
  var titles = document.getElementsByClassName("titles");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < titles.length; i++) {
      titles[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
      slides[i] = dots[i];
  }
  slides[slideIndex-1].style.display = "block";
  titles[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
