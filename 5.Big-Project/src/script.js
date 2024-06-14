
  function navlog() {
    var x = document.getElementById("btn-log");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

const navToggle = document.querySelector(".menu-toggle");
navToggle.addEventListener('click', navTogo);

function navTogo(){
  console.log('hi')
}