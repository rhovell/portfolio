// menu button jscript
// event listener tp manage menu javascript in case of resize
window.addEventListener("resize", manageMenus);
// call to manageMenus on load
manageMenus();
function manageMenus(){
  let w = window.innerWidth;
    let menu = document.querySelector("#burgerMenu");
    let menuList = document.querySelector("#dropDownMenu");
    if(w < 900){
      menuList.style.display = "none";
      menu.style.display = "block";
// console.log("if less than 900 called");

(function openDropDown(){
  let menu = document.querySelector("#burgerMenu");
  let menuList = document.querySelector("#dropDownMenu");
  let body = document.querySelector("body");
  menu.addEventListener("click", showMenu);
  // show menu on icon click
  function showMenu(){
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
    // console.log("hide menu called");
      menu.addEventListener("click", showMenu);
  }
  // hide menu on link select
  let menuLink = document.querySelector(".nav-list");
  menuLink.addEventListener("click", hideMenu);
})();
}
// if screen is more than 900px then stop running hidemenu and display inline
if(w > 900){
  let menu = document.querySelector("#burgerMenu");
    let menuList = document.querySelector("#dropDownMenu");
    menuList.style.display = "inline";
    menu.style.display = "none";
  // console.log("if more than 900")
}
};
// modal button script
const modalButtonId = document.querySelector("#modalButton");
const modalButtonSelector = $("#modalButton");
modalButtonId.addEventListener("click", openDraw);
const modalButtonClass = $(".show-hide-modal")
const pphModal = $(".modal-content");
const hideModal = document.querySelector("#hiddenModal");

function openDraw(){
  pphModal.addClass("open");
  modalButtonSelector.addClass("slide");
  // modalButtonSelector.id = "modalButton-open"
  modalButtonId.innerText = "<";
  // modalButtonSelector.removeClass("slide");
  console.log("open class added");
  closeDraw()
}
function closeDraw(){
  modalButtonId.removeEventListener("click", openDraw);
  modalButtonId.addEventListener("click", closeDrawAni);
  function closeDrawAni(){
    if(modalButtonId.innerText === "<"){
    pphModal.removeClass("open");
    modalButtonSelector.removeClass("slide");
    console.log("open class removed");
      modalButtonId.innerText = ">";
  }
  if(modalButtonId.innerText === ">");
  modalButtonId.addEventListener("click", openDraw);
  modalButtonId.removeEventListener("click", closeDrawAni);
}
}

// iframe div scroller

setTimeout(function () {
var startY = 0;
var startX = 0;
var b = document.body;
b.addEventListener('touchstart', function (event) {
    parent.window.scrollTo(0, 1);
    startY = event.targetTouches[0].pageY;
    startX = event.targetTouches[0].pageX;
});
b.addEventListener('touchmove', function (event) {
    event.preventDefault();
    var posy = event.targetTouches[0].pageY;
    var h = parent.document.getElementById("scroller");
    var sty = h.scrollTop;

    var posx = event.targetTouches[0].pageX;
    var stx = h.scrollLeft;
    h.scrollTop = sty - (posy - startY);
    h.scrollLeft = stx - (posx - startX);
    startY = posy;
    startX = posx;
});
}, 1000);
