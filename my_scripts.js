var slideIndex = 1;

// Only initialize slideshow if elements exist
var slides = document.getElementsByClassName("mySlides");
if (slides.length > 0) {
  showDivs(slideIndex);
}

function plusDivs(n) {
  var slides = document.getElementsByClassName("mySlides");
  if (slides.length > 0) {
    showDivs(slideIndex += n);
  }
}

function showDivs(n) {
  var slides = document.getElementsByClassName("mySlides");
  if (slides.length === 0) return; // Exit if no slides found

  var i;
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
