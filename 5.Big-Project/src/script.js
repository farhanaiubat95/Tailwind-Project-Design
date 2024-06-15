
  function navlog() {
    var x = document.getElementById("btn-log");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

/*===================================
   Nav Toggle icon for mobile version
=====================================*/ 
const nav_btn = document.querySelector(".nav-btn");
const mob_nav = document.querySelector(".header");
const toggleNavbar = () => {
 
  mob_nav.classList.toggle("active");
  

};

nav_btn .addEventListener('click', () => toggleNavbar());