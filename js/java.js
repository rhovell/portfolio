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
  console.log("show menu called");
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
  let menu = document.querySelector("#burgerMenu");
  let menuList = document.querySelector("#dropDownMenu");
  menuList.style.display = "inline";
  menu.style.display = "none";
  // remove hidemenu event listener
  let menuLink = document.querySelector(".nav-list");
  menuLink.removeEventListener("click", hideMenu);
}
};
// event listener to manage menu javascript in case of resize
window.addEventListener("resize", manageMenus);

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
