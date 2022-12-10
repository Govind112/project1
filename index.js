let menuBtn = document.getElementById("menuBtn");
let sideNav = document.getElementById("sideNav"); 


 function menu(){
    if(sideNav.style.right=="-250px"){
        sideNav.style.right="0";
    }
    else{
        sideNav.style.right="-250px";
    }
 }
 var scroll = new SmoothScroll('a[href*="#"]');