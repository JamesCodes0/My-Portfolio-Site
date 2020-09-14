// Used by typed.min.js
const typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  startDelay: 500,
  typeSpeed: 90,
  backSpeed: 75,
  backDelay: 1500,
  shuffle: true,
  loop: true
});

// Toggles Animista's Shake Class
let thumbnails = document.querySelectorAll(".shields-ctn img");

function addHover() {
  this.classList.toggle("shake-bottom");
}

// Event listeners to add/remove the class
thumbnails.forEach(thumb => thumb.addEventListener("mouseover", addHover));
thumbnails.forEach(thumb => thumb.addEventListener("mouseout", addHover));
