let menubutton = document.querySelector(".menu-button")
let menubar = document.querySelector(".menu-bar")
let backmenu = document.querySelector(".back-menu")
menubutton.addEventListener("click", function(){
    menubar.classList.toggle("open");
    backmenu.classList.toggle("show");
});
backmenu.addEventListener("click", function(){
    menubar.classList.remove("open")
    backmenu.classList.remove("show")
    inpsearch.style.display = "none"
});
let searchbutton = document.querySelector(".search-button")
let inpsearch = document.querySelector(".inp-search")
searchbutton.addEventListener("click", function(){
    inpsearch.style.display = "block"
});