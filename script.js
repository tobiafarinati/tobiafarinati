//carousel animation

var slideDelay = 2;
var slideDuration = 2;

var slides = document.querySelectorAll(".slide");
var prevButton = document.querySelector("#prevButton");
var nextButton = document.querySelector("#nextButton");

for (var i = 0; i < slides.length; i++) {
  TweenLite.set(slides[i], {
    xPercent: i * 100
  });
}

var wrap = wrapPartial(-100, (slides.length - 1) * 100);
var timer = TweenLite.delayedCall(slideDelay, autoPlay);
var animation = null;

prevButton.addEventListener("click", function () {
  animateSlides(100);
});

nextButton.addEventListener("click", function () {
  animateSlides(-100);
});

function animateSlides(delta) {

  animation = TweenMax.to(slides, slideDuration, {
    xPercent: function (i, target) {
      return (Math.round(target._gsTransform.xPercent / 100) * 100) + delta;
    },
    modifiers: {
      xPercent: wrap
    },
    ease: "Power2.easeInOut", // Easing più fluido
    //force3D: true,  // Forza l'uso di GPU per un movimento più fluido
    onComplete: restartTimer
  });

}

function autoPlay() {
  if (!animation) {
    animateSlides(-100);
  }
}

function restartTimer() {
  if (animation === this) {
    animation = null;
    timer.restart(true);
  }
}

function wrapPartial(min, max) {
  var r = max - min;
  return function (value) {
    var v = value - min;
    return ((r + v % r) % r) + min;
  }
}


//toggle about
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//SafeArea Iphone
const setVh = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

window.addEventListener('resize', setVh);
window.addEventListener('orientationchange', setVh);
setVh();
