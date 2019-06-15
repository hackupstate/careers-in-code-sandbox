let slideIndex = 0;
let height = window.innerHeight;
let children = document.body.children;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("homepageSlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 2000); // Change image every 2 seconds
}