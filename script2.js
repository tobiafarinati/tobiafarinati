

//toggle about
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  
//image-hover
var topPosition = ($(window).height() - $(this).find('img').height()) /2;

$('.item').mousemove(function (e) {
    $(this).find('img').addClass('visible');
    $(this).find('img').css({
      right: '8px',
      top: (topPosition + ($(this).find('img').height() /2)) + 'px' 
    });
}).mouseleave(function () {
    $(this).find('img').removeClass('visible');
});

//image-rotation
//$(document).ready(function () {
  // Seleziona tutte le immagini all'interno degli elementi `.item`
 // $('.item > img').each(function () {
      // Genera una rotazione casuale tra -10 e 10 gradi
   //   var randomRotation = Math.floor(Math.random() * 21) - 10;
      // Applica la rotazione all'immagine
   ////       transform: 'rotate(' + randomRotation + 'deg)'
 //     });
 // });
//});


//SafeArea Iphone
const setVh = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

window.addEventListener('resize', setVh);
window.addEventListener('orientationchange', setVh);
setVh();
