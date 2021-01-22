const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav-bar")
logo = document.getElementById("mainlogo")
header = document.getElementById("header");

function showNav() {
    nav.classList.toggle("show");
    logo.classList.toggle("hide");
    header.classList.toggle("slide");
    
}

hamburger.addEventListener("click", showNav);

