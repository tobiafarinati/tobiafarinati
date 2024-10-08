
//MODAL WINDOW
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//image-hover
var topPosition = ($(window).height() - $(this).find('img').height()) / 2;

$('.item').mousemove(function (e) {
  $(this).find('img').addClass('visible');
  // Optional: Center the image without adjusting the position dynamically
}).mouseleave(function () {
  $(this).find('img').removeClass('visible');
});


// BACKGROUND IMAGES
const images = [
  'imgbackground/2.jpg',
  'imgbackground/3.jpg',
  'imgbackground/4.jpg',
  'imgbackground/6.jpg',
  'imgbackground/8.jpg'
];

// Select a random image
const randomImage = images[Math.floor(Math.random() * images.length)];

// Set the background image for the .background div
document.querySelector('.background').style.backgroundImage = `url(${randomImage})`;