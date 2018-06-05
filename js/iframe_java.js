// contact page form submitted succesfully
let body = document.querySelector("body");
if (body.classList.contains("contact")){
let submit = document.querySelector(".contact-submit");
submit.addEventListener("click", showModal);

function showModal(){
  let modal = document.querySelector(".modal-contact");
  modal.style.display = "block";
}
}
if(body.classList.contains("graphics")){
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
}
