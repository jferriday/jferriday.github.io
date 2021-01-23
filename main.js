const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav-bar")
logo = document.getElementById("mainlogo")
header = document.getElementById("header");



function showNav() {
    let delay = 0;
    if (nav.classList.contains("show")){
        delay = 0;
    }else{
        delay = 250;
    }
    setTimeout(() =>{
        nav.classList.toggle("show")}, delay);

        
    
    header.classList.toggle("slide");
        
    
}

hamburger.addEventListener("click", showNav);

