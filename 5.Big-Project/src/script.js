/*===========================================
   Nav Login Button Toggle for mobile version
============================================*/ 

const login_btn = document.querySelector(".login");
const navbar = document.querySelector(".body");
const toggleLogin = ()=>{
 navbar.classList.toggle("active");
};

login_btn.addEventListener('click', () => toggleLogin());



/*===================================
   Nav Toggle icon for mobile version
=====================================*/ 
const menu_btn = document.querySelector(".nav-btn");
const nav_bar = document.querySelector(".body");
const toggleMenuBtn = ()=>{
   nav_bar.classList.toggle("active1");
};

menu_btn.addEventListener('click', () => toggleMenuBtn());

