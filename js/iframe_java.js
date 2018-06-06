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
// services pages
let designPack = document.querySelector(".web-list");
designPack.addEventListener("click", scroller);
let graphicsPack = document.querySelector(".graphic-list");
graphicsPack.addEventListener("click", scroller);

function scroller(event) {
    let designPack = $(event.target);
    let packName = event.target.classList[1];
    var elmnt = "";
    console.log(event.target.classList);
    if(packName === "makeover"){
      var elmnt = document.getElementById("makeover");
      elmnt.scrollIntoView();
    }
    if(packName === "spruce"){
      var elmnt = document.getElementById("spruce");
      elmnt.scrollIntoView();
    }
    if(packName === "reactive"){
      var elmnt = document.getElementById("reactive");
      elmnt.scrollIntoView();
    }
    if(packName === "copy"){
      var elmnt = document.getElementById("copy");
      elmnt.scrollIntoView();
    }
    if(packName === "bespoke-web"){
      var elmnt = document.getElementById("bespokeWebsite");
      elmnt.scrollIntoView();
    }
    // graphics list
    if(packName === "headers"){
      var elmnt = document.getElementById("headers");
      elmnt.scrollIntoView();
    }
    if(packName === "icons"){
      var elmnt = document.getElementById("icons");
      elmnt.scrollIntoView();
    }
    if(packName === "logo"){
      var elmnt = document.getElementById("logo");
      elmnt.scrollIntoView();
    }
    if(packName === "social"){
      var elmnt = document.getElementById("social");
      elmnt.scrollIntoView();
    }
    if(packName === "bespoke-graphics"){
      var elmnt = document.getElementById("bespokeGraphics");
      elmnt.scrollIntoView();
    }
    else {
      return false;
    }
};


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        document.getElementById("scrollUp").style.display = "block";
    } else {
        document.getElementById("scrollUp").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
