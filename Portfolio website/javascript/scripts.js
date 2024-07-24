//These  functions open and close the contact form
function openForm(){
    document.getElementById("myForm").style.display ="block";
    document.getElementsByClassName("toggle")[0].style.display="none";
}
function closeForm(){
    document.getElementById("myForm").style.display="none";
    document.getElementsByClassName("toggle")[0].style.display="block";
}

//This document displays the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);

//This function changes the slide when the left or right arrows are clicked
function plusSlides(n){
    showSlides(slideIndex += n);
}

//This function changes teh slide when the dots are clicked
function currentSlides(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    let index = 0;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length){slideIndex = 1}; //if n(the number passed into the function is greater than the length of the array "slides", the slideIndex is setn to 1)
    if (n<1) { slideIndex = slides.length};///if n(the number passed into the function is less than 1 the slideIndex is set to the length of the array "slides"
    for (index = 0; index < slides.length; index++) {
        slides[index].style.display = "none";// This for loop takes each item in the array "slides and sets the display to none"
    }
    for (index = 0; index < dots.length; index++) {
        dots[index].className = dots[index].className.replace(" active", "");// This for loop takes each item in the array "dots" and removes "active" which removes the active styling
    }
    slides[slideIndex - 1].style.display = "block"; //This displays the image in the slideshow
    dots[slideIndex-1].className += " active"; //This adds the active styling to the dot associated with the image
}

//This code will close the contact form when the user clicks off of it
//The first step is to add an event listener for any clicks on the website
document.addEventListener("click", function(event){
    //Here we state that if the click happens on the cancel button or anywhre that is not the contact form AND the click dos not happen on any element with the contact class then call the closeForm() function
    if (event.target.matches(".cancel")|| !event.target.closest(".form-popup")&& !event.target.closest(".Pop_Up_Button")&& !event.target.closest(".contact")){
        closeForm()
    }
}, false)