function imgSlider(anything) {
    document.querySelector('.speakit').src = anything;
  }
    
  function changeCircleColor(color) {
    const circle = document.querySelector('.circlecontact');
    circle.style.background = color;
  }
  
  function changeCircleAbout(color) {
    const circle = document.querySelector('.circleabout');
    circle.style.background = color;
  }
  
  // Sidenav
  function toggleMenu() {
    var menuToggle = document.querySelector('.container');
    var navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
  }
  
  function myFunction(x) {
    x.classList.toggle("change");
  }
  
  // Scroll sci
  window.addEventListener('scroll', function() {
    if (window.pageYOffset < 1000) {
      document.querySelector('.sci2').style.display = 'none'
    } else {
      document.querySelector('.sci2').style.display = 'flex'
    }
  });
  
  /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navHome").style.top = "0";
      document.getElementById("navHome1").style.top = "0";
    } else {
      document.getElementById("navHome").style.top = "-115px";
      document.getElementById("navHome1").style.top = "-115px";
    }
    prevScrollpos = currentScrollPos;
  }

document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault(); // detiene el comportamiento predeterminado del navegador
  // codigo para mostrar un modal o ventana emergente
  alert("Formulario enviado"); // muestra una ventana emergente
});