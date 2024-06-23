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
   Nav Toggle icon toggle for mobile version
=====================================*/ 
const menubtn = document.querySelector(".navbtn");
const nav_bar = document.querySelector(".navbar");
const toggleMenuBtn = ()=>{
   nav_bar.classList.toggle("active1");
};

menubtn.addEventListener('click', () => toggleMenuBtn());


/*===========================================
   Nav background color change when scrolling
============================================*/ 
const navEl = document.querySelector('.body');

window.addEventListener('scroll', () => {
 if(window.scrollY >= 100){
   navEl.classList.add('active3')
 }else if(window.scrollY < 100){
   navEl.classList.remove('active3')
 }
});


/*============================================
   Dashboard Sidebar-btn toggle Mobile Version
==============================================*/ 

const Sidebarbtn = document.querySelector(".sidebarbtn");
const Sidebar= document.querySelector(".body");
const myside = () => {
   alert("dsfd");
};

Sidebarbtn.addEventListener('click', () => myside());
