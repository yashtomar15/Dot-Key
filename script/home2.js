var slideIndexN = 1;
showSlidesN(slideIndexN);

// Next/previous controls
function plusSlidesN(n) {
showSlidesN(slideIndexN += n);
}

// Thumbnail image controls
function currentSlideN(n) {
showSlidesN(slideIndexN = n);
}

function showSlidesN(n) {
var i;
var slidesN = document.getElementsByClassName("mySlidesN");
var dotsN = document.getElementsByClassName("dotN");
if (n > slidesN.length) {slideIndexN = 1}
if (n < 1) {slideIndexN = slidesN.length}
for (i = 0; i < slidesN.length; i++) {
    slidesN[i].style.display = "none";
}
for (i = 0; i < dotsN.length; i++) {
    dotsN[i].className = dotsN[i].className.replace(" active", "");
}
slidesN[slideIndexN-1].style.display = "block";
dotsN[slideIndexN-1].className += " active";
}